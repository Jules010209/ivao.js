import { Paginated } from './common';
import { NetworkRating } from './data';
/** OpenAPI: DepartmentResponseDto (core) */
export interface DepartmentResponse {
    id: string;
    name: string;
    description: string;
    /** Format: date-time */
    createdAt: string;
    /** Format: date-time */
    updatedAt: string;
}
/** OpenAPI: PaginatedDepartmentResponseDto (core) */
export type PaginatedDepartmentResponse = Paginated<DepartmentResponse>;
/** OpenAPI: DepartmentTeamResponseDto (core) */
export interface DepartmentTeamResponse {
    id: string;
    name: string;
    description: string;
    department: DepartmentResponse;
    /** Format: date-time */
    createdAt: string;
    /** Format: date-time */
    updatedAt: string;
}
/** OpenAPI: PaginatedDepartmentTeamResponseDto (core) */
export type PaginatedDepartmentTeamResponse = Paginated<DepartmentTeamResponse>;
/** OpenAPI: DivisionDto (core) */
export interface Division {
    id: string;
    name: string;
    web: string;
    mcd: string;
    status: -1 | 0 | 1;
}
/** OpenAPI: PaginatedDivisionDto (core) */
export type PaginatedDivision = Paginated<Division>;
/** OpenAPI: UserHoursDto (core) */
export interface UserHours {
    type: "pilot" | "atc" | "staff";
    /** The user hours for this connection type in seconds. */
    hours: number;
}
/** OpenAPI: BaseRatingDto (core) */
export interface CoreBaseRating {
    id: number;
    name: string;
    shortName: string;
    description: string;
}
/** OpenAPI: UserRatingDto (core) */
export interface UserRating {
    isAtc?: boolean;
    isPilot?: boolean;
    pilotRating?: CoreBaseRating;
    atcRating?: CoreBaseRating;
    networkRating?: NetworkRating;
}
/** OpenAPI: UserStatisticsDto (core) */
export interface UserStatistics {
    hours?: UserHours[];
    rating?: UserRating;
    id: number;
    countryId: string;
    centerId: string;
    createdAt: string;
}
/** OpenAPI: PaginatedUserStatisticsDto (core) */
export type PaginatedUserStatistics = Paginated<UserStatistics>;
/** OpenAPI: UserGCA (core) */
export interface UserGCA {
}
/** OpenAPI: DivisionGCAHoldersDto (core) */
export interface DivisionGCAHolders {
    gcas: UserGCA[];
}
/** OpenAPI: ATCPositionDto (core) */
export interface CoreATCPosition {
    id: number;
    airportId: string;
    atcCallsign: string;
    composePosition: string;
    middleIdentifier: string;
    position: string;
}
/** OpenAPI: SubcenterDto (core) */
export interface Subcenter {
    id: number;
    centerId: string;
    atcCallsign: string;
    composePosition: string;
    middleIdentifier: string;
    position: string;
}
/** OpenAPI: FraExtendedDto (core) */
export interface FraExtended {
    id: number;
    userId: number;
    atcPositionId: number;
    subcenterId: number;
    /** Example: "00:00" */
    startTime: string;
    /** Example: "00:00" */
    endTime: string;
    dayMon: boolean;
    dayTue: boolean;
    dayWed: boolean;
    dayThu: boolean;
    dayFri: boolean;
    daySat: boolean;
    daySun: boolean;
    /** Format: date-time */
    date: string;
    minAtc: number;
    active: boolean;
    atcPosition?: CoreATCPosition;
    subcenter?: Subcenter;
}
/** OpenAPI: PaginatedFraExtendedDto (core) */
export type PaginatedFraExtended = Paginated<FraExtended>;
/** OpenAPI: FraDto (core) */
export interface Fra {
    id: number;
    userId: number;
    atcPositionId: number;
    subcenterId: number;
    /** Example: "00:00" */
    startTime: string;
    /** Example: "00:00" */
    endTime: string;
    dayMon: boolean;
    dayTue: boolean;
    dayWed: boolean;
    dayThu: boolean;
    dayFri: boolean;
    daySat: boolean;
    daySun: boolean;
    /** Format: date-time */
    date: string;
    minAtc: number;
    active: boolean;
}
/** OpenAPI: PaginatedFraDto (core) */
export type PaginatedFra = Paginated<Fra>;
/** OpenAPI: AllowedFraCheckDTO (core) */
export interface AllowedFraCheck {
    message: string;
}
/** OpenAPI: ErrorFraCheckDTO (core) */
export interface ErrorFraCheck {
    message: string;
    statusCode: number;
    error: string;
}
/** OpenAPI: GroupResponseDto (core) */
export interface GroupResponse {
    id: string;
    name: string;
    /** Format: date-time */
    createdAt: string;
    /** Format: date-time */
    updatedAt: string;
}
/** OpenAPI: PaginatedGroupResponseDto (core) */
export type PaginatedGroupResponse = Paginated<GroupResponse>;
/** OpenAPI: UserPermissionInstanceRequestDto (core) */
export interface UserPermissionInstanceRequest {
    properties: unknown;
    allowed: boolean;
    userId: string;
}
/** OpenAPI: UserStaffPositionPermissionInstanceRequestDto (core) */
export interface UserStaffPositionPermissionInstanceRequest {
    properties: unknown;
    allowed: boolean;
    userStaffPositionId: string;
}
/** OpenAPI: StaffPositionPermissionInstanceRequestDto (core) */
export interface StaffPositionPermissionInstanceRequest {
    properties: unknown;
    allowed: boolean;
    staffPositionId: string;
}
/** OpenAPI: DepartmentTeamPermissionInstanceRequestDto (core) */
export interface DepartmentTeamPermissionInstanceRequest {
    properties: unknown;
    allowed: boolean;
    departmentTeamId: string;
}
/** OpenAPI: DepartmentPermissionInstanceRequestDto (core) */
export interface DepartmentPermissionInstanceRequest {
    properties: unknown;
    allowed: boolean;
    departmentId: string;
}
/** OpenAPI: PermissionDto (core) */
export interface Permission {
    id: string;
    description: string;
    properties: unknown;
}
/** OpenAPI: SettingRequestDto (core) */
export interface SettingRequest {
    key: string;
    value: string;
}
/** OpenAPI: StaffPositionResponseDto (core) */
export interface StaffPositionResponse {
    id: string;
    name: string;
    type: "HQ" | "DIV";
    order: number;
    description: string;
    departmentTeam: DepartmentTeamResponse;
    /** Format: date-time */
    createdAt: string;
    /** Format: date-time */
    updatedAt: string;
}
/** OpenAPI: PaginatedStaffPositionResponseDto (core) */
export type PaginatedStaffPositionResponse = Paginated<StaffPositionResponse>;
/** OpenAPI: UserStaffPositionResponseDto (core) */
export interface UserStaffPositionResponse {
    id: string;
    userId: number;
    divisionId: string;
    centerId: string;
    connectAs: string;
    onTrial: boolean;
    description: string;
    remarks: string;
    staffPosition: StaffPositionResponse;
    /** Format: date-time */
    createdAt: string;
    /** Format: date-time */
    updatedAt: string;
}
/** OpenAPI: PaginatedUserStaffPositionResponseDto (core) */
export type PaginatedUserStaffPositionResponse = Paginated<UserStaffPositionResponse>;
/** OpenAPI: UserStaffDetailDto (core) */
export interface UserStaffDetail {
    email: string;
    note: string;
    description: string;
    remark: string;
}
/** OpenAPI: NestedUserFamilyProfileDto (core) */
export interface NestedUserFamilyProfile {
    /** Requires 'discord' scope */
    discordUserId?: string;
}
/** OpenAPI: NestedUserGCADto (core) */
export interface NestedUserGCA {
    divisionId: string;
}
/** OpenAPI: NestedUserGroupDto (core) */
export interface NestedUserGroup {
    id: string;
    name: string;
}
/** OpenAPI: NestedUserVirtualAirlineDto (core) */
export interface NestedUserVirtualAirline {
    id: number;
    name: string;
    airlineId: string;
    divisionId: string;
    website: string;
}
/** OpenAPI: NestedUserPrCreatorDto (core) */
export interface NestedUserPrCreator {
    description: string;
    tier: number;
}
/** OpenAPI: NestedUserProfileDto (core) */
export interface NestedUserProfile {
    /** Requires 'location' scope */
    city?: string;
    /** Requires 'location' scope */
    state?: string;
    /** Requires 'birthday' scope */
    birthday?: string;
}
/** OpenAPI: Department (core) */
export interface Department {
    id: string;
    name: string;
}
/** OpenAPI: DepartmentTeam (core) */
export interface DepartmentTeam {
    id: string;
    name: string;
    department: Department;
}
/** OpenAPI: StaffPosition (core) */
export interface StaffPosition {
    id: string;
    name: string;
    type: string;
    departmentTeam: DepartmentTeam;
}
/** OpenAPI: UserStaffPositionDto (core) */
export interface UserStaffPosition {
    id: string;
    staffPositionId: string;
    divisionId: string;
    centerId: string;
    connectAs: string;
    onTrial: boolean;
    description: string;
    staffPosition: StaffPosition;
}
/** OpenAPI: UserResponseDto (core) */
export interface UserResponse {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    divisionId: string;
    countryId: string;
    languageId: string;
    centerId?: string;
    isStaff: boolean;
    isSupervisor: boolean;
    /** Format: date-time */
    createdAt?: string;
    rating?: UserRating;
    /** The user connection hours for all connection types. */
    hours?: UserHours[];
    userStaffDetails?: UserStaffDetail;
    familyProfile: NestedUserFamilyProfile;
    gcas: NestedUserGCA[];
    /** The membership groups the user belongs to (e.g. HQ_PILOT) */
    groups: NestedUserGroup[];
    ownedVirtualAirlines: NestedUserVirtualAirline[];
    prCreator: NestedUserPrCreator;
    profile: NestedUserProfile;
    publicNickname: string;
    userStaffPositions: UserStaffPosition[];
    /** Requires 'openid' scope */
    sub?: string;
    /** Requires 'openid' scope */
    given_name?: string;
    /** Requires 'openid' scope */
    family_name?: string;
    /** Requires 'openid' scope */
    nickname?: string;
}
/** OpenAPI: UserStaffDetailsEmailDto (core) */
export interface UserStaffDetailsEmail {
    email: string;
}
/** OpenAPI: UserStaffDto (core) */
export interface UserStaff {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    isSupervisor: boolean;
    userStaffPositions: UserStaffPosition[];
    userStaffDetails: UserStaffDetailsEmail;
}
