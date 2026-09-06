"use strict";
/* eslint-disable */
// Generated from tools/specs/events-api-v1.json by tools/generate.js - DO NOT EDIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsApi = void 0;
const http_1 = require("../http");
/**
 * IVAO Events API v1: scheduled events.
 * Generated from tools/specs/events-api-v1.json.
 */
class EventsApi {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v1/events`
     * @param query.title Title of the event to search
     * @param query.division Division ISO code to search
     * @param query.airportIcao Airport ICAO code to search
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v1/events`, query, fallback: [] });
    }
    /**
     * `GET /v1/events/{id}`
     * @param id ID of the event to search
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v1/events/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.EventsApi = EventsApi;
