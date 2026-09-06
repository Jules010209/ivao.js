"use strict";
/* eslint-disable */
// Generated from tools/specs/auto-atis.json by tools/generate.js - DO NOT EDIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoAtisApi = exports.AutoAtisParams = void 0;
const http_1 = require("../http");
/** `autoAtis.params` module. */
class AutoAtisParams {
    constructor(http) {
        this.http = http;
    }
    /** `GET /v2/auto-atis/{airportIcao}/params` */
    get(airportIcao) {
        return this.http.request({ method: 'GET', path: `/v2/auto-atis/${(0, http_1.p)(airportIcao)}/params`, fallback: null });
    }
    /**
     * `GET /v2/auto-atis/{airportIcao}/params/{runwayId}`
     * @param runwayId Runway ID, this is the numeric ID of the runway, not the runway bearing id
     */
    getRunway(airportIcao, runwayId) {
        return this.http.request({ method: 'GET', path: `/v2/auto-atis/${(0, http_1.p)(airportIcao)}/params/${(0, http_1.p)(runwayId)}`, fallback: null });
    }
    /**
     * `POST /v2/auto-atis/{airportIcao}/params/{runwayId}/{type}`
     * @param runwayId Runway ID, this is the numeric ID of the runway, not the runway bearing id
     */
    create(airportIcao, runwayId, type, body) {
        return this.http.request({ method: 'POST', path: `/v2/auto-atis/${(0, http_1.p)(airportIcao)}/params/${(0, http_1.p)(runwayId)}/${(0, http_1.p)(type)}`, body, fallback: null });
    }
    /**
     * `PUT /v2/auto-atis/{airportIcao}/params/{runwayId}/{type}`
     * @param runwayId Runway ID, this is the numeric ID of the runway, not the runway bearing id
     */
    update(airportIcao, runwayId, type, body) {
        return this.http.request({ method: 'PUT', path: `/v2/auto-atis/${(0, http_1.p)(airportIcao)}/params/${(0, http_1.p)(runwayId)}/${(0, http_1.p)(type)}`, body, fallback: null });
    }
    /**
     * `DELETE /v2/auto-atis/{airportIcao}/params/{runwayId}/{type}`
     * @param runwayId Runway ID, this is the numeric ID of the runway, not the runway bearing id
     */
    delete(airportIcao, runwayId, type) {
        return this.http.request({ method: 'DELETE', path: `/v2/auto-atis/${(0, http_1.p)(airportIcao)}/params/${(0, http_1.p)(runwayId)}/${(0, http_1.p)(type)}` });
    }
}
exports.AutoAtisParams = AutoAtisParams;
/**
 * IVAO Auto ATIS API: digital ATIS and runway parameters.
 * Generated from tools/specs/auto-atis.json.
 */
class AutoAtisApi {
    constructor(http) {
        this.http = http;
        this.params = new AutoAtisParams(http);
    }
    /**
     * `GET /v2/auto-atis/{airportIcao}`
     * @param airportIcao Airport ICAO to have the info requested
     * @param query.customExpiring Internal use only. Set up a custom expiring time for cache expiring.
     */
    get(airportIcao, query) {
        return this.http.request({ method: 'GET', path: `/v2/auto-atis/${(0, http_1.p)(airportIcao)}`, query, fallback: null });
    }
}
exports.AutoAtisApi = AutoAtisApi;
