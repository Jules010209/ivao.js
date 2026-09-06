"use strict";
/* eslint-disable */
// Generated from tools/specs/core.json by tools/generate.js - DO NOT EDIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreApi = exports.CoreSettings = exports.CoreStaffPositions = exports.CoreUserStaffPositions = exports.CoreUsers = exports.CorePermissions = exports.CorePermissionsDepartments = exports.CorePermissionsDepartmentTeams = exports.CorePermissionsStaffPositions = exports.CorePermissionsUserStaffPositions = exports.CorePermissionsUsers = exports.CoreGroups = exports.CoreSubcenters = exports.CoreAtcPositions = exports.CoreFras = exports.CoreDivisions = exports.CoreDepartmentTeams = exports.CoreDepartments = void 0;
const http_1 = require("../http");
/** `core.departments` module. */
class CoreDepartments {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/departments`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/departments`, query, fallback: null });
    }
    /**
     * `GET /v2/departments/{id}`
     * @param id Department Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/departments/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/departments/{id}/permissions`
     * @param id Department Id
     */
    permissions(id) {
        return this.http.request({ method: 'GET', path: `/v2/departments/${(0, http_1.p)(id)}/permissions`, fallback: null });
    }
}
exports.CoreDepartments = CoreDepartments;
/** `core.departmentTeams` module. */
class CoreDepartmentTeams {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/departmentTeams`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.departmentId ID of the department
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/departmentTeams`, query, fallback: null });
    }
    /**
     * `GET /v2/departmentTeams/{id}`
     * @param id Department Team Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/departmentTeams/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/departmentTeams/{id}/permissions`
     * @param id Department Team Id
     */
    permissions(id) {
        return this.http.request({ method: 'GET', path: `/v2/departmentTeams/${(0, http_1.p)(id)}/permissions`, fallback: null });
    }
}
exports.CoreDepartmentTeams = CoreDepartmentTeams;
/** `core.divisions` module. */
class CoreDivisions {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/divisions`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/divisions`, query, fallback: null });
    }
    /** `GET /v2/divisions/all` */
    all() {
        return this.http.request({ method: 'GET', path: `/v2/divisions/all`, fallback: [] });
    }
    /**
     * `GET /v2/divisions/{id}`
     * @param id Division ID
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/divisions/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/divisions/{id}/svgLogo`
     * @param id Division ID
     */
    svgLogo(id) {
        return this.http.buffer({ method: 'GET', path: `/v2/divisions/${(0, http_1.p)(id)}/svgLogo` });
    }
    /** @deprecated Use {@link svgLogo} instead. */
    getSvgLogo(id) {
        return this.svgLogo(id);
    }
    /**
     * `GET /v2/divisions/{id}/aiaLogo`
     * @param id Division ID
     */
    aiaLogo(id) {
        return this.http.buffer({ method: 'GET', path: `/v2/divisions/${(0, http_1.p)(id)}/aiaLogo` });
    }
    /** @deprecated Use {@link aiaLogo} instead. */
    getAiaLogo(id) {
        return this.aiaLogo(id);
    }
    /**
     * `GET /v2/divisions/{id}/users`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.networkRating Filter by network rating.
     * @param query.includeHours When this is set to true, the response will contain the user's hours.
     * @param query.includeRatings When this is set to true, the response will contain the user's ratings.
     */
    users(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/divisions/${(0, http_1.p)(id)}/users`, query, fallback: null });
    }
    /** `GET /v2/divisions/{id}/gca-holders` */
    gcaHolders(id) {
        return this.http.request({ method: 'GET', path: `/v2/divisions/${(0, http_1.p)(id)}/gca-holders`, fallback: [] });
    }
    /**
     * Languages spoken in a division (endpoint not documented in the swagger).
     * `GET /v2/divisions/{id}/languages`
     */
    languages(id) {
        return this.http.request({ method: 'GET', path: `/v2/divisions/${(0, http_1.p)(id)}/languages`, fallback: [] });
    }
    /** @deprecated Use {@link languages} instead. */
    getLanguages(id) {
        return this.languages(id);
    }
}
exports.CoreDivisions = CoreDivisions;
/** `core.fras` module. */
class CoreFras {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/fras`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.countryId Country in which the fra is located
     * @param query.divisionId Division in which the fra is located
     * @param query.startsWith Select positions that starts with a specific string (Supersedes countryId and divisionId)
     * @param query.isActive Get fras on their state
     * @param query.members Get fras for members
     * @param query.positions Get fras for control
     * @param query.expand Expand relationships
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/fras`, query, fallback: null });
    }
    /**
     * `GET /v2/fras/{id}`
     * @param id FraId
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/fras/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/fras/check/{callsign}/{vid}`
     * @param callsign Position's full callsign
     * @param vid User's VID
     * @param query.startDate Datetime to check the FRA validity for
     */
    check(callsign, vid, query) {
        return this.http.request({ method: 'GET', path: `/v2/fras/check/${(0, http_1.p)(callsign)}/${(0, http_1.p)(vid)}`, query, fallback: null });
    }
    /** `GET /v2/fras/check/expired-sessions` */
    expiredSessions() {
        return this.http.request({ method: 'GET', path: `/v2/fras/check/expired-sessions`, fallback: null });
    }
}
exports.CoreFras = CoreFras;
/** `core.atcPositions` module. */
class CoreAtcPositions {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/ATCPositions/{id}/fras`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.isActive Get fras on their state
     * @param query.members Get fras for members
     * @param query.positions Get fras for control
     */
    fras(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/ATCPositions/${(0, http_1.p)(id)}/fras`, query, fallback: null });
    }
}
exports.CoreAtcPositions = CoreAtcPositions;
/** `core.subcenters` module. */
class CoreSubcenters {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/subcenters/{id}/fras`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.isActive Get fras on their state
     * @param query.members Get fras for members
     * @param query.positions Get fras for control
     */
    fras(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/subcenters/${(0, http_1.p)(id)}/fras`, query, fallback: null });
    }
}
exports.CoreSubcenters = CoreSubcenters;
/** `core.groups` module. */
class CoreGroups {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/groups`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/groups`, query, fallback: null });
    }
    /**
     * `GET /v2/groups/{id}`
     * @param id Group Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/groups/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.CoreGroups = CoreGroups;
/** `core.permissions.users` module. */
class CorePermissionsUsers {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/permissions/{id}/users`
     * @param id Permission Id
     */
    list(id) {
        return this.http.request({ method: 'GET', path: `/v2/permissions/${(0, http_1.p)(id)}/users`, fallback: null });
    }
    /**
     * `POST /v2/permissions/{id}/users`
     * @param id Permission Id
     */
    create(id, body) {
        return this.http.request({ method: 'POST', path: `/v2/permissions/${(0, http_1.p)(id)}/users`, body });
    }
    /**
     * `GET /v2/permissions/{permissionId}/users/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId, id) {
        return this.http.request({ method: 'GET', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/users/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `PUT /v2/permissions/{permissionId}/users/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId, id, body) {
        return this.http.request({ method: 'PUT', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/users/${(0, http_1.p)(id)}`, body });
    }
    /**
     * `DELETE /v2/permissions/{permissionId}/users/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId, id) {
        return this.http.request({ method: 'DELETE', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/users/${(0, http_1.p)(id)}` });
    }
}
exports.CorePermissionsUsers = CorePermissionsUsers;
/** `core.permissions.userStaffPositions` module. */
class CorePermissionsUserStaffPositions {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/permissions/{id}/userStaffPositions`
     * @param id Permission Id
     */
    list(id) {
        return this.http.request({ method: 'GET', path: `/v2/permissions/${(0, http_1.p)(id)}/userStaffPositions`, fallback: null });
    }
    /**
     * `POST /v2/permissions/{id}/userStaffPositions`
     * @param id Permission Id
     */
    create(id, body) {
        return this.http.request({ method: 'POST', path: `/v2/permissions/${(0, http_1.p)(id)}/userStaffPositions`, body });
    }
    /**
     * `GET /v2/permissions/{permissionId}/userStaffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId, id) {
        return this.http.request({ method: 'GET', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/userStaffPositions/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `PUT /v2/permissions/{permissionId}/userStaffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId, id, body) {
        return this.http.request({ method: 'PUT', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/userStaffPositions/${(0, http_1.p)(id)}`, body });
    }
    /**
     * `DELETE /v2/permissions/{permissionId}/userStaffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId, id) {
        return this.http.request({ method: 'DELETE', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/userStaffPositions/${(0, http_1.p)(id)}` });
    }
}
exports.CorePermissionsUserStaffPositions = CorePermissionsUserStaffPositions;
/** `core.permissions.staffPositions` module. */
class CorePermissionsStaffPositions {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/permissions/{id}/staffPositions`
     * @param id Permission Id
     */
    list(id) {
        return this.http.request({ method: 'GET', path: `/v2/permissions/${(0, http_1.p)(id)}/staffPositions`, fallback: null });
    }
    /**
     * `POST /v2/permissions/{id}/staffPositions`
     * @param id Permission Id
     */
    create(id, body) {
        return this.http.request({ method: 'POST', path: `/v2/permissions/${(0, http_1.p)(id)}/staffPositions`, body });
    }
    /**
     * `GET /v2/permissions/{permissionId}/staffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId, id) {
        return this.http.request({ method: 'GET', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/staffPositions/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `PUT /v2/permissions/{permissionId}/staffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId, id, body) {
        return this.http.request({ method: 'PUT', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/staffPositions/${(0, http_1.p)(id)}`, body });
    }
    /**
     * `DELETE /v2/permissions/{permissionId}/staffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId, id) {
        return this.http.request({ method: 'DELETE', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/staffPositions/${(0, http_1.p)(id)}` });
    }
}
exports.CorePermissionsStaffPositions = CorePermissionsStaffPositions;
/** `core.permissions.departmentTeams` module. */
class CorePermissionsDepartmentTeams {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/permissions/{id}/departmentTeams`
     * @param id Permission Id
     */
    list(id) {
        return this.http.request({ method: 'GET', path: `/v2/permissions/${(0, http_1.p)(id)}/departmentTeams`, fallback: null });
    }
    /**
     * `POST /v2/permissions/{id}/departmentTeams`
     * @param id Permission Id
     */
    create(id, body) {
        return this.http.request({ method: 'POST', path: `/v2/permissions/${(0, http_1.p)(id)}/departmentTeams`, body });
    }
    /**
     * `GET /v2/permissions/{permissionId}/departmentTeams/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId, id) {
        return this.http.request({ method: 'GET', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/departmentTeams/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `PUT /v2/permissions/{permissionId}/departmentTeams/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId, id, body) {
        return this.http.request({ method: 'PUT', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/departmentTeams/${(0, http_1.p)(id)}`, body });
    }
    /**
     * `DELETE /v2/permissions/{permissionId}/departmentTeams/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId, id) {
        return this.http.request({ method: 'DELETE', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/departmentTeams/${(0, http_1.p)(id)}` });
    }
}
exports.CorePermissionsDepartmentTeams = CorePermissionsDepartmentTeams;
/** `core.permissions.departments` module. */
class CorePermissionsDepartments {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/permissions/{id}/departments`
     * @param id Permission Id
     */
    list(id) {
        return this.http.request({ method: 'GET', path: `/v2/permissions/${(0, http_1.p)(id)}/departments`, fallback: null });
    }
    /**
     * `POST /v2/permissions/{id}/departments`
     * @param id Permission Id
     */
    create(id, body) {
        return this.http.request({ method: 'POST', path: `/v2/permissions/${(0, http_1.p)(id)}/departments`, body });
    }
    /**
     * `GET /v2/permissions/{permissionId}/departments/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId, id) {
        return this.http.request({ method: 'GET', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/departments/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `PUT /v2/permissions/{permissionId}/departments/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId, id, body) {
        return this.http.request({ method: 'PUT', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/departments/${(0, http_1.p)(id)}`, body });
    }
    /**
     * `DELETE /v2/permissions/{permissionId}/departments/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId, id) {
        return this.http.request({ method: 'DELETE', path: `/v2/permissions/${(0, http_1.p)(permissionId)}/departments/${(0, http_1.p)(id)}` });
    }
}
exports.CorePermissionsDepartments = CorePermissionsDepartments;
/** `core.permissions` module. */
class CorePermissions {
    constructor(http) {
        this.http = http;
        this.users = new CorePermissionsUsers(http);
        this.userStaffPositions = new CorePermissionsUserStaffPositions(http);
        this.staffPositions = new CorePermissionsStaffPositions(http);
        this.departmentTeams = new CorePermissionsDepartmentTeams(http);
        this.departments = new CorePermissionsDepartments(http);
    }
    /** `GET /v2/permissions` */
    all() {
        return this.http.request({ method: 'GET', path: `/v2/permissions`, fallback: [] });
    }
    /** `GET /v2/permissions/{id}` */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/permissions/${(0, http_1.p)(id)}`, fallback: [] });
    }
}
exports.CorePermissions = CorePermissions;
/** `core.users` module. */
class CoreUsers {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/users/{vid}/permissions`
     * @param vid User's VID (use 'me' for current logged in user)
     */
    permissions(vid) {
        return this.http.request({ method: 'GET', path: `/v2/users/${(0, http_1.p)(vid)}/permissions`, fallback: null });
    }
    /**
     * `GET /v2/users/{vid}/permissions/all`
     * @param vid User's VID (use 'me' for current logged in user)
     * @param query.applicationId Specify the application ID to fetch permissions from
     */
    allPermissions(vid, query) {
        return this.http.request({ method: 'GET', path: `/v2/users/${(0, http_1.p)(vid)}/permissions/all`, query, fallback: null });
    }
    /**
     * `GET /v2/users/{vid}/userStaffPositions`
     * @param vid User's VID (use 'me' for current logged in user)
     * OAuth scopes: profile
     */
    staffPositions(vid) {
        return this.http.request({ method: 'GET', path: `/v2/users/${(0, http_1.p)(vid)}/userStaffPositions`, fallback: [] });
    }
    /**
     * `GET /v2/users/{vid}`
     * @param vid User's VID (use 'me' for current logged in user)
     */
    get(vid) {
        return this.http.request({ method: 'GET', path: `/v2/users/${(0, http_1.p)(vid)}`, fallback: null });
    }
    /**
     * `GET /v2/users/staffs`
     * @param query.isSupervisor Returns all network supervisors
     * OAuth scopes: profile
     */
    staffs(query) {
        return this.http.request({ method: 'GET', path: `/v2/users/staffs`, query, fallback: [] });
    }
    /**
     * `GET /v2/users/staff`
     * @param query.staffEmail Search by staff email (@ivao.aero)
     */
    staffByEmail(query) {
        return this.http.request({ method: 'GET', path: `/v2/users/staff`, query, fallback: null });
    }
    /**
     * Currently authenticated user (bearer token required).
     * `GET /v2/users/me`
     */
    me() {
        return this.http.request({ method: 'GET', path: `/v2/users/me`, fallback: null });
    }
}
exports.CoreUsers = CoreUsers;
/** `core.userStaffPositions` module. */
class CoreUserStaffPositions {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/userStaffPositions/{id}/permissions`
     * @param id User Staff Position Id
     */
    permissions(id) {
        return this.http.request({ method: 'GET', path: `/v2/userStaffPositions/${(0, http_1.p)(id)}/permissions`, fallback: null });
    }
    /**
     * `GET /v2/userStaffPositions`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.isVacant Is staff position vacant?
     * @param query.userId Staff's VID
     * @param query.centerId ID of the staff position's Center
     * @param query.divisionId ID of the staff position's Division
     * @param query.departmentId ID of the department
     * @param query.departmentTeamId ID of the department team
     * @param query.staffPositionId ID of the staff position
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/userStaffPositions`, query, fallback: null });
    }
    /**
     * `GET /v2/userStaffPositions/{id}`
     * @param id Staff Position Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/userStaffPositions/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.CoreUserStaffPositions = CoreUserStaffPositions;
/** `core.staffPositions` module. */
class CoreStaffPositions {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/staffPositions/{id}/permissions`
     * @param id Staff Position Id
     */
    permissions(id) {
        return this.http.request({ method: 'GET', path: `/v2/staffPositions/${(0, http_1.p)(id)}/permissions`, fallback: null });
    }
    /**
     * `GET /v2/staffPositions`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.departmentId ID of the department
     * @param query.departmentTeamId ID of the department team
     * @param query.type Staff Position Type
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/staffPositions`, query, fallback: null });
    }
    /**
     * `GET /v2/staffPositions/{id}`
     * @param id Staff Position Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/staffPositions/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.CoreStaffPositions = CoreStaffPositions;
/** `core.settings` module. */
class CoreSettings {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/users/me/settings`
     * @param query.default Include default settings when you are requesting other app settings
     * OAuth scopes: configuration
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/users/me/settings`, query, fallback: null });
    }
    /**
     * `PUT /v2/users/me/settings`
     * OAuth scopes: configuration
     */
    update(body) {
        return this.http.request({ method: 'PUT', path: `/v2/users/me/settings`, body, fallback: null });
    }
    /**
     * `GET /v2/users/me/settings/{type}`
     * @param type Application id
     * @param query.default Include default settings when you are requesting other app settings
     * OAuth scopes: configuration
     */
    byType(type, query) {
        return this.http.request({ method: 'GET', path: `/v2/users/me/settings/${(0, http_1.p)(type)}`, query, fallback: null });
    }
    /**
     * `PUT /v2/users/me/settings/{type}`
     * @param type Application id
     * OAuth scopes: configuration
     */
    updateType(type, body) {
        return this.http.request({ method: 'PUT', path: `/v2/users/me/settings/${(0, http_1.p)(type)}`, body, fallback: null });
    }
    /**
     * `DELETE /v2/users/me/settings/{type}/{key}`
     * @param type Application id
     * @param key The setting key to be deleted
     * OAuth scopes: configuration
     */
    delete(type, key) {
        return this.http.request({ method: 'DELETE', path: `/v2/users/me/settings/${(0, http_1.p)(type)}/${(0, http_1.p)(key)}` });
    }
}
exports.CoreSettings = CoreSettings;
/**
 * IVAO Core API: users, divisions, staff, permissions, settings and FRAs.
 * Generated from tools/specs/core.json.
 */
class CoreApi {
    constructor(http) {
        this.http = http;
        this.departments = new CoreDepartments(http);
        this.departmentTeams = new CoreDepartmentTeams(http);
        this.divisions = new CoreDivisions(http);
        this.fras = new CoreFras(http);
        this.atcPositions = new CoreAtcPositions(http);
        this.subcenters = new CoreSubcenters(http);
        this.groups = new CoreGroups(http);
        this.permissions = new CorePermissions(http);
        this.users = new CoreUsers(http);
        this.userStaffPositions = new CoreUserStaffPositions(http);
        this.staffPositions = new CoreStaffPositions(http);
        this.settings = new CoreSettings(http);
    }
}
exports.CoreApi = CoreApi;
