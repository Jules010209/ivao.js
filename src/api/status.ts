/* eslint-disable */
// Generated from tools/specs/status.json by tools/generate.js - DO NOT EDIT.

import { HttpClient, p } from '../http';

/**
 * IVAO Status API: generated status images (served from status.ivao.aero).
 * Generated from tools/specs/status.json.
 */
export class StatusApi {
    constructor(protected readonly http: HttpClient) {}

    /** `GET /{id}` */
    mainImage(id: string, query?: { dark?: boolean }): Promise<Buffer> {
        return this.http.buffer({ method: 'GET', path: `/${p(id)}`, query, auth: false, baseUrl: this.http.baseUrls.status });
    }

    /** `GET /R/{id}` */
    smallImage(id: string, query?: { dark?: boolean }): Promise<Buffer> {
        return this.http.buffer({ method: 'GET', path: `/R/${p(id)}`, query, auth: false, baseUrl: this.http.baseUrls.status });
    }

    /** `GET /VA/{id}` */
    vaRoster(id: string, query?: { dark?: boolean }): Promise<Buffer> {
        return this.http.buffer({ method: 'GET', path: `/VA/${p(id)}`, query, auth: false, baseUrl: this.http.baseUrls.status });
    }

    /** `GET /ATC/{id}` */
    atcList(id: string, query?: { dark?: boolean }): Promise<Buffer> {
        return this.http.buffer({ method: 'GET', path: `/ATC/${p(id)}`, query, auth: false, baseUrl: this.http.baseUrls.status });
    }
}
