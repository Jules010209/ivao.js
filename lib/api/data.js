"use strict";
/* eslint-disable */
// Generated from tools/specs/data.json by tools/generate.js - DO NOT EDIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataApi = exports.DataRoutes = exports.DataMotds = exports.DataWeather = exports.DataVirtualAirlines = exports.DataSubcenters = exports.DataSquawks = exports.DataSpecialAreas = exports.DataSoftwares = exports.DataSimulatorVersions = exports.DataSimulators = exports.DataServers = exports.DataSectors = exports.DataRunways = exports.DataPositions = exports.DataNotams = exports.DataDivisions = exports.DataNatTracks = exports.DataNavaids = exports.DataLanguages = exports.DataCreators = exports.DataCountries = exports.DataCenters = exports.DataAtcPositions = exports.DataAntennas = exports.DataAirports = exports.DataAirlines = exports.DataAircraftVariants = exports.DataAircrafts = exports.DataAircraftsTransponderTypes = exports.DataAircraftsEquipments = exports.DataAircraftsManufacturers = void 0;
const http_1 = require("../http");
/** `data.aircrafts.manufacturers` module. */
class DataAircraftsManufacturers {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircrafts/manufacturers`
     * @param query.name String to find in aircrafts manufactures names
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircrafts/manufacturers`, query, fallback: [] });
    }
    /**
     * `GET /v2/aircrafts/manufacturers/{id}`
     * @param id Manufacture ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircrafts/manufacturers/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataAircraftsManufacturers = DataAircraftsManufacturers;
/** `data.aircrafts.equipments` module. */
class DataAircraftsEquipments {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircrafts/equipments`
     * @param query.name String to find in aircrafts equipment names
     * @param query.isActive Find by aircraft equipment statet
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircrafts/equipments`, query, fallback: [] });
    }
    /**
     * `GET /v2/aircrafts/equipments/{id}`
     * @param id Manufacture ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircrafts/equipments/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataAircraftsEquipments = DataAircraftsEquipments;
/** `data.aircrafts.transponderTypes` module. */
class DataAircraftsTransponderTypes {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircrafts/transponderTypes`
     * @param query.name String to find in aircrafts transponder type names
     * @param query.type String to find in aircrafts transponder type by type
     * @param query.isActive Find by aircraft equipment statet
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircrafts/transponderTypes`, query, fallback: [] });
    }
    /**
     * `GET /v2/aircrafts/transponderTypes/{id}`
     * @param id Manufacture ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircrafts/transponderTypes/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataAircraftsTransponderTypes = DataAircraftsTransponderTypes;
/** `data.aircrafts` module. */
class DataAircrafts {
    constructor(http) {
        this.http = http;
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
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircrafts`, query, fallback: null });
    }
    /**
     * `GET /v2/aircrafts/all`
     * @param query.description String to find in aircrafts description
     * @param query.manufactureId Manufacture of the aircraft
     * @param query.hasBaseModels Check if the simulator version has baseModels
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircrafts/all`, query, fallback: [] });
    }
    /**
     * `GET /v2/aircrafts/{icaoCode}`
     * @param icaoCode Aircraft ICAO code
     */
    get(icaoCode) {
        return this.http.request({ method: 'GET', path: `/v2/aircrafts/${(0, http_1.p)(icaoCode)}`, fallback: null });
    }
    /**
     * `GET /v2/aircrafts/{aircraftId}/variants`
     * @param aircraftId Aircraft ICAO code
     */
    variants(aircraftId) {
        return this.http.request({ method: 'GET', path: `/v2/aircrafts/${(0, http_1.p)(aircraftId)}/variants`, fallback: [] });
    }
    /** @deprecated Use `aircrafts` instead. */
    get aircrafts() {
        return this;
    }
    /** @deprecated Use `aircrafts.manufacturers` instead. */
    get aircraftManufacture() {
        return this.manufacturers;
    }
    /** @deprecated Use `aircrafts.equipments` instead. */
    get aircraftEquipment() {
        return this.equipments;
    }
    /** @deprecated Use `aircrafts.transponderTypes` instead. */
    get aircraftTransponderTypes() {
        return this.transponderTypes;
    }
}
exports.DataAircrafts = DataAircrafts;
/** `data.aircraftVariants` module. */
class DataAircraftVariants {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircraftsVariants/{id}`
     * @param id Aircraft Variant ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsVariants/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataAircraftVariants = DataAircraftVariants;
/** `data.airlines` module. */
class DataAirlines {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/airlines`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in airlines names
     * @param query.realBased Real based airline
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/airlines`, query, fallback: null });
    }
    /**
     * `GET /v2/airlines/all`
     * @param query.hasTextures Check of the airline has textures
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/airlines/all`, query, fallback: [] });
    }
    /**
     * `GET /v2/airlines/{icao}`
     * @param icao Airline ICAO code
     */
    get(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airlines/${(0, http_1.p)(icao)}`, fallback: null });
    }
    /**
     * `GET /v2/airlines/{icao}/logo`
     * @param icao Airline ICAO code
     */
    logo(icao) {
        return this.http.buffer({ method: 'GET', path: `/v2/airlines/${(0, http_1.p)(icao)}/logo` });
    }
    /**
     * `GET /v2/airlines/{icao}/routes`
     * @param icao Airline ICAO code
     */
    routes(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airlines/${(0, http_1.p)(icao)}/routes`, fallback: [] });
    }
    /**
     * `GET /v2/airlines/{icao}/virtualAirlines`
     * @param icao Airline ICAO code
     */
    virtualAirlines(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airlines/${(0, http_1.p)(icao)}/virtualAirlines`, fallback: [] });
    }
}
exports.DataAirlines = DataAirlines;
/** `data.airports` module. */
class DataAirports {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/airports`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in airports names
     * @param query.region Region in which the airport is located
     * @param query.countryId Country in which the airport is located
     * @param query.includeRunways Include all airport runways
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/airports`, query, fallback: null });
    }
    /**
     * `GET /v2/airports/all`
     * @param query.region Region in which the airport is located
     * @param query.countryId Country in which the airport is located. <b>Required if used with <code>includeRunways</code></b>
     * @param query.includeRunways Include all airport runways
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/airports/all`, query, fallback: [] });
    }
    /** @deprecated Use {@link all} instead. */
    allAirports(query) {
        return this.all(query);
    }
    /**
     * `GET /v2/airports/{icao}`
     * @param icao Airport ICAO code
     */
    get(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}`, fallback: null });
    }
    /** @deprecated Use {@link get} instead. */
    getAirport(icao) {
        return this.get(icao);
    }
    /**
     * `GET /v2/airports/{airportId}/ATCPositions`
     * @param airportId Airport ICAO code
     * @param query.atcCallsign String to find in ATCPosition names
     * @param query.position Position type
     */
    atcPositions(airportId, query) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(airportId)}/ATCPositions`, query, fallback: [] });
    }
    /** @deprecated Use {@link atcPositions} instead. */
    positions(airportId, query) {
        return this.atcPositions(airportId, query);
    }
    /**
     * `GET /v2/airports/{icao}/notams`
     * @param icao Airport ID
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    listNotams(icao, query) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/notams`, query, fallback: null });
    }
    /**
     * `GET /v2/airports/{icao}/notams/all`
     * @param icao Airport ICAO
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    allNotams(icao, query) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/notams/all`, query, fallback: [] });
    }
    /** @deprecated Use {@link allNotams} instead. */
    notams(icao, query) {
        return this.allNotams(icao, query);
    }
    /**
     * `GET /v2/airports/{icao}/runways`
     * @param icao Airport ICAO code
     */
    runways(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/runways`, fallback: [] });
    }
    /**
     * `GET /v2/airports/{icao}/squawks`
     * @param icao Airport ICAO Code
     */
    squawks(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/squawks`, fallback: [] });
    }
    /** @deprecated Use {@link squawks} instead. */
    getSquawks(icao) {
        return this.squawks(icao);
    }
    /**
     * `POST /v2/airports/{icao}/squawks/generate`
     * @param icao Airport ICAO Code
     */
    generateSquawk(icao, body) {
        return this.http.request({ method: 'POST', path: `/v2/airports/${(0, http_1.p)(icao)}/squawks/generate`, body, fallback: null });
    }
    /** `GET /v2/airports/all/metar` */
    allMetars() {
        return this.http.request({ method: 'GET', path: `/v2/airports/all/metar`, fallback: [] });
    }
    /** @deprecated Use {@link allMetars} instead. */
    allMetar() {
        return this.allMetars();
    }
    /** `GET /v2/airports/{icao}/metar` */
    metar(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/metar`, fallback: null });
    }
    /** @deprecated Use {@link metar} instead. */
    getMetar(icao) {
        return this.metar(icao);
    }
    /** `GET /v2/airports/all/shortTaf` */
    allShortTafs() {
        return this.http.request({ method: 'GET', path: `/v2/airports/all/shortTaf`, fallback: [] });
    }
    /**
     * `GET /v2/airports/{icao}/shortTaf`
     * @param icao Airport ICAO code
     */
    shortTaf(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/shortTaf`, fallback: null });
    }
    /** `GET /v2/airports/all/taf` */
    allTafs() {
        return this.http.request({ method: 'GET', path: `/v2/airports/all/taf`, fallback: [] });
    }
    /**
     * `GET /v2/airports/{icao}/taf`
     * @param icao Airport ICAO code
     */
    taf(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/taf`, fallback: null });
    }
}
exports.DataAirports = DataAirports;
/** `data.antennas` module. */
class DataAntennas {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/antennas/subjacent/{callsign}`
     * @param callsign Position callsign
     */
    subjacent(callsign) {
        return this.http.request({ method: 'GET', path: `/v2/antennas/subjacent/${(0, http_1.p)(callsign)}`, fallback: [] });
    }
}
exports.DataAntennas = DataAntennas;
/** `data.atcPositions` module. */
class DataAtcPositions {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/ATCPositions/all`
     * @param query.mapType Region Map format
     * @param query.loadAirport Include airport info in the payload
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/ATCPositions/all`, query, fallback: [] });
    }
    /**
     * `GET /v2/ATCPositions/{callsign}`
     * @param callsign ATC Position Callsign
     */
    get(callsign) {
        return this.http.request({ method: 'GET', path: `/v2/ATCPositions/${(0, http_1.p)(callsign)}`, fallback: null });
    }
    /**
     * `GET /v2/ATCPositions/{callsign}/antennas`
     * @param callsign ATC Position Callsign
     */
    antennas(callsign) {
        return this.http.request({ method: 'GET', path: `/v2/ATCPositions/${(0, http_1.p)(callsign)}/antennas`, fallback: [] });
    }
}
exports.DataAtcPositions = DataAtcPositions;
/** `data.centers` module. */
class DataCenters {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/centers`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in centers names
     * @param query.region Region in which the center is located
     * @param query.countryId Country in which the center is located
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/centers`, query, fallback: null });
    }
    /**
     * `GET /v2/centers/{id}`
     * @param id Center ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/centers/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/centers/{id}/notams`
     * @param id Center ID
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    listNotams(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/centers/${(0, http_1.p)(id)}/notams`, query, fallback: null });
    }
    /**
     * `GET /v2/centers/{id}/notams/all`
     * @param id Center ID
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    allNotams(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/centers/${(0, http_1.p)(id)}/notams/all`, query, fallback: [] });
    }
    /** @deprecated Use {@link allNotams} instead. */
    getAllNotams(id, query) {
        return this.allNotams(id, query);
    }
    /**
     * `GET /v2/centers/{id}/specialAreas`
     * @param id Center ID
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    listSpecialAreas(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/centers/${(0, http_1.p)(id)}/specialAreas`, query, fallback: null });
    }
    /**
     * `GET /v2/centers/{id}/specialAreas/all`
     * @param id Center ID
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    allSpecialAreas(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/centers/${(0, http_1.p)(id)}/specialAreas/all`, query, fallback: [] });
    }
    /** @deprecated Use {@link allSpecialAreas} instead. */
    getAllSpecialAreas(id, query) {
        return this.allSpecialAreas(id, query);
    }
    /**
     * `GET /v2/centers/{id}/squawks`
     * @param id Center ID
     */
    squawks(id) {
        return this.http.request({ method: 'GET', path: `/v2/centers/${(0, http_1.p)(id)}/squawks`, fallback: [] });
    }
    /** @deprecated Use {@link squawks} instead. */
    getSquawks(id) {
        return this.squawks(id);
    }
    /**
     * `POST /v2/centers/{id}/squawks/generate`
     * @param id Center ID
     */
    generateSquawk(id, body) {
        return this.http.request({ method: 'POST', path: `/v2/centers/${(0, http_1.p)(id)}/squawks/generate`, body, fallback: null });
    }
    /**
     * `GET /v2/centers/{id}/subcenters`
     * @param id Center Id
     * @param query.atcCallsign String to find in subcenters names
     */
    subcenters(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/centers/${(0, http_1.p)(id)}/subcenters`, query, fallback: [] });
    }
    /** @deprecated Use {@link subcenters} instead. */
    getSubcenters(id, query) {
        return this.subcenters(id, query);
    }
}
exports.DataCenters = DataCenters;
/** `data.countries` module. */
class DataCountries {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/countries`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in countries names
     * @param query.region Region in which the country is located
     * @param query.divisionId Division in which the country is located
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/countries`, query, fallback: null });
    }
    /**
     * `GET /v2/countries/{id}`
     * @param id Country ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/countries/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataCountries = DataCountries;
/** `data.creators` module. */
class DataCreators {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/creators`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.tier Filter by tier
     * @param query.rating Include creator's rating in response
     * @param query.divisionId Division in which the creator is registered
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/creators`, query, fallback: null });
    }
    /**
     * `GET /v2/creators/all`
     * @param query.tier Filter by tier
     * @param query.rating Include creator's rating in response
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/creators/all`, query, fallback: [] });
    }
    /**
     * `GET /v2/creators/{vid}`
     * @param vid User VID or 'me'
     * @param query.rating Include creator's rating in response
     */
    get(vid, query) {
        return this.http.request({ method: 'GET', path: `/v2/creators/${(0, http_1.p)(vid)}`, query, fallback: null });
    }
}
exports.DataCreators = DataCreators;
/** `data.languages` module. */
class DataLanguages {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/languages`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/languages`, query, fallback: null });
    }
    /**
     * `GET /v2/languages/{id}`
     * @param id Language ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/languages/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataLanguages = DataLanguages;
/** `data.navaids` module. */
class DataNavaids {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/navaids/{type}`
     * @param type Navaid type
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in navaids names
     * @param query.region Region in which the navaid is located
     * @param query.icao String to find in navaids icao
     */
    list(type, query) {
        return this.http.request({ method: 'GET', path: `/v2/navaids/${(0, http_1.p)(type)}`, query, fallback: null });
    }
    /**
     * `GET /v2/navaids/{type}/{id}`
     * @param type Navaid type
     * @param id Navaid ID
     */
    get(type, id) {
        return this.http.request({ method: 'GET', path: `/v2/navaids/${(0, http_1.p)(type)}/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataNavaids = DataNavaids;
/** `data.natTracks` module. */
class DataNatTracks {
    constructor(http) {
        this.http = http;
    }
    /** `GET /v2/nat-tracks` */
    all() {
        return this.http.request({ method: 'GET', path: `/v2/nat-tracks`, fallback: [] });
    }
}
exports.DataNatTracks = DataNatTracks;
/** `data.divisions` module. */
class DataDivisions {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/divisions/{id}/notams`
     * @param id Division ID
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    listNotams(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/divisions/${(0, http_1.p)(id)}/notams`, query, fallback: null });
    }
    /**
     * `GET /v2/divisions/{id}/notams/all`
     * @param id Division ID
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    allNotams(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/divisions/${(0, http_1.p)(id)}/notams/all`, query, fallback: [] });
    }
    /** @deprecated Use {@link allNotams} instead. */
    getNotams(id, query) {
        return this.allNotams(id, query);
    }
}
exports.DataDivisions = DataDivisions;
/** `data.notams` module. */
class DataNotams {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/notams/all`
     * @param query.mapType Region Map format
     * @param query.now Select the active notams at the time of the request
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/notams/all`, query, fallback: [] });
    }
    /**
     * `GET /v2/notams/{id}`
     * @param id NOTAM ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/notams/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataNotams = DataNotams;
/** `data.positions` module. */
class DataPositions {
    constructor(http) {
        this.http = http;
    }
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
    search(query) {
        return this.http.request({ method: 'GET', path: `/v2/positions/search`, query, fallback: [] });
    }
}
exports.DataPositions = DataPositions;
/** `data.runways` module. */
class DataRunways {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/runways/{id}`
     * @param id Runway ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/runways/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataRunways = DataRunways;
/** `data.sectors` module. */
class DataSectors {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/sectors`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in sectors names
     * @param query.region Region in which the sector is located
     * @param query.countryId Country in which the sector is located
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/sectors`, query, fallback: null });
    }
    /** `GET /v2/sectors/all` */
    all() {
        return this.http.request({ method: 'GET', path: `/v2/sectors/all`, fallback: [] });
    }
    /**
     * `GET /v2/sectors/{id}`
     * @param id Sector ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/sectors/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/sectors/{id}/files`
     * @param id Sector ID
     */
    files(id) {
        return this.http.request({ method: 'GET', path: `/v2/sectors/${(0, http_1.p)(id)}/files`, fallback: [] });
    }
    /** @deprecated Use {@link files} instead. */
    getAllFiles(id) {
        return this.files(id);
    }
    /**
     * `GET /v2/sectors/{id}/files/latest`
     * @param id Sector ID
     */
    latestFiles(id) {
        return this.http.request({ method: 'GET', path: `/v2/sectors/${(0, http_1.p)(id)}/files/latest`, fallback: [] });
    }
    /** @deprecated Use {@link latestFiles} instead. */
    getLatestFiles(id) {
        return this.latestFiles(id);
    }
    /**
     * `GET /v2/sectors/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/sectors/${(0, http_1.p)(id)}/files/latest/download`, destination });
    }
    /**
     * `GET /v2/sectors/{sectorId}/files/{id}`
     * @param sectorId Sector ID
     * @param id SectorFile ID
     */
    getFile(sectorId, id) {
        return this.http.request({ method: 'GET', path: `/v2/sectors/${(0, http_1.p)(sectorId)}/files/${(0, http_1.p)(id)}`, fallback: null });
    }
    /** @deprecated Use {@link getFile} instead. */
    getFiles(sectorId, id) {
        return this.getFile(sectorId, id);
    }
    /**
     * `GET /v2/sectors/{sectorId}/files/{id}/download`
     * @param sectorId Sector ID
     * @param id SectorFile ID
     */
    downloadFile(sectorId, id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/sectors/${(0, http_1.p)(sectorId)}/files/${(0, http_1.p)(id)}/download`, destination });
    }
    /** @deprecated Use {@link downloadFile} instead. */
    downloadFiles(sectorId, id, destination) {
        return this.downloadFile(sectorId, id, destination);
    }
}
exports.DataSectors = DataSectors;
/** `data.servers` module. */
class DataServers {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/servers`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.hostname String to find in servers
     * @param query.isActive Get server based on their state
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/servers`, query, fallback: null });
    }
    /**
     * `GET /v2/servers/all`
     * @param query.hostname String to find in servers
     * @param query.isActive Get server based on their state
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/servers/all`, query, fallback: [] });
    }
    /**
     * `GET /v2/servers/{id}`
     * @param id Server Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/servers/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataServers = DataServers;
/** `data.simulators` module. */
class DataSimulators {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/simulators/{id}/versions`
     * @param id SimulatorId
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     * @param query.version Simulator version
     */
    versions(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/simulators/${(0, http_1.p)(id)}/versions`, query, fallback: null });
    }
    /**
     * `GET /v2/simulators`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/simulators`, query, fallback: null });
    }
    /**
     * `GET /v2/simulators/all`
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/simulators/all`, query, fallback: [] });
    }
    /**
     * `GET /v2/simulators/{id}`
     * @param id Simulator Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/simulators/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataSimulators = DataSimulators;
/** `data.simulatorVersions` module. */
class DataSimulatorVersions {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/simulatorVersions`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     * @param query.version Simulator version
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/simulatorVersions`, query, fallback: null });
    }
    /**
     * `GET /v2/simulatorVersions/all`
     * @param query.name String to find in simulators names
     * @param query.isActive Get simulator based on their state
     * @param query.version Simulator version
     * @param query.hasBaseModels Check if the simulator version has baseModels
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/simulatorVersions/all`, query, fallback: [] });
    }
    /**
     * `GET /v2/simulatorVersions/{id}`
     * @param id BaseModel ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/simulatorVersions/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataSimulatorVersions = DataSimulatorVersions;
/** `data.softwares` module. */
class DataSoftwares {
    constructor(http) {
        this.http = http;
    }
    /** `GET /v2/softwares/me` */
    me() {
        return this.http.request({ method: 'GET', path: `/v2/softwares/me`, fallback: [] });
    }
    /**
     * `GET /v2/softwares/{type}`
     * @param type Software type
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name String to find in softwares names
     */
    list(type, query) {
        return this.http.request({ method: 'GET', path: `/v2/softwares/${(0, http_1.p)(type)}`, query, fallback: null });
    }
    /**
     * `GET /v2/softwares/{type}/{id}`
     * @param type Software type
     * @param id Software ID
     */
    get(type, id) {
        return this.http.request({ method: 'GET', path: `/v2/softwares/${(0, http_1.p)(type)}/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/softwares/{type}/{id}/files`
     * @param type Software type
     * @param id Software ID
     */
    files(type, id) {
        return this.http.request({ method: 'GET', path: `/v2/softwares/${(0, http_1.p)(type)}/${(0, http_1.p)(id)}/files`, fallback: [] });
    }
    /** @deprecated Use {@link files} instead. */
    getFiles(type, id) {
        return this.files(type, id);
    }
    /**
     * `GET /v2/softwares/{type}/{id}/files/latest`
     * @param type Software type
     * @param id Software ID
     */
    latestFiles(type, id) {
        return this.http.request({ method: 'GET', path: `/v2/softwares/${(0, http_1.p)(type)}/${(0, http_1.p)(id)}/files/latest`, fallback: [] });
    }
    /** @deprecated Use {@link latestFiles} instead. */
    getLatestFiles(type, id) {
        return this.latestFiles(type, id);
    }
    /**
     * `GET /v2/softwares/{type}/{id}/files/latest/download`
     * @param type Software type
     * @param id Software ID
     */
    downloadLatestFiles(type, id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/softwares/${(0, http_1.p)(type)}/${(0, http_1.p)(id)}/files/latest/download`, destination });
    }
    /**
     * `GET /v2/softwares/{type}/{softwareId}/files/{id}`
     * @param type Software type
     * @param softwareId Software ID
     * @param id SoftwareFile ID
     */
    getFile(type, softwareId, id) {
        return this.http.request({ method: 'GET', path: `/v2/softwares/${(0, http_1.p)(type)}/${(0, http_1.p)(softwareId)}/files/${(0, http_1.p)(id)}`, fallback: null });
    }
    /** @deprecated Use {@link getFile} instead. */
    getFilesWhereId(type, softwareId, id) {
        return this.getFile(type, softwareId, id);
    }
    /**
     * `GET /v2/softwares/{type}/{softwareId}/files/{id}/download`
     * @param type Software type
     * @param softwareId Software ID
     * @param id SoftwareFile ID
     */
    downloadFile(type, softwareId, id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/softwares/${(0, http_1.p)(type)}/${(0, http_1.p)(softwareId)}/files/${(0, http_1.p)(id)}/download`, destination });
    }
    /** @deprecated Use {@link downloadFile} instead. */
    downloadFiles(type, softwareId, id, destination) {
        return this.downloadFile(type, softwareId, id, destination);
    }
    /** `GET /v2/softwareFiles` */
    searchFiles(query) {
        return this.http.request({ method: 'GET', path: `/v2/softwareFiles`, query, fallback: [] });
    }
}
exports.DataSoftwares = DataSoftwares;
/** `data.specialAreas` module. */
class DataSpecialAreas {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/specialAreas/all`
     * @param query.mapType Region Map format
     * @param query.now Select the active special areas at the time of the request
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/specialAreas/all`, query, fallback: [] });
    }
    /**
     * `GET /v2/specialAreas/{id}`
     * @param id NOTAM ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/specialAreas/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataSpecialAreas = DataSpecialAreas;
/** `data.squawks` module. */
class DataSquawks {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/squawks/{id}`
     * @param id Squawk ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/squawks/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.DataSquawks = DataSquawks;
/** `data.subcenters` module. */
class DataSubcenters {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/centers/{id}/subcenters`
     * @param id Center Id
     * @param query.atcCallsign String to find in subcenters names
     */
    byCenter(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/centers/${(0, http_1.p)(id)}/subcenters`, query, fallback: [] });
    }
    /** @deprecated Use {@link byCenter} instead. */
    getSubcenters(id, query) {
        return this.byCenter(id, query);
    }
    /**
     * `GET /v2/subcenters/all`
     * @param query.mapType Region Map format
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/subcenters/all`, query, fallback: [] });
    }
    /** @deprecated Use {@link all} instead. */
    getAll(query) {
        return this.all(query);
    }
    /**
     * `GET /v2/subcenters/{id}`
     * @param id Subcenter ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/subcenters/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/subcenters/{id}/antennas`
     * @param id Subcenter ID
     */
    antennas(id) {
        return this.http.request({ method: 'GET', path: `/v2/subcenters/${(0, http_1.p)(id)}/antennas`, fallback: [] });
    }
    /** @deprecated Use {@link antennas} instead. */
    getAntennas(id) {
        return this.antennas(id);
    }
}
exports.DataSubcenters = DataSubcenters;
/** `data.virtualAirlines` module. */
class DataVirtualAirlines {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/airlines/{icao}/virtualAirlines`
     * @param icao Airline ICAO code
     */
    byAirline(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airlines/${(0, http_1.p)(icao)}/virtualAirlines`, fallback: [] });
    }
    /** @deprecated Use {@link byAirline} instead. */
    getAllByCallsign(icao) {
        return this.byAirline(icao);
    }
    /**
     * `GET /v2/virtualAirlines`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/virtualAirlines`, query, fallback: [] });
    }
    /**
     * `GET /v2/virtualAirlines/all`
     * @param query.perPage The number of elements per page
     * @param query.page The number of the page
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/virtualAirlines/all`, query, fallback: [] });
    }
    /** `GET /v2/virtualAirlines/{id}` */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/virtualAirlines/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/virtualAirlines/{id}/mainLogo`
     * @param id Virtual airline IdCode
     */
    mainLogo(id) {
        return this.http.buffer({ method: 'GET', path: `/v2/virtualAirlines/${(0, http_1.p)(id)}/mainLogo` });
    }
    /** @deprecated Use {@link mainLogo} instead. */
    getMainLogo(id) {
        return this.mainLogo(id);
    }
    /**
     * `GET /v2/virtualAirlines/{id}/onlineLogo`
     * @param id Virtual airline IdCode
     */
    onlineLogo(id) {
        return this.http.buffer({ method: 'GET', path: `/v2/virtualAirlines/${(0, http_1.p)(id)}/onlineLogo` });
    }
    /** @deprecated Use {@link onlineLogo} instead. */
    getOnlineLogo(id) {
        return this.onlineLogo(id);
    }
}
exports.DataVirtualAirlines = DataVirtualAirlines;
/** `data.weather` module. */
class DataWeather {
    constructor(http) {
        this.http = http;
    }
    /** `GET /v2/airports/all/metar` */
    allMetars() {
        return this.http.request({ method: 'GET', path: `/v2/airports/all/metar`, fallback: [] });
    }
    /** `GET /v2/airports/{icao}/metar` */
    metar(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/metar`, fallback: null });
    }
    /** `GET /v2/airports/all/shortTaf` */
    allShortTafs() {
        return this.http.request({ method: 'GET', path: `/v2/airports/all/shortTaf`, fallback: [] });
    }
    /**
     * `GET /v2/airports/{icao}/shortTaf`
     * @param icao Airport ICAO code
     */
    shortTaf(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/shortTaf`, fallback: null });
    }
    /** `GET /v2/airports/all/taf` */
    allTafs() {
        return this.http.request({ method: 'GET', path: `/v2/airports/all/taf`, fallback: [] });
    }
    /**
     * `GET /v2/airports/{icao}/taf`
     * @param icao Airport ICAO code
     */
    taf(icao) {
        return this.http.request({ method: 'GET', path: `/v2/airports/${(0, http_1.p)(icao)}/taf`, fallback: null });
    }
}
exports.DataWeather = DataWeather;
/** `data.motds` module. */
class DataMotds {
    constructor(http) {
        this.http = http;
    }
    /** `GET /v2/motds/latest` */
    latest() {
        return this.http.request({ method: 'GET', path: `/v2/motds/latest`, fallback: null });
    }
    /** @deprecated Use {@link latest} instead. */
    getLatest() {
        return this.latest();
    }
}
exports.DataMotds = DataMotds;
/** `data.routes` module. */
class DataRoutes {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/routes`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.departureId Filter by departure airport, prefix match allowed (2 letters min)
     * @param query.arrivalId Filter by arrival airport, prefix match allowed (2 letters min)
     * @param query.divisionId Filter by division
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/routes`, query, fallback: null });
    }
}
exports.DataRoutes = DataRoutes;
/**
 * IVAO Data API: aircrafts, airlines, airports, ATC positions, NOTAMs, sectors, softwares, weather...
 * Generated from tools/specs/data.json.
 */
class DataApi {
    constructor(http) {
        this.http = http;
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
    get aircraft() {
        return this.aircrafts;
    }
}
exports.DataApi = DataApi;
