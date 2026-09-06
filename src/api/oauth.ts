/* eslint-disable */
// Generated from tools/specs/oauth.json by tools/generate.js - DO NOT EDIT.

import { HttpClient, p } from '../http';
import { Jwks, OpenIdConfiguration } from '../types/manual';
import { AuthCredentialsRequest, AuthCredentialsResponse, GrantedApp, OAuthApplicationResponse, OAuthConsentResponse, OAuthProvisionRequest, OAuthScopeResponse, OAuthTokenRequest, OAuthTokenResponse, OAuthTokenRevokeRequest } from '../types/oauth';

/** `oauth.auth` module. */
export class OAuthAuth {
    constructor(protected readonly http: HttpClient) {}

    /**
     * Internal use only
     * `POST /v2/auth/credentials`
     * @param query.permissions Include user's permissions in response payload (default: False)
     * OAuth scopes: profile
     */
    credentials(body: AuthCredentialsRequest, query?: { permissions?: boolean }): Promise<AuthCredentialsResponse> {
        return this.http.request<AuthCredentialsResponse>({ method: 'POST', path: `/v2/auth/credentials`, query, body, fallback: null });
    }
}

/** `oauth.grantedApps` module. */
export class OAuthGrantedApps {
    constructor(protected readonly http: HttpClient) {}

    /**
     * List granted OAuth applications for current user
     * `GET /v2/users/{vid}/oauth/granted-apps`
     * @param vid User's VID (use 'me' for current logged in user)
     */
    list(vid: string): Promise<GrantedApp[]> {
        return this.http.request<GrantedApp[]>({ method: 'GET', path: `/v2/users/${p(vid)}/oauth/granted-apps`, fallback: [] });
    }

    /**
     * Revoke access to an OAuth application
     * `DELETE /v2/users/{vid}/oauth/granted-apps/{applicationId}`
     * @param vid User's VID (use 'me' for current logged in user)
     * @param applicationId Application ID to revoke access from
     */
    revoke(vid: string, applicationId: string): Promise<void> {
        return this.http.request<void>({ method: 'DELETE', path: `/v2/users/${p(vid)}/oauth/granted-apps/${p(applicationId)}` });
    }
}

/** `oauth.wellKnown` module. */
export class OAuthWellKnown {
    constructor(protected readonly http: HttpClient) {}

    /** `GET /.well-known/jwks.json` */
    jwks(): Promise<Jwks> {
        return this.http.request<Jwks>({ method: 'GET', path: `/.well-known/jwks.json`, auth: false, fallback: null });
    }

    /** `GET /.well-known/openid-configuration` */
    openidConfiguration(): Promise<OpenIdConfiguration> {
        return this.http.request<OpenIdConfiguration>({ method: 'GET', path: `/.well-known/openid-configuration`, auth: false, fallback: null });
    }
}

/** `oauth.scopes` module. */
export class OAuthScopes {
    constructor(protected readonly http: HttpClient) {}

    /**
     * Internal use only
     * `GET /v2/oauth/scopes`
     * @param query.ids Scope ids
     */
    list(query?: { ids?: string[] }): Promise<OAuthScopeResponse[]> {
        return this.http.request<OAuthScopeResponse[]>({ method: 'GET', path: `/v2/oauth/scopes`, query, auth: false, fallback: [] });
    }
}

/** `oauth.applications` module. */
export class OAuthApplications {
    constructor(protected readonly http: HttpClient) {}

    /**
     * Internal use only
     * `GET /v2/oauth/applications/{applicationId}`
     * @param applicationId Application client id
     */
    get(applicationId: string): Promise<OAuthApplicationResponse> {
        return this.http.request<OAuthApplicationResponse>({ method: 'GET', path: `/v2/oauth/applications/${p(applicationId)}`, fallback: null });
    }

    /**
     * Internal use only
     * `GET /v2/oauth/applications/{applicationId}/consents/{userId}`
     * @param applicationId Application id
     * @param userId User id
     */
    consents(applicationId: string, userId: string): Promise<OAuthConsentResponse[]> {
        return this.http.request<OAuthConsentResponse[]>({ method: 'GET', path: `/v2/oauth/applications/${p(applicationId)}/consents/${p(userId)}`, fallback: [] });
    }
}

/**
 * IVAO OAuth / SSO API: tokens, scopes, applications and granted apps.
 * Generated from tools/specs/oauth.json.
 */
export class OAuthApi {
    readonly auth: OAuthAuth;
    readonly grantedApps: OAuthGrantedApps;
    readonly wellKnown: OAuthWellKnown;
    readonly scopes: OAuthScopes;
    readonly applications: OAuthApplications;

    constructor(protected readonly http: HttpClient) {
        this.auth = new OAuthAuth(http);
        this.grantedApps = new OAuthGrantedApps(http);
        this.wellKnown = new OAuthWellKnown(http);
        this.scopes = new OAuthScopes(http);
        this.applications = new OAuthApplications(http);
    }

    /**
     * Internal use only
     * `POST /v2/oauth/provision`
     */
    provisionCode(body: OAuthProvisionRequest): Promise<unknown> {
        return this.http.request<unknown>({ method: 'POST', path: `/v2/oauth/provision`, body, fallback: null });
    }

    /** `POST /v2/oauth/token` */
    token(body: OAuthTokenRequest): Promise<OAuthTokenResponse> {
        return this.http.request<OAuthTokenResponse>({ method: 'POST', path: `/v2/oauth/token`, body, auth: false, fallback: null });
    }

    /** `POST /v2/oauth/token/revoke` */
    revokeToken(body: OAuthTokenRevokeRequest): Promise<unknown> {
        return this.http.request<unknown>({ method: 'POST', path: `/v2/oauth/token/revoke`, body, auth: false, fallback: null });
    }
}
