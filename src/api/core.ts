/* eslint-disable */
// Generated from tools/specs/core.json by tools/generate.js - DO NOT EDIT.

import { HttpClient, p } from '../http';
import { AllowedFraCheck, DepartmentPermissionInstanceRequest, DepartmentResponse, DepartmentTeamPermissionInstanceRequest, DepartmentTeamResponse, Division, DivisionGCAHolders, FraExtended, GroupResponse, PaginatedDepartmentResponse, PaginatedDepartmentTeamResponse, PaginatedDivision, PaginatedFra, PaginatedFraExtended, PaginatedGroupResponse, PaginatedStaffPositionResponse, PaginatedUserStaffPositionResponse, PaginatedUserStatistics, Permission, SettingRequest, StaffPositionPermissionInstanceRequest, StaffPositionResponse, UserPermissionInstanceRequest, UserResponse, UserStaff, UserStaffPositionPermissionInstanceRequest, UserStaffPositionResponse } from '../types/core';
import { DivisionLanguage } from '../types/manual';

/** `core.departments` module. */
export class CoreDepartments {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/departments`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query?: { page?: number; perPage?: number }): Promise<PaginatedDepartmentResponse> {
        return this.http.request<PaginatedDepartmentResponse>({ method: 'GET', path: `/v2/departments`, query, fallback: null });
    }

    /**
     * `GET /v2/departments/{id}`
     * @param id Department Id
     */
    get(id: string): Promise<DepartmentResponse> {
        return this.http.request<DepartmentResponse>({ method: 'GET', path: `/v2/departments/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/departments/{id}/permissions`
     * @param id Department Id
     */
    permissions(id: string): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/departments/${p(id)}/permissions`, fallback: null });
    }
}

/** `core.departmentTeams` module. */
export class CoreDepartmentTeams {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/departmentTeams`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.departmentId ID of the department
     */
    list(query?: { page?: number; perPage?: number; departmentId?: string }): Promise<PaginatedDepartmentTeamResponse> {
        return this.http.request<PaginatedDepartmentTeamResponse>({ method: 'GET', path: `/v2/departmentTeams`, query, fallback: null });
    }

    /**
     * `GET /v2/departmentTeams/{id}`
     * @param id Department Team Id
     */
    get(id: string): Promise<DepartmentTeamResponse> {
        return this.http.request<DepartmentTeamResponse>({ method: 'GET', path: `/v2/departmentTeams/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/departmentTeams/{id}/permissions`
     * @param id Department Team Id
     */
    permissions(id: string): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/departmentTeams/${p(id)}/permissions`, fallback: null });
    }
}

/** `core.divisions` module. */
export class CoreDivisions {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/divisions`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query?: { page?: number; perPage?: number }): Promise<PaginatedDivision> {
        return this.http.request<PaginatedDivision>({ method: 'GET', path: `/v2/divisions`, query, fallback: null });
    }

    /** `GET /v2/divisions/all` */
    all(): Promise<Division[]> {
        return this.http.request<Division[]>({ method: 'GET', path: `/v2/divisions/all`, fallback: [] });
    }

    /**
     * `GET /v2/divisions/{id}`
     * @param id Division ID
     */
    get(id: string): Promise<Division> {
        return this.http.request<Division>({ method: 'GET', path: `/v2/divisions/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/divisions/{id}/svgLogo`
     * @param id Division ID
     */
    svgLogo(id: string): Promise<Buffer> {
        return this.http.buffer({ method: 'GET', path: `/v2/divisions/${p(id)}/svgLogo` });
    }

    /** @deprecated Use {@link svgLogo} instead. */
    getSvgLogo(id: string): Promise<Buffer> {
        return this.svgLogo(id);
    }

    /**
     * `GET /v2/divisions/{id}/aiaLogo`
     * @param id Division ID
     */
    aiaLogo(id: string): Promise<Buffer> {
        return this.http.buffer({ method: 'GET', path: `/v2/divisions/${p(id)}/aiaLogo` });
    }

    /** @deprecated Use {@link aiaLogo} instead. */
    getAiaLogo(id: string): Promise<Buffer> {
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
    users(id: string, query?: { page?: number; perPage?: number; networkRating?: "inactive" | "active" | "memorial"; includeHours?: boolean; includeRatings?: boolean }): Promise<PaginatedUserStatistics> {
        return this.http.request<PaginatedUserStatistics>({ method: 'GET', path: `/v2/divisions/${p(id)}/users`, query, fallback: null });
    }

    /** `GET /v2/divisions/{id}/gca-holders` */
    gcaHolders(id: string): Promise<DivisionGCAHolders[]> {
        return this.http.request<DivisionGCAHolders[]>({ method: 'GET', path: `/v2/divisions/${p(id)}/gca-holders`, fallback: [] });
    }

    /**
     * Languages spoken in a division (endpoint not documented in the swagger).
     * `GET /v2/divisions/{id}/languages`
     */
    languages(id: string): Promise<DivisionLanguage[]> {
        return this.http.request<DivisionLanguage[]>({ method: 'GET', path: `/v2/divisions/${p(id)}/languages`, fallback: [] });
    }

    /** @deprecated Use {@link languages} instead. */
    getLanguages(id: string): Promise<DivisionLanguage[]> {
        return this.languages(id);
    }
}

/** `core.fras` module. */
export class CoreFras {
    constructor(protected readonly http: HttpClient) {}

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
    list(query?: { page?: number; perPage?: number; countryId?: string; divisionId?: string; startsWith?: string; isActive?: boolean; members?: boolean; positions?: boolean; expand?: boolean }): Promise<PaginatedFraExtended> {
        return this.http.request<PaginatedFraExtended>({ method: 'GET', path: `/v2/fras`, query, fallback: null });
    }

    /**
     * `GET /v2/fras/{id}`
     * @param id FraId
     */
    get(id: number): Promise<FraExtended> {
        return this.http.request<FraExtended>({ method: 'GET', path: `/v2/fras/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/fras/check/{callsign}/{vid}`
     * @param callsign Position's full callsign
     * @param vid User's VID
     * @param query.startDate Datetime to check the FRA validity for
     */
    check(callsign: string, vid: number, query?: { startDate?: string }): Promise<AllowedFraCheck> {
        return this.http.request<AllowedFraCheck>({ method: 'GET', path: `/v2/fras/check/${p(callsign)}/${p(vid)}`, query, fallback: null });
    }

    /** `GET /v2/fras/check/expired-sessions` */
    expiredSessions(): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/fras/check/expired-sessions`, fallback: null });
    }
}

/** `core.atcPositions` module. */
export class CoreAtcPositions {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/ATCPositions/{id}/fras`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.isActive Get fras on their state
     * @param query.members Get fras for members
     * @param query.positions Get fras for control
     */
    fras(id: number, query?: { page?: number; perPage?: number; isActive?: boolean; members?: boolean; positions?: boolean }): Promise<PaginatedFra> {
        return this.http.request<PaginatedFra>({ method: 'GET', path: `/v2/ATCPositions/${p(id)}/fras`, query, fallback: null });
    }
}

/** `core.subcenters` module. */
export class CoreSubcenters {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/subcenters/{id}/fras`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.isActive Get fras on their state
     * @param query.members Get fras for members
     * @param query.positions Get fras for control
     */
    fras(id: number, query?: { page?: number; perPage?: number; isActive?: boolean; members?: boolean; positions?: boolean }): Promise<PaginatedFra> {
        return this.http.request<PaginatedFra>({ method: 'GET', path: `/v2/subcenters/${p(id)}/fras`, query, fallback: null });
    }
}

/** `core.groups` module. */
export class CoreGroups {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/groups`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query?: { page?: number; perPage?: number }): Promise<PaginatedGroupResponse> {
        return this.http.request<PaginatedGroupResponse>({ method: 'GET', path: `/v2/groups`, query, fallback: null });
    }

    /**
     * `GET /v2/groups/{id}`
     * @param id Group Id
     */
    get(id: string): Promise<GroupResponse> {
        return this.http.request<GroupResponse>({ method: 'GET', path: `/v2/groups/${p(id)}`, fallback: null });
    }
}

/** `core.permissions.users` module. */
export class CorePermissionsUsers {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/permissions/{id}/users`
     * @param id Permission Id
     */
    list(id: string): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/permissions/${p(id)}/users`, fallback: null });
    }

    /**
     * `POST /v2/permissions/{id}/users`
     * @param id Permission Id
     */
    create(id: string, body: UserPermissionInstanceRequest): Promise<void> {
        return this.http.request<void>({ method: 'POST', path: `/v2/permissions/${p(id)}/users`, body });
    }

    /**
     * `GET /v2/permissions/{permissionId}/users/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId: string, id: number): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/permissions/${p(permissionId)}/users/${p(id)}`, fallback: null });
    }

    /**
     * `PUT /v2/permissions/{permissionId}/users/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId: string, id: number, body: UserPermissionInstanceRequest): Promise<void> {
        return this.http.request<void>({ method: 'PUT', path: `/v2/permissions/${p(permissionId)}/users/${p(id)}`, body });
    }

    /**
     * `DELETE /v2/permissions/{permissionId}/users/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId: string, id: number): Promise<void> {
        return this.http.request<void>({ method: 'DELETE', path: `/v2/permissions/${p(permissionId)}/users/${p(id)}` });
    }
}

/** `core.permissions.userStaffPositions` module. */
export class CorePermissionsUserStaffPositions {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/permissions/{id}/userStaffPositions`
     * @param id Permission Id
     */
    list(id: string): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/permissions/${p(id)}/userStaffPositions`, fallback: null });
    }

    /**
     * `POST /v2/permissions/{id}/userStaffPositions`
     * @param id Permission Id
     */
    create(id: string, body: UserStaffPositionPermissionInstanceRequest): Promise<void> {
        return this.http.request<void>({ method: 'POST', path: `/v2/permissions/${p(id)}/userStaffPositions`, body });
    }

    /**
     * `GET /v2/permissions/{permissionId}/userStaffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId: string, id: number): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/permissions/${p(permissionId)}/userStaffPositions/${p(id)}`, fallback: null });
    }

    /**
     * `PUT /v2/permissions/{permissionId}/userStaffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId: string, id: number, body: UserStaffPositionPermissionInstanceRequest): Promise<void> {
        return this.http.request<void>({ method: 'PUT', path: `/v2/permissions/${p(permissionId)}/userStaffPositions/${p(id)}`, body });
    }

    /**
     * `DELETE /v2/permissions/{permissionId}/userStaffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId: string, id: number): Promise<void> {
        return this.http.request<void>({ method: 'DELETE', path: `/v2/permissions/${p(permissionId)}/userStaffPositions/${p(id)}` });
    }
}

/** `core.permissions.staffPositions` module. */
export class CorePermissionsStaffPositions {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/permissions/{id}/staffPositions`
     * @param id Permission Id
     */
    list(id: string): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/permissions/${p(id)}/staffPositions`, fallback: null });
    }

    /**
     * `POST /v2/permissions/{id}/staffPositions`
     * @param id Permission Id
     */
    create(id: string, body: StaffPositionPermissionInstanceRequest): Promise<void> {
        return this.http.request<void>({ method: 'POST', path: `/v2/permissions/${p(id)}/staffPositions`, body });
    }

    /**
     * `GET /v2/permissions/{permissionId}/staffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId: string, id: number): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/permissions/${p(permissionId)}/staffPositions/${p(id)}`, fallback: null });
    }

    /**
     * `PUT /v2/permissions/{permissionId}/staffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId: string, id: number, body: StaffPositionPermissionInstanceRequest): Promise<void> {
        return this.http.request<void>({ method: 'PUT', path: `/v2/permissions/${p(permissionId)}/staffPositions/${p(id)}`, body });
    }

    /**
     * `DELETE /v2/permissions/{permissionId}/staffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId: string, id: number): Promise<void> {
        return this.http.request<void>({ method: 'DELETE', path: `/v2/permissions/${p(permissionId)}/staffPositions/${p(id)}` });
    }
}

/** `core.permissions.departmentTeams` module. */
export class CorePermissionsDepartmentTeams {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/permissions/{id}/departmentTeams`
     * @param id Permission Id
     */
    list(id: string): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/permissions/${p(id)}/departmentTeams`, fallback: null });
    }

    /**
     * `POST /v2/permissions/{id}/departmentTeams`
     * @param id Permission Id
     */
    create(id: string, body: DepartmentTeamPermissionInstanceRequest): Promise<void> {
        return this.http.request<void>({ method: 'POST', path: `/v2/permissions/${p(id)}/departmentTeams`, body });
    }

    /**
     * `GET /v2/permissions/{permissionId}/departmentTeams/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId: string, id: number): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/permissions/${p(permissionId)}/departmentTeams/${p(id)}`, fallback: null });
    }

    /**
     * `PUT /v2/permissions/{permissionId}/departmentTeams/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId: string, id: number, body: DepartmentTeamPermissionInstanceRequest): Promise<void> {
        return this.http.request<void>({ method: 'PUT', path: `/v2/permissions/${p(permissionId)}/departmentTeams/${p(id)}`, body });
    }

    /**
     * `DELETE /v2/permissions/{permissionId}/departmentTeams/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId: string, id: number): Promise<void> {
        return this.http.request<void>({ method: 'DELETE', path: `/v2/permissions/${p(permissionId)}/departmentTeams/${p(id)}` });
    }
}

/** `core.permissions.departments` module. */
export class CorePermissionsDepartments {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/permissions/{id}/departments`
     * @param id Permission Id
     */
    list(id: string): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/permissions/${p(id)}/departments`, fallback: null });
    }

    /**
     * `POST /v2/permissions/{id}/departments`
     * @param id Permission Id
     */
    create(id: string, body: DepartmentPermissionInstanceRequest): Promise<void> {
        return this.http.request<void>({ method: 'POST', path: `/v2/permissions/${p(id)}/departments`, body });
    }

    /**
     * `GET /v2/permissions/{permissionId}/departments/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId: string, id: number): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/permissions/${p(permissionId)}/departments/${p(id)}`, fallback: null });
    }

    /**
     * `PUT /v2/permissions/{permissionId}/departments/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId: string, id: number, body: DepartmentPermissionInstanceRequest): Promise<void> {
        return this.http.request<void>({ method: 'PUT', path: `/v2/permissions/${p(permissionId)}/departments/${p(id)}`, body });
    }

    /**
     * `DELETE /v2/permissions/{permissionId}/departments/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId: string, id: number): Promise<void> {
        return this.http.request<void>({ method: 'DELETE', path: `/v2/permissions/${p(permissionId)}/departments/${p(id)}` });
    }
}

/** `core.permissions` module. */
export class CorePermissions {
    readonly users: CorePermissionsUsers;
    readonly userStaffPositions: CorePermissionsUserStaffPositions;
    readonly staffPositions: CorePermissionsStaffPositions;
    readonly departmentTeams: CorePermissionsDepartmentTeams;
    readonly departments: CorePermissionsDepartments;

    constructor(protected readonly http: HttpClient) {
        this.users = new CorePermissionsUsers(http);
        this.userStaffPositions = new CorePermissionsUserStaffPositions(http);
        this.staffPositions = new CorePermissionsStaffPositions(http);
        this.departmentTeams = new CorePermissionsDepartmentTeams(http);
        this.departments = new CorePermissionsDepartments(http);
    }

    /** `GET /v2/permissions` */
    all(): Promise<Permission[]> {
        return this.http.request<Permission[]>({ method: 'GET', path: `/v2/permissions`, fallback: [] });
    }

    /** `GET /v2/permissions/{id}` */
    get(id: string): Promise<Permission[]> {
        return this.http.request<Permission[]>({ method: 'GET', path: `/v2/permissions/${p(id)}`, fallback: [] });
    }
}

/** `core.users` module. */
export class CoreUsers {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/users/{vid}/permissions`
     * @param vid User's VID (use 'me' for current logged in user)
     */
    permissions(vid: string): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/users/${p(vid)}/permissions`, fallback: null });
    }

    /**
     * `GET /v2/users/{vid}/permissions/all`
     * @param vid User's VID (use 'me' for current logged in user)
     * @param query.applicationId Specify the application ID to fetch permissions from
     */
    allPermissions(vid: string, query?: { applicationId?: string }): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/users/${p(vid)}/permissions/all`, query, fallback: null });
    }

    /**
     * `GET /v2/users/{vid}/userStaffPositions`
     * @param vid User's VID (use 'me' for current logged in user)
     * OAuth scopes: profile
     */
    staffPositions(vid: string): Promise<UserStaffPositionResponse[]> {
        return this.http.request<UserStaffPositionResponse[]>({ method: 'GET', path: `/v2/users/${p(vid)}/userStaffPositions`, fallback: [] });
    }

    /**
     * `GET /v2/users/{vid}`
     * @param vid User's VID (use 'me' for current logged in user)
     */
    get(vid: string): Promise<UserResponse> {
        return this.http.request<UserResponse>({ method: 'GET', path: `/v2/users/${p(vid)}`, fallback: null });
    }

    /**
     * `GET /v2/users/staffs`
     * @param query.isSupervisor Returns all network supervisors
     * OAuth scopes: profile
     */
    staffs(query?: { isSupervisor?: boolean }): Promise<UserStaff[]> {
        return this.http.request<UserStaff[]>({ method: 'GET', path: `/v2/users/staffs`, query, fallback: [] });
    }

    /**
     * `GET /v2/users/staff`
     * @param query.staffEmail Search by staff email (@ivao.aero)
     */
    staffByEmail(query: { staffEmail: string }): Promise<UserResponse> {
        return this.http.request<UserResponse>({ method: 'GET', path: `/v2/users/staff`, query, fallback: null });
    }

    /**
     * Currently authenticated user (bearer token required).
     * `GET /v2/users/me`
     */
    me(): Promise<UserResponse> {
        return this.http.request<UserResponse>({ method: 'GET', path: `/v2/users/me`, fallback: null });
    }
}

/** `core.userStaffPositions` module. */
export class CoreUserStaffPositions {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/userStaffPositions/{id}/permissions`
     * @param id User Staff Position Id
     */
    permissions(id: number): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/userStaffPositions/${p(id)}/permissions`, fallback: null });
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
    list(query?: { page?: number; perPage?: number; isVacant?: boolean; userId?: string; centerId?: string; divisionId?: string; departmentId?: string; departmentTeamId?: string; staffPositionId?: string }): Promise<PaginatedUserStaffPositionResponse> {
        return this.http.request<PaginatedUserStaffPositionResponse>({ method: 'GET', path: `/v2/userStaffPositions`, query, fallback: null });
    }

    /**
     * `GET /v2/userStaffPositions/{id}`
     * @param id Staff Position Id
     */
    get(id: string): Promise<UserStaffPositionResponse> {
        return this.http.request<UserStaffPositionResponse>({ method: 'GET', path: `/v2/userStaffPositions/${p(id)}`, fallback: null });
    }
}

/** `core.staffPositions` module. */
export class CoreStaffPositions {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/staffPositions/{id}/permissions`
     * @param id Staff Position Id
     */
    permissions(id: string): Promise<unknown> {
        return this.http.request<unknown>({ method: 'GET', path: `/v2/staffPositions/${p(id)}/permissions`, fallback: null });
    }

    /**
     * `GET /v2/staffPositions`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.departmentId ID of the department
     * @param query.departmentTeamId ID of the department team
     * @param query.type Staff Position Type
     */
    list(query?: { page?: number; perPage?: number; departmentId?: string; departmentTeamId?: string; type?: "HQ" | "DIV" }): Promise<PaginatedStaffPositionResponse> {
        return this.http.request<PaginatedStaffPositionResponse>({ method: 'GET', path: `/v2/staffPositions`, query, fallback: null });
    }

    /**
     * `GET /v2/staffPositions/{id}`
     * @param id Staff Position Id
     */
    get(id: string): Promise<StaffPositionResponse> {
        return this.http.request<StaffPositionResponse>({ method: 'GET', path: `/v2/staffPositions/${p(id)}`, fallback: null });
    }
}

/** `core.settings` module. */
export class CoreSettings {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/users/me/settings`
     * @param query.default Include default settings when you are requesting other app settings
     * OAuth scopes: configuration
     */
    all(query: { default: boolean }): Promise<Record<string, unknown>> {
        return this.http.request<Record<string, unknown>>({ method: 'GET', path: `/v2/users/me/settings`, query, fallback: null });
    }

    /**
     * `PUT /v2/users/me/settings`
     * OAuth scopes: configuration
     */
    update(body: SettingRequest): Promise<SettingRequest> {
        return this.http.request<SettingRequest>({ method: 'PUT', path: `/v2/users/me/settings`, body, fallback: null });
    }

    /**
     * `GET /v2/users/me/settings/{type}`
     * @param type Application id
     * @param query.default Include default settings when you are requesting other app settings
     * OAuth scopes: configuration
     */
    byType(type: string, query: { default: boolean }): Promise<Record<string, unknown>> {
        return this.http.request<Record<string, unknown>>({ method: 'GET', path: `/v2/users/me/settings/${p(type)}`, query, fallback: null });
    }

    /**
     * `PUT /v2/users/me/settings/{type}`
     * @param type Application id
     * OAuth scopes: configuration
     */
    updateType(type: string, body: SettingRequest): Promise<SettingRequest> {
        return this.http.request<SettingRequest>({ method: 'PUT', path: `/v2/users/me/settings/${p(type)}`, body, fallback: null });
    }

    /**
     * `DELETE /v2/users/me/settings/{type}/{key}`
     * @param type Application id
     * @param key The setting key to be deleted
     * OAuth scopes: configuration
     */
    delete(type: string, key: string): Promise<void> {
        return this.http.request<void>({ method: 'DELETE', path: `/v2/users/me/settings/${p(type)}/${p(key)}` });
    }
}

/**
 * IVAO Core API: users, divisions, staff, permissions, settings and FRAs.
 * Generated from tools/specs/core.json.
 */
export class CoreApi {
    readonly departments: CoreDepartments;
    readonly departmentTeams: CoreDepartmentTeams;
    readonly divisions: CoreDivisions;
    readonly fras: CoreFras;
    readonly atcPositions: CoreAtcPositions;
    readonly subcenters: CoreSubcenters;
    readonly groups: CoreGroups;
    readonly permissions: CorePermissions;
    readonly users: CoreUsers;
    readonly userStaffPositions: CoreUserStaffPositions;
    readonly staffPositions: CoreStaffPositions;
    readonly settings: CoreSettings;

    constructor(protected readonly http: HttpClient) {
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
