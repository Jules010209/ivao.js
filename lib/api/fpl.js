"use strict";
/* eslint-disable */
// Generated from tools/specs/fpl.json by tools/generate.js - DO NOT EDIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightPlanApi = exports.FplFlightPlans = exports.FplAircrafts = void 0;
const http_1 = require("../http");
/** `fpl.aircrafts` module. */
class FplAircrafts {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/users/me/aircrafts`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.aircraftId Type of aircraft (A321, CRJ9, B787)
     * @param query.registration Aircraft's registration
     * @param query.selcal Aircraft's selcal
     * OAuth scopes: flight_plans:read
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/users/me/aircrafts`, query, fallback: null });
    }
    /**
     * `POST /v2/users/me/aircrafts`
     * OAuth scopes: flight_plans:write
     */
    create(body) {
        return this.http.request({ method: 'POST', path: `/v2/users/me/aircrafts`, body, fallback: null });
    }
    /**
     * `GET /v2/users/me/aircrafts/{id}`
     * @param id Aircraft Hangar Id
     * OAuth scopes: flight_plans:read
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/users/me/aircrafts/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `PUT /v2/users/me/aircrafts/{id}`
     * @param id FlightPlan Id
     * OAuth scopes: flight_plans:write
     */
    update(id, body) {
        return this.http.request({ method: 'PUT', path: `/v2/users/me/aircrafts/${(0, http_1.p)(id)}`, body, fallback: null });
    }
    /**
     * `DELETE /v2/users/me/aircrafts/{id}`
     * OAuth scopes: flight_plans:write
     */
    delete(id) {
        return this.http.request({ method: 'DELETE', path: `/v2/users/me/aircrafts/${(0, http_1.p)(id)}` });
    }
}
exports.FplAircrafts = FplAircrafts;
/** `fpl.flightPlans` module. */
class FplFlightPlans {
    constructor(http) {
        this.http = http;
    }
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
    list(vid, query) {
        return this.http.request({ method: 'GET', path: `/v2/users/${(0, http_1.p)(vid)}/flightPlans`, query, fallback: null });
    }
    /**
     * `POST /v2/users/{vid}/flightPlans`
     * @param vid User's VID (use 'me' for current logged in user)
     * OAuth scopes: flight_plans:write
     */
    create(vid, body) {
        return this.http.request({ method: 'POST', path: `/v2/users/${(0, http_1.p)(vid)}/flightPlans`, body, fallback: null });
    }
    /**
     * `GET /v2/users/{vid}/flightPlans/active`
     * @param vid User's VID (use 'me' for current logged in user)
     * OAuth scopes: flight_plans:read
     */
    active(vid) {
        return this.http.request({ method: 'GET', path: `/v2/users/${(0, http_1.p)(vid)}/flightPlans/active`, fallback: null });
    }
    /**
     * `GET /v2/users/{vid}/flightPlans/{id}`
     * @param vid User's VID (use 'me' for current logged in user)
     * @param id FlightPlan Id
     * OAuth scopes: flight_plans:read
     */
    get(vid, id) {
        return this.http.request({ method: 'GET', path: `/v2/users/${(0, http_1.p)(vid)}/flightPlans/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `PUT /v2/users/{vid}/flightPlans/{id}`
     * @param vid User's VID (use 'me' for current logged in user)
     * @param id FlightPlan Id
     * OAuth scopes: flight_plans:write
     */
    update(vid, id, body) {
        return this.http.request({ method: 'PUT', path: `/v2/users/${(0, http_1.p)(vid)}/flightPlans/${(0, http_1.p)(id)}`, body, fallback: null });
    }
    /**
     * `DELETE /v2/users/{vid}/flightPlans/{id}`
     * @param vid User's VID (use 'me' for current logged in user)
     * OAuth scopes: flight_plans:write
     */
    delete(vid, id) {
        return this.http.request({ method: 'DELETE', path: `/v2/users/${(0, http_1.p)(vid)}/flightPlans/${(0, http_1.p)(id)}` });
    }
    /**
     * `PUT /v2/users/{vid}/flightPlans/{id}/archive`
     * @param vid User's VID (use 'me' for current logged in user)
     * @param id FlightPlan Id
     * OAuth scopes: flight_plans:write
     */
    archive(vid, id) {
        return this.http.request({ method: 'PUT', path: `/v2/users/${(0, http_1.p)(vid)}/flightPlans/${(0, http_1.p)(id)}/archive`, fallback: null });
    }
}
exports.FplFlightPlans = FplFlightPlans;
/**
 * IVAO Flight Plan API: user aircrafts and flight plans. Use 'me' as vid for the current user.
 * Generated from tools/specs/fpl.json.
 */
class FlightPlanApi {
    constructor(http) {
        this.http = http;
        this.aircrafts = new FplAircrafts(http);
        this.flightPlans = new FplFlightPlans(http);
    }
}
exports.FlightPlanApi = FlightPlanApi;
