"use strict";
/* eslint-disable */
// Generated from tools/specs/oauth.json by tools/generate.js - DO NOT EDIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthApi = exports.OAuthApplications = exports.OAuthScopes = exports.OAuthWellKnown = exports.OAuthGrantedApps = exports.OAuthAuth = void 0;
const http_1 = require("../http");
/** `oauth.auth` module. */
class OAuthAuth {
    constructor(http) {
        this.http = http;
    }
    /**
     * Internal use only
     * `POST /v2/auth/credentials`
     * @param query.permissions Include user's permissions in response payload (default: False)
     * OAuth scopes: profile
     */
    credentials(body, query) {
        return this.http.request({ method: 'POST', path: `/v2/auth/credentials`, query, body, fallback: null });
    }
}
exports.OAuthAuth = OAuthAuth;
/** `oauth.grantedApps` module. */
class OAuthGrantedApps {
    constructor(http) {
        this.http = http;
    }
    /**
     * List granted OAuth applications for current user
     * `GET /v2/users/{vid}/oauth/granted-apps`
     * @param vid User's VID (use 'me' for current logged in user)
     */
    list(vid) {
        return this.http.request({ method: 'GET', path: `/v2/users/${(0, http_1.p)(vid)}/oauth/granted-apps`, fallback: [] });
    }
    /**
     * Revoke access to an OAuth application
     * `DELETE /v2/users/{vid}/oauth/granted-apps/{applicationId}`
     * @param vid User's VID (use 'me' for current logged in user)
     * @param applicationId Application ID to revoke access from
     */
    revoke(vid, applicationId) {
        return this.http.request({ method: 'DELETE', path: `/v2/users/${(0, http_1.p)(vid)}/oauth/granted-apps/${(0, http_1.p)(applicationId)}` });
    }
}
exports.OAuthGrantedApps = OAuthGrantedApps;
/** `oauth.wellKnown` module. */
class OAuthWellKnown {
    constructor(http) {
        this.http = http;
    }
    /** `GET /.well-known/jwks.json` */
    jwks() {
        return this.http.request({ method: 'GET', path: `/.well-known/jwks.json`, auth: false, fallback: null });
    }
    /** `GET /.well-known/openid-configuration` */
    openidConfiguration() {
        return this.http.request({ method: 'GET', path: `/.well-known/openid-configuration`, auth: false, fallback: null });
    }
}
exports.OAuthWellKnown = OAuthWellKnown;
/** `oauth.scopes` module. */
class OAuthScopes {
    constructor(http) {
        this.http = http;
    }
    /**
     * Internal use only
     * `GET /v2/oauth/scopes`
     * @param query.ids Scope ids
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/oauth/scopes`, query, auth: false, fallback: [] });
    }
}
exports.OAuthScopes = OAuthScopes;
/** `oauth.applications` module. */
class OAuthApplications {
    constructor(http) {
        this.http = http;
    }
    /**
     * Internal use only
     * `GET /v2/oauth/applications/{applicationId}`
     * @param applicationId Application client id
     */
    get(applicationId) {
        return this.http.request({ method: 'GET', path: `/v2/oauth/applications/${(0, http_1.p)(applicationId)}`, fallback: null });
    }
    /**
     * Internal use only
     * `GET /v2/oauth/applications/{applicationId}/consents/{userId}`
     * @param applicationId Application id
     * @param userId User id
     */
    consents(applicationId, userId) {
        return this.http.request({ method: 'GET', path: `/v2/oauth/applications/${(0, http_1.p)(applicationId)}/consents/${(0, http_1.p)(userId)}`, fallback: [] });
    }
}
exports.OAuthApplications = OAuthApplications;
/**
 * IVAO OAuth / SSO API: tokens, scopes, applications and granted apps.
 * Generated from tools/specs/oauth.json.
 */
class OAuthApi {
    constructor(http) {
        this.http = http;
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
    provisionCode(body) {
        return this.http.request({ method: 'POST', path: `/v2/oauth/provision`, body, fallback: null });
    }
    /** `POST /v2/oauth/token` */
    token(body) {
        return this.http.request({ method: 'POST', path: `/v2/oauth/token`, body, auth: false, fallback: null });
    }
    /** `POST /v2/oauth/token/revoke` */
    revokeToken(body) {
        return this.http.request({ method: 'POST', path: `/v2/oauth/token/revoke`, body, auth: false, fallback: null });
    }
}
exports.OAuthApi = OAuthApi;
