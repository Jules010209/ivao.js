"use strict";
/* eslint-disable */
// Generated from tools/specs/status.json by tools/generate.js - DO NOT EDIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusApi = void 0;
const http_1 = require("../http");
/**
 * IVAO Status API: generated status images (served from status.ivao.aero).
 * Generated from tools/specs/status.json.
 */
class StatusApi {
    constructor(http) {
        this.http = http;
    }
    /** `GET /{id}` */
    mainImage(id, query) {
        return this.http.buffer({ method: 'GET', path: `/${(0, http_1.p)(id)}`, query, auth: false, baseUrl: this.http.baseUrls.status });
    }
    /** `GET /R/{id}` */
    smallImage(id, query) {
        return this.http.buffer({ method: 'GET', path: `/R/${(0, http_1.p)(id)}`, query, auth: false, baseUrl: this.http.baseUrls.status });
    }
    /** `GET /VA/{id}` */
    vaRoster(id, query) {
        return this.http.buffer({ method: 'GET', path: `/VA/${(0, http_1.p)(id)}`, query, auth: false, baseUrl: this.http.baseUrls.status });
    }
    /** `GET /ATC/{id}` */
    atcList(id, query) {
        return this.http.buffer({ method: 'GET', path: `/ATC/${(0, http_1.p)(id)}`, query, auth: false, baseUrl: this.http.baseUrls.status });
    }
}
exports.StatusApi = StatusApi;
