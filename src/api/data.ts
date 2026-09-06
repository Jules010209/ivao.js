/* eslint-disable */
// Generated from tools/specs/data.json by tools/generate.js - DO NOT EDIT.

import { PathLike } from 'fs';
import { HttpClient, p } from '../http';
import { ATCPosition, Aircraft, AircraftManufacture, AircraftTransponderType, AircraftVariant, AircraftsEquipment, Airline, Airport, Antenna, BaseATCPosition, BaseRunway, BaseSubcenter, BaseVirtualAirline, Center, Country, Creator, Language, Metar, MixedVirtualAirline, Motd, NatTrack, Navaid, Notam, PaginatedAircraft, PaginatedAirline, PaginatedAirport, PaginatedCenter, PaginatedCountry, PaginatedCreator, PaginatedLanguage, PaginatedNavaid, PaginatedNotam, PaginatedRoutes, PaginatedSector, PaginatedServer, PaginatedSimulator, PaginatedSimulatorVersion, PaginatedSoftware, PaginatedSpecialAreas, Position, Route, Runway, Sector, SectorFile, Server, ShortTaf, Simulator, SimulatorVersion, Software, SoftwareFile, SpecialAreas, Squawk, SquawkGenerated, SquawkRequest, Taf, VirtualAirline } from '../types/data';
import { SectorFileExtend } from '../types/manual';

/** `data.aircrafts.manufacturers` module. */
export class DataAircraftsManufacturers {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircrafts/manufacturers`
     * @param query.name String to find in aircrafts manufactures names
     */
    all(query?: { name?: string }): Promise<AircraftManufacture[]> {
        return this.http.request<AircraftManufacture[]>({ method: 'GET', path: `/v2/aircrafts/manufacturers`, query, fallback: [] });
    }

    /**
     * `GET /v2/aircrafts/manufacturers/{id}`
     * @param id Manufacture ID
     */
    get(id: number): Promise<AircraftManufacture> {
        return this.http.request<AircraftManufacture>({ method: 'GET', path: `/v2/aircrafts/manufacturers/${p(id)}`, fallback: null });
    }
}

/** `data.aircrafts.equipments` module. */
export class DataAircraftsEquipments {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircrafts/equipments`
     * @param query.name String to find in aircrafts equipment names
     * @param query.isActive Find by aircraft equipment statet
     */
    all(query?: { name?: string; isActive?: boolean }): Promise<AircraftsEquipment[]> {
        return this.http.request<AircraftsEquipment[]>({ method: 'GET', path: `/v2/aircrafts/equipments`, query, fallback: [] });
    }

    /**
     * `GET /v2/aircrafts/equipments/{id}`
     * @param id Manufacture ID
     */
    get(id: string): Promise<AircraftsEquipment> {
        return this.http.request<AircraftsEquipment>({ method: 'GET', path: `/v2/aircrafts/equipments/${p(id)}`, fallback: null });
    }
}

/** `data.aircrafts.transponderTypes` module. */
export class DataAircraftsTransponderTypes {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircrafts/transponderTypes`
     * @param query.name String to find in aircrafts transponder type names
     * @param query.type String to find in aircrafts transponder type by type
     * @param query.isActive Find by aircraft equipment statet
     */
    all(query?: { name?: string; type?: string; isActive?: boolean }): Promise<AircraftTransponderType[]> {
        return this.http.request<AircraftTransponderType[]>({ method: 'GET', path: `/v2/aircrafts/transponderTypes`, query, fallback: [] });
    }

    /**
     * `GET /v2/aircrafts/transponderTypes/{id}`
     * @param id Manufacture ID
     */
    get(id: string): Promise<AircraftTransponderType> {
        return this.http.request<AircraftTransponderType>({ method: 'GET', path: `/v2/aircrafts/transponderTypes/${p(id)}`, fallback: null });
    }
}

/** `data.aircrafts` module. */
export class DataAircrafts {
    readonly manufacturers: DataAircraftsManufacturers;
    readonly equipments: DataAircraftsEquipments;
    readonly transponderTypes: DataAircraftsTransponderTypes;

    constructor(protected readonly http: HttpClient) {
        this.manufacturers = new DataAircraftsManufacturers(http);
        this.equipments = new DataAircraftsEquipments(http);
        this.transponderTypes = new DataAircraftsTransponderTypes(http);
    }

    /**
     * `GET /v2/aircrafts`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.description String to find in aircrafts description
     * @param query.manufactureId Manufacture of the aircraft
     */
    list(query?: { page?: number; perPage?: number; description?: string; manufactureId?: number }): Promise<PaginatedAircraft> {
        return this.http.request<PaginatedAircraft>({ method: 'GET', path: `/v2/aircrafts`, query, fallback: null });
    }

    /**
     * `GET /v2/aircrafts/all`
     * @param query.description String to find in aircrafts description
     * @param query.manufactureId Manufacture of the aircraft
     * @param query.hasBaseModels Check if the simulator version has baseModels
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    all(query?: { description?: string; manufactureId?: number; hasBaseModels?: boolean; perPage?: number; page?: number }): Promise<Aircraft[]> {
        return this.http.request<Aircraft[]>({ method: 'GET', path: `/v2/aircrafts/all`, query, fallback: [] });
    }

    /**
     * `GET /v2/aircrafts/{icaoCode}`
     * @param icaoCode Aircraft ICAO code
     */
    get(icaoCode: string): Promise<Aircraft> {
        return this.http.request<Aircraft>({ method: 'GET', path: `/v2/aircrafts/${p(icaoCode)}`, fallback: null });
    }

    /**
     * `GET /v2/aircrafts/{aircraftId}/variants`
     * @param aircraftId Aircraft ICAO code
     */
    variants(aircraftId: string): Promise<AircraftVariant[]> {
        return this.http.request<AircraftVariant[]>({ method: 'GET', path: `/v2/aircrafts/${p(aircraftId)}/variants`, fallback: [] });
    }

    /** @deprecated Use `aircrafts` instead. */
    get aircrafts(): DataAircrafts {
        return this;
    }

    /** @deprecated Use `aircrafts.manufacturers` instead. */
    get aircraftManufacture(): DataAircraftsManufacturers {
        return this.manufacturers;
    }

    /** @deprecated Use `aircrafts.equipments` instead. */
    get aircraftEquipment(): DataAircraftsEquipments {
        return this.equipments;
    }

    /** @deprecated Use `aircrafts.transponderTypes` instead. */
    get aircraftTransponderTypes(): DataAircraftsTransponderTypes {
        return this.transponderTypes;
    }
}

/** `data.aircraftVariants` module. */
export class DataAircraftVariants {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircraftsVariants/{id}`
     * @param id Aircraft Variant ID
     */
    get(id: string): Promise<AircraftVariant> {
        return this.http.request<AircraftVariant>({ method: 'GET', path: `/v2/aircraftsVariants/${p(id)}`, fallback: null });
    }
}

/** `data.airlines` module. */
export class DataAirlines {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/airlines`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in airlines names
     * @param query.realBased Real based airline
     */
    list(query?: { page?: number; perPage?: number; name?: string; realBased?: boolean }): Promise<PaginatedAirline> {
        return this.http.request<PaginatedAirline>({ method: 'GET', path: `/v2/airlines`, query, fallback: null });
    }

    /**
     * `GET /v2/airlines/all`
     * @param query.hasTextures Check of the airline has textures
     */
    all(query?: { hasTextures?: boolean }): Promise<Airline[]> {
        return this.http.request<Airline[]>({ method: 'GET', path: `/v2/airlines/all`, query, fallback: [] });
    }

    /**
     * `GET /v2/airlines/{icao}`
     * @param icao Airline ICAO code
     */
    get(icao: string): Promise<Airline> {
        return this.http.request<Airline>({ method: 'GET', path: `/v2/airlines/${p(icao)}`, fallback: null });
    }

    /**
     * `GET /v2/airlines/{icao}/logo`
     * @param icao Airline ICAO code
     */
    logo(icao: string): Promise<Buffer> {
        return this.http.buffer({ method: 'GET', path: `/v2/airlines/${p(icao)}/logo` });
    }

    /**
     * `GET /v2/airlines/{icao}/routes`
     * @param icao Airline ICAO code
     */
    routes(icao: string): Promise<Route[]> {
        return this.http.request<Route[]>({ method: 'GET', path: `/v2/airlines/${p(icao)}/routes`, fallback: [] });
    }

    /**
     * `GET /v2/airlines/{icao}/virtualAirlines`
     * @param icao Airline ICAO code
     */
    virtualAirlines(icao: string): Promise<BaseVirtualAirline[]> {
        return this.http.request<BaseVirtualAirline[]>({ method: 'GET', path: `/v2/airlines/${p(icao)}/virtualAirlines`, fallback: [] });
    }
}

/** `data.airports` module. */
export class DataAirports {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/airports`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in airports names
     * @param query.region Region in which the airport is located
     * @param query.countryId Country in which the airport is located
     * @param query.includeRunways Include all airport runways
     */
    list(query?: { page?: number; perPage?: number; name?: string; region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania"; countryId?: string; includeRunways?: boolean }): Promise<PaginatedAirport> {
        return this.http.request<PaginatedAirport>({ method: 'GET', path: `/v2/airports`, query, fallback: null });
    }

    /**
     * `GET /v2/airports/all`
     * @param query.region Region in which the airport is located
     * @param query.countryId Country in which the airport is located. <b>Required if used with <code>includeRunways</code></b>
     * @param query.includeRunways Include all airport runways
     */
    all(query?: { region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania"; countryId?: string; includeRunways?: boolean }): Promise<Airport[]> {
        return this.http.request<Airport[]>({ method: 'GET', path: `/v2/airports/all`, query, fallback: [] });
    }

    /** @deprecated Use {@link all} instead. */
    allAirports(query?: { region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania"; countryId?: string; includeRunways?: boolean }): Promise<Airport[]> {
        return this.all(query);
    }

    /**
     * `GET /v2/airports/{icao}`
     * @param icao Airport ICAO code
     */
    get(icao: string): Promise<Airport> {
        return this.http.request<Airport>({ method: 'GET', path: `/v2/airports/${p(icao)}`, fallback: null });
    }

    /** @deprecated Use {@link get} instead. */
    getAirport(icao: string): Promise<Airport> {
        return this.get(icao);
    }

    /**
     * `GET /v2/airports/{airportId}/ATCPositions`
     * @param airportId Airport ICAO code
     * @param query.atcCallsign String to find in ATCPosition names
     * @param query.position Position type
     */
    atcPositions(airportId: string, query?: { atcCallsign?: string; position?: "APP" | "DEP" | "TWR" | "GND" | "DEL" | "ATIS" }): Promise<BaseATCPosition[]> {
        return this.http.request<BaseATCPosition[]>({ method: 'GET', path: `/v2/airports/${p(airportId)}/ATCPositions`, query, fallback: [] });
    }

    /** @deprecated Use {@link atcPositions} instead. */
    positions(airportId: string, query?: { atcCallsign?: string; position?: "APP" | "DEP" | "TWR" | "GND" | "DEL" | "ATIS" }): Promise<BaseATCPosition[]> {
        return this.atcPositions(airportId, query);
    }

    /**
     * `GET /v2/airports/{icao}/notams`
     * @param icao Airport ID
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    listNotams(icao: string, query?: { page?: number; perPage?: number }): Promise<PaginatedNotam> {
        return this.http.request<PaginatedNotam>({ method: 'GET', path: `/v2/airports/${p(icao)}/notams`, query, fallback: null });
    }

    /**
     * `GET /v2/airports/{icao}/notams/all`
     * @param icao Airport ICAO
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    allNotams(icao: string, query: { mapType?: "regionMap" | "regionMapPolygon"; now: boolean; perPage?: number; page?: number }): Promise<Notam[]> {
        return this.http.request<Notam[]>({ method: 'GET', path: `/v2/airports/${p(icao)}/notams/all`, query, fallback: [] });
    }

    /** @deprecated Use {@link allNotams} instead. */
    notams(icao: string, query: { mapType?: "regionMap" | "regionMapPolygon"; now: boolean; perPage?: number; page?: number }): Promise<Notam[]> {
        return this.allNotams(icao, query);
    }

    /**
     * `GET /v2/airports/{icao}/runways`
     * @param icao Airport ICAO code
     */
    runways(icao: string): Promise<BaseRunway[]> {
        return this.http.request<BaseRunway[]>({ method: 'GET', path: `/v2/airports/${p(icao)}/runways`, fallback: [] });
    }

    /**
     * `GET /v2/airports/{icao}/squawks`
     * @param icao Airport ICAO Code
     */
    squawks(icao: string): Promise<Squawk[]> {
        return this.http.request<Squawk[]>({ method: 'GET', path: `/v2/airports/${p(icao)}/squawks`, fallback: [] });
    }

    /** @deprecated Use {@link squawks} instead. */
    getSquawks(icao: string): Promise<Squawk[]> {
        return this.squawks(icao);
    }

    /**
     * `POST /v2/airports/{icao}/squawks/generate`
     * @param icao Airport ICAO Code
     */
    generateSquawk(icao: string, body: SquawkRequest): Promise<SquawkGenerated> {
        return this.http.request<SquawkGenerated>({ method: 'POST', path: `/v2/airports/${p(icao)}/squawks/generate`, body, fallback: null });
    }

    /** `GET /v2/airports/all/metar` */
    allMetars(): Promise<Metar[]> {
        return this.http.request<Metar[]>({ method: 'GET', path: `/v2/airports/all/metar`, fallback: [] });
    }

    /** @deprecated Use {@link allMetars} instead. */
    allMetar(): Promise<Metar[]> {
        return this.allMetars();
    }

    /** `GET /v2/airports/{icao}/metar` */
    metar(icao: string): Promise<Metar> {
        return this.http.request<Metar>({ method: 'GET', path: `/v2/airports/${p(icao)}/metar`, fallback: null });
    }

    /** @deprecated Use {@link metar} instead. */
    getMetar(icao: string): Promise<Metar> {
        return this.metar(icao);
    }

    /** `GET /v2/airports/all/shortTaf` */
    allShortTafs(): Promise<ShortTaf[]> {
        return this.http.request<ShortTaf[]>({ method: 'GET', path: `/v2/airports/all/shortTaf`, fallback: [] });
    }

    /**
     * `GET /v2/airports/{icao}/shortTaf`
     * @param icao Airport ICAO code
     */
    shortTaf(icao: string): Promise<ShortTaf> {
        return this.http.request<ShortTaf>({ method: 'GET', path: `/v2/airports/${p(icao)}/shortTaf`, fallback: null });
    }

    /** `GET /v2/airports/all/taf` */
    allTafs(): Promise<Taf[]> {
        return this.http.request<Taf[]>({ method: 'GET', path: `/v2/airports/all/taf`, fallback: [] });
    }

    /**
     * `GET /v2/airports/{icao}/taf`
     * @param icao Airport ICAO code
     */
    taf(icao: string): Promise<Taf> {
        return this.http.request<Taf>({ method: 'GET', path: `/v2/airports/${p(icao)}/taf`, fallback: null });
    }
}

/** `data.antennas` module. */
export class DataAntennas {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/antennas/subjacent/{callsign}`
     * @param callsign Position callsign
     */
    subjacent(callsign: string): Promise<Antenna[]> {
        return this.http.request<Antenna[]>({ method: 'GET', path: `/v2/antennas/subjacent/${p(callsign)}`, fallback: [] });
    }
}

/** `data.atcPositions` module. */
export class DataAtcPositions {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/ATCPositions/all`
     * @param query.mapType Region Map format
     * @param query.loadAirport Include airport info in the payload
     */
    all(query?: { mapType?: "regionMap" | "regionMapPolygon"; loadAirport?: boolean }): Promise<ATCPosition[]> {
        return this.http.request<ATCPosition[]>({ method: 'GET', path: `/v2/ATCPositions/all`, query, fallback: [] });
    }

    /**
     * `GET /v2/ATCPositions/{callsign}`
     * @param callsign ATC Position Callsign
     */
    get(callsign: string): Promise<ATCPosition> {
        return this.http.request<ATCPosition>({ method: 'GET', path: `/v2/ATCPositions/${p(callsign)}`, fallback: null });
    }

    /**
     * `GET /v2/ATCPositions/{callsign}/antennas`
     * @param callsign ATC Position Callsign
     */
    antennas(callsign: string): Promise<Antenna[]> {
        return this.http.request<Antenna[]>({ method: 'GET', path: `/v2/ATCPositions/${p(callsign)}/antennas`, fallback: [] });
    }
}

/** `data.centers` module. */
export class DataCenters {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/centers`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in centers names
     * @param query.region Region in which the center is located
     * @param query.countryId Country in which the center is located
     */
    list(query?: { page?: number; perPage?: number; name?: string; region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania"; countryId?: string }): Promise<PaginatedCenter> {
        return this.http.request<PaginatedCenter>({ method: 'GET', path: `/v2/centers`, query, fallback: null });
    }

    /**
     * `GET /v2/centers/{id}`
     * @param id Center ID
     */
    get(id: string): Promise<Center> {
        return this.http.request<Center>({ method: 'GET', path: `/v2/centers/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/centers/{id}/notams`
     * @param id Center ID
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    listNotams(id: string, query?: { page?: number; perPage?: number }): Promise<PaginatedNotam> {
        return this.http.request<PaginatedNotam>({ method: 'GET', path: `/v2/centers/${p(id)}/notams`, query, fallback: null });
    }

    /**
     * `GET /v2/centers/{id}/notams/all`
     * @param id Center ID
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    allNotams(id: string, query: { mapType?: "regionMap" | "regionMapPolygon"; now: boolean; perPage?: number; page?: number }): Promise<Notam[]> {
        return this.http.request<Notam[]>({ method: 'GET', path: `/v2/centers/${p(id)}/notams/all`, query, fallback: [] });
    }

    /** @deprecated Use {@link allNotams} instead. */
    getAllNotams(id: string, query: { mapType?: "regionMap" | "regionMapPolygon"; now: boolean; perPage?: number; page?: number }): Promise<Notam[]> {
        return this.allNotams(id, query);
    }

    /**
     * `GET /v2/centers/{id}/specialAreas`
     * @param id Center ID
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    listSpecialAreas(id: string, query?: { page?: number; perPage?: number }): Promise<PaginatedSpecialAreas> {
        return this.http.request<PaginatedSpecialAreas>({ method: 'GET', path: `/v2/centers/${p(id)}/specialAreas`, query, fallback: null });
    }

    /**
     * `GET /v2/centers/{id}/specialAreas/all`
     * @param id Center ID
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    allSpecialAreas(id: string, query: { mapType?: "regionMap" | "regionMapPolygon"; now: boolean; perPage?: number; page?: number }): Promise<SpecialAreas[]> {
        return this.http.request<SpecialAreas[]>({ method: 'GET', path: `/v2/centers/${p(id)}/specialAreas/all`, query, fallback: [] });
    }

    /** @deprecated Use {@link allSpecialAreas} instead. */
    getAllSpecialAreas(id: string, query: { mapType?: "regionMap" | "regionMapPolygon"; now: boolean; perPage?: number; page?: number }): Promise<SpecialAreas[]> {
        return this.allSpecialAreas(id, query);
    }

    /**
     * `GET /v2/centers/{id}/squawks`
     * @param id Center ID
     */
    squawks(id: string): Promise<Squawk[]> {
        return this.http.request<Squawk[]>({ method: 'GET', path: `/v2/centers/${p(id)}/squawks`, fallback: [] });
    }

    /** @deprecated Use {@link squawks} instead. */
    getSquawks(id: string): Promise<Squawk[]> {
        return this.squawks(id);
    }

    /**
     * `POST /v2/centers/{id}/squawks/generate`
     * @param id Center ID
     */
    generateSquawk(id: string, body: SquawkRequest): Promise<SquawkGenerated> {
        return this.http.request<SquawkGenerated>({ method: 'POST', path: `/v2/centers/${p(id)}/squawks/generate`, body, fallback: null });
    }

    /**
     * `GET /v2/centers/{id}/subcenters`
     * @param id Center Id
     * @param query.atcCallsign String to find in subcenters names
     */
    subcenters(id: string, query?: { atcCallsign?: string }): Promise<BaseSubcenter[]> {
        return this.http.request<BaseSubcenter[]>({ method: 'GET', path: `/v2/centers/${p(id)}/subcenters`, query, fallback: [] });
    }

    /** @deprecated Use {@link subcenters} instead. */
    getSubcenters(id: string, query?: { atcCallsign?: string }): Promise<BaseSubcenter[]> {
        return this.subcenters(id, query);
    }
}

/** `data.countries` module. */
export class DataCountries {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/countries`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in countries names
     * @param query.region Region in which the country is located
     * @param query.divisionId Division in which the country is located
     */
    list(query?: { page?: number; perPage?: number; name?: string; region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania"; divisionId?: string }): Promise<PaginatedCountry> {
        return this.http.request<PaginatedCountry>({ method: 'GET', path: `/v2/countries`, query, fallback: null });
    }

    /**
     * `GET /v2/countries/{id}`
     * @param id Country ID
     */
    get(id: string): Promise<Country> {
        return this.http.request<Country>({ method: 'GET', path: `/v2/countries/${p(id)}`, fallback: null });
    }
}

/** `data.creators` module. */
export class DataCreators {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/creators`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.tier Filter by tier
     * @param query.rating Include creator's rating in response
     * @param query.divisionId Division in which the creator is registered
     */
    list(query?: { page?: number; perPage?: number; tier?: number; rating?: boolean; divisionId?: string }): Promise<PaginatedCreator> {
        return this.http.request<PaginatedCreator>({ method: 'GET', path: `/v2/creators`, query, fallback: null });
    }

    /**
     * `GET /v2/creators/all`
     * @param query.tier Filter by tier
     * @param query.rating Include creator's rating in response
     */
    all(query?: { tier?: number; rating?: boolean }): Promise<Creator[]> {
        return this.http.request<Creator[]>({ method: 'GET', path: `/v2/creators/all`, query, fallback: [] });
    }

    /**
     * `GET /v2/creators/{vid}`
     * @param vid User VID or 'me'
     * @param query.rating Include creator's rating in response
     */
    get(vid: string, query?: { rating?: boolean }): Promise<Creator> {
        return this.http.request<Creator>({ method: 'GET', path: `/v2/creators/${p(vid)}`, query, fallback: null });
    }
}

/** `data.languages` module. */
export class DataLanguages {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/languages`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query?: { page?: number; perPage?: number }): Promise<PaginatedLanguage> {
        return this.http.request<PaginatedLanguage>({ method: 'GET', path: `/v2/languages`, query, fallback: null });
    }

    /**
     * `GET /v2/languages/{id}`
     * @param id Language ID
     */
    get(id: string): Promise<Language> {
        return this.http.request<Language>({ method: 'GET', path: `/v2/languages/${p(id)}`, fallback: null });
    }
}

/** `data.navaids` module. */
export class DataNavaids {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/navaids/{type}`
     * @param type Navaid type
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in navaids names
     * @param query.region Region in which the navaid is located
     * @param query.icao String to find in navaids icao
     */
    list(type: "VOR" | "FIX" | "NDB", query?: { page?: number; perPage?: number; name?: string; region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania"; icao?: string }): Promise<PaginatedNavaid> {
        return this.http.request<PaginatedNavaid>({ method: 'GET', path: `/v2/navaids/${p(type)}`, query, fallback: null });
    }

    /**
     * `GET /v2/navaids/{type}/{id}`
     * @param type Navaid type
     * @param id Navaid ID
     */
    get(type: "VOR" | "FIX" | "NDB", id: number): Promise<Navaid> {
        return this.http.request<Navaid>({ method: 'GET', path: `/v2/navaids/${p(type)}/${p(id)}`, fallback: null });
    }
}

/** `data.natTracks` module. */
export class DataNatTracks {
    constructor(protected readonly http: HttpClient) {}

    /** `GET /v2/nat-tracks` */
    all(): Promise<NatTrack[]> {
        return this.http.request<NatTrack[]>({ method: 'GET', path: `/v2/nat-tracks`, fallback: [] });
    }
}

/** `data.divisions` module. */
export class DataDivisions {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/divisions/{id}/notams`
     * @param id Division ID
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    listNotams(id: string, query?: { page?: number; perPage?: number }): Promise<PaginatedNotam> {
        return this.http.request<PaginatedNotam>({ method: 'GET', path: `/v2/divisions/${p(id)}/notams`, query, fallback: null });
    }

    /**
     * `GET /v2/divisions/{id}/notams/all`
     * @param id Division ID
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    allNotams(id: string, query: { mapType?: string; now: boolean; perPage?: number; page?: number }): Promise<Notam[]> {
        return this.http.request<Notam[]>({ method: 'GET', path: `/v2/divisions/${p(id)}/notams/all`, query, fallback: [] });
    }

    /** @deprecated Use {@link allNotams} instead. */
    getNotams(id: string, query: { mapType?: string; now: boolean; perPage?: number; page?: number }): Promise<Notam[]> {
        return this.allNotams(id, query);
    }
}

/** `data.notams` module. */
export class DataNotams {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/notams/all`
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     */
    all(query: { mapType?: "regionMap" | "regionMapPolygon"; now: boolean }): Promise<Notam[]> {
        return this.http.request<Notam[]>({ method: 'GET', path: `/v2/notams/all`, query, fallback: [] });
    }

    /**
     * `GET /v2/notams/{id}`
     * @param id NOTAM ID
     */
    get(id: number): Promise<Notam> {
        return this.http.request<Notam>({ method: 'GET', path: `/v2/notams/${p(id)}`, fallback: null });
    }
}

/** `data.positions` module. */
export class DataPositions {
    constructor(protected readonly http: HttpClient) {}

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
    search(query?: { startsWith?: string; icao?: string; positionType?: "CTR" | "APP" | "DEP" | "TWR" | "GND" | "DEL" | "ATIS"; limit?: number; composePositionList?: boolean; countryId?: string; onlyActiveFras?: boolean }): Promise<Position[]> {
        return this.http.request<Position[]>({ method: 'GET', path: `/v2/positions/search`, query, fallback: [] });
    }
}

/** `data.runways` module. */
export class DataRunways {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/runways/{id}`
     * @param id Runway ID
     */
    get(id: number): Promise<Runway> {
        return this.http.request<Runway>({ method: 'GET', path: `/v2/runways/${p(id)}`, fallback: null });
    }
}

/** `data.sectors` module. */
export class DataSectors {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/sectors`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in sectors names
     * @param query.region Region in which the sector is located
     * @param query.countryId Country in which the sector is located
     */
    list(query?: { page?: number; perPage?: number; name?: string; region?: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania"; countryId?: string }): Promise<PaginatedSector> {
        return this.http.request<PaginatedSector>({ method: 'GET', path: `/v2/sectors`, query, fallback: null });
    }

    /** `GET /v2/sectors/all` */
    all(): Promise<Sector[]> {
        return this.http.request<Sector[]>({ method: 'GET', path: `/v2/sectors/all`, fallback: [] });
    }

    /**
     * `GET /v2/sectors/{id}`
     * @param id Sector ID
     */
    get(id: string): Promise<Sector> {
        return this.http.request<Sector>({ method: 'GET', path: `/v2/sectors/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/sectors/{id}/files`
     * @param id Sector ID
     */
    files(id: string): Promise<SectorFile[]> {
        return this.http.request<SectorFile[]>({ method: 'GET', path: `/v2/sectors/${p(id)}/files`, fallback: [] });
    }

    /** @deprecated Use {@link files} instead. */
    getAllFiles(id: string): Promise<SectorFile[]> {
        return this.files(id);
    }

    /**
     * `GET /v2/sectors/{id}/files/latest`
     * @param id Sector ID
     */
    latestFiles(id: string): Promise<SectorFile[]> {
        return this.http.request<SectorFile[]>({ method: 'GET', path: `/v2/sectors/${p(id)}/files/latest`, fallback: [] });
    }

    /** @deprecated Use {@link latestFiles} instead. */
    getLatestFiles(id: string): Promise<SectorFile[]> {
        return this.latestFiles(id);
    }

    /**
     * `GET /v2/sectors/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/sectors/${p(id)}/files/latest/download`, destination });
    }

    /**
     * `GET /v2/sectors/{sectorId}/files/{id}`
     * @param sectorId Sector ID
     * @param id SectorFile ID
     */
    getFile(sectorId: string, id: number): Promise<SectorFileExtend> {
        return this.http.request<SectorFileExtend>({ method: 'GET', path: `/v2/sectors/${p(sectorId)}/files/${p(id)}`, fallback: null });
    }

    /** @deprecated Use {@link getFile} instead. */
    getFiles(sectorId: string, id: number): Promise<SectorFileExtend> {
        return this.getFile(sectorId, id);
    }

    /**
     * `GET /v2/sectors/{sectorId}/files/{id}/download`
     * @param sectorId Sector ID
     * @param id SectorFile ID
     */
    downloadFile(sectorId: string, id: number, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/sectors/${p(sectorId)}/files/${p(id)}/download`, destination });
    }

    /** @deprecated Use {@link downloadFile} instead. */
    downloadFiles(sectorId: string, id: number, destination?: PathLike): Promise<Buffer> {
        return this.downloadFile(sectorId, id, destination);
    }
}

/** `data.servers` module. */
export class DataServers {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/servers`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.hostname String to find in servers 
     * @param query.isActive Get server based on their state
     */
    list(query?: { page?: number; perPage?: number; hostname?: string; isActive?: boolean }): Promise<PaginatedServer> {
        return this.http.request<PaginatedServer>({ method: 'GET', path: `/v2/servers`, query, fallback: null });
    }

    /**
     * `GET /v2/servers/all`
     * @param query.hostname String to find in servers 
     * @param query.isActive Get server based on their state
     */
    all(query: { hostname?: string; isActive?: boolean; type: string }): Promise<Server[]> {
        return this.http.request<Server[]>({ method: 'GET', path: `/v2/servers/all`, query, fallback: [] });
    }

    /**
     * `GET /v2/servers/{id}`
     * @param id Server Id
     */
    get(id: string): Promise<Server> {
        return this.http.request<Server>({ method: 'GET', path: `/v2/servers/${p(id)}`, fallback: null });
    }
}

/** `data.simulators` module. */
export class DataSimulators {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/simulators/{id}/versions`
     * @param id SimulatorId
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     * @param query.version Simulator version
     */
    versions(id: string, query?: { page?: number; perPage?: number; name?: string; isActive?: boolean; version?: string }): Promise<PaginatedSimulatorVersion> {
        return this.http.request<PaginatedSimulatorVersion>({ method: 'GET', path: `/v2/simulators/${p(id)}/versions`, query, fallback: null });
    }

    /**
     * `GET /v2/simulators`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     */
    list(query?: { page?: number; perPage?: number; name?: string; isActive?: boolean }): Promise<PaginatedSimulator> {
        return this.http.request<PaginatedSimulator>({ method: 'GET', path: `/v2/simulators`, query, fallback: null });
    }

    /**
     * `GET /v2/simulators/all`
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     */
    all(query?: { name?: string; isActive?: boolean }): Promise<Simulator[]> {
        return this.http.request<Simulator[]>({ method: 'GET', path: `/v2/simulators/all`, query, fallback: [] });
    }

    /**
     * `GET /v2/simulators/{id}`
     * @param id Simulator Id
     */
    get(id: string): Promise<Simulator> {
        return this.http.request<Simulator>({ method: 'GET', path: `/v2/simulators/${p(id)}`, fallback: null });
    }
}

/** `data.simulatorVersions` module. */
export class DataSimulatorVersions {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/simulatorVersions`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     * @param query.version Simulator version
     */
    list(query?: { page?: number; perPage?: number; name?: string; isActive?: boolean; version?: string }): Promise<PaginatedSimulatorVersion> {
        return this.http.request<PaginatedSimulatorVersion>({ method: 'GET', path: `/v2/simulatorVersions`, query, fallback: null });
    }

    /**
     * `GET /v2/simulatorVersions/all`
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     * @param query.version Simulator version
     * @param query.hasBaseModels Check if the simulator version has baseModels
     */
    all(query?: { name?: string; isActive?: boolean; version?: string; hasBaseModels?: boolean }): Promise<SimulatorVersion[]> {
        return this.http.request<SimulatorVersion[]>({ method: 'GET', path: `/v2/simulatorVersions/all`, query, fallback: [] });
    }

    /**
     * `GET /v2/simulatorVersions/{id}`
     * @param id BaseModel ID
     */
    get(id: string): Promise<SimulatorVersion> {
        return this.http.request<SimulatorVersion>({ method: 'GET', path: `/v2/simulatorVersions/${p(id)}`, fallback: null });
    }
}

/** `data.softwares` module. */
export class DataSoftwares {
    constructor(protected readonly http: HttpClient) {}

    /** `GET /v2/softwares/me` */
    me(): Promise<Software[]> {
        return this.http.request<Software[]>({ method: 'GET', path: `/v2/softwares/me`, fallback: [] });
    }

    /**
     * `GET /v2/softwares/{type}`
     * @param type Software type
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in softwares names
     */
    list(type: string, query?: { page?: number; perPage?: number; name?: string }): Promise<PaginatedSoftware> {
        return this.http.request<PaginatedSoftware>({ method: 'GET', path: `/v2/softwares/${p(type)}`, query, fallback: null });
    }

    /**
     * `GET /v2/softwares/{type}/{id}`
     * @param type Software type
     * @param id Software ID
     */
    get(type: string, id: string): Promise<Software> {
        return this.http.request<Software>({ method: 'GET', path: `/v2/softwares/${p(type)}/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/softwares/{type}/{id}/files`
     * @param type Software type
     * @param id Software ID
     */
    files(type: string, id: string): Promise<SoftwareFile[]> {
        return this.http.request<SoftwareFile[]>({ method: 'GET', path: `/v2/softwares/${p(type)}/${p(id)}/files`, fallback: [] });
    }

    /** @deprecated Use {@link files} instead. */
    getFiles(type: string, id: string): Promise<SoftwareFile[]> {
        return this.files(type, id);
    }

    /**
     * `GET /v2/softwares/{type}/{id}/files/latest`
     * @param type Software type
     * @param id Software ID
     */
    latestFiles(type: string, id: string): Promise<SoftwareFile[]> {
        return this.http.request<SoftwareFile[]>({ method: 'GET', path: `/v2/softwares/${p(type)}/${p(id)}/files/latest`, fallback: [] });
    }

    /** @deprecated Use {@link latestFiles} instead. */
    getLatestFiles(type: string, id: string): Promise<SoftwareFile[]> {
        return this.latestFiles(type, id);
    }

    /**
     * `GET /v2/softwares/{type}/{id}/files/latest/download`
     * @param type Software type
     * @param id Software ID
     */
    downloadLatestFiles(type: string, id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/softwares/${p(type)}/${p(id)}/files/latest/download`, destination });
    }

    /**
     * `GET /v2/softwares/{type}/{softwareId}/files/{id}`
     * @param type Software type
     * @param softwareId Software ID
     * @param id SoftwareFile ID
     */
    getFile(type: string, softwareId: string, id: number): Promise<SoftwareFile> {
        return this.http.request<SoftwareFile>({ method: 'GET', path: `/v2/softwares/${p(type)}/${p(softwareId)}/files/${p(id)}`, fallback: null });
    }

    /** @deprecated Use {@link getFile} instead. */
    getFilesWhereId(type: string, softwareId: string, id: number): Promise<SoftwareFile> {
        return this.getFile(type, softwareId, id);
    }

    /**
     * `GET /v2/softwares/{type}/{softwareId}/files/{id}/download`
     * @param type Software type
     * @param softwareId Software ID
     * @param id SoftwareFile ID
     */
    downloadFile(type: string, softwareId: string, id: number, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/softwares/${p(type)}/${p(softwareId)}/files/${p(id)}/download`, destination });
    }

    /** @deprecated Use {@link downloadFile} instead. */
    downloadFiles(type: string, softwareId: string, id: number, destination?: PathLike): Promise<Buffer> {
        return this.downloadFile(type, softwareId, id, destination);
    }

    /** `GET /v2/softwareFiles` */
    searchFiles(query: { type: string; operatingSystem: string; version: string; versionSuffix: string; fsdName: string }): Promise<SoftwareFile[]> {
        return this.http.request<SoftwareFile[]>({ method: 'GET', path: `/v2/softwareFiles`, query, fallback: [] });
    }
}

/** `data.specialAreas` module. */
export class DataSpecialAreas {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/specialAreas/all`
     * @param query.mapType Region Map format
     * @param query.now Select the active special areas at the time of the request
     */
    all(query: { mapType?: string; now: boolean }): Promise<SpecialAreas[]> {
        return this.http.request<SpecialAreas[]>({ method: 'GET', path: `/v2/specialAreas/all`, query, fallback: [] });
    }

    /**
     * `GET /v2/specialAreas/{id}`
     * @param id NOTAM ID
     */
    get(id: number): Promise<SpecialAreas> {
        return this.http.request<SpecialAreas>({ method: 'GET', path: `/v2/specialAreas/${p(id)}`, fallback: null });
    }
}

/** `data.squawks` module. */
export class DataSquawks {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/squawks/{id}`
     * @param id Squawk ID
     */
    get(id: number): Promise<Squawk> {
        return this.http.request<Squawk>({ method: 'GET', path: `/v2/squawks/${p(id)}`, fallback: null });
    }
}

/** `data.subcenters` module. */
export class DataSubcenters {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/centers/{id}/subcenters`
     * @param id Center Id
     * @param query.atcCallsign String to find in subcenters names
     */
    byCenter(id: string, query?: { atcCallsign?: string }): Promise<BaseSubcenter[]> {
        return this.http.request<BaseSubcenter[]>({ method: 'GET', path: `/v2/centers/${p(id)}/subcenters`, query, fallback: [] });
    }

    /** @deprecated Use {@link byCenter} instead. */
    getSubcenters(id: string, query?: { atcCallsign?: string }): Promise<BaseSubcenter[]> {
        return this.byCenter(id, query);
    }

    /**
     * `GET /v2/subcenters/all`
     * @param query.mapType Region Map format
     */
    all(query?: { mapType?: "regionMap" | "regionMapPolygon" }): Promise<BaseSubcenter[]> {
        return this.http.request<BaseSubcenter[]>({ method: 'GET', path: `/v2/subcenters/all`, query, fallback: [] });
    }

    /** @deprecated Use {@link all} instead. */
    getAll(query?: { mapType?: "regionMap" | "regionMapPolygon" }): Promise<BaseSubcenter[]> {
        return this.all(query);
    }

    /**
     * `GET /v2/subcenters/{id}`
     * @param id Subcenter ID
     */
    get(id: string): Promise<BaseSubcenter> {
        return this.http.request<BaseSubcenter>({ method: 'GET', path: `/v2/subcenters/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/subcenters/{id}/antennas`
     * @param id Subcenter ID
     */
    antennas(id: string): Promise<Antenna[]> {
        return this.http.request<Antenna[]>({ method: 'GET', path: `/v2/subcenters/${p(id)}/antennas`, fallback: [] });
    }

    /** @deprecated Use {@link antennas} instead. */
    getAntennas(id: string): Promise<Antenna[]> {
        return this.antennas(id);
    }
}

/** `data.virtualAirlines` module. */
export class DataVirtualAirlines {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/airlines/{icao}/virtualAirlines`
     * @param icao Airline ICAO code
     */
    byAirline(icao: string): Promise<BaseVirtualAirline[]> {
        return this.http.request<BaseVirtualAirline[]>({ method: 'GET', path: `/v2/airlines/${p(icao)}/virtualAirlines`, fallback: [] });
    }

    /** @deprecated Use {@link byAirline} instead. */
    getAllByCallsign(icao: string): Promise<BaseVirtualAirline[]> {
        return this.byAirline(icao);
    }

    /**
     * `GET /v2/virtualAirlines`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query?: { page?: number; perPage?: number }): Promise<MixedVirtualAirline[]> {
        return this.http.request<MixedVirtualAirline[]>({ method: 'GET', path: `/v2/virtualAirlines`, query, fallback: [] });
    }

    /**
     * `GET /v2/virtualAirlines/all`
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    all(query?: { perPage?: number; page?: number }): Promise<MixedVirtualAirline[]> {
        return this.http.request<MixedVirtualAirline[]>({ method: 'GET', path: `/v2/virtualAirlines/all`, query, fallback: [] });
    }

    /** `GET /v2/virtualAirlines/{id}` */
    get(id: string): Promise<VirtualAirline> {
        return this.http.request<VirtualAirline>({ method: 'GET', path: `/v2/virtualAirlines/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/virtualAirlines/{id}/mainLogo`
     * @param id Virtual airline IdCode
     */
    mainLogo(id: string): Promise<Buffer> {
        return this.http.buffer({ method: 'GET', path: `/v2/virtualAirlines/${p(id)}/mainLogo` });
    }

    /** @deprecated Use {@link mainLogo} instead. */
    getMainLogo(id: string): Promise<Buffer> {
        return this.mainLogo(id);
    }

    /**
     * `GET /v2/virtualAirlines/{id}/onlineLogo`
     * @param id Virtual airline IdCode
     */
    onlineLogo(id: string): Promise<Buffer> {
        return this.http.buffer({ method: 'GET', path: `/v2/virtualAirlines/${p(id)}/onlineLogo` });
    }

    /** @deprecated Use {@link onlineLogo} instead. */
    getOnlineLogo(id: string): Promise<Buffer> {
        return this.onlineLogo(id);
    }
}

/** `data.weather` module. */
export class DataWeather {
    constructor(protected readonly http: HttpClient) {}

    /** `GET /v2/airports/all/metar` */
    allMetars(): Promise<Metar[]> {
        return this.http.request<Metar[]>({ method: 'GET', path: `/v2/airports/all/metar`, fallback: [] });
    }

    /** `GET /v2/airports/{icao}/metar` */
    metar(icao: string): Promise<Metar> {
        return this.http.request<Metar>({ method: 'GET', path: `/v2/airports/${p(icao)}/metar`, fallback: null });
    }

    /** `GET /v2/airports/all/shortTaf` */
    allShortTafs(): Promise<ShortTaf[]> {
        return this.http.request<ShortTaf[]>({ method: 'GET', path: `/v2/airports/all/shortTaf`, fallback: [] });
    }

    /**
     * `GET /v2/airports/{icao}/shortTaf`
     * @param icao Airport ICAO code
     */
    shortTaf(icao: string): Promise<ShortTaf> {
        return this.http.request<ShortTaf>({ method: 'GET', path: `/v2/airports/${p(icao)}/shortTaf`, fallback: null });
    }

    /** `GET /v2/airports/all/taf` */
    allTafs(): Promise<Taf[]> {
        return this.http.request<Taf[]>({ method: 'GET', path: `/v2/airports/all/taf`, fallback: [] });
    }

    /**
     * `GET /v2/airports/{icao}/taf`
     * @param icao Airport ICAO code
     */
    taf(icao: string): Promise<Taf> {
        return this.http.request<Taf>({ method: 'GET', path: `/v2/airports/${p(icao)}/taf`, fallback: null });
    }
}

/** `data.motds` module. */
export class DataMotds {
    constructor(protected readonly http: HttpClient) {}

    /** `GET /v2/motds/latest` */
    latest(): Promise<Motd> {
        return this.http.request<Motd>({ method: 'GET', path: `/v2/motds/latest`, fallback: null });
    }

    /** @deprecated Use {@link latest} instead. */
    getLatest(): Promise<Motd> {
        return this.latest();
    }
}

/** `data.routes` module. */
export class DataRoutes {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/routes`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.departureId Filter by departure airport, prefix match allowed (2 letters min)
     * @param query.arrivalId Filter by arrival airport, prefix match allowed (2 letters min)
     * @param query.divisionId Filter by division
     */
    list(query?: { page?: number; perPage?: number; departureId?: string; arrivalId?: string; divisionId?: string }): Promise<PaginatedRoutes> {
        return this.http.request<PaginatedRoutes>({ method: 'GET', path: `/v2/routes`, query, fallback: null });
    }
}

/**
 * IVAO Data API: aircrafts, airlines, airports, ATC positions, NOTAMs, sectors, softwares, weather...
 * Generated from tools/specs/data.json.
 */
export class DataApi {
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

    constructor(protected readonly http: HttpClient) {
        this.aircrafts = new DataAircrafts(http);
        this.aircraftVariants = new DataAircraftVariants(http);
        this.airlines = new DataAirlines(http);
        this.airports = new DataAirports(http);
        this.antennas = new DataAntennas(http);
        this.atcPositions = new DataAtcPositions(http);
        this.centers = new DataCenters(http);
        this.countries = new DataCountries(http);
        this.creators = new DataCreators(http);
        this.languages = new DataLanguages(http);
        this.navaids = new DataNavaids(http);
        this.natTracks = new DataNatTracks(http);
        this.divisions = new DataDivisions(http);
        this.notams = new DataNotams(http);
        this.positions = new DataPositions(http);
        this.runways = new DataRunways(http);
        this.sectors = new DataSectors(http);
        this.servers = new DataServers(http);
        this.simulators = new DataSimulators(http);
        this.simulatorVersions = new DataSimulatorVersions(http);
        this.softwares = new DataSoftwares(http);
        this.specialAreas = new DataSpecialAreas(http);
        this.squawks = new DataSquawks(http);
        this.subcenters = new DataSubcenters(http);
        this.virtualAirlines = new DataVirtualAirlines(http);
        this.weather = new DataWeather(http);
        this.motds = new DataMotds(http);
        this.routes = new DataRoutes(http);
    }

    /** @deprecated Use `aircrafts` instead. */
    get aircraft(): DataAircrafts {
        return this.aircrafts;
    }
}
