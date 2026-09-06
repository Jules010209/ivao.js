/** OpenAPI: FriendUserDto (webeye) */
export interface FriendUser {
    id: number;
    divisionId: string;
    firstName: string;
    lastName: string;
}
/** OpenAPI: FriendSessionDto (webeye) */
export interface FriendSession {
    id: number;
    callsign: string;
    userId: number;
    connectionType: string;
    serverId: number;
    time: number;
    /** Format: date-time */
    createdAt: string;
}
/** OpenAPI: FriendResponseDto (webeye) */
export interface FriendResponse {
    userId: number;
    friendId: number;
    friend: FriendUser;
    sessions: FriendSession[];
    /** Format: date-time */
    createdAt: string;
}
/** OpenAPI: FriendDeleteResponseDto (webeye) */
export interface FriendDeleteResponse {
    userId: number;
    friendId: number;
    /** Format: date-time */
    createdAt: string;
}
