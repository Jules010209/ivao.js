import { HttpClient } from '../http';
import { FriendDeleteResponse, FriendResponse } from '../types/webeye';
/** `webeye.friends` module. */
export declare class WebeyeFriends {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * List of friends
     * `GET /v2/webeye/friends`
     * OAuth scopes: friends:read
     */
    list(): Promise<FriendResponse[]>;
    /**
     * Add a friend
     * `POST /v2/webeye/friends/{vid}`
     * @param vid VID of the friend to add
     * OAuth scopes: friends:write
     */
    add(vid: number): Promise<FriendResponse>;
    /**
     * Remove a friend
     * `DELETE /v2/webeye/friends/{vid}`
     * @param vid VID of the friend to remove
     * OAuth scopes: friends:write
     */
    remove(vid: number): Promise<FriendDeleteResponse>;
}
/**
 * IVAO Webeye API: friends management (user token required).
 * Generated from tools/specs/webeye.json.
 */
export declare class WebeyeApi {
    protected readonly http: HttpClient;
    readonly friends: WebeyeFriends;
    constructor(http: HttpClient);
}
