"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = exports.p = exports.IvaoApiError = exports.DEFAULT_STATUS_BASE_URL = exports.DEFAULT_BASE_URL = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.DEFAULT_BASE_URL = 'https://api.ivao.aero';
exports.DEFAULT_STATUS_BASE_URL = 'https://status.ivao.aero';
/** Error thrown by the client when a request fails and `throwErrors` is enabled (or for binary requests). */
class IvaoApiError extends Error {
    constructor(message, status, method, url, body) {
        super(message);
        this.status = status;
        this.method = method;
        this.url = url;
        this.body = body;
        this.name = 'IvaoApiError';
    }
}
exports.IvaoApiError = IvaoApiError;
/** Encodes a path segment. */
const p = (value) => (value === undefined || value === null ? '' : encodeURIComponent(String(value)));
exports.p = p;
const cleanQuery = (query) => {
    if (!query)
        return undefined;
    const out = {};
    for (const [k, v] of Object.entries(query)) {
        if (v !== undefined && v !== null)
            out[k] = v;
    }
    return out;
};
const filenameFromHeaders = (headers, url) => {
    const disposition = String(headers['content-disposition'] || '');
    const utf8 = /filename\*=UTF-8''([^;]+)/i.exec(disposition);
    if (utf8)
        return decodeURIComponent(utf8[1].trim().replace(/^"|"$/g, ''));
    const plain = /filename="?([^";]+)"?/i.exec(disposition);
    if (plain)
        return plain[1].trim();
    const last = url.split('?')[0].split('/').filter(Boolean).pop() || 'download';
    return /\.[A-Za-z0-9]+$/.test(last) ? last : `${last}.zip`;
};
class HttpClient {
    constructor(options, auth) {
        this.options = options;
        this.auth = auth;
        this.baseUrls = options.baseUrls;
        this.axios = axios_1.default.create({
            timeout: options.timeout,
            headers: options.userAgent ? { 'User-Agent': options.userAgent } : {},
            // Trailing slashes are meaningful for optional path segments; axios keeps them.
        });
    }
    url(options) {
        const base = (options.baseUrl || this.options.baseUrl).replace(/\/+$/, '');
        const cleanPath = options.path.replace(/\/+$/, '') || '/';
        return `${base}${cleanPath.startsWith('/') ? '' : '/'}${cleanPath}`;
    }
    async headers(options) {
        if (options.auth === false)
            return {};
        return this.auth.headers();
    }
    fail(error, options, url) {
        const err = error;
        const status = err.response ? err.response.status : undefined;
        const message = `${options.method} ${url} failed${status ? ` with HTTP ${status}` : ''}: ${err.message}`;
        if (this.options.throwErrors) {
            throw new IvaoApiError(message, status, options.method, url, err.response ? err.response.data : undefined);
        }
        if (this.options.logErrors && status !== 404)
            console.error(`[ivao.js] ${message}`);
        return options.fallback;
    }
    /** JSON request. Returns `fallback` (or throws when `throwErrors` is enabled) on failure. */
    async request(options) {
        const url = this.url(options);
        try {
            const response = await this.axios.request({
                method: options.method,
                url,
                params: cleanQuery(options.query),
                data: options.body,
                headers: await this.headers(options),
            });
            return response.data;
        }
        catch (error) {
            return this.fail(error, options, url);
        }
    }
    /** Binary request (images, archives). Always throws on failure. */
    async buffer(options) {
        return (await this.raw(options)).data;
    }
    /**
     * Downloads a file. The content is returned as a Buffer and, when `destination` is given,
     * written to disk (a directory uses the file name sent by the server).
     */
    async download(options) {
        const { data, headers, url } = await this.raw(options);
        if (options.destination !== undefined) {
            let target = options.destination.toString();
            const isDir = fs_1.default.existsSync(target) && fs_1.default.statSync(target).isDirectory();
            if (isDir || /[\\/]$/.test(target)) {
                fs_1.default.mkdirSync(target, { recursive: true });
                target = path_1.default.join(target, filenameFromHeaders(headers, url));
            }
            else {
                fs_1.default.mkdirSync(path_1.default.dirname(target), { recursive: true });
            }
            fs_1.default.writeFileSync(target, new Uint8Array(data));
        }
        return data;
    }
    async raw(options) {
        const url = this.url(options);
        try {
            const response = await this.axios.request({
                method: options.method,
                url,
                params: cleanQuery(options.query),
                data: options.body,
                headers: await this.headers(options),
                responseType: 'arraybuffer',
            });
            return { data: Buffer.from(response.data), headers: response.headers, url };
        }
        catch (error) {
            const err = error;
            const status = err.response ? err.response.status : undefined;
            let body = err.response ? err.response.data : undefined;
            if (Buffer.isBuffer(body) || body instanceof ArrayBuffer) {
                const text = Buffer.from(body).toString('utf8');
                try {
                    body = JSON.parse(text);
                }
                catch {
                    body = text;
                }
            }
            throw new IvaoApiError(`${options.method} ${url} failed${status ? ` with HTTP ${status}` : ''}: ${err.message}`, status, options.method, url, body);
        }
    }
}
exports.HttpClient = HttpClient;
