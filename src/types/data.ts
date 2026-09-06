/* eslint-disable */
// Generated from tools/specs/data.json by tools/generate.js - DO NOT EDIT.
// IVAO Data API - All endpoints related to ivao data

import { Paginated } from './common';

/** OpenAPI: AircraftManufactureDto (data) */
export interface AircraftManufacture {
    id: number;
    name: string;
}

/** OpenAPI: AircraftsEquipmentDto (data) */
export interface AircraftsEquipment {
    id: string;
    name: string;
    order: number;
    active: boolean;
}

/** OpenAPI: AircraftTransponderTypeDto (data) */
export interface AircraftTransponderType {
    id: string;
    name: string;
    order: number;
    type: number;
}

/** OpenAPI: BaseAircraftDto (data) */
export interface BaseAircraft {
    icaoCode: string;
    iataCode: string;
    model: string;
    manufactureId: number;
    manufacture: AircraftManufacture;
}

/** OpenAPI: PaginatedAircraftDto (data) */
export type PaginatedAircraft = Paginated<BaseAircraft>;

/** OpenAPI: AircraftDto (data) */
export interface Aircraft {
    icaoCode: string;
    iataCode: string;
    model: string;
    manufactureId: number;
    manufacture: AircraftManufacture;
    description: string;
    wakeTurbulence: string;
    engineId: string;
    numberEngines: number;
    military: "civil" | "military" | "both";
}

/** OpenAPI: AircraftVariantDto (data) */
export interface AircraftVariant {
    id: number;
    aircraftId: string;
    name: string;
    type?: string;
    fullId: string;
}

/** OpenAPI: BaseAirlineDto (data) */
export interface BaseAirline {
    icao: string;
    iata?: string;
    name: string;
    mainLogo: string;
    realBased: boolean;
}

/** OpenAPI: PaginatedAirlineDto (data) */
export type PaginatedAirline = Paginated<BaseAirline>;

/** OpenAPI: AirlineDto (data) */
export interface Airline {
    icao: string;
    iata?: string;
    name: string;
    mainLogo: string;
    realBased: boolean;
    countryId: string;
    callsign: string;
    website: string;
}

/** OpenAPI: RouteDto (data) */
export interface Route {
    id: number;
    departureId: string;
    arrivalId: string;
    flightType: string;
    altitudeType: string;
    minimumAlt: number;
    maximumAlt: number;
    route: string;
    comments: string;
}

/** OpenAPI: BaseAirportDto (data) */
export interface BaseAirport {
    icao: string;
    iata?: string;
    name: string;
    city?: string;
    countryId?: string;
    latitude: number;
    longitude: number;
    military: boolean;
    runways?: string[];
}

/** OpenAPI: PaginatedAirportDto (data) */
export type PaginatedAirport = Paginated<BaseAirport>;

/** OpenAPI: CountryDto (data) */
export interface Country {
    id: string;
    name: string;
    region: string;
    divisionId?: string;
}

/** OpenAPI: AirportDto (data) */
export interface Airport {
    icao: string;
    iata?: string;
    name: string;
    city?: string;
    countryId?: string;
    latitude: number;
    longitude: number;
    military: boolean;
    runways?: string[];
    divisionId?: string | null;
    faaCode?: string;
    atcCallsign?: string;
    state?: string;
    centerId: string;
    firId?: string;
    elevation?: number;
    magnetic?: unknown;
    transitionAltitude?: number;
    web?: string;
    country?: Country;
}

/** OpenAPI: AntennaDto (data) */
export interface Antenna {
    id: number;
    name: string;
    location: string;
    lat: number;
    lng: number;
    elevation: number;
    transmittingPower: number;
    ppm: number;
}

/** OpenAPI: BaseRegionMapDto (data) */
export interface BaseRegionMap {
    lat: unknown;
    lng: unknown;
}

/** OpenAPI: ATCPositionDto (data) */
export interface ATCPosition {
    id: number;
    airportId?: string;
    airportIcao?: string;
    atcCallsign: string;
    middleIdentifier?: string;
    position?: string;
    composePosition?: string;
    radarRange?: number;
    order: number;
    frequency: number;
    military: boolean;
    regionMap?: BaseRegionMap[];
    regionMapPolygon?: number[][];
    airport?: BaseAirport;
}

/** OpenAPI: BaseATCPositionDto (data) */
export interface BaseATCPosition {
    id: number;
    airportId?: string;
    airportIcao?: string;
    atcCallsign: string;
    middleIdentifier?: string;
    position?: string;
    composePosition?: string;
    radarRange?: number;
    order: number;
    frequency: number;
}

/** OpenAPI: BaseCenterDto (data) */
export interface BaseCenter {
    id: string;
    name: string;
    countryId: string;
    military: boolean;
}

/** OpenAPI: PaginatedCenterDto (data) */
export type PaginatedCenter = Paginated<BaseCenter>;

/** OpenAPI: CenterDto (data) */
export interface Center {
    id: string;
    name: string;
    countryId: string;
    military: boolean;
    divisionId?: string | null;
    status: boolean;
    regionMap?: unknown[];
    regionMapPolygon?: number[][];
}

/** OpenAPI: PaginatedCountryDto (data) */
export type PaginatedCountry = Paginated<Country>;

/** OpenAPI: BaseRatingDto (data) */
export interface BaseRating {
    id: number;
    name: string;
    description: string;
    shortName: string;
}

/** OpenAPI: NetworkRatingDto (data) */
export interface NetworkRating {
    id: number;
    name: string;
    description: string;
}

/** OpenAPI: BaseUserRatingDto (data) */
export interface BaseUserRating {
    isAtc: boolean;
    isPilot: boolean;
    pilotRating: BaseRating;
    atcRating: BaseRating;
    networkRating: NetworkRating;
}

/** OpenAPI: BaseUserDto (data) */
export interface BaseUser {
    id: number;
    divisionId?: string;
    firstName: string;
    lastName: string;
    rating?: BaseUserRating;
}

/** OpenAPI: CreatorDto (data) */
export interface Creator {
    userId: number;
    description: string;
    tier: number;
    user: BaseUser;
}

/** OpenAPI: PaginatedCreatorDto (data) */
export type PaginatedCreator = Paginated<Creator>;

/** OpenAPI: LanguageDto (data) */
export interface Language {
    id: string;
    name: string;
}

/** OpenAPI: PaginatedLanguageDto (data) */
export type PaginatedLanguage = Paginated<Language>;

/** OpenAPI: BaseNavaidDto (data) */
export interface BaseNavaid {
    id: number;
    name?: string;
    icao: string;
    type: string;
    frequency?: number;
    latitude?: number;
    longitude?: number;
}

/** OpenAPI: PaginatedNavaidDto (data) */
export type PaginatedNavaid = Paginated<BaseNavaid>;

/** OpenAPI: NavaidDto (data) */
export interface Navaid {
    id: number;
    name?: string;
    icao: string;
    type: string;
    frequency?: number;
    latitude?: number;
    longitude?: number;
}

/** OpenAPI: NatTrackDto (data) */
export interface NatTrack {
    id: number;
    identifier: string;
    waypoints: string[];
    eastboundLevels: number[];
    westboundLevels: number[];
    direction?: "EAST" | "WEST" | "BOTH";
    /** Format: date-time */
    validFrom?: string;
    /** Format: date-time */
    validTo?: string;
    rawData?: string;
}

/** OpenAPI: BaseNotamDto (data) */
export interface BaseNotam {
    id: number;
    name: string;
    specialAreaId?: string;
    startTime?: unknown;
    endTime?: unknown;
    description?: string;
    military?: boolean;
    centers?: BaseCenter[];
    airports?: BaseAirport[];
}

/** OpenAPI: PaginatedNotamDto (data) */
export type PaginatedNotam = Paginated<BaseNotam>;

/** OpenAPI: NotamDto (data) */
export interface Notam {
    id: number;
    name: string;
    specialAreaId?: string;
    startTime?: unknown;
    endTime?: unknown;
    description?: string;
    military?: boolean;
    centers?: BaseCenter[];
    airports?: BaseAirport[];
    regionMap?: BaseRegionMap[];
    regionMapPolygon?: number[][];
}

/** OpenAPI: PositionDto (data) */
export interface Position {
    id: number;
    airportId: string;
    centerId: string;
    atcCallsign: string;
    military: boolean;
    position: string;
    middleIdentifier: string;
    frequency: number;
    composePosition: string;
    radarRange: number;
    parentAtcPositionId: number;
    parentSubcenterId: number;
}

/** OpenAPI: BaseRunwayDto (data) */
export interface BaseRunway {
    id: number;
    airportIcao: string;
}

/** OpenAPI: RunwayDto (data) */
export interface Runway {
    id: number;
    airportIcao: string;
    length?: number;
    bearing?: number;
    latitude?: number;
    longitude?: number;
    elevation?: number;
    width?: number;
}

/** OpenAPI: SectorDto (data) */
export interface Sector {
    id: string;
    name: string;
    countryId: string;
    country?: Country;
}

/** OpenAPI: PaginatedSectorDto (data) */
export type PaginatedSector = Paginated<Sector>;

/** OpenAPI: SectorFileDto (data) */
export interface SectorFile {
    id: number;
    name: string;
    sectorId: string;
    valid: boolean;
}

/** OpenAPI: ServerDto (data) */
export interface Server {
    id: number;
    hostname: string;
    description: string;
    type: string;
    ip: string;
    countryId: string;
    currentConnections: number;
    maximumConnections: number;
    active: boolean;
    order: number;
    /** Format: date-time */
    pingedAt?: string;
}

/** OpenAPI: PaginatedServerDto (data) */
export type PaginatedServer = Paginated<Server>;

/** OpenAPI: SimulatorVersionDto (data) */
export interface SimulatorVersion {
    id: number;
    simulatorId: string;
    name: string;
    version: string;
    active: boolean;
}

/** OpenAPI: PaginatedSimulatorVersionDto (data) */
export type PaginatedSimulatorVersion = Paginated<SimulatorVersion>;

/** OpenAPI: SimulatorDto (data) */
export interface Simulator {
    id: string;
    name: string;
    active: boolean;
}

/** OpenAPI: PaginatedSimulatorDto (data) */
export type PaginatedSimulator = Paginated<Simulator>;

/** OpenAPI: SoftwareDto (data) */
export interface Software {
    id: number;
    type: string;
    name: string;
    operatingSystem?: string;
    logo?: string;
}

/** OpenAPI: PaginatedSoftwareDto (data) */
export type PaginatedSoftware = Paginated<Software>;

/** OpenAPI: SoftwareFileDto (data) */
export interface SoftwareFile {
    id: number;
    name: string;
    versionSuffix?: string;
    version?: string;
    softwareId: number;
    extension: string;
    valid: boolean;
    downloads: number;
    changeLog?: string;
}

/** OpenAPI: SpecialAreaTimeDto (data) */
export interface SpecialAreaTime {
    startTime: string;
    endTime: unknown | null;
    dayMon: boolean;
    dayTue: boolean;
    dayWed: boolean;
    dayThu: boolean;
    dayFri: boolean;
    daySat: boolean;
    daySun: boolean;
}

/** OpenAPI: BaseSpecialAreasDto (data) */
export interface BaseSpecialAreas {
    id: number;
    type: string;
    name: string;
    description: string;
    times: SpecialAreaTime[];
    centers: BaseCenter[];
    activationDetails: string;
    minimumAlt: number;
    maximumAlt: number;
    range: boolean;
}

/** OpenAPI: PaginatedSpecialAreasDto (data) */
export type PaginatedSpecialAreas = Paginated<BaseSpecialAreas>;

/** OpenAPI: SpecialAreasDto (data) */
export interface SpecialAreas {
    id: number;
    type: string;
    name: string;
    description: string;
    times: SpecialAreaTime[];
    centers: BaseCenter[];
    activationDetails: string;
    minimumAlt: number;
    maximumAlt: number;
    range: boolean;
    regionMap: BaseRegionMap[];
    regionMapPolygon: number[][];
    /** Format: date-time */
    createdAt: string;
    /** Format: date-time */
    updatedAt: string;
}

/** OpenAPI: SquawkDto (data) */
export interface Squawk {
    id: number;
    centerId: string;
    originMatch: string;
    destinationMatch: string;
    order: number;
    flightRules: string;
    military: string;
    minSquawk: number;
    maxSquawk: number;
}

/** OpenAPI: SquawkRequestDto (data) */
export interface SquawkRequest {
    originIcao: string;
    destinationIcao: string;
    flightRules?: string;
    military?: boolean;
}

/** OpenAPI: SquawkGeneratedDto (data) */
export interface SquawkGenerated {
    originMatch: string;
    destinationMatch: string;
    code: string;
}

/** OpenAPI: BaseSubcenterInterfaces (data) */
export interface BaseSubcenter {
    id: number;
    centerId: string;
    atcCallsign?: string;
    middleIdentifier?: string;
    position: string;
    composePosition?: string;
    radarRange?: number;
    military: boolean;
    frequency: number;
    regionMap?: BaseRegionMap[];
    regionMapPolygon?: number[][];
    latitude: number;
    longitude: number;
    center?: BaseCenter[];
    parentSubcenterId?: number;
}

/** OpenAPI: BaseVirtualAirlineDto (data) */
export interface BaseVirtualAirline {
    id: number;
    airlineId: string;
    website: string;
}

/** OpenAPI: Airline (data) */
export interface NestedAirline {
    icao: string;
    iata?: string;
    countryId: string;
    callsign: string;
    military: "civil" | "military" | "both";
    generalAviation: boolean;
}

/** OpenAPI: MixedVirtualAirlineDTO (data) */
export interface MixedVirtualAirline {
    id: number;
    airlineId: string;
    ceoVid: number;
    website: string;
    name: string;
    divisionId?: string;
    status: unknown;
    airline?: NestedAirline;
}

/** OpenAPI: VirtualAirlineDto (data) */
export interface VirtualAirline {
    id: number;
    airlineId: string;
    website: string;
    ceoVid: number;
    ceoName?: string;
    ceoMail?: string;
}

/** OpenAPI: MetarDto (data) */
export interface Metar {
    airportIcao: string;
    metar?: string;
    updatedAt?: unknown;
}

/** OpenAPI: ShortTafDto (data) */
export interface ShortTaf {
    airportIcao: string;
    shortTaf: string;
    updatedAt?: unknown;
}

/** OpenAPI: TafDto (data) */
export interface Taf {
    airportIcao: string;
    taf: string;
    updatedAt?: unknown;
}

/** OpenAPI: MotdDto (data) */
export interface Motd {
    /** Format: date-time */
    timestamp: string;
    contents: string;
    /** Format: int64 */
    createdBy: number;
}

/** OpenAPI: PaginatedRoutesDto (data) */
export type PaginatedRoutes = Paginated<Route>;
