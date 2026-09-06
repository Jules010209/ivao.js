import { Method } from 'axios';
import { PathLike } from 'fs';
import { AuthProvider } from './auth';
import { ApiErrorBody } from './types/common';
export declare const DEFAULT_BASE_URL = "https://api.ivao.aero";
export declare const DEFAULT_STATUS_BASE_URL = "https://status.ivao.aero";
/** Error thrown by the client when a request fails and `throwErrors` is enabled (or for binary requests). */
export declare class IvaoApiError extends Error {
    readonly status: number | undefined;
    readonly method: string;
    readonly url: string;
    readonly body: ApiErrorBody | unknown;
    constructor(message: string, status: number | undefined, method: string, url: string, body: ApiErrorBody | unknown);
}
export interface HttpOptions {
    baseUrl: string;
    baseUrls: {
        status: string;
    };
    /** Throw an {@link IvaoApiError} instead of logging and returning the fallback value. */
    throwErrors: boolean;
    /** Log request failures with `console.error` (default true when `throwErrors` is false). */
    logErrors: boolean;
    timeout?: number;
    userAgent?: string;
}
export interface RequestOptions<T = unknown> {
    method: Method;
    path: string;
    query?: Record<string, unknown>;
    body?: unknown;
    /** Value returned when the request fails and `throwErrors` is disabled (`null` or `[]`). */
    fallback?: T | null;
    /** Set to false to skip credentials (public endpoints such as the token endpoint). */
    auth?: boolean;
    /** Override of the base URL (e.g. the status API). */
    baseUrl?: string;
}
export interface DownloadOptions extends RequestOptions<never> {
    /** File path, or directory in which the file is written using the name sent by the server. */
    destination?: PathLike;
}
/** Encodes a path segment. */
export declare const p: (value: unknown) => string;
export declare class HttpClient {
    readonly options: HttpOptions;
    private readonly auth;
    private readonly axios;
    readonly baseUrls: {
        status: string;
    };
    constructor(options: HttpOptions, auth: AuthProvider);
    private url;
    private headers;
    private fail;
    /** JSON request. Returns `fallback` (or throws when `throwErrors` is enabled) on failure. */
    request<T>(options: RequestOptions<T>): Promise<T>;
    /** Binary request (images, archives). Always throws on failure. */
    buffer(options: RequestOptions<unknown>): Promise<Buffer>;
    /**
     * Downloads a file. The content is returned as a Buffer and, when `destination` is given,
     * written to disk (a directory uses the file name sent by the server).
     */
    download(options: DownloadOptions): Promise<Buffer>;
    private raw;
}
