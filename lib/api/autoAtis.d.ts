import { HttpClient } from '../http';
/** `autoAtis.params` module. */
export declare class AutoAtisParams {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /** `GET /v2/auto-atis/{airportIcao}/params` */
    get(airportIcao: string): Promise<Record<string, unknown>>;
    /**
     * `GET /v2/auto-atis/{airportIcao}/params/{runwayId}`
     * @param runwayId Runway ID, this is the numeric ID of the runway, not the runway bearing id
     */
    getRunway(airportIcao: string, runwayId: string): Promise<Record<string, unknown>>;
    /**
     * `POST /v2/auto-atis/{airportIcao}/params/{runwayId}/{type}`
     * @param runwayId Runway ID, this is the numeric ID of the runway, not the runway bearing id
     */
    create(airportIcao: string, runwayId: number, type: "TAKEOFF" | "LANDING", body: Record<string, unknown>): Promise<unknown>;
    /**
     * `PUT /v2/auto-atis/{airportIcao}/params/{runwayId}/{type}`
     * @param runwayId Runway ID, this is the numeric ID of the runway, not the runway bearing id
     */
    update(airportIcao: string, runwayId: number, type: "TAKEOFF" | "LANDING", body: Record<string, unknown>): Promise<unknown>;
    /**
     * `DELETE /v2/auto-atis/{airportIcao}/params/{runwayId}/{type}`
     * @param runwayId Runway ID, this is the numeric ID of the runway, not the runway bearing id
     */
    delete(airportIcao: string, runwayId: number, type: "TAKEOFF" | "LANDING"): Promise<void>;
}
/**
 * IVAO Auto ATIS API: digital ATIS and runway parameters.
 * Generated from tools/specs/auto-atis.json.
 */
export declare class AutoAtisApi {
    protected readonly http: HttpClient;
    readonly params: AutoAtisParams;
    constructor(http: HttpClient);
    /**
     * `GET /v2/auto-atis/{airportIcao}`
     * @param airportIcao Airport ICAO to have the info requested
     * @param query.customExpiring Internal use only. Set up a custom expiring time for cache expiring.
     */
    get(airportIcao: string, query?: {
        customExpiring?: number;
    }): Promise<Record<string, unknown>>;
}
