"use strict";
/* eslint-disable */
// Generated from tools/specs/atc.json by tools/generate.js - DO NOT EDIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtcApi = exports.AtcBookings = void 0;
const http_1 = require("../http");
/** `atc.bookings` module. */
class AtcBookings {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/atc/bookings`
     * @param query.date Booking date
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/atc/bookings`, query, fallback: null });
    }
    /**
     * `POST /v2/atc/bookings`
     * OAuth scopes: bookings:write
     */
    create(body) {
        return this.http.request({ method: 'POST', path: `/v2/atc/bookings`, body, fallback: null });
    }
    /**
     * `GET /v2/atc/bookings/daily`
     * @param query.position Show bookings for a specific position
     * @param query.date Booking date, if none will use current date
     */
    daily(query) {
        return this.http.request({ method: 'GET', path: `/v2/atc/bookings/daily`, query, fallback: [] });
    }
    /**
     * `GET /v2/atc/bookings/{id}`
     * @param id Booking id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/atc/bookings/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `PUT /v2/atc/bookings/{id}`
     * @param id Booking id
     * OAuth scopes: bookings:write
     */
    update(id, body) {
        return this.http.request({ method: 'PUT', path: `/v2/atc/bookings/${(0, http_1.p)(id)}`, body, fallback: null });
    }
    /**
     * `DELETE /v2/atc/bookings/{id}`
     * @param id Booking id
     * OAuth scopes: bookings:write
     */
    delete(id) {
        return this.http.request({ method: 'DELETE', path: `/v2/atc/bookings/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.AtcBookings = AtcBookings;
/**
 * IVAO ATC Scheduling System: ATC bookings.
 * Generated from tools/specs/atc.json.
 */
class AtcApi {
    constructor(http) {
        this.http = http;
        this.bookings = new AtcBookings(http);
    }
}
exports.AtcApi = AtcApi;
