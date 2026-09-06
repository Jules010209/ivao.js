/* eslint-disable */
// Generated from tools/specs/atc.json by tools/generate.js - DO NOT EDIT.

import { HttpClient, p } from '../http';
import { BookingRequest, BookingResponse, PaginatedBookings } from '../types/atc';

/** `atc.bookings` module. */
export class AtcBookings {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/atc/bookings`
     * @param query.date Booking date
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     */
    list(query?: { date?: string; page?: number; perPage?: number }): Promise<PaginatedBookings> {
        return this.http.request<PaginatedBookings>({ method: 'GET', path: `/v2/atc/bookings`, query, fallback: null });
    }

    /**
     * `POST /v2/atc/bookings`
     * OAuth scopes: bookings:write
     */
    create(body: BookingRequest): Promise<BookingResponse> {
        return this.http.request<BookingResponse>({ method: 'POST', path: `/v2/atc/bookings`, body, fallback: null });
    }

    /**
     * `GET /v2/atc/bookings/daily`
     * @param query.position Show bookings for a specific position
     * @param query.date Booking date, if none will use current date
     */
    daily(query?: { position?: string; date?: string }): Promise<BookingResponse[]> {
        return this.http.request<BookingResponse[]>({ method: 'GET', path: `/v2/atc/bookings/daily`, query, fallback: [] });
    }

    /**
     * `GET /v2/atc/bookings/{id}`
     * @param id Booking id
     */
    get(id: number): Promise<BookingResponse> {
        return this.http.request<BookingResponse>({ method: 'GET', path: `/v2/atc/bookings/${p(id)}`, fallback: null });
    }

    /**
     * `PUT /v2/atc/bookings/{id}`
     * @param id Booking id
     * OAuth scopes: bookings:write
     */
    update(id: number, body: BookingRequest): Promise<BookingResponse> {
        return this.http.request<BookingResponse>({ method: 'PUT', path: `/v2/atc/bookings/${p(id)}`, body, fallback: null });
    }

    /**
     * `DELETE /v2/atc/bookings/{id}`
     * @param id Booking id
     * OAuth scopes: bookings:write
     */
    delete(id: number): Promise<BookingResponse> {
        return this.http.request<BookingResponse>({ method: 'DELETE', path: `/v2/atc/bookings/${p(id)}`, fallback: null });
    }
}

/**
 * IVAO ATC Scheduling System: ATC bookings.
 * Generated from tools/specs/atc.json.
 */
export class AtcApi {
    readonly bookings: AtcBookings;

    constructor(protected readonly http: HttpClient) {
        this.bookings = new AtcBookings(http);
    }
}
