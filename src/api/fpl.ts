/* eslint-disable */
// Generated from tools/specs/fpl.json by tools/generate.js - DO NOT EDIT.

import { HttpClient, p } from '../http';
import { AircraftRequest, BaseUserAircraft, CreateFlightPlan, FlightPlanShow, PaginatedFlightPlan, PaginatedUserAircraft, UserAircraft } from '../types/fpl';

/** `fpl.aircrafts` module. */
export class FplAircrafts {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/users/me/aircrafts`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.aircraftId Type of aircraft (A321, CRJ9, B787)
     * @param query.registration Aircraft's registration
     * @param query.selcal Aircraft's selcal
     * OAuth scopes: flight_plans:read
     */
    list(query?: { page?: number; perPage?: number; aircraftId?: string; registration?: string; selcal?: string }): Promise<PaginatedUserAircraft> {
        return this.http.request<PaginatedUserAircraft>({ method: 'GET', path: `/v2/users/me/aircrafts`, query, fallback: null });
    }

    /**
     * `POST /v2/users/me/aircrafts`
     * OAuth scopes: flight_plans:write
     */
    create(body: AircraftRequest): Promise<BaseUserAircraft> {
        return this.http.request<BaseUserAircraft>({ method: 'POST', path: `/v2/users/me/aircrafts`, body, fallback: null });
    }

    /**
     * `GET /v2/users/me/aircrafts/{id}`
     * @param id Aircraft Hangar Id
     * OAuth scopes: flight_plans:read
     */
    get(id: number): Promise<UserAircraft> {
        return this.http.request<UserAircraft>({ method: 'GET', path: `/v2/users/me/aircrafts/${p(id)}`, fallback: null });
    }

    /**
     * `PUT /v2/users/me/aircrafts/{id}`
     * @param id FlightPlan Id
     * OAuth scopes: flight_plans:write
     */
    update(id: number, body: AircraftRequest): Promise<BaseUserAircraft> {
        return this.http.request<BaseUserAircraft>({ method: 'PUT', path: `/v2/users/me/aircrafts/${p(id)}`, body, fallback: null });
    }

    /**
     * `DELETE /v2/users/me/aircrafts/{id}`
     * OAuth scopes: flight_plans:write
     */
    delete(id: number): Promise<void> {
        return this.http.request<void>({ method: 'DELETE', path: `/v2/users/me/aircrafts/${p(id)}` });
    }
}

/** `fpl.flightPlans` module. */
export class FplFlightPlans {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/users/{vid}/flightPlans`
     * @param vid User's VID (use 'me' for current logged in user)
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.arrivalId Arrival airport icao
     * @param query.departureId Departure airport icao
     * @param query.aircraftId Aircraft icao code
     * @param query.callsign FlightPlan callsign
     * @param query.isArchived Check if the flightPlans is archived
     * OAuth scopes: flight_plans:read
     */
    list(vid: string, query?: { page?: number; perPage?: number; arrivalId?: string; departureId?: string; aircraftId?: string; callsign?: string; isArchived?: boolean }): Promise<PaginatedFlightPlan> {
        return this.http.request<PaginatedFlightPlan>({ method: 'GET', path: `/v2/users/${p(vid)}/flightPlans`, query, fallback: null });
    }

    /**
     * `POST /v2/users/{vid}/flightPlans`
     * @param vid User's VID (use 'me' for current logged in user)
     * OAuth scopes: flight_plans:write
     */
    create(vid: string, body: CreateFlightPlan): Promise<FlightPlanShow> {
        return this.http.request<FlightPlanShow>({ method: 'POST', path: `/v2/users/${p(vid)}/flightPlans`, body, fallback: null });
    }

    /**
     * `GET /v2/users/{vid}/flightPlans/active`
     * @param vid User's VID (use 'me' for current logged in user)
     * OAuth scopes: flight_plans:read
     */
    active(vid: string): Promise<FlightPlanShow> {
        return this.http.request<FlightPlanShow>({ method: 'GET', path: `/v2/users/${p(vid)}/flightPlans/active`, fallback: null });
    }

    /**
     * `GET /v2/users/{vid}/flightPlans/{id}`
     * @param vid User's VID (use 'me' for current logged in user)
     * @param id FlightPlan Id
     * OAuth scopes: flight_plans:read
     */
    get(vid: string, id: number): Promise<FlightPlanShow> {
        return this.http.request<FlightPlanShow>({ method: 'GET', path: `/v2/users/${p(vid)}/flightPlans/${p(id)}`, fallback: null });
    }

    /**
     * `PUT /v2/users/{vid}/flightPlans/{id}`
     * @param vid User's VID (use 'me' for current logged in user)
     * @param id FlightPlan Id
     * OAuth scopes: flight_plans:write
     */
    update(vid: string, id: number, body: CreateFlightPlan): Promise<FlightPlanShow> {
        return this.http.request<FlightPlanShow>({ method: 'PUT', path: `/v2/users/${p(vid)}/flightPlans/${p(id)}`, body, fallback: null });
    }

    /**
     * `DELETE /v2/users/{vid}/flightPlans/{id}`
     * @param vid User's VID (use 'me' for current logged in user)
     * OAuth scopes: flight_plans:write
     */
    delete(vid: string, id: number): Promise<void> {
        return this.http.request<void>({ method: 'DELETE', path: `/v2/users/${p(vid)}/flightPlans/${p(id)}` });
    }

    /**
     * `PUT /v2/users/{vid}/flightPlans/{id}/archive`
     * @param vid User's VID (use 'me' for current logged in user)
     * @param id FlightPlan Id
     * OAuth scopes: flight_plans:write
     */
    archive(vid: string, id: number): Promise<FlightPlanShow> {
        return this.http.request<FlightPlanShow>({ method: 'PUT', path: `/v2/users/${p(vid)}/flightPlans/${p(id)}/archive`, fallback: null });
    }
}

/**
 * IVAO Flight Plan API: user aircrafts and flight plans. Use 'me' as vid for the current user.
 * Generated from tools/specs/fpl.json.
 */
export class FlightPlanApi {
    readonly aircrafts: FplAircrafts;
    readonly flightPlans: FplFlightPlans;

    constructor(protected readonly http: HttpClient) {
        this.aircrafts = new FplAircrafts(http);
        this.flightPlans = new FplFlightPlans(http);
    }
}
