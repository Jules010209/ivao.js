import axios, { AxiosError, AxiosInstance, Method } from 'axios';
import fs, { PathLike } from 'fs';
import path from 'path';
import { AuthProvider } from './auth';
import { ApiErrorBody } from './types/common';

export const DEFAULT_BASE_URL = 'https://api.ivao.aero';
export const DEFAULT_STATUS_BASE_URL = 'https://status.ivao.aero';

/** Error thrown by the client when a request fails and `throwErrors` is enabled (or for binary requests). */
export class IvaoApiError extends Error {
    constructor(
        message: string,
        public readonly status: number | undefined,
        public readonly method: string,
        public readonly url: string,
        public readonly body: ApiErrorBody | unknown,
    ) {
        super(message);
        this.name = 'IvaoApiError';
    }
}

export interface HttpOptions {
    baseUrl: string;
    baseUrls: { status: string };
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
export const p = (value: unknown): string => (value === undefined || value === null ? '' : encodeURIComponent(String(value)));

const cleanQuery = (query?: Record<string, unknown>): Record<string, unknown> | undefined => {
    if (!query) return undefined;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(query)) {
        if (v !== undefined && v !== null) out[k] = v;
    }
    return out;
};

const filenameFromHeaders = (headers: Record<string, unknown>, url: string): string => {
    const disposition = String(headers['content-disposition'] || '');
    const utf8 = /filename\*=UTF-8''([^;]+)/i.exec(disposition);
    if (utf8) return decodeURIComponent(utf8[1].trim().replace(/^"|"$/g, ''));
    const plain = /filename="?([^";]+)"?/i.exec(disposition);
    if (plain) return plain[1].trim();
    const last = url.split('?')[0].split('/').filter(Boolean).pop() || 'download';
    return /\.[A-Za-z0-9]+$/.test(last) ? last : `${last}.zip`;
};

export class HttpClient {
    private readonly axios: AxiosInstance;
    public readonly baseUrls: { status: string };

    constructor(public readonly options: HttpOptions, private readonly auth: AuthProvider) {
        this.baseUrls = options.baseUrls;
        this.axios = axios.create({
            timeout: options.timeout,
            headers: options.userAgent ? { 'User-Agent': options.userAgent } : {},
            // Trailing slashes are meaningful for optional path segments; axios keeps them.
        });
    }

    private url(options: RequestOptions<unknown>): string {
        const base = (options.baseUrl || this.options.baseUrl).replace(/\/+$/, '');
        const cleanPath = options.path.replace(/\/+$/, '') || '/';
        return `${base}${cleanPath.startsWith('/') ? '' : '/'}${cleanPath}`;
    }

    private async headers(options: RequestOptions<unknown>): Promise<Record<string, string>> {
        if (options.auth === false) return {};
        return this.auth.headers();
    }

    private fail<T>(error: unknown, options: RequestOptions<T>, url: string): T {
        const err = error as AxiosError;
        const status = err.response ? err.response.status : undefined;
        const message = `${options.method} ${url} failed${status ? ` with HTTP ${status}` : ''}: ${err.message}`;
        if (this.options.throwErrors) {
            throw new IvaoApiError(message, status, options.method, url, err.response ? err.response.data : undefined);
        }
        if (this.options.logErrors && status !== 404) console.error(`[ivao.js] ${message}`);
        return options.fallback as T;
    }

    /** JSON request. Returns `fallback` (or throws when `throwErrors` is enabled) on failure. */
    async request<T>(options: RequestOptions<T>): Promise<T> {
        const url = this.url(options);
        try {
            const response = await this.axios.request<T>({
                method: options.method,
                url,
                params: cleanQuery(options.query),
                data: options.body,
                headers: await this.headers(options),
            });
            return response.data;
        } catch (error) {
            return this.fail<T>(error, options, url);
        }
    }

    /** Binary request (images, archives). Always throws on failure. */
    async buffer(options: RequestOptions<unknown>): Promise<Buffer> {
        return (await this.raw(options)).data;
    }

    /**
     * Downloads a file. The content is returned as a Buffer and, when `destination` is given,
     * written to disk (a directory uses the file name sent by the server).
     */
    async download(options: DownloadOptions): Promise<Buffer> {
        const { data, headers, url } = await this.raw(options);
        if (options.destination !== undefined) {
            let target = options.destination.toString();
            const isDir = fs.existsSync(target) && fs.statSync(target).isDirectory();
            if (isDir || /[\\/]$/.test(target)) {
                fs.mkdirSync(target, { recursive: true });
                target = path.join(target, filenameFromHeaders(headers, url));
            } else {
                fs.mkdirSync(path.dirname(target), { recursive: true });
            }
            fs.writeFileSync(target, new Uint8Array(data));
        }
        return data;
    }

    private async raw(options: RequestOptions<unknown>): Promise<{ data: Buffer; headers: Record<string, unknown>; url: string }> {
        const url = this.url(options);
        try {
            const response = await this.axios.request<ArrayBuffer>({
                method: options.method,
                url,
                params: cleanQuery(options.query),
                data: options.body,
                headers: await this.headers(options),
                responseType: 'arraybuffer',
            });
            return { data: Buffer.from(response.data), headers: response.headers as Record<string, unknown>, url };
        } catch (error) {
            const err = error as AxiosError;
            const status = err.response ? err.response.status : undefined;
            let body: unknown = err.response ? err.response.data : undefined;
            if (Buffer.isBuffer(body) || body instanceof ArrayBuffer) {
                const text = Buffer.from(body as ArrayBuffer).toString('utf8');
                try { body = JSON.parse(text); } catch { body = text; }
            }
            throw new IvaoApiError(`${options.method} ${url} failed${status ? ` with HTTP ${status}` : ''}: ${err.message}`, status, options.method, url, body);
        }
    }
}
