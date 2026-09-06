"use strict";
/* eslint-disable */
// Generated from tools/specs/webeye.json by tools/generate.js - DO NOT EDIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebeyeApi = exports.WebeyeFriends = void 0;
const http_1 = require("../http");
/** `webeye.friends` module. */
class WebeyeFriends {
    constructor(http) {
        this.http = http;
    }
    /**
     * List of friends
     * `GET /v2/webeye/friends`
     * OAuth scopes: friends:read
     */
    list() {
        return this.http.request({ method: 'GET', path: `/v2/webeye/friends`, fallback: [] });
    }
    /**
     * Add a friend
     * `POST /v2/webeye/friends/{vid}`
     * @param vid VID of the friend to add
     * OAuth scopes: friends:write
     */
    add(vid) {
        return this.http.request({ method: 'POST', path: `/v2/webeye/friends/${(0, http_1.p)(vid)}`, fallback: null });
    }
    /**
     * Remove a friend
     * `DELETE /v2/webeye/friends/{vid}`
     * @param vid VID of the friend to remove
     * OAuth scopes: friends:write
     */
    remove(vid) {
        return this.http.request({ method: 'DELETE', path: `/v2/webeye/friends/${(0, http_1.p)(vid)}`, fallback: null });
    }
}
exports.WebeyeFriends = WebeyeFriends;
/**
 * IVAO Webeye API: friends management (user token required).
 * Generated from tools/specs/webeye.json.
 */
class WebeyeApi {
    constructor(http) {
        this.http = http;
        this.friends = new WebeyeFriends(http);
    }
}
exports.WebeyeApi = WebeyeApi;
