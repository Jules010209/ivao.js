import { HttpClient } from '../http';
import { AirportStat, AirportTraffics, AirportTrafficsCount, Atis, BaseFlightPlan, FlightPlan, NowAtc, NowAtcSummary, NowConnectionStats, NowPilot, NowPilotSummary, NowSupervisors, PaginatedSession, PilotTrack, ServerStat, Session, SimulatorStat, SoftwareStat, Whazzup } from '../types/tracker';
/** `tracker.airports` module. */
export declare class TrackerAirports {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/airports/stats`
     * @param query.limit Max number of airports to be returned
     */
    allStats(query?: {
        limit?: number;
    }): Promise<AirportStat[]>;
    /**
     * `GET /v2/airports/{icao}/traffics`
     * @param icao Airport icao code
     * @param query.from Date from which to show statistics
     * @param query.to Date to which to show statistics
     */
    traffics(icao: string, query?: {
        from?: string;
        to?: string;
    }): Promise<AirportTraffics[]>;
    /**
     * `GET /v2/airports/{icao}/traffics/count`
     * @param icao Airport icao code
     * @param query.from Date from which to show statistics
     * @param query.to Date to which to show statistics
     */
    trafficsCount(icao: string, query?: {
        from?: string;
        to?: string;
    }): Promise<AirportTrafficsCount>;
    /**
     * `GET /v2/airports/{icao}/stats`
     * @param icao Airport icao code
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    stats(icao: string, query?: {
        limit?: number;
        from?: string;
        to?: string;
    }): Promise<AirportStat[]>;
    /**
     * `GET /v2/airports/{icao}/stats/latest`
     * @param icao Airport icao code
     */
    latestStats(icao: string): Promise<AirportStat>;
    /**
     * `GET /v2/airports/{icao}/atis`
     * @param icao Airport icao code
     */
    atis(icao: string): Promise<Atis[]>;
    /**
     * `GET /v2/airports/{icao}/atis/latest`
     * @param icao Airport icao code
     */
    latestAtis(icao: string): Promise<Atis>;
    /**
     * `GET /v2/airports/{icao}/atis/{revision}`
     * @param icao Airport icao code
     * @param revision The Atis revision letter
     */
    atisRevision(icao: string, revision: string): Promise<Atis>;
}
/** `tracker.atcPositions` module. */
export declare class TrackerAtcPositions {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/ATCPositions/{id}/atis`
     * @param id ATCPosition ID
     */
    atis(id: string): Promise<Atis[]>;
    /**
     * `GET /v2/ATCPositions/{id}/atis/latest`
     * @param id ATCPosition ID
     */
    latestAtis(id: string): Promise<Atis>;
    /**
     * `GET /v2/ATCPositions/{id}/atis/{revision}`
     * @param id ATCPosition ID
     * @param revision The Atis revision letter
     */
    atisRevision(id: string, revision: string): Promise<Atis>;
}
/** `tracker.sessions` module. */
export declare class TrackerSessions {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/tracker/sessions/{sessionId}/atis`
     * @param sessionId Session Id
     */
    atis(sessionId: number): Promise<Atis[]>;
    /**
     * `GET /v2/tracker/sessions/{sessionId}/atis/latest`
     * @param sessionId Session Id
     */
    latestAtis(sessionId: number): Promise<Atis>;
    /**
     * `GET /v2/tracker/sessions/{sessionId}/atis/{revision}`
     * @param sessionId Session Id
     * @param revision The Atis revision letter
     */
    atisRevision(sessionId: number, revision: string): Promise<Atis>;
    /**
     * `GET /v2/tracker/sessions/{sessionId}/flightPlans`
     * @param sessionId Session Id
     */
    flightPlans(sessionId: number): Promise<BaseFlightPlan[]>;
    /**
     * `GET /v2/tracker/sessions/{sessionId}/flightPlans/latest`
     * @param sessionId Session Id
     */
    latestFlightPlan(sessionId: number): Promise<FlightPlan>;
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
    list(query?: {
        page?: number;
        perPage?: number;
        ipAddress?: string;
        now?: boolean;
        callsign?: string;
        connectionType?: "PILOT" | "ATC" | "OBS" | "FOLME";
        userId?: string;
        to?: string;
        from?: string;
        departureId?: string;
        arrivalId?: string;
    }): Promise<PaginatedSession>;
    /**
     * `GET /v2/tracker/sessions/{id}`
     * @param id Session Id
     */
    get(id: number): Promise<Session>;
    /**
     * `GET /v2/tracker/sessions/{sessionId}/tracks`
     * @param sessionId Session Id
     */
    tracks(sessionId: number): Promise<PilotTrack[]>;
    /**
     * `GET /v2/tracker/sessions/{sessionId}/tracks/latest`
     * @param sessionId Session Id
     */
    latestTracks(sessionId: number): Promise<PilotTrack[]>;
}
/** `tracker.flightPlans` module. */
export declare class TrackerFlightPlans {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/tracker/flightPlans/{id}`
     * @param id FlightPlan Id
     */
    get(id: number): Promise<FlightPlan>;
}
/** `tracker.now` module. */
export declare class TrackerNow {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /** `GET /v2/tracker/now/pilots` */
    pilots(): Promise<NowPilot>;
    /** `GET /v2/tracker/now/pilots/summary` */
    pilotsSummary(): Promise<NowPilotSummary[]>;
    /** `GET /v2/tracker/now/atc` */
    atc(): Promise<NowAtc>;
    /** `GET /v2/tracker/now/atc/summary` */
    atcSummary(): Promise<NowAtcSummary>;
    /** `GET /v2/tracker/now/supervisors` */
    supervisors(): Promise<NowSupervisors>;
    /** `GET /v2/tracker/now/observers` */
    observers(): Promise<NowAtc>;
}
/** `tracker.stats` module. */
export declare class TrackerStats {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/tracker/connections/{type}`
     * @param type Connection type to fetch
     * @param query.limit Max Number of stats to be returned
     * @param query.from Date from which to show statistics
     * @param query.to Date to which to show statistics
     */
    connections(type?: "atc" | "followMe" | "observer" | "pilot" | "supervisor" | "total" | "worldTour" | "uniqueUsers24h", query?: {
        limit?: number;
        from?: string;
        to?: string;
    }): Promise<Record<string, unknown>[]>;
    /**
     * `GET /v2/tracker/now/connections/stats`
     * @param query.from Date from which to calculate the maximum
     * @param query.to Date until which to calculate the maximum
     */
    nowConnections(query?: {
        from?: string;
        to?: string;
    }): Promise<NowConnectionStats>;
    /**
     * `GET /v2/servers/stats`
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    servers(query?: {
        limit?: number;
        from?: string;
        to?: string;
    }): Promise<ServerStat[]>;
    /**
     * `GET /v2/servers/{id}/stats`
     * @param id Server Id
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    server(id: string, query?: {
        limit?: number;
        from?: string;
        to?: string;
    }): Promise<ServerStat[]>;
    /**
     * `GET /v2/simulators/stats`
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    simulators(query?: {
        limit?: number;
        from?: string;
        to?: string;
    }): Promise<SimulatorStat[]>;
    /**
     * `GET /v2/simulators/{id}/stats`
     * @param id Simulator Id
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    simulator(id: string, query?: {
        limit?: number;
        from?: string;
        to?: string;
    }): Promise<SimulatorStat[]>;
    /**
     * `GET /v2/softwares/stats`
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    softwares(query?: {
        limit?: number;
        from?: string;
        to?: string;
    }): Promise<SoftwareStat[]>;
    /**
     * `GET /v2/softwares/{type}/stats`
     * @param type Software Type
     * @param query.limit Max Number of stats to be returned
     * @param query.from Day from which to show statistics
     * @param query.to Day to which to show statistics
     */
    software(type: string, query?: {
        limit?: number;
        from?: string;
        to?: string;
    }): Promise<SoftwareStat[]>;
}
/** `tracker.users` module. */
export declare class TrackerUsers {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/users/{vid}/sessions/now`
     * @param vid User's VID (use 'me' for current logged in user)
     * OAuth scopes: tracker
     */
    nowSession(vid: string): Promise<Session>;
}
/** `tracker.whazzup` module. */
export declare class TrackerWhazzup {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /** `GET /v2/tracker/whazzup` */
    get(): Promise<Whazzup>;
    /** `GET /v2/tracker/whazzup/atis` */
    atis(): Promise<Atis[]>;
}
/**
 * IVAO Tracker API: whazzup, live sessions, flight plans, ATIS, tracks and statistics.
 * Generated from tools/specs/tracker.json.
 */
export declare class TrackerApi {
    protected readonly http: HttpClient;
    readonly airports: TrackerAirports;
    readonly atcPositions: TrackerAtcPositions;
    readonly sessions: TrackerSessions;
    readonly flightPlans: TrackerFlightPlans;
    readonly now: TrackerNow;
    readonly stats: TrackerStats;
    readonly users: TrackerUsers;
    readonly whazzup: TrackerWhazzup;
    constructor(http: HttpClient);
}
