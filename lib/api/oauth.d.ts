import { HttpClient } from '../http';
import { Jwks, OpenIdConfiguration } from '../types/manual';
import { AuthCredentialsRequest, AuthCredentialsResponse, GrantedApp, OAuthApplicationResponse, OAuthConsentResponse, OAuthProvisionRequest, OAuthScopeResponse, OAuthTokenRequest, OAuthTokenResponse, OAuthTokenRevokeRequest } from '../types/oauth';
/** `oauth.auth` module. */
export declare class OAuthAuth {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * Internal use only
     * `POST /v2/auth/credentials`
     * @param query.permissions Include user's permissions in response payload (default: False)
     * OAuth scopes: profile
     */
    credentials(body: AuthCredentialsRequest, query?: {
        permissions?: boolean;
    }): Promise<AuthCredentialsResponse>;
}
/** `oauth.grantedApps` module. */
export declare class OAuthGrantedApps {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * List granted OAuth applications for current user
     * `GET /v2/users/{vid}/oauth/granted-apps`
     * @param vid User's VID (use 'me' for current logged in user)
     */
    list(vid: string): Promise<GrantedApp[]>;
    /**
     * Revoke access to an OAuth application
     * `DELETE /v2/users/{vid}/oauth/granted-apps/{applicationId}`
     * @param vid User's VID (use 'me' for current logged in user)
     * @param applicationId Application ID to revoke access from
     */
    revoke(vid: string, applicationId: string): Promise<void>;
}
/** `oauth.wellKnown` module. */
export declare class OAuthWellKnown {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /** `GET /.well-known/jwks.json` */
    jwks(): Promise<Jwks>;
    /** `GET /.well-known/openid-configuration` */
    openidConfiguration(): Promise<OpenIdConfiguration>;
}
/** `oauth.scopes` module. */
export declare class OAuthScopes {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * Internal use only
     * `GET /v2/oauth/scopes`
     * @param query.ids Scope ids
     */
    list(query?: {
        ids?: string[];
    }): Promise<OAuthScopeResponse[]>;
}
/** `oauth.applications` module. */
export declare class OAuthApplications {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * Internal use only
     * `GET /v2/oauth/applications/{applicationId}`
     * @param applicationId Application client id
     */
    get(applicationId: string): Promise<OAuthApplicationResponse>;
    /**
     * Internal use only
     * `GET /v2/oauth/applications/{applicationId}/consents/{userId}`
     * @param applicationId Application id
     * @param userId User id
     */
    consents(applicationId: string, userId: string): Promise<OAuthConsentResponse[]>;
}
/**
 * IVAO OAuth / SSO API: tokens, scopes, applications and granted apps.
 * Generated from tools/specs/oauth.json.
 */
export declare class OAuthApi {
    protected readonly http: HttpClient;
    readonly auth: OAuthAuth;
    readonly grantedApps: OAuthGrantedApps;
    readonly wellKnown: OAuthWellKnown;
    readonly scopes: OAuthScopes;
    readonly applications: OAuthApplications;
    constructor(http: HttpClient);
    /**
     * Internal use only
     * `POST /v2/oauth/provision`
     */
    provisionCode(body: OAuthProvisionRequest): Promise<unknown>;
    /** `POST /v2/oauth/token` */
    token(body: OAuthTokenRequest): Promise<OAuthTokenResponse>;
    /** `POST /v2/oauth/token/revoke` */
    revokeToken(body: OAuthTokenRevokeRequest): Promise<unknown>;
}
