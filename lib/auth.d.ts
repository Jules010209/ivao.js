import { OAuthTokenResponse } from './types/oauth';
export interface AuthProvider {
    /** Headers to attach to an authenticated request. */
    headers(): Promise<Record<string, string>>;
}
/** No credentials (only public endpoints will work). */
export declare class AnonymousAuth implements AuthProvider {
    headers(): Promise<Record<string, string>>;
}
/** Legacy `apiKey` header authentication. */
export declare class ApiKeyAuth implements AuthProvider {
    private readonly apiKey;
    constructor(apiKey: string);
    headers(): Promise<Record<string, string>>;
}
/** A bearer token you obtained yourself (authorization code flow, PKCE, ...). */
export declare class BearerAuth implements AuthProvider {
    private readonly token;
    constructor(token: string | (() => string | Promise<string>));
    headers(): Promise<Record<string, string>>;
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
export declare class ClientCredentialsAuth implements AuthProvider {
    private readonly options;
    private token;
    private expiresAt;
    private pending;
    constructor(options: ClientCredentialsOptions);
    /** Current cached token, or null if none was fetched yet. */
    get currentToken(): OAuthTokenResponse | null;
    /** Drops the cached token so the next request fetches a new one. */
    invalidate(): void;
    getToken(): Promise<OAuthTokenResponse>;
    private fetchToken;
    headers(): Promise<Record<string, string>>;
}
