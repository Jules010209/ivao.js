/** OpenAPI: AuthCredentialsRequestDto (oauth) */
export interface AuthCredentialsRequest {
    username: string;
    password: string;
}
/** OpenAPI: NetworkRatingDto (oauth) */
export interface OAuthNetworkRating {
    name: string;
}
/** OpenAPI: SessionRatingDto (oauth) */
export interface SessionRating {
    name: string;
    shortName: string;
}
/** OpenAPI: UserAttributesBaseRatingsDto (oauth) */
export interface UserAttributesBaseRatings {
    atcRatingId: number;
    networkRatingId: number;
    pilotRatingId: number;
    networkRating: OAuthNetworkRating;
    atcRating: SessionRating;
    pilotRating: SessionRating;
}
/** OpenAPI: UserStaffPositionDto (oauth) */
export interface OAuthUserStaffPosition {
    id: string;
}
/** OpenAPI: AuthCredentialsResponseDto (oauth) */
export interface AuthCredentialsResponse {
    id: number;
    firstName: string;
    lastName: string;
    divisionId: string;
    countryId: string;
    email: string;
    rating: UserAttributesBaseRatings;
    userStaffPositions: OAuthUserStaffPosition[];
    permissions: string[];
}
/** OpenAPI: UserRefreshTokenDto (oauth) */
export interface UserRefreshToken {
    /** Format: date-time */
    createdAt: string;
}
/** OpenAPI: OAuthConsentDto (oauth) */
export interface OAuthConsent {
    scopeId: string;
}
/** OpenAPI: GrantedAppDto (oauth) */
export interface GrantedApp {
    id: string;
    name: string;
    userRefreshTokens: UserRefreshToken[];
    consents: OAuthConsent[];
}
/** OpenAPI: OAuthScopeResponseDto (oauth) */
export interface OAuthScopeResponse {
    id: string;
    description: string;
    isActive: boolean;
}
/** OpenAPI: OAuthProvisionRequestDto (oauth) */
export interface OAuthProvisionRequest {
    clientId: string;
    responseType: string;
    scope: string[];
    userId: number;
    state: string;
    redirectUrl: string;
    codeChallenge: string;
    codeChallengeMethod: string;
    nonce: string;
}
/** OpenAPI: OAuthApplicationUserDetailsDto (oauth) */
export interface OAuthApplicationUserDetails {
    id: number;
    firstName: string;
    lastName: string;
}
/** OpenAPI: OAuthApplicationDivisionDetailsDto (oauth) */
export interface OAuthApplicationDivisionDetails {
    id: string;
    name: string;
    web: string;
}
/** OpenAPI: OAuthApplicationVirtualAirlineDetailsDto (oauth) */
export interface OAuthApplicationVirtualAirlineDetails {
    id: number;
    name: string;
    website: string;
}
/** OpenAPI: OAuthApplicationResponseDto (oauth) */
export interface OAuthApplicationResponse {
    id: string;
    name: string;
    isActive: boolean;
    redirectUrls: string[];
    isHQ: boolean;
    thirdPartyUserId: number;
    thirdPartyUser?: OAuthApplicationUserDetails;
    divisionId: string;
    division?: OAuthApplicationDivisionDetails;
    virtualAirlineId: number;
    virtualAirline?: OAuthApplicationVirtualAirlineDetails;
    allowOnlyActiveUsersLogin: boolean;
    /** Format: date-time */
    createdAt: string;
    /** Format: date-time */
    updatedAt: string;
}
/** OpenAPI: OAuthConsentResponseDto (oauth) */
export interface OAuthConsentResponse {
    userId: number;
    scopeId: string;
    applicationId: string;
}
/** OpenAPI: OAuthTokenRequestDto (oauth) */
export interface OAuthTokenRequest {
    grant_type: string;
    code: string;
    redirect_uri: string;
    client_id: string;
    client_secret: string;
    refresh_token: string;
    password: string;
    username: string;
    scope: string;
    code_verifier: string;
    nonce: string;
}
/** OpenAPI: OAuthTokenResponseDto (oauth) */
export interface OAuthTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
}
/** OpenAPI: OAuthTokenRevokeRequestDto (oauth) */
export interface OAuthTokenRevokeRequest {
    token: string;
    token_type_hint: string;
    client_id: string;
}
