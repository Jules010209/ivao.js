/* eslint-disable */
// Generated from tools/specs/auto-atis.json by tools/generate.js - DO NOT EDIT.

import { HttpClient, p } from '../http';

/** `autoAtis.params` module. */
export class AutoAtisParams {
    constructor(protected readonly http: HttpClient) {}

    /** `GET /v2/auto-atis/{airportIcao}/params` */
    get(airportIcao: string): Promise<Record<string, unknown>> {
        return this.http.request<Record<string, unknown>>({ method: 'GET', path: `/v2/auto-atis/${p(airportIcao)}/params`, fallback: null });
    }

    /**
     * `GET /v2/auto-atis/{airportIcao}/params/{runwayId}`
     * @param runwayId Runway ID, this is the numeric ID of the runway, not the runway bearing id
     */
    getRunway(airportIcao: string, runwayId: string): Promise<Record<string, unknown>> {
        return this.http.request<Record<string, unknown>>({ method: 'GET', path: `/v2/auto-atis/${p(airportIcao)}/params/${p(runwayId)}`, fallback: null });
    }

    /**
     * `POST /v2/auto-atis/{airportIcao}/params/{runwayId}/{type}`
     * @param runwayId Runway ID, this is the numeric ID of the runway, not the runway bearing id
     */
    create(airportIcao: string, runwayId: number, type: "TAKEOFF" | "LANDING", body: Record<string, unknown>): Promise<unknown> {
        return this.http.request<unknown>({ method: 'POST', path: `/v2/auto-atis/${p(airportIcao)}/params/${p(runwayId)}/${p(type)}`, body, fallback: null });
    }

    /**
     * `PUT /v2/auto-atis/{airportIcao}/params/{runwayId}/{type}`
     * @param runwayId Runway ID, this is the numeric ID of the runway, not the runway bearing id
     */
    update(airportIcao: string, runwayId: number, type: "TAKEOFF" | "LANDING", body: Record<string, unknown>): Promise<unknown> {
        return this.http.request<unknown>({ method: 'PUT', path: `/v2/auto-atis/${p(airportIcao)}/params/${p(runwayId)}/${p(type)}`, body, fallback: null });
    }

    /**
     * `DELETE /v2/auto-atis/{airportIcao}/params/{runwayId}/{type}`
     * @param runwayId Runway ID, this is the numeric ID of the runway, not the runway bearing id
     */
    delete(airportIcao: string, runwayId: number, type: "TAKEOFF" | "LANDING"): Promise<void> {
        return this.http.request<void>({ method: 'DELETE', path: `/v2/auto-atis/${p(airportIcao)}/params/${p(runwayId)}/${p(type)}` });
    }
}

/**
 * IVAO Auto ATIS API: digital ATIS and runway parameters.
 * Generated from tools/specs/auto-atis.json.
 */
export class AutoAtisApi {
    readonly params: AutoAtisParams;

    constructor(protected readonly http: HttpClient) {
        this.params = new AutoAtisParams(http);
    }

    /**
     * `GET /v2/auto-atis/{airportIcao}`
     * @param airportIcao Airport ICAO to have the info requested
     * @param query.customExpiring Internal use only. Set up a custom expiring time for cache expiring.
     */
    get(airportIcao: string, query?: { customExpiring?: number }): Promise<Record<string, unknown>> {
        return this.http.request<Record<string, unknown>>({ method: 'GET', path: `/v2/auto-atis/${p(airportIcao)}`, query, fallback: null });
    }
}
