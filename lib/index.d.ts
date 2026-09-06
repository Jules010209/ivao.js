import { ApiRegistry } from './api/registry';
import { AuthProvider } from './auth';
import { HttpClient } from './http';
export interface CommonOptions {
    /** Base URL of the IVAO API (default `https://api.ivao.aero`). */
    baseUrl?: string;
    /** Base URL of the status image API (default `https://status.ivao.aero`). */
    statusBaseUrl?: string;
    /**
     * Throw an {@link IvaoApiError} when a request fails.
     * When false (default, 1.x behaviour) the error is logged and a fallback value (`null` / `[]`) is returned.
     * Binary endpoints (logos, downloads) always throw.
     */
    throwErrors?: boolean;
    /** Log failed requests with `console.error` when `throwErrors` is false (default true). */
    logErrors?: boolean;
    /** Request timeout in milliseconds. */
    timeout?: number;
    /** Custom `User-Agent` header. */
    userAgent?: string;
}
/** Authenticate with a legacy IVAO API key (`apiKey` header). */
export interface ApiKeyOptions extends CommonOptions {
    type: 'apiKey';
    apiKey: string;
}
/** Authenticate with the OAuth2 client credentials flow (client id + secret). */
export interface OAuth2Options extends CommonOptions {
    type: 'oauth2';
    client_id: string;
    secret_id: string;
    /** Scopes requested for the token (default: tracker, profile, training, configuration). */
    scopes?: string[];
}
/** Use a bearer token obtained elsewhere (authorization code flow, PKCE, refresh token...). */
export interface BearerOptions extends CommonOptions {
    type: 'bearer';
    /** Access token, or a function returning the current access token. */
    token: string | (() => string | Promise<string>);
}
/** No credentials: only public endpoints (whazzup, nat-tracks, token endpoint...) will succeed. */
export interface AnonymousOptions extends CommonOptions {
    type: 'none';
}
export type ClientOptions = ApiKeyOptions | OAuth2Options | BearerOptions | AnonymousOptions;
/** @deprecated Use {@link ClientOptions}. */
export type options = ClientOptions;
/** @deprecated Use {@link ApiKeyOptions}. */
export type apiOption = ApiKeyOptions;
/** @deprecated Use {@link OAuth2Options}. */
export type oauthOption = OAuth2Options;
/**
 * IVAO API client. Every IVAO API is available as a property:
 * `data`, `core`, `tracker`, `oauth`, `mtl`, `fpl`, `webeye`, `status`, `atc`, `events`, `autoAtis`.
 *
 * @example
 * const client = new Client({ type: 'apiKey', apiKey: '...' });
 * const whazzup = await client.tracker.whazzup.get();
 */
export declare class Client extends ApiRegistry {
    readonly options: ClientOptions;
    readonly http: HttpClient;
    readonly auth: AuthProvider;
    constructor(options: ClientOptions);
}
/** @deprecated Last created {@link Client}; kept for 1.x compatibility. */
export declare let userClient: Client;
export * from './auth';
export { HttpClient, IvaoApiError, RequestOptions, DownloadOptions, DEFAULT_BASE_URL, DEFAULT_STATUS_BASE_URL } from './http';
export * from './api/index';
export { ApiRegistry } from './api/registry';
export * from './types/index';
