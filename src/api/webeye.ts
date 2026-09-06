/* eslint-disable */
// Generated from tools/specs/webeye.json by tools/generate.js - DO NOT EDIT.

import { HttpClient, p } from '../http';
import { FriendDeleteResponse, FriendResponse } from '../types/webeye';

/** `webeye.friends` module. */
export class WebeyeFriends {
    constructor(protected readonly http: HttpClient) {}

    /**
     * List of friends
     * `GET /v2/webeye/friends`
     * OAuth scopes: friends:read
     */
    list(): Promise<FriendResponse[]> {
        return this.http.request<FriendResponse[]>({ method: 'GET', path: `/v2/webeye/friends`, fallback: [] });
    }

    /**
     * Add a friend
     * `POST /v2/webeye/friends/{vid}`
     * @param vid VID of the friend to add
     * OAuth scopes: friends:write
     */
    add(vid: number): Promise<FriendResponse> {
        return this.http.request<FriendResponse>({ method: 'POST', path: `/v2/webeye/friends/${p(vid)}`, fallback: null });
    }

    /**
     * Remove a friend
     * `DELETE /v2/webeye/friends/{vid}`
     * @param vid VID of the friend to remove
     * OAuth scopes: friends:write
     */
    remove(vid: number): Promise<FriendDeleteResponse> {
        return this.http.request<FriendDeleteResponse>({ method: 'DELETE', path: `/v2/webeye/friends/${p(vid)}`, fallback: null });
    }
}

/**
 * IVAO Webeye API: friends management (user token required).
 * Generated from tools/specs/webeye.json.
 */
export class WebeyeApi {
    readonly friends: WebeyeFriends;

    constructor(protected readonly http: HttpClient) {
        this.friends = new WebeyeFriends(http);
    }
}
