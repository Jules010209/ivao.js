"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCredentialsAuth = exports.BearerAuth = exports.ApiKeyAuth = exports.AnonymousAuth = void 0;
const axios_1 = __importDefault(require("axios"));
/** No credentials (only public endpoints will work). */
class AnonymousAuth {
    async headers() {
        return {};
    }
}
exports.AnonymousAuth = AnonymousAuth;
/** Legacy `apiKey` header authentication. */
class ApiKeyAuth {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    async headers() {
        return { apiKey: this.apiKey };
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
/** A bearer token you obtained yourself (authorization code flow, PKCE, ...). */
class BearerAuth {
    constructor(token) {
        this.token = token;
    }
    async headers() {
        const token = typeof this.token === 'function' ? await this.token() : this.token;
        return { Authorization: `Bearer ${token}` };
    }
}
exports.BearerAuth = BearerAuth;
/** OAuth2 client credentials flow against `POST /v2/oauth/token`, with token caching. */
class ClientCredentialsAuth {
    constructor(options) {
        this.options = options;
        this.token = null;
        this.expiresAt = 0;
        this.pending = null;
    }
    /** Current cached token, or null if none was fetched yet. */
    get currentToken() {
        return this.token;
    }
    /** Drops the cached token so the next request fetches a new one. */
    invalidate() {
        this.token = null;
        this.expiresAt = 0;
    }
    async getToken() {
        if (this.token && Date.now() < this.expiresAt)
            return this.token;
        if (!this.pending) {
            this.pending = this.fetchToken().finally(() => {
                this.pending = null;
            });
        }
        return this.pending;
    }
    async fetchToken() {
        const url = this.options.tokenUrl || 'https://api.ivao.aero/v2/oauth/token';
        const body = {
            grant_type: 'client_credentials',
            client_id: this.options.clientId,
            client_secret: this.options.clientSecret,
        };
        if (this.options.scopes && this.options.scopes.length)
            body.scope = this.options.scopes.join(' ');
        const { data } = await axios_1.default.post(url, body, { headers: { 'Content-Type': 'application/json' } });
        const margin = this.options.refreshMargin === undefined ? 30 : this.options.refreshMargin;
        const ttl = typeof data.expires_in === 'number' ? data.expires_in : 3600;
        this.token = data;
        this.expiresAt = Date.now() + Math.max(ttl - margin, 1) * 1000;
        return data;
    }
    async headers() {
        const token = await this.getToken();
        return { Authorization: `Bearer ${token.access_token}` };
    }
}
exports.ClientCredentialsAuth = ClientCredentialsAuth;
