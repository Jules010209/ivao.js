import { HttpClient } from '../http';
import { AllowedFraCheck, DepartmentPermissionInstanceRequest, DepartmentResponse, DepartmentTeamPermissionInstanceRequest, DepartmentTeamResponse, Division, DivisionGCAHolders, FraExtended, GroupResponse, PaginatedDepartmentResponse, PaginatedDepartmentTeamResponse, PaginatedDivision, PaginatedFra, PaginatedFraExtended, PaginatedGroupResponse, PaginatedStaffPositionResponse, PaginatedUserStaffPositionResponse, PaginatedUserStatistics, Permission, SettingRequest, StaffPositionPermissionInstanceRequest, StaffPositionResponse, UserPermissionInstanceRequest, UserResponse, UserStaff, UserStaffPositionPermissionInstanceRequest, UserStaffPositionResponse } from '../types/core';
import { DivisionLanguage } from '../types/manual';
/** `core.departments` module. */
export declare class CoreDepartments {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/departments`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query?: {
        page?: number;
        perPage?: number;
    }): Promise<PaginatedDepartmentResponse>;
    /**
     * `GET /v2/departments/{id}`
     * @param id Department Id
     */
    get(id: string): Promise<DepartmentResponse>;
    /**
     * `GET /v2/departments/{id}/permissions`
     * @param id Department Id
     */
    permissions(id: string): Promise<unknown>;
}
/** `core.departmentTeams` module. */
export declare class CoreDepartmentTeams {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/departmentTeams`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.departmentId ID of the department
     */
    list(query?: {
        page?: number;
        perPage?: number;
        departmentId?: string;
    }): Promise<PaginatedDepartmentTeamResponse>;
    /**
     * `GET /v2/departmentTeams/{id}`
     * @param id Department Team Id
     */
    get(id: string): Promise<DepartmentTeamResponse>;
    /**
     * `GET /v2/departmentTeams/{id}/permissions`
     * @param id Department Team Id
     */
    permissions(id: string): Promise<unknown>;
}
/** `core.divisions` module. */
export declare class CoreDivisions {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/divisions`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query?: {
        page?: number;
        perPage?: number;
    }): Promise<PaginatedDivision>;
    /** `GET /v2/divisions/all` */
    all(): Promise<Division[]>;
    /**
     * `GET /v2/divisions/{id}`
     * @param id Division ID
     */
    get(id: string): Promise<Division>;
    /**
     * `GET /v2/divisions/{id}/svgLogo`
     * @param id Division ID
     */
    svgLogo(id: string): Promise<Buffer>;
    /** @deprecated Use {@link svgLogo} instead. */
    getSvgLogo(id: string): Promise<Buffer>;
    /**
     * `GET /v2/divisions/{id}/aiaLogo`
     * @param id Division ID
     */
    aiaLogo(id: string): Promise<Buffer>;
    /** @deprecated Use {@link aiaLogo} instead. */
    getAiaLogo(id: string): Promise<Buffer>;
    /**
     * `GET /v2/divisions/{id}/users`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.networkRating Filter by network rating.
     * @param query.includeHours When this is set to true, the response will contain the user's hours.
     * @param query.includeRatings When this is set to true, the response will contain the user's ratings.
     */
    users(id: string, query?: {
        page?: number;
        perPage?: number;
        networkRating?: "inactive" | "active" | "memorial";
        includeHours?: boolean;
        includeRatings?: boolean;
    }): Promise<PaginatedUserStatistics>;
    /** `GET /v2/divisions/{id}/gca-holders` */
    gcaHolders(id: string): Promise<DivisionGCAHolders[]>;
    /**
     * Languages spoken in a division (endpoint not documented in the swagger).
     * `GET /v2/divisions/{id}/languages`
     */
    languages(id: string): Promise<DivisionLanguage[]>;
    /** @deprecated Use {@link languages} instead. */
    getLanguages(id: string): Promise<DivisionLanguage[]>;
}
/** `core.fras` module. */
export declare class CoreFras {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
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
    list(query?: {
        page?: number;
        perPage?: number;
        countryId?: string;
        divisionId?: string;
        startsWith?: string;
        isActive?: boolean;
        members?: boolean;
        positions?: boolean;
        expand?: boolean;
    }): Promise<PaginatedFraExtended>;
    /**
     * `GET /v2/fras/{id}`
     * @param id FraId
     */
    get(id: number): Promise<FraExtended>;
    /**
     * `GET /v2/fras/check/{callsign}/{vid}`
     * @param callsign Position's full callsign
     * @param vid User's VID
     * @param query.startDate Datetime to check the FRA validity for
     */
    check(callsign: string, vid: number, query?: {
        startDate?: string;
    }): Promise<AllowedFraCheck>;
    /** `GET /v2/fras/check/expired-sessions` */
    expiredSessions(): Promise<unknown>;
}
/** `core.atcPositions` module. */
export declare class CoreAtcPositions {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/ATCPositions/{id}/fras`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.isActive Get fras on their state
     * @param query.members Get fras for members
     * @param query.positions Get fras for control
     */
    fras(id: number, query?: {
        page?: number;
        perPage?: number;
        isActive?: boolean;
        members?: boolean;
        positions?: boolean;
    }): Promise<PaginatedFra>;
}
/** `core.subcenters` module. */
export declare class CoreSubcenters {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/subcenters/{id}/fras`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.isActive Get fras on their state
     * @param query.members Get fras for members
     * @param query.positions Get fras for control
     */
    fras(id: number, query?: {
        page?: number;
        perPage?: number;
        isActive?: boolean;
        members?: boolean;
        positions?: boolean;
    }): Promise<PaginatedFra>;
}
/** `core.groups` module. */
export declare class CoreGroups {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/groups`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query?: {
        page?: number;
        perPage?: number;
    }): Promise<PaginatedGroupResponse>;
    /**
     * `GET /v2/groups/{id}`
     * @param id Group Id
     */
    get(id: string): Promise<GroupResponse>;
}
/** `core.permissions.users` module. */
export declare class CorePermissionsUsers {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/permissions/{id}/users`
     * @param id Permission Id
     */
    list(id: string): Promise<unknown>;
    /**
     * `POST /v2/permissions/{id}/users`
     * @param id Permission Id
     */
    create(id: string, body: UserPermissionInstanceRequest): Promise<void>;
    /**
     * `GET /v2/permissions/{permissionId}/users/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId: string, id: number): Promise<unknown>;
    /**
     * `PUT /v2/permissions/{permissionId}/users/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId: string, id: number, body: UserPermissionInstanceRequest): Promise<void>;
    /**
     * `DELETE /v2/permissions/{permissionId}/users/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId: string, id: number): Promise<void>;
}
/** `core.permissions.userStaffPositions` module. */
export declare class CorePermissionsUserStaffPositions {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/permissions/{id}/userStaffPositions`
     * @param id Permission Id
     */
    list(id: string): Promise<unknown>;
    /**
     * `POST /v2/permissions/{id}/userStaffPositions`
     * @param id Permission Id
     */
    create(id: string, body: UserStaffPositionPermissionInstanceRequest): Promise<void>;
    /**
     * `GET /v2/permissions/{permissionId}/userStaffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId: string, id: number): Promise<unknown>;
    /**
     * `PUT /v2/permissions/{permissionId}/userStaffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId: string, id: number, body: UserStaffPositionPermissionInstanceRequest): Promise<void>;
    /**
     * `DELETE /v2/permissions/{permissionId}/userStaffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId: string, id: number): Promise<void>;
}
/** `core.permissions.staffPositions` module. */
export declare class CorePermissionsStaffPositions {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/permissions/{id}/staffPositions`
     * @param id Permission Id
     */
    list(id: string): Promise<unknown>;
    /**
     * `POST /v2/permissions/{id}/staffPositions`
     * @param id Permission Id
     */
    create(id: string, body: StaffPositionPermissionInstanceRequest): Promise<void>;
    /**
     * `GET /v2/permissions/{permissionId}/staffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId: string, id: number): Promise<unknown>;
    /**
     * `PUT /v2/permissions/{permissionId}/staffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId: string, id: number, body: StaffPositionPermissionInstanceRequest): Promise<void>;
    /**
     * `DELETE /v2/permissions/{permissionId}/staffPositions/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId: string, id: number): Promise<void>;
}
/** `core.permissions.departmentTeams` module. */
export declare class CorePermissionsDepartmentTeams {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/permissions/{id}/departmentTeams`
     * @param id Permission Id
     */
    list(id: string): Promise<unknown>;
    /**
     * `POST /v2/permissions/{id}/departmentTeams`
     * @param id Permission Id
     */
    create(id: string, body: DepartmentTeamPermissionInstanceRequest): Promise<void>;
    /**
     * `GET /v2/permissions/{permissionId}/departmentTeams/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId: string, id: number): Promise<unknown>;
    /**
     * `PUT /v2/permissions/{permissionId}/departmentTeams/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId: string, id: number, body: DepartmentTeamPermissionInstanceRequest): Promise<void>;
    /**
     * `DELETE /v2/permissions/{permissionId}/departmentTeams/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId: string, id: number): Promise<void>;
}
/** `core.permissions.departments` module. */
export declare class CorePermissionsDepartments {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/permissions/{id}/departments`
     * @param id Permission Id
     */
    list(id: string): Promise<unknown>;
    /**
     * `POST /v2/permissions/{id}/departments`
     * @param id Permission Id
     */
    create(id: string, body: DepartmentPermissionInstanceRequest): Promise<void>;
    /**
     * `GET /v2/permissions/{permissionId}/departments/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    get(permissionId: string, id: number): Promise<unknown>;
    /**
     * `PUT /v2/permissions/{permissionId}/departments/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    update(permissionId: string, id: number, body: DepartmentPermissionInstanceRequest): Promise<void>;
    /**
     * `DELETE /v2/permissions/{permissionId}/departments/{id}`
     * @param permissionId Permission Id
     * @param id Permission Instance Id
     */
    delete(permissionId: string, id: number): Promise<void>;
}
/** `core.permissions` module. */
export declare class CorePermissions {
    protected readonly http: HttpClient;
    readonly users: CorePermissionsUsers;
    readonly userStaffPositions: CorePermissionsUserStaffPositions;
    readonly staffPositions: CorePermissionsStaffPositions;
    readonly departmentTeams: CorePermissionsDepartmentTeams;
    readonly departments: CorePermissionsDepartments;
    constructor(http: HttpClient);
    /** `GET /v2/permissions` */
    all(): Promise<Permission[]>;
    /** `GET /v2/permissions/{id}` */
    get(id: string): Promise<Permission[]>;
}
/** `core.users` module. */
export declare class CoreUsers {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/users/{vid}/permissions`
     * @param vid User's VID (use 'me' for current logged in user)
     */
    permissions(vid: string): Promise<unknown>;
    /**
     * `GET /v2/users/{vid}/permissions/all`
     * @param vid User's VID (use 'me' for current logged in user)
     * @param query.applicationId Specify the application ID to fetch permissions from
     */
    allPermissions(vid: string, query?: {
        applicationId?: string;
    }): Promise<unknown>;
    /**
     * `GET /v2/users/{vid}/userStaffPositions`
     * @param vid User's VID (use 'me' for current logged in user)
     * OAuth scopes: profile
     */
    staffPositions(vid: string): Promise<UserStaffPositionResponse[]>;
    /**
     * `GET /v2/users/{vid}`
     * @param vid User's VID (use 'me' for current logged in user)
     */
    get(vid: string): Promise<UserResponse>;
    /**
     * `GET /v2/users/staffs`
     * @param query.isSupervisor Returns all network supervisors
     * OAuth scopes: profile
     */
    staffs(query?: {
        isSupervisor?: boolean;
    }): Promise<UserStaff[]>;
    /**
     * `GET /v2/users/staff`
     * @param query.staffEmail Search by staff email (@ivao.aero)
     */
    staffByEmail(query: {
        staffEmail: string;
    }): Promise<UserResponse>;
    /**
     * Currently authenticated user (bearer token required).
     * `GET /v2/users/me`
     */
    me(): Promise<UserResponse>;
}
/** `core.userStaffPositions` module. */
export declare class CoreUserStaffPositions {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/userStaffPositions/{id}/permissions`
     * @param id User Staff Position Id
     */
    permissions(id: number): Promise<unknown>;
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
    list(query?: {
        page?: number;
        perPage?: number;
        isVacant?: boolean;
        userId?: string;
        centerId?: string;
        divisionId?: string;
        departmentId?: string;
        departmentTeamId?: string;
        staffPositionId?: string;
    }): Promise<PaginatedUserStaffPositionResponse>;
    /**
     * `GET /v2/userStaffPositions/{id}`
     * @param id Staff Position Id
     */
    get(id: string): Promise<UserStaffPositionResponse>;
}
/** `core.staffPositions` module. */
export declare class CoreStaffPositions {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/staffPositions/{id}/permissions`
     * @param id Staff Position Id
     */
    permissions(id: string): Promise<unknown>;
    /**
     * `GET /v2/staffPositions`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.departmentId ID of the department
     * @param query.departmentTeamId ID of the department team
     * @param query.type Staff Position Type
     */
    list(query?: {
        page?: number;
        perPage?: number;
        departmentId?: string;
        departmentTeamId?: string;
        type?: "HQ" | "DIV";
    }): Promise<PaginatedStaffPositionResponse>;
    /**
     * `GET /v2/staffPositions/{id}`
     * @param id Staff Position Id
     */
    get(id: string): Promise<StaffPositionResponse>;
}
/** `core.settings` module. */
export declare class CoreSettings {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/users/me/settings`
     * @param query.default Include default settings when you are requesting other app settings
     * OAuth scopes: configuration
     */
    all(query: {
        default: boolean;
    }): Promise<Record<string, unknown>>;
    /**
     * `PUT /v2/users/me/settings`
     * OAuth scopes: configuration
     */
    update(body: SettingRequest): Promise<SettingRequest>;
    /**
     * `GET /v2/users/me/settings/{type}`
     * @param type Application id
     * @param query.default Include default settings when you are requesting other app settings
     * OAuth scopes: configuration
     */
    byType(type: string, query: {
        default: boolean;
    }): Promise<Record<string, unknown>>;
    /**
     * `PUT /v2/users/me/settings/{type}`
     * @param type Application id
     * OAuth scopes: configuration
     */
    updateType(type: string, body: SettingRequest): Promise<SettingRequest>;
    /**
     * `DELETE /v2/users/me/settings/{type}/{key}`
     * @param type Application id
     * @param key The setting key to be deleted
     * OAuth scopes: configuration
     */
    delete(type: string, key: string): Promise<void>;
}
/**
 * IVAO Core API: users, divisions, staff, permissions, settings and FRAs.
 * Generated from tools/specs/core.json.
 */
export declare class CoreApi {
    protected readonly http: HttpClient;
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
    constructor(http: HttpClient);
}
