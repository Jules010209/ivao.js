import { HttpClient } from '../http';
/**
 * IVAO Status API: generated status images (served from status.ivao.aero).
 * Generated from tools/specs/status.json.
 */
export declare class StatusApi {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /** `GET /{id}` */
    mainImage(id: string, query?: {
        dark?: boolean;
    }): Promise<Buffer>;
    /** `GET /R/{id}` */
    smallImage(id: string, query?: {
        dark?: boolean;
    }): Promise<Buffer>;
    /** `GET /VA/{id}` */
    vaRoster(id: string, query?: {
        dark?: boolean;
    }): Promise<Buffer>;
    /** `GET /ATC/{id}` */
    atcList(id: string, query?: {
        dark?: boolean;
    }): Promise<Buffer>;
}
