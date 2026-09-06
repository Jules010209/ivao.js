'use strict';

/**
 * Maps every swagger operation (by operationId) to a place in the generated client.
 *
 *   at        dotted module path inside the API class ('' = method on the API class itself).
 *             An array places the same operation in several modules.
 *   name      method name.
 *   aliases   deprecated alias method names kept for backward compatibility.
 *   kind      'json' (default) | 'buffer' (binary response returned as Buffer)
 *             | 'download' (binary response, optionally written to disk).
 *   noAuth    do not send credentials.
 *   drop      swagger parameter names to ignore (doc bugs).
 *   returns   override of the TypeScript return type.
 *   body      override of the body type ('optional' keeps the swagger type but makes it optional).
 *   queryTypes    { paramName: 'ts type' } overrides for query parameter types.
 *   optionalQuery query parameter names to make optional even if the swagger says required.
 *
 * `extra` lists hand-written operations that are not (or no longer) in the swagger.
 */
module.exports = {
    data: {
        property: 'data',
        className: 'DataApi',
        description: 'IVAO Data API: aircrafts, airlines, airports, ATC positions, NOTAMs, sectors, softwares, weather...',
        // 1.x property names: client.data.aircraft.aircrafts.all(), client.data.aircraft.aircraftManufacture.get(1)...
        moduleAliases: {
            aircraft: 'aircrafts',
            'aircrafts.aircrafts': 'aircrafts',
            'aircrafts.aircraftManufacture': 'aircrafts.manufacturers',
            'aircrafts.aircraftEquipment': 'aircrafts.equipments',
            'aircrafts.aircraftTransponderTypes': 'aircrafts.transponderTypes',
        },
        ops: {
            AircraftsManufacturesController_index: { at: 'aircrafts.manufacturers', name: 'all' },
            AircraftsManufacturesController_show: { at: 'aircrafts.manufacturers', name: 'get' },
            AircraftsEquipmentsController_index: { at: 'aircrafts.equipments', name: 'all' },
            AircraftsEquipmentsController_show: { at: 'aircrafts.equipments', name: 'get' },
            AircraftsTransponderTypesController_index: { at: 'aircrafts.transponderTypes', name: 'all' },
            AircraftsTransponderTypesController_show: { at: 'aircrafts.transponderTypes', name: 'get' },
            AircraftsController_index: { at: 'aircrafts', name: 'list' },
            AircraftsController_all: { at: 'aircrafts', name: 'all' },
            AircraftsController_show: { at: 'aircrafts', name: 'get' },
            AircraftsVariantsController_index: { at: 'aircrafts', name: 'variants' },
            AircraftVariantsController_show: { at: 'aircraftVariants', name: 'get' },

            AirlinesController_index: { at: 'airlines', name: 'list' },
            AirlinesController_all: { at: 'airlines', name: 'all' },
            AirlinesController_show: { at: 'airlines', name: 'get' },
            AirlinesController_logo: { at: 'airlines', name: 'logo', kind: 'buffer' },
            AirlinesController_routes: { at: 'airlines', name: 'routes' },
            AirlineVirtualAirlineController_index: [
                { at: 'airlines', name: 'virtualAirlines' },
                { at: 'virtualAirlines', name: 'byAirline', aliases: ['getAllByCallsign'] },
            ],

            AirportsController_index: { at: 'airports', name: 'list' },
            AirportsController_all: { at: 'airports', name: 'all', aliases: ['allAirports'] },
            AirportsController_show: { at: 'airports', name: 'get', aliases: ['getAirport'] },
            AirportATCPositionController_index: { at: 'airports', name: 'atcPositions', aliases: ['positions'] },
            AirportsNotamsController_index: { at: 'airports', name: 'listNotams' },
            AirportsNotamsController_all: { at: 'airports', name: 'allNotams', aliases: ['notams'], returns: 'Notam[]' },
            AirportRunwaysController_index: { at: 'airports', name: 'runways' },
            AirportsSquawksController_index: { at: 'airports', name: 'squawks', aliases: ['getSquawks'] },
            AirportsSquawksController_generate: { at: 'airports', name: 'generateSquawk' },
            WeatherController_allMetars: [
                { at: 'airports', name: 'allMetars', aliases: ['allMetar'] },
                { at: 'weather', name: 'allMetars' },
            ],
            WeatherController_metar: [
                { at: 'airports', name: 'metar', aliases: ['getMetar'] },
                { at: 'weather', name: 'metar' },
            ],
            WeatherController_allShortTaf: [
                { at: 'airports', name: 'allShortTafs' },
                { at: 'weather', name: 'allShortTafs' },
            ],
            WeatherController_shortTaf: [
                { at: 'airports', name: 'shortTaf' },
                { at: 'weather', name: 'shortTaf' },
            ],
            WeatherController_allTaf: [
                { at: 'airports', name: 'allTafs' },
                { at: 'weather', name: 'allTafs' },
            ],
            WeatherController_taf: [
                { at: 'airports', name: 'taf' },
                { at: 'weather', name: 'taf' },
            ],

            AntennasController_show: { at: 'antennas', name: 'subjacent' },

            AtcPositionsController_all: { at: 'atcPositions', name: 'all' },
            AtcPositionsController_show: { at: 'atcPositions', name: 'get' },
            AtcPositionsController_showAntennas: { at: 'atcPositions', name: 'antennas' },

            CentersController_index: { at: 'centers', name: 'list' },
            CentersController_show: { at: 'centers', name: 'get' },
            CenterNotamsController_index: { at: 'centers', name: 'listNotams' },
            CenterNotamsController_all: { at: 'centers', name: 'allNotams', aliases: ['getAllNotams'], returns: 'Notam[]' },
            CenterSpecialAreasController_index: { at: 'centers', name: 'listSpecialAreas' },
            CenterSpecialAreasController_all: { at: 'centers', name: 'allSpecialAreas', aliases: ['getAllSpecialAreas'], returns: 'SpecialAreas[]' },
            CenterSquawksController_index: { at: 'centers', name: 'squawks', aliases: ['getSquawks'] },
            CenterSquawksController_generate: { at: 'centers', name: 'generateSquawk' },
            CenterSubcenterController_index: [
                { at: 'centers', name: 'subcenters', aliases: ['getSubcenters'] },
                { at: 'subcenters', name: 'byCenter', aliases: ['getSubcenters'] },
            ],

            CountriesController_index: { at: 'countries', name: 'list' },
            CountriesController_show: { at: 'countries', name: 'get' },

            CreatorsController_index: { at: 'creators', name: 'list' },
            CreatorsController_all: { at: 'creators', name: 'all' },
            CreatorsController_show: { at: 'creators', name: 'get' },

            DivisionsNotamsController_index: { at: 'divisions', name: 'listNotams' },
            DivisionsNotamsController_all: { at: 'divisions', name: 'allNotams', aliases: ['getNotams'], returns: 'Notam[]' },

            LanguagesController_index: { at: 'languages', name: 'list' },
            LanguagesController_show: { at: 'languages', name: 'get' },

            NavaidController_index: { at: 'navaids', name: 'list' },
            NavaidController_show: { at: 'navaids', name: 'get' },

            NatTracksController_index: { at: 'natTracks', name: 'all' },

            NotamsController_all: { at: 'notams', name: 'all' },
            NotamsController_show: { at: 'notams', name: 'get' },

            PositionsController_search: { at: 'positions', name: 'search' },

            RunwaysController_show: { at: 'runways', name: 'get' },

            SectorController_index: { at: 'sectors', name: 'list' },
            SectorController_all: { at: 'sectors', name: 'all' },
            SectorController_show: { at: 'sectors', name: 'get' },
            SectorsFilesController_index: { at: 'sectors', name: 'files', aliases: ['getAllFiles'] },
            SectorsFilesController_latest: { at: 'sectors', name: 'latestFiles', aliases: ['getLatestFiles'] },
            SectorsFilesController_downloadLatest: { at: 'sectors', name: 'downloadLatestFiles', kind: 'download' },
            SectorsFilesController_show: { at: 'sectors', name: 'getFile', aliases: ['getFiles'], returns: 'SectorFileExtend' },
            SectorsFilesController_showDownload: { at: 'sectors', name: 'downloadFile', aliases: ['downloadFiles'], kind: 'download' },

            ServersController_index: { at: 'servers', name: 'list' },
            ServersController_all: { at: 'servers', name: 'all' },
            ServersController_show: { at: 'servers', name: 'get' },

            SimulatorsController_index: { at: 'simulators', name: 'list' },
            SimulatorsController_all: { at: 'simulators', name: 'all' },
            SimulatorsController_show: { at: 'simulators', name: 'get' },
            SimulatorVersionSimulatorsController_index: { at: 'simulators', name: 'versions' },
            SimulatorVersionsController_index: { at: 'simulatorVersions', name: 'list' },
            SimulatorVersionsController_all: { at: 'simulatorVersions', name: 'all' },
            SimulatorVersionsController_show: { at: 'simulatorVersions', name: 'get' },

            UserSoftwaresController_me: { at: 'softwares', name: 'me' },
            SoftwaresByTypeController_index: { at: 'softwares', name: 'list' },
            SoftwaresByTypeController_show: { at: 'softwares', name: 'get' },
            SoftwaresFilesController_index: { at: 'softwares', name: 'files', aliases: ['getFiles'] },
            SoftwaresFilesController_latest: { at: 'softwares', name: 'latestFiles', aliases: ['getLatestFiles'] },
            SoftwaresFilesController_downloadLatest: { at: 'softwares', name: 'downloadLatestFiles', kind: 'download' },
            SoftwaresFilesController_show: { at: 'softwares', name: 'getFile', aliases: ['getFilesWhereId'], returns: 'SoftwareFile' },
            SoftwaresFilesController_showDownload: { at: 'softwares', name: 'downloadFile', aliases: ['downloadFiles'], kind: 'download' },
            SoftwaresFilesKeysController_index: { at: 'softwares', name: 'searchFiles' },

            SpecialAreasController_all: { at: 'specialAreas', name: 'all' },
            SpecialAreasController_show: { at: 'specialAreas', name: 'get' },

            SquawksController_show: { at: 'squawks', name: 'get' },

            SubcentersController_all: { at: 'subcenters', name: 'all', aliases: ['getAll'], returns: 'BaseSubcenter[]' },
            SubcentersController_show: { at: 'subcenters', name: 'get' },
            SubcentersController_showAntennas: { at: 'subcenters', name: 'antennas', aliases: ['getAntennas'], drop: ['callsign'] },

            VirtualAirlinesController_paginated: { at: 'virtualAirlines', name: 'list' },
            VirtualAirlinesController_all: { at: 'virtualAirlines', name: 'all' },
            VirtualAirlinesController_show: { at: 'virtualAirlines', name: 'get', drop: ['icao'] },
            VirtualAirlinesController_mainLogo: { at: 'virtualAirlines', name: 'mainLogo', aliases: ['getMainLogo'], kind: 'buffer' },
            VirtualAirlinesController_onlineLogo: { at: 'virtualAirlines', name: 'onlineLogo', aliases: ['getOnlineLogo'], kind: 'buffer' },

            MotdsController_latest: { at: 'motds', name: 'latest', aliases: ['getLatest'] },

            RoutesController_list: { at: 'routes', name: 'list' },
        },
    },

    core: {
        property: 'core',
        className: 'CoreApi',
        description: 'IVAO Core API: users, divisions, staff, permissions, settings and FRAs.',
        ops: {
            DepartmentsController_list: { at: 'departments', name: 'list' },
            DepartmentsController_show: { at: 'departments', name: 'get' },
            DepartmentPermissionInstancesController_listFors: { at: 'departments', name: 'permissions' },

            DepartmentTeamsController_list: { at: 'departmentTeams', name: 'list' },
            DepartmentTeamsController_show: { at: 'departmentTeams', name: 'get' },
            DepartmentTeamPermissionInstancesController_listFors: { at: 'departmentTeams', name: 'permissions' },

            DivisionsController_index: { at: 'divisions', name: 'list' },
            DivisionsController_all: { at: 'divisions', name: 'all' },
            DivisionsController_show: { at: 'divisions', name: 'get' },
            DivisionsController_svgLogo: { at: 'divisions', name: 'svgLogo', aliases: ['getSvgLogo'], kind: 'buffer' },
            DivisionsController_aiaLogo: { at: 'divisions', name: 'aiaLogo', aliases: ['getAiaLogo'], kind: 'buffer' },
            DivisionUsersController_divisionUsers: { at: 'divisions', name: 'users' },
            DivisionUsersController_getGcaHolders: { at: 'divisions', name: 'gcaHolders' },

            FrasController_index: { at: 'fras', name: 'list' },
            FrasController_show: { at: 'fras', name: 'get' },
            CheckFrasController_getATCFra: { at: 'fras', name: 'check' },
            CheckFrasController_listOverstayedATCs: { at: 'fras', name: 'expiredSessions' },
            AtcPositionFrasController_index: { at: 'atcPositions', name: 'fras' },
            SubcenterFrasController_index: { at: 'subcenters', name: 'fras' },

            GroupsController_list: { at: 'groups', name: 'list' },
            GroupsController_show: { at: 'groups', name: 'get' },

            PermissionsController_list: { at: 'permissions', name: 'all' },
            PermissionsController_show: { at: 'permissions', name: 'get' },

            UserPermissionInstancesController_listUsers: { at: 'permissions.users', name: 'list' },
            UserPermissionInstancesController_create: { at: 'permissions.users', name: 'create' },
            UserPermissionInstancesController_show: { at: 'permissions.users', name: 'get' },
            UserPermissionInstancesController_update: { at: 'permissions.users', name: 'update' },
            UserPermissionInstancesController_delete: { at: 'permissions.users', name: 'delete' },
            UserPermissionInstancesController_listForUsers: { at: 'users', name: 'permissions' },
            UserPermissionInstancesController_listForMeAll: { at: 'users', name: 'allPermissions' },

            UserStaffPositionPermissionInstancesController_listUsers: { at: 'permissions.userStaffPositions', name: 'list' },
            UserStaffPositionPermissionInstancesController_create: { at: 'permissions.userStaffPositions', name: 'create' },
            UserStaffPositionPermissionInstancesController_show: { at: 'permissions.userStaffPositions', name: 'get' },
            UserStaffPositionPermissionInstancesController_update: { at: 'permissions.userStaffPositions', name: 'update' },
            UserStaffPositionPermissionInstancesController_delete: { at: 'permissions.userStaffPositions', name: 'delete' },
            UserStaffPositionPermissionInstancesController_listForUsers: { at: 'userStaffPositions', name: 'permissions' },

            StaffPositionPermissionInstancesController_lists: { at: 'permissions.staffPositions', name: 'list' },
            StaffPositionPermissionInstancesController_create: { at: 'permissions.staffPositions', name: 'create' },
            StaffPositionPermissionInstancesController_show: { at: 'permissions.staffPositions', name: 'get' },
            StaffPositionPermissionInstancesController_update: { at: 'permissions.staffPositions', name: 'update' },
            StaffPositionPermissionInstancesController_delete: { at: 'permissions.staffPositions', name: 'delete' },
            StaffPositionPermissionInstancesController_listFors: { at: 'staffPositions', name: 'permissions' },

            DepartmentTeamPermissionInstancesController_lists: { at: 'permissions.departmentTeams', name: 'list' },
            DepartmentTeamPermissionInstancesController_create: { at: 'permissions.departmentTeams', name: 'create' },
            DepartmentTeamPermissionInstancesController_show: { at: 'permissions.departmentTeams', name: 'get' },
            DepartmentTeamPermissionInstancesController_update: { at: 'permissions.departmentTeams', name: 'update' },
            DepartmentTeamPermissionInstancesController_delete: { at: 'permissions.departmentTeams', name: 'delete' },

            DepartmentPermissionInstancesController_lists: { at: 'permissions.departments', name: 'list' },
            DepartmentPermissionInstancesController_create: { at: 'permissions.departments', name: 'create' },
            DepartmentPermissionInstancesController_show: { at: 'permissions.departments', name: 'get' },
            DepartmentPermissionInstancesController_update: { at: 'permissions.departments', name: 'update' },
            DepartmentPermissionInstancesController_delete: { at: 'permissions.departments', name: 'delete' },

            SettingsController_list: { at: 'settings', name: 'all', returns: 'Record<string, unknown>' },
            SettingsController_update: { at: 'settings', name: 'update' },
            SettingsController_listType: { at: 'settings', name: 'byType', returns: 'Record<string, unknown>' },
            SettingsController_updateType: { at: 'settings', name: 'updateType' },
            SettingsController_delete: { at: 'settings', name: 'delete' },

            StaffPositionsController_list: { at: 'staffPositions', name: 'list' },
            StaffPositionsController_show: { at: 'staffPositions', name: 'get' },

            UserStaffPositionsController_list: { at: 'userStaffPositions', name: 'list' },
            UserStaffPositionsController_show: { at: 'userStaffPositions', name: 'get' },
            UserStaffPositionsUserController_list: { at: 'users', name: 'staffPositions' },

            UsersController_show: { at: 'users', name: 'get' },
            UsersController_staffList: { at: 'users', name: 'staffs' },
            UsersController_staffSearch: { at: 'users', name: 'staffByEmail' },
        },
        extra: [
            {
                at: 'divisions',
                name: 'languages',
                aliases: ['getLanguages'],
                method: 'GET',
                path: '/v2/divisions/{id}/languages',
                summary: 'Languages spoken in a division (endpoint not documented in the swagger).',
                params: [{ name: 'id', in: 'path', type: 'string' }],
                returns: 'DivisionLanguage[]',
            },
            {
                at: 'users',
                name: 'me',
                method: 'GET',
                path: '/v2/users/me',
                summary: 'Currently authenticated user (bearer token required).',
                params: [],
                returns: 'UserResponse',
            },
        ],
    },

    tracker: {
        property: 'tracker',
        className: 'TrackerApi',
        description: 'IVAO Tracker API: whazzup, live sessions, flight plans, ATIS, tracks and statistics.',
        ops: {
            AirportsController_stats: { at: 'airports', name: 'allStats' },
            AirportsController_traffics: { at: 'airports', name: 'traffics' },
            AirportsController_count: { at: 'airports', name: 'trafficsCount' },
            AirportsController_airportStats: { at: 'airports', name: 'stats' },
            AirportsController_airportStatsLatest: { at: 'airports', name: 'latestStats' },
            AirportsController_airportAtis: { at: 'airports', name: 'atis' },
            AirportsController_airportAtisLatest: { at: 'airports', name: 'latestAtis' },
            AirportsController_airportAtisShow: { at: 'airports', name: 'atisRevision' },

            AtcPositionsController_list: { at: 'atcPositions', name: 'atis' },
            AtcPositionsController_latest: { at: 'atcPositions', name: 'latestAtis' },
            AtcPositionsController_show: { at: 'atcPositions', name: 'atisRevision' },

            AtisController_list: { at: 'sessions', name: 'atis' },
            AtisController_latest: { at: 'sessions', name: 'latestAtis' },
            AtisController_show: { at: 'sessions', name: 'atisRevision' },

            FlightPlansController_latest: { at: 'flightPlans', name: 'get' },
            SessionFlightPlansController_list: { at: 'sessions', name: 'flightPlans' },
            SessionFlightPlansController_latest: { at: 'sessions', name: 'latestFlightPlan' },

            NowController_pilots: { at: 'now', name: 'pilots' },
            NowController_pilotsSummary: { at: 'now', name: 'pilotsSummary' },
            NowController_atcs: { at: 'now', name: 'atc' },
            NowController_atcsSummary: { at: 'now', name: 'atcSummary' },
            NowController_supervisors: { at: 'now', name: 'supervisors' },
            NowController_observers: { at: 'now', name: 'observers' },

            SessionsController_list: { at: 'sessions', name: 'list' },
            SessionsController_show: { at: 'sessions', name: 'get' },

            StatsController_connections: { at: 'stats', name: 'connections', returns: 'Record<string, unknown>[]' },
            StatsController_now: { at: 'stats', name: 'nowConnections' },
            StatsController_servers: { at: 'stats', name: 'servers' },
            StatsController_server: { at: 'stats', name: 'server' },
            StatsController_simulators: { at: 'stats', name: 'simulators' },
            StatsController_simulator: { at: 'stats', name: 'simulator' },
            StatsController_softwares: { at: 'stats', name: 'softwares' },
            StatsController_software: { at: 'stats', name: 'software' },

            TracksController_list: { at: 'sessions', name: 'tracks' },
            TracksController_latest: { at: 'sessions', name: 'latestTracks' },

            UsersController_show: { at: 'users', name: 'nowSession' },

            WhazzupController_list: { at: 'whazzup', name: 'get' },
            WhazzupController_atis: { at: 'whazzup', name: 'atis' },
        },
    },

    oauth: {
        property: 'oauth',
        className: 'OAuthApi',
        description: 'IVAO OAuth / SSO API: tokens, scopes, applications and granted apps.',
        ops: {
            AuthController_credentials: { at: 'auth', name: 'credentials' },
            GrantedAppsController_listGrantedApps: { at: 'grantedApps', name: 'list' },
            GrantedAppsController_revokeGrantedApp: { at: 'grantedApps', name: 'revoke' },
            JwtController_getKeys: { at: 'wellKnown', name: 'jwks', noAuth: true, returns: 'Jwks' },
            JwtController_getOpenidConfiguration: { at: 'wellKnown', name: 'openidConfiguration', noAuth: true, returns: 'OpenIdConfiguration' },
            OAuthScopesController_list: { at: 'scopes', name: 'list', noAuth: true },
            OAuthProvisionController_provisionCode: { at: '', name: 'provisionCode' },
            OAuthApplicationsController_getById: { at: 'applications', name: 'get' },
            OAuthApplicationsController_listConsents: { at: 'applications', name: 'consents' },
            OAuthTokenController_token: { at: '', name: 'token', noAuth: true, body: 'OAuthTokenRequest' },
            OAuthTokenController_revoke: { at: '', name: 'revokeToken', noAuth: true },
        },
    },

    mtl: {
        property: 'mtl',
        className: 'MtlApi',
        description: 'IVAO MTL API: aircraft models, textures, base models, effects, sounds, scripts and paintkits.',
        ops: {
            AircraftsController_all: { at: 'aircrafts', name: 'allTextures' },
            AircraftsController_show: { at: 'aircrafts', name: 'textures' },

            AuthorsController_index: { at: 'authors', name: 'list' },
            AuthorsController_show: { at: 'authors', name: 'get' },
            AuthorBaseModelFilesController_index: { at: 'authors', name: 'baseModelFiles' },
            AuthorTextureFilesController_index: { at: 'authors', name: 'textureFiles' },

            VariantsBaseModelController_show: { at: 'aircraftVariants', name: 'baseModels' },

            BaseModelController_index: { at: 'baseModels', name: 'list' },
            BaseModelController_all: { at: 'baseModels', name: 'all' },
            BaseModelController_show: { at: 'baseModels', name: 'get' },
            BaseModelFilesController_index: { at: 'baseModels', name: 'files' },
            BaseModelFilesController_latest: { at: 'baseModels', name: 'latestFiles' },
            BaseModelFilesController_downloadLatest: { at: 'baseModels', name: 'downloadLatestFiles', kind: 'download' },
            BaseModelFilesController_show: { at: 'baseModels', name: 'getFile', returns: 'BaseModelFile' },
            BaseModelFilesController_showDownload: { at: 'baseModels', name: 'downloadFile', kind: 'download' },
            BaseModelFileAuthorsController_indexLatest: { at: 'baseModels', name: 'latestFileAuthors' },
            BaseModelFileAuthorsController_index: { at: 'baseModels', name: 'fileAuthors' },
            CFGController_show: { at: 'baseModels', name: 'cfg' },
            BaseModelEffectController_index: { at: 'baseModels', name: 'effects' },
            BaseModelOfModelController_show: { at: 'baseModels', name: 'models' },
            BaseModelPaintkitController_index: { at: 'baseModels', name: 'paintkits' },

            CommonTextureController_index: { at: 'commonTextures', name: 'all' },
            CommonTextureController_show: { at: 'commonTextures', name: 'get' },
            CommonTextureFilesController_index: { at: 'commonTextures', name: 'files' },
            CommonTextureFilesController_latest: { at: 'commonTextures', name: 'latestFiles' },
            CommonTextureFilesController_downloadLatest: { at: 'commonTextures', name: 'downloadLatestFiles', kind: 'download' },
            CommonTextureFilesController_show: { at: 'commonTextures', name: 'getFile', returns: 'CommonTextureFile' },
            CommonTextureFilesController_showDownload: { at: 'commonTextures', name: 'downloadFile', kind: 'download' },

            EffectController_index: { at: 'effects', name: 'all' },
            EffectController_show: { at: 'effects', name: 'get' },
            EffectFilesController_index: { at: 'effects', name: 'files' },
            EffectFilesController_latest: { at: 'effects', name: 'latestFiles' },
            EffectFilesController_downloadLatest: { at: 'effects', name: 'downloadLatestFiles', kind: 'download' },
            EffectFilesController_show: { at: 'effects', name: 'getFile', returns: 'EffectFile' },
            EffectFilesController_showDownload: { at: 'effects', name: 'downloadFile', kind: 'download' },

            ModelController_show: { at: 'models', name: 'get' },
            ModelFilesController_index: { at: 'models', name: 'files' },
            ModelFilesController_latest: { at: 'models', name: 'latestFiles' },
            ModelFilesController_downloadLatest: { at: 'models', name: 'downloadLatestFiles', kind: 'download' },
            ModelFilesController_show: { at: 'models', name: 'getFile', returns: 'ModelFile' },
            ModelFilesController_showDownload: { at: 'models', name: 'downloadFile', kind: 'download' },
            ModelCommonTextureController_index: { at: 'models', name: 'commonTextures' },
            ModelScriptController_index: { at: 'models', name: 'scripts' },
            ModelSoundController_index: { at: 'models', name: 'sounds' },
            BaseTextureOfTextureController_index: { at: 'models', name: 'textures' },

            PaintkitController_index: { at: 'paintkits', name: 'list' },
            PaintkitController_show: { at: 'paintkits', name: 'get' },
            PaintkitFilesController_index: { at: 'paintkits', name: 'files' },
            PaintkitFilesController_latest: { at: 'paintkits', name: 'latestFiles' },
            PaintkitFilesController_downloadLatest: { at: 'paintkits', name: 'downloadLatestFiles', kind: 'download' },
            PaintkitFilesController_show: { at: 'paintkits', name: 'getFile', returns: 'PaintkitFile' },
            PaintkitFilesController_showDownload: { at: 'paintkits', name: 'downloadFile', kind: 'download' },

            ScriptController_index: { at: 'scripts', name: 'all' },
            ScriptController_show: { at: 'scripts', name: 'get' },
            ScriptFilesController_index: { at: 'scripts', name: 'files' },
            ScriptFilesController_latest: { at: 'scripts', name: 'latestFiles' },
            ScriptFilesController_downloadLatest: { at: 'scripts', name: 'downloadLatestFiles', kind: 'download' },
            ScriptFilesController_show: { at: 'scripts', name: 'getFile', returns: 'ScriptFile' },
            ScriptFilesController_showDownload: { at: 'scripts', name: 'downloadFile', kind: 'download' },

            SoundController_index: { at: 'sounds', name: 'all' },
            SoundController_show: { at: 'sounds', name: 'get' },
            SoundFilesController_index: { at: 'sounds', name: 'files' },
            SoundFilesController_latest: { at: 'sounds', name: 'latestFiles' },
            SoundFilesController_downloadLatest: { at: 'sounds', name: 'downloadLatestFiles', kind: 'download' },
            SoundFilesController_show: { at: 'sounds', name: 'getFile', returns: 'SoundFile' },
            SoundFilesController_showDownload: { at: 'sounds', name: 'downloadFile', kind: 'download' },

            TextureController_index: { at: 'textures', name: 'list' },
            TextureController_all: { at: 'textures', name: 'all' },
            TextureController_show: { at: 'textures', name: 'get' },
            TextureFilesController_index: { at: 'textures', name: 'files' },
            TextureFilesController_latest: { at: 'textures', name: 'latestFile' },
            TextureFilesController_downloadLatest: { at: 'textures', name: 'downloadLatestFile', kind: 'download' },
            TextureFilesController_downloadLatestImage: { at: 'textures', name: 'latestImage', kind: 'buffer' },
            TextureFilesController_show: { at: 'textures', name: 'getFile' },
            TextureFilesController_showDownload: { at: 'textures', name: 'downloadFile', kind: 'download' },
            TextureFilesController_showDownloadImage: { at: 'textures', name: 'image', kind: 'buffer' },
            TextureFileAuthorsController_indexLatest: { at: 'textures', name: 'latestFileAuthors' },
            TextureFileAuthorsController_index: { at: 'textures', name: 'fileAuthors' },
        },
    },

    fpl: {
        property: 'fpl',
        className: 'FlightPlanApi',
        description: "IVAO Flight Plan API: user aircrafts and flight plans. Use 'me' as vid for the current user.",
        ops: {
            AircraftsController_list: { at: 'aircrafts', name: 'list' },
            AircraftsController_create: { at: 'aircrafts', name: 'create' },
            AircraftsController_show: { at: 'aircrafts', name: 'get' },
            AircraftsController_update: { at: 'aircrafts', name: 'update' },
            AircraftsController_delete: { at: 'aircrafts', name: 'delete' },

            FlightPlansController_list: { at: 'flightPlans', name: 'list' },
            FlightPlansController_create: { at: 'flightPlans', name: 'create' },
            FlightPlansController_active: { at: 'flightPlans', name: 'active' },
            FlightPlansController_show: { at: 'flightPlans', name: 'get' },
            FlightPlansController_update: { at: 'flightPlans', name: 'update' },
            FlightPlansController_delete: { at: 'flightPlans', name: 'delete' },
            FlightPlansController_archive: { at: 'flightPlans', name: 'archive' },
        },
    },

    webeye: {
        property: 'webeye',
        className: 'WebeyeApi',
        description: 'IVAO Webeye API: friends management (user token required).',
        ops: {
            FriendsController_list: { at: 'friends', name: 'list' },
            FriendsController_create: { at: 'friends', name: 'add' },
            FriendsController_delete: { at: 'friends', name: 'remove' },
        },
    },

    status: {
        property: 'status',
        className: 'StatusApi',
        description: 'IVAO Status API: generated status images (served from status.ivao.aero).',
        baseUrlOption: 'statusBaseUrl',
        ops: {
            AppController_getMainImage: { at: '', name: 'mainImage', kind: 'buffer', noAuth: true, queryTypes: { dark: 'boolean' }, optionalQuery: ['dark'] },
            AppController_getSmallImage: { at: '', name: 'smallImage', kind: 'buffer', noAuth: true, queryTypes: { dark: 'boolean' }, optionalQuery: ['dark'] },
            AppController_getVaRoster: { at: '', name: 'vaRoster', kind: 'buffer', noAuth: true, queryTypes: { dark: 'boolean' }, optionalQuery: ['dark'] },
            AppController_getATCList: { at: '', name: 'atcList', kind: 'buffer', noAuth: true, queryTypes: { dark: 'boolean' }, optionalQuery: ['dark'] },
        },
    },

    atc: {
        property: 'atc',
        className: 'AtcApi',
        description: 'IVAO ATC Scheduling System: ATC bookings.',
        ops: {
            BookingsController_findAll: { at: 'bookings', name: 'list' },
            BookingsController_create: { at: 'bookings', name: 'create' },
            BookingsController_dailyBookings: { at: 'bookings', name: 'daily' },
            BookingsController_findOne: { at: 'bookings', name: 'get' },
            BookingsController_update: { at: 'bookings', name: 'update' },
            BookingsController_delete: { at: 'bookings', name: 'delete' },
        },
    },

    'events-api-v1': {
        property: 'events',
        className: 'EventsApi',
        description: 'IVAO Events API v1: scheduled events.',
        ops: {
            EventsController_getEvents: { at: '', name: 'list' },
            EventsController_getEventById: { at: '', name: 'get' },
        },
    },

    'auto-atis': {
        property: 'autoAtis',
        className: 'AutoAtisApi',
        description: 'IVAO Auto ATIS API: digital ATIS and runway parameters.',
        ops: {
            AtisController_getDigitalAtis: { at: '', name: 'get', returns: 'Record<string, unknown>' },
            ParamsController_getParamsFromAirport: { at: 'params', name: 'get', returns: 'Record<string, unknown>' },
            ParamsController_getParamsFromAirportAndRunway: { at: 'params', name: 'getRunway', returns: 'Record<string, unknown>' },
            ParamsController_createParams: { at: 'params', name: 'create', body: 'Record<string, unknown>' },
            ParamsController_updateParams: { at: 'params', name: 'update', body: 'Record<string, unknown>' },
            ParamsController_deleteParams: { at: 'params', name: 'delete' },
        },
    },
};
