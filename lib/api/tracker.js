"use strict";
/* eslint-disable */
// Generated from tools/specs/tracker.json by tools/generate.js - DO NOT EDIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackerApi = exports.TrackerWhazzup = exports.TrackerUsers = exports.TrackerStats = exports.TrackerNow = exports.TrackerFlightPlans = exports.TrackerSessions = exports.TrackerAtcPositions = exports.TrackerAirports = void 0;
const http_1 = require("../http");
/** `tracker.airports` module. */
class TrackerAirports {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/airports/stats`
     * @param query.limit Max number of airports to be returned
     */
    allStats(query) {
        return this.http.request({ method: 'GET', path: `/v2/airports/stats`, query, fallback: [] });
    }
    /**
     * `GET /v2/airports/{icao}/traffics`
     * @param icao Airport icao code
     * @param query.from Date from which to show statistics
     * @param query.to Date to which to show statistics
     */
    traffics(icao, query) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/traffics`, query, fallback: [] });
    }
    /**
     * `GET /v2/airports/{icao}/traffics/count`
     * @param icao Airport icao code
     * @param query.from Date from which to show statistics
     * @param query.to Date to which to show statistics
     */
    trafficsCount(icao, query) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/traffics/count`, query, fallback: null });
    }
    /**
     * `GET /v2/airports/{icao}/stats`
     * @param icao Airport icao code
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    stats(icao, query) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/stats`, query, fallback: [] });
    }
    /**
     * `GET /v2/airports/{icao}/stats/latest`
     * @param icao Airport icao code
     */
    latestStats(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/stats/latest`, fallback: null });
    }
    /**
     * `GET /v2/airports/{icao}/atis`
     * @param icao Airport icao code
     */
    atis(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/atis`, fallback: [] });
    }
    /**
     * `GET /v2/airports/{icao}/atis/latest`
     * @param icao Airport icao code
     */
    latestAtis(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/atis/latest`, fallback: null });
    }
    /**
     * `GET /v2/airports/{icao}/atis/{revision}`
     * @param icao Airport icao code
     * @param revision The Atis revision letter
     */
    atisRevision(icao, revision) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/atis/${(0, http_1.p)(revision)}`, fallback: null });
    }
}
exports.TrackerAirports = TrackerAirports;
/** `tracker.atcPositions` module. */
class TrackerAtcPositions {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/ATCPositions/{id}/atis`
     * @param id ATCPosition ID
     */
    atis(id) {
        return this.http.request({ method: 'GET', path: `/v2/ATCPositions/${(0, http_1.p)(id)}/atis`, fallback: [] });
    }
    /**
     * `GET /v2/ATCPositions/{id}/atis/latest`
     * @param id ATCPosition ID
     */
    latestAtis(id) {
        return this.http.request({ method: 'GET', path: `/v2/ATCPositions/${(0, http_1.p)(id)}/atis/latest`, fallback: null });
    }
    /**
     * `GET /v2/ATCPositions/{id}/atis/{revision}`
     * @param id ATCPosition ID
     * @param revision The Atis revision letter
     */
    atisRevision(id, revision) {
        return this.http.request({ method: 'GET', path: `/v2/ATCPositions/${(0, http_1.p)(id)}/atis/${(0, http_1.p)(revision)}`, fallback: null });
    }
}
exports.TrackerAtcPositions = TrackerAtcPositions;
/** `tracker.sessions` module. */
class TrackerSessions {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/tracker/sessions/{sessionId}/atis`
     * @param sessionId Session Id
     */
    atis(sessionId) {
        return this.http.request({ method: 'GET', path: `/v2/tracker/sessions/${(0, http_1.p)(sessionId)}/atis`, fallback: [] });
    }
    /**
     * `GET /v2/tracker/sessions/{sessionId}/atis/latest`
     * @param sessionId Session Id
     */
    latestAtis(sessionId) {
        return this.http.request({ method: 'GET', path: `/v2/tracker/sessions/${(0, http_1.p)(sessionId)}/atis/latest`, fallback: null });
    }
    /**
     * `GET /v2/tracker/sessions/{sessionId}/atis/{revision}`
     * @param sessionId Session Id
     * @param revision The Atis revision letter
     */
    atisRevision(sessionId, revision) {
        return this.http.request({ method: 'GET', path: `/v2/tracker/sessions/${(0, http_1.p)(sessionId)}/atis/${(0, http_1.p)(revision)}`, fallback: null });
    }
    /**
     * `GET /v2/tracker/sessions/{sessionId}/flightPlans`
     * @param sessionId Session Id
     */
    flightPlans(sessionId) {
        return this.http.request({ method: 'GET', path: `/v2/tracker/sessions/${(0, http_1.p)(sessionId)}/flightPlans`, fallback: [] });
    }
    /**
     * `GET /v2/tracker/sessions/{sessionId}/flightPlans/latest`
     * @param sessionId Session Id
     */
    latestFlightPlan(sessionId) {
        return this.http.request({ method: 'GET', path: `/v2/tracker/sessions/${(0, http_1.p)(sessionId)}/flightPlans/latest`, fallback: null });
    }
    /**
     * `GET /v2/tracker/sessions`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.ipAddress The IP address that was used to connect (internal use only)
     * @param query.now If set to true, will return only the sessions that are currently active
     * @param query.callsign The callsign that was used to connect
     * @param query.connectionType The type of connection of the session
     * @param query.userId Comma-separated list of user IDs to filter the sessions
     * @param query.to Date until which to calculate the maximum
     * @param query.from Date from which to calculate the maximum
     * @param query.departureId Departure airport Id
     * @param query.arrivalId Arrival airport Id
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/tracker/sessions`, query, fallback: null });
    }
    /**
     * `GET /v2/tracker/sessions/{id}`
     * @param id Session Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/tracker/sessions/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/tracker/sessions/{sessionId}/tracks`
     * @param sessionId Session Id
     */
    tracks(sessionId) {
        return this.http.request({ method: 'GET', path: `/v2/tracker/sessions/${(0, http_1.p)(sessionId)}/tracks`, fallback: [] });
    }
    /**
     * `GET /v2/tracker/sessions/{sessionId}/tracks/latest`
     * @param sessionId Session Id
     */
    latestTracks(sessionId) {
        return this.http.request({ method: 'GET', path: `/v2/tracker/sessions/${(0, http_1.p)(sessionId)}/tracks/latest`, fallback: [] });
    }
}
exports.TrackerSessions = TrackerSessions;
/** `tracker.flightPlans` module. */
class TrackerFlightPlans {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/tracker/flightPlans/{id}`
     * @param id FlightPlan Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/tracker/flightPlans/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.TrackerFlightPlans = TrackerFlightPlans;
/** `tracker.now` module. */
class TrackerNow {
    constructor(http) {
        this.http = http;
    }
    /** `GET /v2/tracker/now/pilots` */
    pilots() {
        return this.http.request({ method: 'GET', path: `/v2/tracker/now/pilots`, fallback: null });
    }
    /** `GET /v2/tracker/now/pilots/summary` */
    pilotsSummary() {
        return this.http.request({ method: 'GET', path: `/v2/tracker/now/pilots/summary`, fallback: [] });
    }
    /** `GET /v2/tracker/now/atc` */
    atc() {
        return this.http.request({ method: 'GET', path: `/v2/tracker/now/atc`, fallback: null });
    }
    /** `GET /v2/tracker/now/atc/summary` */
    atcSummary() {
        return this.http.request({ method: 'GET', path: `/v2/tracker/now/atc/summary`, fallback: null });
    }
    /** `GET /v2/tracker/now/supervisors` */
    supervisors() {
        return this.http.request({ method: 'GET', path: `/v2/tracker/now/supervisors`, fallback: null });
    }
    /** `GET /v2/tracker/now/observers` */
    observers() {
        return this.http.request({ method: 'GET', path: `/v2/tracker/now/observers`, fallback: null });
    }
}
exports.TrackerNow = TrackerNow;
/** `tracker.stats` module. */
class TrackerStats {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/tracker/connections/{type}`
     * @param type Connection type to fetch
     * @param query.limit Max Number of stats to be returned
     * @param query.from Date from which to show statistics
     * @param query.to Date to which to show statistics
     */
    connections(type, query) {
        return this.http.request({ method: 'GET', path: `/v2/tracker/connections/${(0, http_1.p)(type)}`, query, fallback: [] });
    }
    /**
     * `GET /v2/tracker/now/connections/stats`
     * @param query.from Date from which to calculate the maximum
     * @param query.to Date until which to calculate the maximum
     */
    nowConnections(query) {
        return this.http.request({ method: 'GET', path: `/v2/tracker/now/connections/stats`, query, fallback: null });
    }
    /**
     * `GET /v2/servers/stats`
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    servers(query) {
        return this.http.request({ method: 'GET', path: `/v2/servers/stats`, query, fallback: [] });
    }
    /**
     * `GET /v2/servers/{id}/stats`
     * @param id Server Id
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    server(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/servers/${(0, http_1.p)(id)}/stats`, query, fallback: [] });
    }
    /**
     * `GET /v2/simulators/stats`
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    simulators(query) {
        return this.http.request({ method: 'GET', path: `/v2/simulators/stats`, query, fallback: [] });
    }
    /**
     * `GET /v2/simulators/{id}/stats`
     * @param id Simulator Id
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    simulator(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/simulators/${(0, http_1.p)(id)}/stats`, query, fallback: [] });
    }
    /**
     * `GET /v2/softwares/stats`
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    softwares(query) {
        return this.http.request({ method: 'GET', path: `/v2/softwares/stats`, query, fallback: [] });
    }
    /**
     * `GET /v2/softwares/{type}/stats`
     * @param type Software Type
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    software(type, query) {
        return this.http.request({ method: 'GET', path: `/v2/softwares/${(0, http_1.p)(type)}/stats`, query, fallback: [] });
    }
}
exports.TrackerStats = TrackerStats;
/** `tracker.users` module. */
class TrackerUsers {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/users/{vid}/sessions/now`
     * @param vid User's VID (use 'me' for current logged in user)
     * OAuth scopes: tracker
     */
    nowSession(vid) {
        return this.http.request({ method: 'GET', path: `/v2/users/${(0, http_1.p)(vid)}/sessions/now`, fallback: null });
    }
}
exports.TrackerUsers = TrackerUsers;
/** `tracker.whazzup` module. */
class TrackerWhazzup {
    constructor(http) {
        this.http = http;
    }
    /** `GET /v2/tracker/whazzup` */
    get() {
        return this.http.request({ method: 'GET', path: `/v2/tracker/whazzup`, fallback: null });
    }
    /** `GET /v2/tracker/whazzup/atis` */
    atis() {
        return this.http.request({ method: 'GET', path: `/v2/tracker/whazzup/atis`, fallback: [] });
    }
}
exports.TrackerWhazzup = TrackerWhazzup;
/**
 * IVAO Tracker API: whazzup, live sessions, flight plans, ATIS, tracks and statistics.
 * Generated from tools/specs/tracker.json.
 */
class TrackerApi {
    constructor(http) {
        this.http = http;
        this.airports = new TrackerAirports(http);
        this.atcPositions = new TrackerAtcPositions(http);
        this.sessions = new TrackerSessions(http);
        this.flightPlans = new TrackerFlightPlans(http);
        this.now = new TrackerNow(http);
        this.stats = new TrackerStats(http);
        this.users = new TrackerUsers(http);
        this.whazzup = new TrackerWhazzup(http);
    }
}
exports.TrackerApi = TrackerApi;
