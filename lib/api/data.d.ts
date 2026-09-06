import { PathLike } from 'fs';
import { HttpClient } from '../http';
import { ATCPosition, Aircraft, AircraftManufacture, AircraftTransponderType, AircraftVariant, AircraftsEquipment, Airline, Airport, Antenna, BaseATCPosition, BaseRunway, BaseSubcenter, BaseVirtualAirline, Center, Country, Creator, Language, Metar, MixedVirtualAirline, Motd, NatTrack, Navaid, Notam, PaginatedAircraft, PaginatedAirline, PaginatedAirport, PaginatedCenter, PaginatedCountry, PaginatedCreator, PaginatedLanguage, PaginatedNavaid, PaginatedNotam, PaginatedRoutes, PaginatedSector, PaginatedServer, PaginatedSimulator, PaginatedSimulatorVersion, PaginatedSoftware, PaginatedSpecialAreas, Position, Route, Runway, Sector, SectorFile, Server, ShortTaf, Simulator, SimulatorVersion, Software, SoftwareFile, SpecialAreas, Squawk, SquawkGenerated, SquawkRequest, Taf, VirtualAirline } from '../types/data';
import { SectorFileExtend } from '../types/manual';
/** `data.aircrafts.manufacturers` module. */
export declare class DataAircraftsManufacturers {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircrafts/manufacturers`
     * @param query.name String to find in aircrafts manufactures names
     */
    all(query?: {
        name?: string;
    }): Promise<AircraftManufacture[]>;
    /**
     * `GET /v2/aircrafts/manufacturers/{id}`
     * @param id Manufacture ID
     */
    get(id: number): Promise<AircraftManufacture>;
}
/** `data.aircrafts.equipments` module. */
export declare class DataAircraftsEquipments {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircrafts/equipments`
     * @param query.name String to find in aircrafts equipment names
     * @param query.isActive Find by aircraft equipment statet
     */
    all(query?: {
        name?: string;
        isActive?: boolean;
    }): Promise<AircraftsEquipment[]>;
    /**
     * `GET /v2/aircrafts/equipments/{id}`
     * @param id Manufacture ID
     */
    get(id: string): Promise<AircraftsEquipment>;
}
/** `data.aircrafts.transponderTypes` module. */
export declare class DataAircraftsTransponderTypes {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircrafts/transponderTypes`
     * @param query.name String to find in aircrafts transponder type names
     * @param query.type String to find in aircrafts transponder type by type
     * @param query.isActive Find by aircraft equipment statet
     */
    all(query?: {
        name?: string;
        type?: string;
        isActive?: boolean;
    }): Promise<AircraftTransponderType[]>;
    /**
     * `GET /v2/aircrafts/transponderTypes/{id}`
     * @param id Manufacture ID
     */
    get(id: string): Promise<AircraftTransponderType>;
}
/** `data.aircrafts` module. */
export declare class DataAircrafts {
    protected readonly http: HttpClient;
    readonly manufacturers: DataAircraftsManufacturers;
    readonly equipments: DataAircraftsEquipments;
    readonly transponderTypes: DataAircraftsTransponderTypes;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircrafts`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.description String to find in aircrafts description
     * @param query.manufactureId Manufacture of the aircraft
     */
    list(query?: {
        page?: number;
        perPage?: number;
        description?: string;
        manufactureId?: number;
    }): Promise<PaginatedAircraft>;
    /**
     * `GET /v2/aircrafts/all`
     * @param query.description String to find in aircrafts description
     * @param query.manufactureId Manufacture of the aircraft
     * @param query.hasBaseModels Check if the simulator version has baseModels
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    all(query?: {
        description?: string;
        manufactureId?: number;
        hasBaseModels?: boolean;
        perPage?: number;
        page?: number;
    }): Promise<Aircraft[]>;
    /**
     * `GET /v2/aircrafts/{icaoCode}`
     * @param icaoCode Aircraft ICAO code
     */
    get(icaoCode: string): Promise<Aircraft>;
    /**
     * `GET /v2/aircrafts/{aircraftId}/variants`
     * @param aircraftId Aircraft ICAO code
     */
    variants(aircraftId: string): Promise<AircraftVariant[]>;
    /** @deprecated Use `aircrafts` instead. */
    get aircrafts(): DataAircrafts;
    /** @deprecated Use `aircrafts.manufacturers` instead. */
    get aircraftManufacture(): DataAircraftsManufacturers;
    /** @deprecated Use `aircrafts.equipments` instead. */
    get aircraftEquipment(): DataAircraftsEquipments;
    /** @deprecated Use `aircrafts.transponderTypes` instead. */
    get aircraftTransponderTypes(): DataAircraftsTransponderTypes;
}
/** `data.aircraftVariants` module. */
export declare class DataAircraftVariants {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircraftsVariants/{id}`
     * @param id Aircraft Variant ID
     */
    get(id: string): Promise<AircraftVariant>;
}
/** `data.airlines` module. */
export declare class DataAirlines {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/airlines`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in airlines names
     * @param query.realBased Real based airline
     */
    list(query?: {
        page?: number;
        perPage?: number;
        name?: string;
        realBased?: boolean;
    }): Promise<PaginatedAirline>;
    /**
     * `GET /v2/airlines/all`
     * @param query.hasTextures Check of the airline has textures
     */
    all(query?: {
        hasTextures?: boolean;
    }): Promise<Airline[]>;
    /**
     * `GET /v2/airlines/{icao}`
     * @param icao Airline ICAO code
     */
    get(icao: string): Promise<Airline>;
    /**
     * `GET /v2/airlines/{icao}/logo`
     * @param icao Airline ICAO code
     */
    logo(icao: string): Promise<Buffer>;
    /**
     * `GET /v2/airlines/{icao}/routes`
     * @param icao Airline ICAO code
     */
    routes(icao: string): Promise<Route[]>;
    /**
     * `GET /v2/airlines/{icao}/virtualAirlines`
     * @param icao Airline ICAO code
     */
    virtualAirlines(icao: string): Promise<BaseVirtualAirline[]>;
}
/** `data.airports` module. */
export declare class DataAirports {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/airports`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in airports names
     * @param query.region Region in which the airport is located
     * @param query.countryId Country in which the airport is located
     * @param query.includeRunways Include all airport runways
     */
    list(query?: {
        page?: number;
        perPage?: number;
        name?: string;
        region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
        countryId?: string;
        includeRunways?: boolean;
    }): Promise<PaginatedAirport>;
    /**
     * `GET /v2/airports/all`
     * @param query.region Region in which the airport is located
     * @param query.countryId Country in which the airport is located. <b>Required if used with <code>includeRunways</code></b>
     * @param query.includeRunways Include all airport runways
     */
    all(query?: {
        region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
        countryId?: string;
        includeRunways?: boolean;
    }): Promise<Airport[]>;
    /** @deprecated Use {@link all} instead. */
    allAirports(query?: {
        region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
        countryId?: string;
        includeRunways?: boolean;
    }): Promise<Airport[]>;
    /**
     * `GET /v2/airports/{icao}`
     * @param icao Airport ICAO code
     */
    get(icao: string): Promise<Airport>;
    /** @deprecated Use {@link get} instead. */
    getAirport(icao: string): Promise<Airport>;
    /**
     * `GET /v2/airports/{airportId}/ATCPositions`
     * @param airportId Airport ICAO code
     * @param query.atcCallsign String to find in ATCPosition names
     * @param query.position Position type
     */
    atcPositions(airportId: string, query?: {
        atcCallsign?: string;
        position?: "APP" | "DEP" | "TWR" | "GND" | "DEL" | "ATIS";
    }): Promise<BaseATCPosition[]>;
    /** @deprecated Use {@link atcPositions} instead. */
    positions(airportId: string, query?: {
        atcCallsign?: string;
        position?: "APP" | "DEP" | "TWR" | "GND" | "DEL" | "ATIS";
    }): Promise<BaseATCPosition[]>;
    /**
     * `GET /v2/airports/{icao}/notams`
     * @param icao Airport ID
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    listNotams(icao: string, query?: {
        page?: number;
        perPage?: number;
    }): Promise<PaginatedNotam>;
    /**
     * `GET /v2/airports/{icao}/notams/all`
     * @param icao Airport ICAO
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    allNotams(icao: string, query: {
        mapType?: "regionMap" | "regionMapPolygon";
        now: boolean;
        perPage?: number;
        page?: number;
    }): Promise<Notam[]>;
    /** @deprecated Use {@link allNotams} instead. */
    notams(icao: string, query: {
        mapType?: "regionMap" | "regionMapPolygon";
        now: boolean;
        perPage?: number;
        page?: number;
    }): Promise<Notam[]>;
    /**
     * `GET /v2/airports/{icao}/runways`
     * @param icao Airport ICAO code
     */
    runways(icao: string): Promise<BaseRunway[]>;
    /**
     * `GET /v2/airports/{icao}/squawks`
     * @param icao Airport ICAO Code
     */
    squawks(icao: string): Promise<Squawk[]>;
    /** @deprecated Use {@link squawks} instead. */
    getSquawks(icao: string): Promise<Squawk[]>;
    /**
     * `POST /v2/airports/{icao}/squawks/generate`
     * @param icao Airport ICAO Code
     */
    generateSquawk(icao: string, body: SquawkRequest): Promise<SquawkGenerated>;
    /** `GET /v2/airports/all/metar` */
    allMetars(): Promise<Metar[]>;
    /** @deprecated Use {@link allMetars} instead. */
    allMetar(): Promise<Metar[]>;
    /** `GET /v2/airports/{icao}/metar` */
    metar(icao: string): Promise<Metar>;
    /** @deprecated Use {@link metar} instead. */
    getMetar(icao: string): Promise<Metar>;
    /** `GET /v2/airports/all/shortTaf` */
    allShortTafs(): Promise<ShortTaf[]>;
    /**
     * `GET /v2/airports/{icao}/shortTaf`
     * @param icao Airport ICAO code
     */
    shortTaf(icao: string): Promise<ShortTaf>;
    /** `GET /v2/airports/all/taf` */
    allTafs(): Promise<Taf[]>;
    /**
     * `GET /v2/airports/{icao}/taf`
     * @param icao Airport ICAO code
     */
    taf(icao: string): Promise<Taf>;
}
/** `data.antennas` module. */
export declare class DataAntennas {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/antennas/subjacent/{callsign}`
     * @param callsign Position callsign
     */
    subjacent(callsign: string): Promise<Antenna[]>;
}
/** `data.atcPositions` module. */
export declare class DataAtcPositions {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/ATCPositions/all`
     * @param query.mapType Region Map format
     * @param query.loadAirport Include airport info in the payload
     */
    all(query?: {
        mapType?: "regionMap" | "regionMapPolygon";
        loadAirport?: boolean;
    }): Promise<ATCPosition[]>;
    /**
     * `GET /v2/ATCPositions/{callsign}`
     * @param callsign ATC Position Callsign
     */
    get(callsign: string): Promise<ATCPosition>;
    /**
     * `GET /v2/ATCPositions/{callsign}/antennas`
     * @param callsign ATC Position Callsign
     */
    antennas(callsign: string): Promise<Antenna[]>;
}
/** `data.centers` module. */
export declare class DataCenters {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/centers`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in centers names
     * @param query.region Region in which the center is located
     * @param query.countryId Country in which the center is located
     */
    list(query?: {
        page?: number;
        perPage?: number;
        name?: string;
        region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
        countryId?: string;
    }): Promise<PaginatedCenter>;
    /**
     * `GET /v2/centers/{id}`
     * @param id Center ID
     */
    get(id: string): Promise<Center>;
    /**
     * `GET /v2/centers/{id}/notams`
     * @param id Center ID
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    listNotams(id: string, query?: {
        page?: number;
        perPage?: number;
    }): Promise<PaginatedNotam>;
    /**
     * `GET /v2/centers/{id}/notams/all`
     * @param id Center ID
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    allNotams(id: string, query: {
        mapType?: "regionMap" | "regionMapPolygon";
        now: boolean;
        perPage?: number;
        page?: number;
    }): Promise<Notam[]>;
    /** @deprecated Use {@link allNotams} instead. */
    getAllNotams(id: string, query: {
        mapType?: "regionMap" | "regionMapPolygon";
        now: boolean;
        perPage?: number;
        page?: number;
    }): Promise<Notam[]>;
    /**
     * `GET /v2/centers/{id}/specialAreas`
     * @param id Center ID
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    listSpecialAreas(id: string, query?: {
        page?: number;
        perPage?: number;
    }): Promise<PaginatedSpecialAreas>;
    /**
     * `GET /v2/centers/{id}/specialAreas/all`
     * @param id Center ID
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    allSpecialAreas(id: string, query: {
        mapType?: "regionMap" | "regionMapPolygon";
        now: boolean;
        perPage?: number;
        page?: number;
    }): Promise<SpecialAreas[]>;
    /** @deprecated Use {@link allSpecialAreas} instead. */
    getAllSpecialAreas(id: string, query: {
        mapType?: "regionMap" | "regionMapPolygon";
        now: boolean;
        perPage?: number;
        page?: number;
    }): Promise<SpecialAreas[]>;
    /**
     * `GET /v2/centers/{id}/squawks`
     * @param id Center ID
     */
    squawks(id: string): Promise<Squawk[]>;
    /** @deprecated Use {@link squawks} instead. */
    getSquawks(id: string): Promise<Squawk[]>;
    /**
     * `POST /v2/centers/{id}/squawks/generate`
     * @param id Center ID
     */
    generateSquawk(id: string, body: SquawkRequest): Promise<SquawkGenerated>;
    /**
     * `GET /v2/centers/{id}/subcenters`
     * @param id Center Id
     * @param query.atcCallsign String to find in subcenters names
     */
    subcenters(id: string, query?: {
        atcCallsign?: string;
    }): Promise<BaseSubcenter[]>;
    /** @deprecated Use {@link subcenters} instead. */
    getSubcenters(id: string, query?: {
        atcCallsign?: string;
    }): Promise<BaseSubcenter[]>;
}
/** `data.countries` module. */
export declare class DataCountries {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/countries`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in countries names
     * @param query.region Region in which the country is located
     * @param query.divisionId Division in which the country is located
     */
    list(query?: {
        page?: number;
        perPage?: number;
        name?: string;
        region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
        divisionId?: string;
    }): Promise<PaginatedCountry>;
    /**
     * `GET /v2/countries/{id}`
     * @param id Country ID
     */
    get(id: string): Promise<Country>;
}
/** `data.creators` module. */
export declare class DataCreators {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/creators`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.tier Filter by tier
     * @param query.rating Include creator's rating in response
     * @param query.divisionId Division in which the creator is registered
     */
    list(query?: {
        page?: number;
        perPage?: number;
        tier?: number;
        rating?: boolean;
        divisionId?: string;
    }): Promise<PaginatedCreator>;
    /**
     * `GET /v2/creators/all`
     * @param query.tier Filter by tier
     * @param query.rating Include creator's rating in response
     */
    all(query?: {
        tier?: number;
        rating?: boolean;
    }): Promise<Creator[]>;
    /**
     * `GET /v2/creators/{vid}`
     * @param vid User VID or 'me'
     * @param query.rating Include creator's rating in response
     */
    get(vid: string, query?: {
        rating?: boolean;
    }): Promise<Creator>;
}
/** `data.languages` module. */
export declare class DataLanguages {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/languages`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query?: {
        page?: number;
        perPage?: number;
    }): Promise<PaginatedLanguage>;
    /**
     * `GET /v2/languages/{id}`
     * @param id Language ID
     */
    get(id: string): Promise<Language>;
}
/** `data.navaids` module. */
export declare class DataNavaids {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/navaids/{type}`
     * @param type Navaid type
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in navaids names
     * @param query.region Region in which the navaid is located
     * @param query.icao String to find in navaids icao
     */
    list(type: "VOR" | "FIX" | "NDB", query?: {
        page?: number;
        perPage?: number;
        name?: string;
        region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
        icao?: string;
    }): Promise<PaginatedNavaid>;
    /**
     * `GET /v2/navaids/{type}/{id}`
     * @param type Navaid type
     * @param id Navaid ID
     */
    get(type: "VOR" | "FIX" | "NDB", id: number): Promise<Navaid>;
}
/** `data.natTracks` module. */
export declare class DataNatTracks {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /** `GET /v2/nat-tracks` */
    all(): Promise<NatTrack[]>;
}
/** `data.divisions` module. */
export declare class DataDivisions {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/divisions/{id}/notams`
     * @param id Division ID
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    listNotams(id: string, query?: {
        page?: number;
        perPage?: number;
    }): Promise<PaginatedNotam>;
    /**
     * `GET /v2/divisions/{id}/notams/all`
     * @param id Division ID
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    allNotams(id: string, query: {
        mapType?: string;
        now: boolean;
        perPage?: number;
        page?: number;
    }): Promise<Notam[]>;
    /** @deprecated Use {@link allNotams} instead. */
    getNotams(id: string, query: {
        mapType?: string;
        now: boolean;
        perPage?: number;
        page?: number;
    }): Promise<Notam[]>;
}
/** `data.notams` module. */
export declare class DataNotams {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/notams/all`
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     */
    all(query: {
        mapType?: "regionMap" | "regionMapPolygon";
        now: boolean;
    }): Promise<Notam[]>;
    /**
     * `GET /v2/notams/{id}`
     * @param id NOTAM ID
     */
    get(id: number): Promise<Notam>;
}
/** `data.positions` module. */
export declare class DataPositions {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/positions/search`
     * @param query.startsWith Filter position that match this string
     * @param query.icao Airport/Center ICAO code
     * @param query.positionType Position type
     * @param query.limit Max results of each type (default: 10, max: 100)
     * @param query.composePositionList Return the list of composePositions
     * @param query.countryId Filter positions by country ID
     * @param query.onlyActiveFras Filter by active fras
     */
    search(query?: {
        startsWith?: string;
        icao?: string;
        positionType?: "CTR" | "APP" | "DEP" | "TWR" | "GND" | "DEL" | "ATIS";
        limit?: number;
        composePositionList?: boolean;
        countryId?: string;
        onlyActiveFras?: boolean;
    }): Promise<Position[]>;
}
/** `data.runways` module. */
export declare class DataRunways {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/runways/{id}`
     * @param id Runway ID
     */
    get(id: number): Promise<Runway>;
}
/** `data.sectors` module. */
export declare class DataSectors {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/sectors`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in sectors names
     * @param query.region Region in which the sector is located
     * @param query.countryId Country in which the sector is located
     */
    list(query?: {
        page?: number;
        perPage?: number;
        name?: string;
        region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
        countryId?: string;
    }): Promise<PaginatedSector>;
    /** `GET /v2/sectors/all` */
    all(): Promise<Sector[]>;
    /**
     * `GET /v2/sectors/{id}`
     * @param id Sector ID
     */
    get(id: string): Promise<Sector>;
    /**
     * `GET /v2/sectors/{id}/files`
     * @param id Sector ID
     */
    files(id: string): Promise<SectorFile[]>;
    /** @deprecated Use {@link files} instead. */
    getAllFiles(id: string): Promise<SectorFile[]>;
    /**
     * `GET /v2/sectors/{id}/files/latest`
     * @param id Sector ID
     */
    latestFiles(id: string): Promise<SectorFile[]>;
    /** @deprecated Use {@link latestFiles} instead. */
    getLatestFiles(id: string): Promise<SectorFile[]>;
    /**
     * `GET /v2/sectors/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/sectors/{sectorId}/files/{id}`
     * @param sectorId Sector ID
     * @param id SectorFile ID
     */
    getFile(sectorId: string, id: number): Promise<SectorFileExtend>;
    /** @deprecated Use {@link getFile} instead. */
    getFiles(sectorId: string, id: number): Promise<SectorFileExtend>;
    /**
     * `GET /v2/sectors/{sectorId}/files/{id}/download`
     * @param sectorId Sector ID
     * @param id SectorFile ID
     */
    downloadFile(sectorId: string, id: number, destination?: PathLike): Promise<Buffer>;
    /** @deprecated Use {@link downloadFile} instead. */
    downloadFiles(sectorId: string, id: number, destination?: PathLike): Promise<Buffer>;
}
/** `data.servers` module. */
export declare class DataServers {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/servers`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.hostname String to find in servers
     * @param query.isActive Get server based on their state
     */
    list(query?: {
        page?: number;
        perPage?: number;
        hostname?: string;
        isActive?: boolean;
    }): Promise<PaginatedServer>;
    /**
     * `GET /v2/servers/all`
     * @param query.hostname String to find in servers
     * @param query.isActive Get server based on their state
     */
    all(query: {
        hostname?: string;
        isActive?: boolean;
        type: string;
    }): Promise<Server[]>;
    /**
     * `GET /v2/servers/{id}`
     * @param id Server Id
     */
    get(id: string): Promise<Server>;
}
/** `data.simulators` module. */
export declare class DataSimulators {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/simulators/{id}/versions`
     * @param id SimulatorId
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     * @param query.version Simulator version
     */
    versions(id: string, query?: {
        page?: number;
        perPage?: number;
        name?: string;
        isActive?: boolean;
        version?: string;
    }): Promise<PaginatedSimulatorVersion>;
    /**
     * `GET /v2/simulators`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     */
    list(query?: {
        page?: number;
        perPage?: number;
        name?: string;
        isActive?: boolean;
    }): Promise<PaginatedSimulator>;
    /**
     * `GET /v2/simulators/all`
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     */
    all(query?: {
        name?: string;
        isActive?: boolean;
    }): Promise<Simulator[]>;
    /**
     * `GET /v2/simulators/{id}`
     * @param id Simulator Id
     */
    get(id: string): Promise<Simulator>;
}
/** `data.simulatorVersions` module. */
export declare class DataSimulatorVersions {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/simulatorVersions`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     * @param query.version Simulator version
     */
    list(query?: {
        page?: number;
        perPage?: number;
        name?: string;
        isActive?: boolean;
        version?: string;
    }): Promise<PaginatedSimulatorVersion>;
    /**
     * `GET /v2/simulatorVersions/all`
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     * @param query.version Simulator version
     * @param query.hasBaseModels Check if the simulator version has baseModels
     */
    all(query?: {
        name?: string;
        isActive?: boolean;
        version?: string;
        hasBaseModels?: boolean;
    }): Promise<SimulatorVersion[]>;
    /**
     * `GET /v2/simulatorVersions/{id}`
     * @param id BaseModel ID
     */
    get(id: string): Promise<SimulatorVersion>;
}
/** `data.softwares` module. */
export declare class DataSoftwares {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /** `GET /v2/softwares/me` */
    me(): Promise<Software[]>;
    /**
     * `GET /v2/softwares/{type}`
     * @param type Software type
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in softwares names
     */
    list(type: string, query?: {
        page?: number;
        perPage?: number;
        name?: string;
    }): Promise<PaginatedSoftware>;
    /**
     * `GET /v2/softwares/{type}/{id}`
     * @param type Software type
     * @param id Software ID
     */
    get(type: string, id: string): Promise<Software>;
    /**
     * `GET /v2/softwares/{type}/{id}/files`
     * @param type Software type
     * @param id Software ID
     */
    files(type: string, id: string): Promise<SoftwareFile[]>;
    /** @deprecated Use {@link files} instead. */
    getFiles(type: string, id: string): Promise<SoftwareFile[]>;
    /**
     * `GET /v2/softwares/{type}/{id}/files/latest`
     * @param type Software type
     * @param id Software ID
     */
    latestFiles(type: string, id: string): Promise<SoftwareFile[]>;
    /** @deprecated Use {@link latestFiles} instead. */
    getLatestFiles(type: string, id: string): Promise<SoftwareFile[]>;
    /**
     * `GET /v2/softwares/{type}/{id}/files/latest/download`
     * @param type Software type
     * @param id Software ID
     */
    downloadLatestFiles(type: string, id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/softwares/{type}/{softwareId}/files/{id}`
     * @param type Software type
     * @param softwareId Software ID
     * @param id SoftwareFile ID
     */
    getFile(type: string, softwareId: string, id: number): Promise<SoftwareFile>;
    /** @deprecated Use {@link getFile} instead. */
    getFilesWhereId(type: string, softwareId: string, id: number): Promise<SoftwareFile>;
    /**
     * `GET /v2/softwares/{type}/{softwareId}/files/{id}/download`
     * @param type Software type
     * @param softwareId Software ID
     * @param id SoftwareFile ID
     */
    downloadFile(type: string, softwareId: string, id: number, destination?: PathLike): Promise<Buffer>;
    /** @deprecated Use {@link downloadFile} instead. */
    downloadFiles(type: string, softwareId: string, id: number, destination?: PathLike): Promise<Buffer>;
    /** `GET /v2/softwareFiles` */
    searchFiles(query: {
        type: string;
        operatingSystem: string;
        version: string;
        versionSuffix: string;
        fsdName: string;
    }): Promise<SoftwareFile[]>;
}
/** `data.specialAreas` module. */
export declare class DataSpecialAreas {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/specialAreas/all`
     * @param query.mapType Region Map format
     * @param query.now Select the active special areas at the time of the request
     */
    all(query: {
        mapType?: string;
        now: boolean;
    }): Promise<SpecialAreas[]>;
    /**
     * `GET /v2/specialAreas/{id}`
     * @param id NOTAM ID
     */
    get(id: number): Promise<SpecialAreas>;
}
/** `data.squawks` module. */
export declare class DataSquawks {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/squawks/{id}`
     * @param id Squawk ID
     */
    get(id: number): Promise<Squawk>;
}
/** `data.subcenters` module. */
export declare class DataSubcenters {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/centers/{id}/subcenters`
     * @param id Center Id
     * @param query.atcCallsign String to find in subcenters names
     */
    byCenter(id: string, query?: {
        atcCallsign?: string;
    }): Promise<BaseSubcenter[]>;
    /** @deprecated Use {@link byCenter} instead. */
    getSubcenters(id: string, query?: {
        atcCallsign?: string;
    }): Promise<BaseSubcenter[]>;
    /**
     * `GET /v2/subcenters/all`
     * @param query.mapType Region Map format
     */
    all(query?: {
        mapType?: "regionMap" | "regionMapPolygon";
    }): Promise<BaseSubcenter[]>;
    /** @deprecated Use {@link all} instead. */
    getAll(query?: {
        mapType?: "regionMap" | "regionMapPolygon";
    }): Promise<BaseSubcenter[]>;
    /**
     * `GET /v2/subcenters/{id}`
     * @param id Subcenter ID
     */
    get(id: string): Promise<BaseSubcenter>;
    /**
     * `GET /v2/subcenters/{id}/antennas`
     * @param id Subcenter ID
     */
    antennas(id: string): Promise<Antenna[]>;
    /** @deprecated Use {@link antennas} instead. */
    getAntennas(id: string): Promise<Antenna[]>;
}
/** `data.virtualAirlines` module. */
export declare class DataVirtualAirlines {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/airlines/{icao}/virtualAirlines`
     * @param icao Airline ICAO code
     */
    byAirline(icao: string): Promise<BaseVirtualAirline[]>;
    /** @deprecated Use {@link byAirline} instead. */
    getAllByCallsign(icao: string): Promise<BaseVirtualAirline[]>;
    /**
     * `GET /v2/virtualAirlines`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query?: {
        page?: number;
        perPage?: number;
    }): Promise<MixedVirtualAirline[]>;
    /**
     * `GET /v2/virtualAirlines/all`
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    all(query?: {
        perPage?: number;
        page?: number;
    }): Promise<MixedVirtualAirline[]>;
    /** `GET /v2/virtualAirlines/{id}` */
    get(id: string): Promise<VirtualAirline>;
    /**
     * `GET /v2/virtualAirlines/{id}/mainLogo`
     * @param id Virtual airline IdCode
     */
    mainLogo(id: string): Promise<Buffer>;
    /** @deprecated Use {@link mainLogo} instead. */
    getMainLogo(id: string): Promise<Buffer>;
    /**
     * `GET /v2/virtualAirlines/{id}/onlineLogo`
     * @param id Virtual airline IdCode
     */
    onlineLogo(id: string): Promise<Buffer>;
    /** @deprecated Use {@link onlineLogo} instead. */
    getOnlineLogo(id: string): Promise<Buffer>;
}
/** `data.weather` module. */
export declare class DataWeather {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /** `GET /v2/airports/all/metar` */
    allMetars(): Promise<Metar[]>;
    /** `GET /v2/airports/{icao}/metar` */
    metar(icao: string): Promise<Metar>;
    /** `GET /v2/airports/all/shortTaf` */
    allShortTafs(): Promise<ShortTaf[]>;
    /**
     * `GET /v2/airports/{icao}/shortTaf`
     * @param icao Airport ICAO code
     */
    shortTaf(icao: string): Promise<ShortTaf>;
    /** `GET /v2/airports/all/taf` */
    allTafs(): Promise<Taf[]>;
    /**
     * `GET /v2/airports/{icao}/taf`
     * @param icao Airport ICAO code
     */
    taf(icao: string): Promise<Taf>;
}
/** `data.motds` module. */
export declare class DataMotds {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /** `GET /v2/motds/latest` */
    latest(): Promise<Motd>;
    /** @deprecated Use {@link latest} instead. */
    getLatest(): Promise<Motd>;
}
/** `data.routes` module. */
export declare class DataRoutes {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/routes`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.departureId Filter by departure airport, prefix match allowed (2 letters min)
     * @param query.arrivalId Filter by arrival airport, prefix match allowed (2 letters min)
     * @param query.divisionId Filter by division
     */
    list(query?: {
        page?: number;
        perPage?: number;
        departureId?: string;
        arrivalId?: string;
        divisionId?: string;
    }): Promise<PaginatedRoutes>;
}
/**
 * IVAO Data API: aircrafts, airlines, airports, ATC positions, NOTAMs, sectors, softwares, weather...
 * Generated from tools/specs/data.json.
 */
export declare class DataApi {
    protected readonly http: HttpClient;
    readonly aircrafts: DataAircrafts;
    readonly aircraftVariants: DataAircraftVariants;
    readonly airlines: DataAirlines;
    readonly airports: DataAirports;
    readonly antennas: DataAntennas;
    readonly atcPositions: DataAtcPositions;
    readonly centers: DataCenters;
    readonly countries: DataCountries;
    readonly creators: DataCreators;
    readonly languages: DataLanguages;
    readonly navaids: DataNavaids;
    readonly natTracks: DataNatTracks;
    readonly divisions: DataDivisions;
    readonly notams: DataNotams;
    readonly positions: DataPositions;
    readonly runways: DataRunways;
    readonly sectors: DataSectors;
    readonly servers: DataServers;
    readonly simulators: DataSimulators;
    readonly simulatorVersions: DataSimulatorVersions;
    readonly softwares: DataSoftwares;
    readonly specialAreas: DataSpecialAreas;
    readonly squawks: DataSquawks;
    readonly subcenters: DataSubcenters;
    readonly virtualAirlines: DataVirtualAirlines;
    readonly weather: DataWeather;
    readonly motds: DataMotds;
    readonly routes: DataRoutes;
    constructor(http: HttpClient);
    /** @deprecated Use `aircrafts` instead. */
    get aircraft(): DataAircrafts;
}
