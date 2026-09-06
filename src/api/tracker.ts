/* eslint-disable */
// Generated from tools/specs/tracker.json by tools/generate.js - DO NOT EDIT.

import { HttpClient, p } from '../http';
import { AirportStat, AirportTraffics, AirportTrafficsCount, Atis, BaseFlightPlan, FlightPlan, NowAtc, NowAtcSummary, NowConnectionStats, NowPilot, NowPilotSummary, NowSupervisors, PaginatedSession, PilotTrack, ServerStat, Session, SimulatorStat, SoftwareStat, Whazzup } from '../types/tracker';

/** `tracker.airports` module. */
export class TrackerAirports {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/airports/stats`
     * @param query.limit Max number of airports to be returned
     */
    allStats(query?: { limit?: number }): Promise<AirportStat[]> {
        return this.http.request<AirportStat[]>({ method: 'GET', path: `/v2/airports/stats`, query, fallback: [] });
    }

    /**
     * `GET /v2/airports/{icao}/traffics`
     * @param icao Airport icao code
     * @param query.from Date from which to show statistics
     * @param query.to Date to which to show statistics
     */
    traffics(icao: string, query?: { from?: string; to?: string }): Promise<AirportTraffics[]> {
        return this.http.request<AirportTraffics[]>({ method: 'GET', path: `/v2/airports/${p(icao)}/traffics`, query, fallback: [] });
    }

    /**
     * `GET /v2/airports/{icao}/traffics/count`
     * @param icao Airport icao code
     * @param query.from Date from which to show statistics
     * @param query.to Date to which to show statistics
     */
    trafficsCount(icao: string, query?: { from?: string; to?: string }): Promise<AirportTrafficsCount> {
        return this.http.request<AirportTrafficsCount>({ method: 'GET', path: `/v2/airports/${p(icao)}/traffics/count`, query, fallback: null });
    }

    /**
     * `GET /v2/airports/{icao}/stats`
     * @param icao Airport icao code
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    stats(icao: string, query?: { limit?: number; from?: string; to?: string }): Promise<AirportStat[]> {
        return this.http.request<AirportStat[]>({ method: 'GET', path: `/v2/airports/${p(icao)}/stats`, query, fallback: [] });
    }

    /**
     * `GET /v2/airports/{icao}/stats/latest`
     * @param icao Airport icao code
     */
    latestStats(icao: string): Promise<AirportStat> {
        return this.http.request<AirportStat>({ method: 'GET', path: `/v2/airports/${p(icao)}/stats/latest`, fallback: null });
    }

    /**
     * `GET /v2/airports/{icao}/atis`
     * @param icao Airport icao code
     */
    atis(icao: string): Promise<Atis[]> {
        return this.http.request<Atis[]>({ method: 'GET', path: `/v2/airports/${p(icao)}/atis`, fallback: [] });
    }

    /**
     * `GET /v2/airports/{icao}/atis/latest`
     * @param icao Airport icao code
     */
    latestAtis(icao: string): Promise<Atis> {
        return this.http.request<Atis>({ method: 'GET', path: `/v2/airports/${p(icao)}/atis/latest`, fallback: null });
    }

    /**
     * `GET /v2/airports/{icao}/atis/{revision}`
     * @param icao Airport icao code
     * @param revision The Atis revision letter
     */
    atisRevision(icao: string, revision: string): Promise<Atis> {
        return this.http.request<Atis>({ method: 'GET', path: `/v2/airports/${p(icao)}/atis/${p(revision)}`, fallback: null });
    }
}

/** `tracker.atcPositions` module. */
export class TrackerAtcPositions {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/ATCPositions/{id}/atis`
     * @param id ATCPosition ID
     */
    atis(id: string): Promise<Atis[]> {
        return this.http.request<Atis[]>({ method: 'GET', path: `/v2/ATCPositions/${p(id)}/atis`, fallback: [] });
    }

    /**
     * `GET /v2/ATCPositions/{id}/atis/latest`
     * @param id ATCPosition ID
     */
    latestAtis(id: string): Promise<Atis> {
        return this.http.request<Atis>({ method: 'GET', path: `/v2/ATCPositions/${p(id)}/atis/latest`, fallback: null });
    }

    /**
     * `GET /v2/ATCPositions/{id}/atis/{revision}`
     * @param id ATCPosition ID
     * @param revision The Atis revision letter
     */
    atisRevision(id: string, revision: string): Promise<Atis> {
        return this.http.request<Atis>({ method: 'GET', path: `/v2/ATCPositions/${p(id)}/atis/${p(revision)}`, fallback: null });
    }
}

/** `tracker.sessions` module. */
export class TrackerSessions {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/tracker/sessions/{sessionId}/atis`
     * @param sessionId Session Id
     */
    atis(sessionId: number): Promise<Atis[]> {
        return this.http.request<Atis[]>({ method: 'GET', path: `/v2/tracker/sessions/${p(sessionId)}/atis`, fallback: [] });
    }

    /**
     * `GET /v2/tracker/sessions/{sessionId}/atis/latest`
     * @param sessionId Session Id
     */
    latestAtis(sessionId: number): Promise<Atis> {
        return this.http.request<Atis>({ method: 'GET', path: `/v2/tracker/sessions/${p(sessionId)}/atis/latest`, fallback: null });
    }

    /**
     * `GET /v2/tracker/sessions/{sessionId}/atis/{revision}`
     * @param sessionId Session Id
     * @param revision The Atis revision letter
     */
    atisRevision(sessionId: number, revision: string): Promise<Atis> {
        return this.http.request<Atis>({ method: 'GET', path: `/v2/tracker/sessions/${p(sessionId)}/atis/${p(revision)}`, fallback: null });
    }

    /**
     * `GET /v2/tracker/sessions/{sessionId}/flightPlans`
     * @param sessionId Session Id
     */
    flightPlans(sessionId: number): Promise<BaseFlightPlan[]> {
        return this.http.request<BaseFlightPlan[]>({ method: 'GET', path: `/v2/tracker/sessions/${p(sessionId)}/flightPlans`, fallback: [] });
    }

    /**
     * `GET /v2/tracker/sessions/{sessionId}/flightPlans/latest`
     * @param sessionId Session Id
     */
    latestFlightPlan(sessionId: number): Promise<FlightPlan> {
        return this.http.request<FlightPlan>({ method: 'GET', path: `/v2/tracker/sessions/${p(sessionId)}/flightPlans/latest`, fallback: null });
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
    list(query?: { page?: number; perPage?: number; ipAddress?: string; now?: boolean; callsign?: string; connectionType?: "PILOT" | "ATC" | "OBS" | "FOLME"; userId?: string; to?: string; from?: string; departureId?: string; arrivalId?: string }): Promise<PaginatedSession> {
        return this.http.request<PaginatedSession>({ method: 'GET', path: `/v2/tracker/sessions`, query, fallback: null });
    }

    /**
     * `GET /v2/tracker/sessions/{id}`
     * @param id Session Id
     */
    get(id: number): Promise<Session> {
        return this.http.request<Session>({ method: 'GET', path: `/v2/tracker/sessions/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/tracker/sessions/{sessionId}/tracks`
     * @param sessionId Session Id
     */
    tracks(sessionId: number): Promise<PilotTrack[]> {
        return this.http.request<PilotTrack[]>({ method: 'GET', path: `/v2/tracker/sessions/${p(sessionId)}/tracks`, fallback: [] });
    }

    /**
     * `GET /v2/tracker/sessions/{sessionId}/tracks/latest`
     * @param sessionId Session Id
     */
    latestTracks(sessionId: number): Promise<PilotTrack[]> {
        return this.http.request<PilotTrack[]>({ method: 'GET', path: `/v2/tracker/sessions/${p(sessionId)}/tracks/latest`, fallback: [] });
    }
}

/** `tracker.flightPlans` module. */
export class TrackerFlightPlans {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/tracker/flightPlans/{id}`
     * @param id FlightPlan Id
     */
    get(id: number): Promise<FlightPlan> {
        return this.http.request<FlightPlan>({ method: 'GET', path: `/v2/tracker/flightPlans/${p(id)}`, fallback: null });
    }
}

/** `tracker.now` module. */
export class TrackerNow {
    constructor(protected readonly http: HttpClient) {}

    /** `GET /v2/tracker/now/pilots` */
    pilots(): Promise<NowPilot> {
        return this.http.request<NowPilot>({ method: 'GET', path: `/v2/tracker/now/pilots`, fallback: null });
    }

    /** `GET /v2/tracker/now/pilots/summary` */
    pilotsSummary(): Promise<NowPilotSummary[]> {
        return this.http.request<NowPilotSummary[]>({ method: 'GET', path: `/v2/tracker/now/pilots/summary`, fallback: [] });
    }

    /** `GET /v2/tracker/now/atc` */
    atc(): Promise<NowAtc> {
        return this.http.request<NowAtc>({ method: 'GET', path: `/v2/tracker/now/atc`, fallback: null });
    }

    /** `GET /v2/tracker/now/atc/summary` */
    atcSummary(): Promise<NowAtcSummary> {
        return this.http.request<NowAtcSummary>({ method: 'GET', path: `/v2/tracker/now/atc/summary`, fallback: null });
    }

    /** `GET /v2/tracker/now/supervisors` */
    supervisors(): Promise<NowSupervisors> {
        return this.http.request<NowSupervisors>({ method: 'GET', path: `/v2/tracker/now/supervisors`, fallback: null });
    }

    /** `GET /v2/tracker/now/observers` */
    observers(): Promise<NowAtc> {
        return this.http.request<NowAtc>({ method: 'GET', path: `/v2/tracker/now/observers`, fallback: null });
    }
}

/** `tracker.stats` module. */
export class TrackerStats {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/tracker/connections/{type}`
     * @param type Connection type to fetch
     * @param query.limit Max Number of stats to be returned
     * @param query.from Date from which to show statistics
     * @param query.to Date to which to show statistics
     */
    connections(type?: "atc" | "followMe" | "observer" | "pilot" | "supervisor" | "total" | "worldTour" | "uniqueUsers24h", query?: { limit?: number; from?: string; to?: string }): Promise<Record<string, unknown>[]> {
        return this.http.request<Record<string, unknown>[]>({ method: 'GET', path: `/v2/tracker/connections/${p(type)}`, query, fallback: [] });
    }

    /**
     * `GET /v2/tracker/now/connections/stats`
     * @param query.from Date from which to calculate the maximum
     * @param query.to Date until which to calculate the maximum
     */
    nowConnections(query?: { from?: string; to?: string }): Promise<NowConnectionStats> {
        return this.http.request<NowConnectionStats>({ method: 'GET', path: `/v2/tracker/now/connections/stats`, query, fallback: null });
    }

    /**
     * `GET /v2/servers/stats`
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    servers(query?: { limit?: number; from?: string; to?: string }): Promise<ServerStat[]> {
        return this.http.request<ServerStat[]>({ method: 'GET', path: `/v2/servers/stats`, query, fallback: [] });
    }

    /**
     * `GET /v2/servers/{id}/stats`
     * @param id Server Id
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    server(id: string, query?: { limit?: number; from?: string; to?: string }): Promise<ServerStat[]> {
        return this.http.request<ServerStat[]>({ method: 'GET', path: `/v2/servers/${p(id)}/stats`, query, fallback: [] });
    }

    /**
     * `GET /v2/simulators/stats`
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    simulators(query?: { limit?: number; from?: string; to?: string }): Promise<SimulatorStat[]> {
        return this.http.request<SimulatorStat[]>({ method: 'GET', path: `/v2/simulators/stats`, query, fallback: [] });
    }

    /**
     * `GET /v2/simulators/{id}/stats`
     * @param id Simulator Id
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    simulator(id: string, query?: { limit?: number; from?: string; to?: string }): Promise<SimulatorStat[]> {
        return this.http.request<SimulatorStat[]>({ method: 'GET', path: `/v2/simulators/${p(id)}/stats`, query, fallback: [] });
    }

    /**
     * `GET /v2/softwares/stats`
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    softwares(query?: { limit?: number; from?: string; to?: string }): Promise<SoftwareStat[]> {
        return this.http.request<SoftwareStat[]>({ method: 'GET', path: `/v2/softwares/stats`, query, fallback: [] });
    }

    /**
     * `GET /v2/softwares/{type}/stats`
     * @param type Software Type
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    software(type: string, query?: { limit?: number; from?: string; to?: string }): Promise<SoftwareStat[]> {
        return this.http.request<SoftwareStat[]>({ method: 'GET', path: `/v2/softwares/${p(type)}/stats`, query, fallback: [] });
    }
}

/** `tracker.users` module. */
export class TrackerUsers {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/users/{vid}/sessions/now`
     * @param vid User's VID (use 'me' for current logged in user)
     * OAuth scopes: tracker
     */
    nowSession(vid: string): Promise<Session> {
        return this.http.request<Session>({ method: 'GET', path: `/v2/users/${p(vid)}/sessions/now`, fallback: null });
    }
}

/** `tracker.whazzup` module. */
export class TrackerWhazzup {
    constructor(protected readonly http: HttpClient) {}

    /** `GET /v2/tracker/whazzup` */
    get(): Promise<Whazzup> {
        return this.http.request<Whazzup>({ method: 'GET', path: `/v2/tracker/whazzup`, fallback: null });
    }

    /** `GET /v2/tracker/whazzup/atis` */
    atis(): Promise<Atis[]> {
        return this.http.request<Atis[]>({ method: 'GET', path: `/v2/tracker/whazzup/atis`, fallback: [] });
    }
}

/**
 * IVAO Tracker API: whazzup, live sessions, flight plans, ATIS, tracks and statistics.
 * Generated from tools/specs/tracker.json.
 */
export class TrackerApi {
    readonly airports: TrackerAirports;
    readonly atcPositions: TrackerAtcPositions;
    readonly sessions: TrackerSessions;
    readonly flightPlans: TrackerFlightPlans;
    readonly now: TrackerNow;
    readonly stats: TrackerStats;
    readonly users: TrackerUsers;
    readonly whazzup: TrackerWhazzup;

    constructor(protected readonly http: HttpClient) {
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
