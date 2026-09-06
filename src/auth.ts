import axios from 'axios';
import { OAuthTokenResponse } from './types/oauth';

export interface AuthProvider {
    /** Headers to attach to an authenticated request. */
    headers(): Promise<Record<string, string>>;
}

/** No credentials (only public endpoints will work). */
export class AnonymousAuth implements AuthProvider {
    async headers(): Promise<Record<string, string>> {
        return {};
    }
}

/** Legacy `apiKey` header authentication. */
export class ApiKeyAuth implements AuthProvider {
    constructor(private readonly apiKey: string) {}

    async headers(): Promise<Record<string, string>> {
        return { apiKey: this.apiKey };
    }
}

/** A bearer token you obtained yourself (authorization code flow, PKCE, ...). */
export class BearerAuth implements AuthProvider {
    constructor(private readonly token: string | (() => string | Promise<string>)) {}

    async headers(): Promise<Record<string, string>> {
        const token = typeof this.token === 'function' ? await this.token() : this.token;
        return { Authorization: `Bearer ${token}` };
    }
}

export interface ClientCredentialsOptions {
    clientId: string;
    clientSecret: string;
    scopes?: string[];
    tokenUrl?: string;
    /** Seconds subtracted from `expires_in` before a token is considered expired (default 30). */
    refreshMargin?: number;
}

/** OAuth2 client credentials flow against `POST /v2/oauth/token`, with token caching. */
export class ClientCredentialsAuth implements AuthProvider {
    private token: OAuthTokenResponse | null = null;
    private expiresAt = 0;
    private pending: Promise<OAuthTokenResponse> | null = null;

    constructor(private readonly options: ClientCredentialsOptions) {}

    /** Current cached token, or null if none was fetched yet. */
    get currentToken(): OAuthTokenResponse | null {
        return this.token;
    }

    /** Drops the cached token so the next request fetches a new one. */
    invalidate(): void {
        this.token = null;
        this.expiresAt = 0;
    }

    async getToken(): Promise<OAuthTokenResponse> {
        if (this.token && Date.now() < this.expiresAt) return this.token;
        if (!this.pending) {
            this.pending = this.fetchToken().finally(() => {
                this.pending = null;
            });
        }
        return this.pending;
    }

    private async fetchToken(): Promise<OAuthTokenResponse> {
        const url = this.options.tokenUrl || 'https://api.ivao.aero/v2/oauth/token';
        const body: Record<string, string> = {
            grant_type: 'client_credentials',
            client_id: this.options.clientId,
            client_secret: this.options.clientSecret,
        };
        if (this.options.scopes && this.options.scopes.length) body.scope = this.options.scopes.join(' ');
        const { data } = await axios.post<OAuthTokenResponse>(url, body, { headers: { 'Content-Type': 'application/json' } });
        const margin = this.options.refreshMargin === undefined ? 30 : this.options.refreshMargin;
        const ttl = typeof data.expires_in === 'number' ? data.expires_in : 3600;
        this.token = data;
        this.expiresAt = Date.now() + Math.max(ttl - margin, 1) * 1000;
        return data;
    }

    async headers(): Promise<Record<string, string>> {
        const token = await this.getToken();
        return { Authorization: `Bearer ${token.access_token}` };
    }
}
