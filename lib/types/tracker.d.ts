import { Paginated } from './common';
import { CoreBaseRating, UserRating } from './core';
/** OpenAPI: AirportStatDto (tracker) */
export interface AirportStat {
    icao: string;
    in: number;
    out: number;
    total: number;
    /** Format: date-time */
    timestamp: string;
}
/** OpenAPI: PilotSessionDto (tracker) */
export interface PilotSession {
    simulatorId: string;
    textureId: number;
}
/** OpenAPI: AircraftSummaryDto (tracker) */
export interface AircraftSummary {
    icaoCode: string;
    model: string;
    wakeTurbulence: string;
    military: "civil" | "military" | "both";
    description: string;
}
/** OpenAPI: BaseAirportDto (tracker) */
export interface TrackerBaseAirport {
    icao: string;
    iata: string;
    name: string;
    city: string;
    countryId: string;
    latitude: number;
    longitude: number;
    military: boolean;
}
/** OpenAPI: FlightPlanSummaryDto (tracker) */
export interface FlightPlanSummary {
    id: number;
    arrivalId: string;
    departureId: string;
    aircraftId: string;
    aircraft?: AircraftSummary;
    departure?: TrackerBaseAirport;
    arrival?: TrackerBaseAirport;
    alternative?: TrackerBaseAirport;
    alternative2?: TrackerBaseAirport;
}
/** OpenAPI: PilotTrackDto (tracker) */
export interface PilotTrack {
    time: number;
    /** Format: date-time */
    timestamp: string;
    latitude: number;
    longitude: number;
    altitude: number;
    altitudeDifference: number;
    arrivalDistance: number;
    bank: number;
    departureDistance: number;
    groundSpeed: number;
    heading: number;
    onGround: boolean;
    pitch: number;
    sandbagging: boolean;
    state: string;
    transponder: number;
    transponderMode: string;
}
/** OpenAPI: AirportTrafficDto (tracker) */
export interface AirportTraffic {
    id: number;
    callsign: string;
    userId: number;
    connectionType: string;
    serverId: string;
    /** Format: date-time */
    createdAt: string;
    time: number;
    pilotSession: PilotSession;
    flightPlan: FlightPlanSummary;
    lastTrack: PilotTrack;
}
/** OpenAPI: AirportTrafficsDto (tracker) */
export interface AirportTraffics {
    inbound: AirportTraffic;
    outbound: AirportTraffic;
    flightover: AirportTraffic;
}
/** OpenAPI: AirportTrafficsCountDto (tracker) */
export interface AirportTrafficsCount {
    inbound: number;
    outbound: number;
    flightover: number;
}
/** OpenAPI: AtisDto (tracker) */
export interface Atis {
    lines: string[];
    revision: string;
    /** Format: date-time */
    timestamp: string;
}
/** OpenAPI: FlightPlanDto (tracker) */
export interface FlightPlan {
    id: number;
    sessionId: number;
    revision: number;
    aircraftId: string;
    aircraftNumber: number;
    departureId?: string;
    arrivalId?: string;
    alternativeId?: string;
    alternative2Id?: string;
    route: string;
    remarks: string;
    speed: string;
    level: string;
    flightRules: string;
    flightType: string;
    /** Time in seconds */
    eet: number;
    /** Time in seconds */
    endurance: number;
    /** Time in seconds */
    departureTime: number;
    /** Time in seconds */
    actualDepartureTime: number;
    peopleOnBoard: number;
    aircraftEquipments: string[];
    aircraftTransponderTypes: string[];
    departure?: TrackerBaseAirport;
    arrival?: TrackerBaseAirport;
    alternative?: TrackerBaseAirport;
    alternative2?: TrackerBaseAirport;
    aircraft?: AircraftSummary;
}
/** OpenAPI: BaseFlightPlanDto (tracker) */
export interface BaseFlightPlan {
    id: number;
    sessionId: number;
    revision: number;
    aircraftId: string;
    aircraftNumber: number;
    departureId?: string;
    arrivalId?: string;
    alternativeId?: string;
    alternative2Id?: string;
    route: string;
    remarks: string;
    speed: string;
    level: string;
    flightRules: string;
    flightType: string;
    /** Time in seconds */
    eet: number;
    /** Time in seconds */
    endurance: number;
    /** Time in seconds */
    departureTime: number;
    /** Time in seconds */
    actualDepartureTime: number;
    peopleOnBoard: number;
}
/** OpenAPI: SoftwareSummaryDto (tracker) */
export interface SoftwareSummary {
    id: number;
    name: string;
}
/** OpenAPI: UserPilotRatingDto (tracker) */
export interface UserPilotRating {
    pilotRating?: CoreBaseRating;
    pilotRatingId: number;
}
/** OpenAPI: PilotSummaryDto (tracker) */
export interface PilotSummary {
    id: number;
    firstName: string;
    lastName: string;
    divisionId: string;
    rating: UserPilotRating;
}
/** OpenAPI: LastTrackDto (tracker) */
export interface LastTrack {
    time: number;
    /** Format: date-time */
    timestamp: string;
    latitude: number;
    longitude: number;
    altitude: number;
    altitudeDifference: number;
    arrivalDistance: number;
    departureDistance: number;
    groundSpeed: number;
    heading: number;
    onGround: boolean;
    state: string;
    transponder: number;
    transponderMode: string;
}
/** OpenAPI: NowPilotDto (tracker) */
export interface NowPilot {
    id: number;
    callsign: string;
    userId: number;
    connectionType: string;
    serverId: string;
    /** Format: date-time */
    createdAt: string;
    time: number;
    pilotSession: PilotSession;
    flightPlan: FlightPlanSummary;
    softwareType: SoftwareSummary;
    user: PilotSummary;
    lastTrack: LastTrack;
}
/** OpenAPI: NowPilotSummaryDto (tracker) */
export interface NowPilotSummary {
    id: number;
    callsign: string;
    userId: number;
    connectionType: string;
    isMilitary: boolean;
    isWorldTour: boolean;
    flightPlan: FlightPlanSummary;
    lastTrack: LastTrack;
}
/** OpenAPI: AtcSessionDto (tracker) */
export interface AtcSession {
    position: string;
    frequency: number;
}
/** OpenAPI: UserATCRatingDto (tracker) */
export interface UserATCRating {
    atcRating?: CoreBaseRating;
    atcRatingId: number;
}
/** OpenAPI: ATCSummaryDto (tracker) */
export interface ATCSummary {
    id: number;
    firstName: string;
    lastName: string;
    divisionId: string;
    rating: UserATCRating;
}
/** OpenAPI: NowAtcDto (tracker) */
export interface NowAtc {
    id: number;
    callsign: string;
    userId: number;
    connectionType: string;
    serverId: string;
    /** Format: date-time */
    createdAt: string;
    time: number;
    atcSession: AtcSession;
    softwareType: SoftwareSummary;
    user: ATCSummary;
}
/** OpenAPI: ATCPositionDto (tracker) */
export interface TrackerATCPosition {
    id: number;
    airportIcao: string;
    atcCallsign: string;
    middleIdentifier: string;
    position: string;
    composePosition: string;
    military: boolean;
    frequency: number;
    regionMap: string[];
    regionMapPolygon: string[];
    airport: TrackerBaseAirport;
}
/** OpenAPI: BaseCenterDto (tracker) */
export interface TrackerBaseCenter {
    id: number;
    name: string;
    countryId: string;
    military: boolean;
}
/** OpenAPI: SubcenterDto (tracker) */
export interface TrackerSubcenter {
    id: number;
    centerId: string;
    atcCallsign: string;
    middleIdentifier: string;
    position: string;
    composePosition: string;
    military: boolean;
    frequency: number;
    regionMap: string[];
    regionMapPolygon: string[];
    center: TrackerBaseCenter;
}
/** OpenAPI: NowAtcSummaryDto (tracker) */
export interface NowAtcSummary {
    id: number;
    callsign: string;
    userId: number;
    connectionType: string;
    atcSession: AtcSession;
    atcPosition?: TrackerATCPosition;
    subcenter?: TrackerSubcenter;
}
/** OpenAPI: UserSummaryBaseDto (tracker) */
export interface UserSummaryBase {
    id: number;
    firstName: string;
    lastName: string;
    divisionId: string;
}
/** OpenAPI: NowSupervisorsDto (tracker) */
export interface NowSupervisors {
    id: number;
    callsign: string;
    userId: number;
    connectionType: string;
    serverId: string;
    /** Format: date-time */
    createdAt: string;
    time: number;
    hideSupervisor: boolean;
    user: UserSummaryBase;
}
/** OpenAPI: UserSummaryDto (tracker) */
export interface UserSummary {
    id: number;
    firstName: string;
    lastName: string;
    divisionId: string;
    rating: UserRating;
}
/** OpenAPI: BaseSessionDto (tracker) */
export interface BaseSession {
    id: number;
    callsign: string;
    userId: number;
    connectionType: string;
    serverId: string;
    time: number;
    softwareTypeId: string;
    softwareVersion: string;
    sandbagging?: boolean;
    isMilitary?: boolean;
    isWorldTour?: boolean;
    flightPlans?: string[];
    softwareType?: SoftwareSummary;
    user?: UserSummary;
    /** Format: date-time */
    createdAt: string;
    /** Format: date-time */
    completedAt?: string;
    /** Format: date-time */
    updatedAt?: string;
}
/** OpenAPI: PaginatedSessionDto (tracker) */
export type PaginatedSession = Paginated<BaseSession>;
/** OpenAPI: SessionDto (tracker) */
export interface Session {
    id: number;
    callsign: string;
    userId: number;
    connectionType: string;
    serverId: string;
    time: number;
    softwareTypeId: string;
    softwareVersion: string;
    sandbagging?: boolean;
    isMilitary?: boolean;
    isWorldTour?: boolean;
    flightPlans?: string[];
    softwareType?: SoftwareSummary;
    user?: UserSummary;
    /** Format: date-time */
    createdAt: string;
    /** Format: date-time */
    completedAt?: string;
    /** Format: date-time */
    updatedAt?: string;
    isDoubleConnected: boolean;
    hideSupervisor: boolean;
    pilotSession?: PilotSession;
    atcSession?: AtcSession;
}
/** OpenAPI: NowSubConnectionStatsDto (tracker) */
export interface NowSubConnectionStats {
    atc: number;
    followMes: number;
    observers: number;
    pilots: number;
    supervisors: number;
    total: number;
    worldTours: number;
    uniqueUsers24h: number;
}
/** OpenAPI: NowConnectionStatsDto (tracker) */
export interface NowConnectionStats {
    now: NowSubConnectionStats;
    max: NowSubConnectionStats;
}
/** OpenAPI: ServerStatDto (tracker) */
export interface ServerStat {
    server: string;
    totalConnections: number;
    /** Format: date-time */
    timestamp: string;
}
/** OpenAPI: SimulatorStatDto (tracker) */
export interface SimulatorStat {
    simulator: string;
    totalConnections: number;
    /** Format: date-time */
    timestamp: string;
}
/** OpenAPI: SoftwareStatDto (tracker) */
export interface SoftwareStat {
    software: string;
    totalConnections: number;
    /** Format: date-time */
    timestamp: string;
}
/** OpenAPI: ClientsDto (tracker) */
export interface Clients {
    pilots: BaseSession;
    atcs: BaseSession;
    observers: BaseSession;
    followMe: BaseSession;
}
/** OpenAPI: ServerDto (tracker) */
export interface TrackerServer {
    id: number;
    hostname: string;
    ip: string;
    description: string;
    countryId: string;
    currentConnections: number;
    maximumConnections: number;
}
/** OpenAPI: WhazzupConnectionsDto (tracker) */
export interface WhazzupConnections {
    total: number;
    supervisor: number;
    atc: number;
    observer: number;
    pilot: number;
    worldTour: number;
    followMe: number;
    uniqueUsers24h: number;
}
/** OpenAPI: WhazzupDto (tracker) */
export interface Whazzup {
    /** Format: date-time */
    updatedAt: string;
    clients: Clients;
    servers: TrackerServer;
    voiceServers: TrackerServer;
    connections: WhazzupConnections;
}
