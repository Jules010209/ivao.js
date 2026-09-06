"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRegistry = exports.DEFAULT_STATUS_BASE_URL = exports.DEFAULT_BASE_URL = exports.IvaoApiError = exports.HttpClient = exports.userClient = exports.Client = void 0;
const registry_1 = require("./api/registry");
const auth_1 = require("./auth");
const http_1 = require("./http");
const DEFAULT_SCOPES = ['tracker', 'profile', 'training', 'configuration'];
const buildAuth = (options) => {
    switch (options.type) {
        case 'apiKey':
            return new auth_1.ApiKeyAuth(options.apiKey);
        case 'oauth2':
            return new auth_1.ClientCredentialsAuth({
                clientId: options.client_id,
                clientSecret: options.secret_id,
                scopes: options.scopes === undefined ? DEFAULT_SCOPES : options.scopes,
                tokenUrl: `${(options.baseUrl || http_1.DEFAULT_BASE_URL).replace(/\/+$/, '')}/v2/oauth/token`,
            });
        case 'bearer':
            return new auth_1.BearerAuth(options.token);
        case 'none':
            return new auth_1.AnonymousAuth();
        default:
            throw new Error(`Unknown client type: ${options.type}`);
    }
};
/**
 * IVAO API client. Every IVAO API is available as a property:
 * `data`, `core`, `tracker`, `oauth`, `mtl`, `fpl`, `webeye`, `status`, `atc`, `events`, `autoAtis`.
 *
 * @example
 * const client = new Client({ type: 'apiKey', apiKey: '...' });
 * const whazzup = await client.tracker.whazzup.get();
 */
class Client extends registry_1.ApiRegistry {
    constructor(options) {
        const auth = buildAuth(options);
        const http = new http_1.HttpClient({
            baseUrl: options.baseUrl || http_1.DEFAULT_BASE_URL,
            baseUrls: { status: options.statusBaseUrl || http_1.DEFAULT_STATUS_BASE_URL },
            throwErrors: !!options.throwErrors,
            logErrors: options.logErrors === undefined ? true : options.logErrors,
            timeout: options.timeout,
            userAgent: options.userAgent,
        }, auth);
        super(http);
        this.options = options;
        this.http = http;
        this.auth = auth;
        exports.userClient = this;
    }
}
exports.Client = Client;
__exportStar(require("./auth"), exports);
var http_2 = require("./http");
Object.defineProperty(exports, "HttpClient", { enumerable: true, get: function () { return http_2.HttpClient; } });
Object.defineProperty(exports, "IvaoApiError", { enumerable: true, get: function () { return http_2.IvaoApiError; } });
Object.defineProperty(exports, "DEFAULT_BASE_URL", { enumerable: true, get: function () { return http_2.DEFAULT_BASE_URL; } });
Object.defineProperty(exports, "DEFAULT_STATUS_BASE_URL", { enumerable: true, get: function () { return http_2.DEFAULT_STATUS_BASE_URL; } });
__exportStar(require("./api/index"), exports);
var registry_2 = require("./api/registry");
Object.defineProperty(exports, "ApiRegistry", { enumerable: true, get: function () { return registry_2.ApiRegistry; } });
__exportStar(require("./types/index"), exports);
