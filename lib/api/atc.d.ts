import { HttpClient } from '../http';
import { BookingRequest, BookingResponse, PaginatedBookings } from '../types/atc';
/** `atc.bookings` module. */
export declare class AtcBookings {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/atc/bookings`
     * @param query.date Booking date
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query?: {
        date?: string;
        page?: number;
        perPage?: number;
    }): Promise<PaginatedBookings>;
    /**
     * `POST /v2/atc/bookings`
     * OAuth scopes: bookings:write
     */
    create(body: BookingRequest): Promise<BookingResponse>;
    /**
     * `GET /v2/atc/bookings/daily`
     * @param query.position Show bookings for a specific position
     * @param query.date Booking date, if none will use current date
     */
    daily(query?: {
        position?: string;
        date?: string;
    }): Promise<BookingResponse[]>;
    /**
     * `GET /v2/atc/bookings/{id}`
     * @param id Booking id
     */
    get(id: number): Promise<BookingResponse>;
    /**
     * `PUT /v2/atc/bookings/{id}`
     * @param id Booking id
     * OAuth scopes: bookings:write
     */
    update(id: number, body: BookingRequest): Promise<BookingResponse>;
    /**
     * `DELETE /v2/atc/bookings/{id}`
     * @param id Booking id
     * OAuth scopes: bookings:write
     */
    delete(id: number): Promise<BookingResponse>;
}
/**
 * IVAO ATC Scheduling System: ATC bookings.
 * Generated from tools/specs/atc.json.
 */
export declare class AtcApi {
    protected readonly http: HttpClient;
    readonly bookings: AtcBookings;
    constructor(http: HttpClient);
}
