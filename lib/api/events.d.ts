import { HttpClient } from '../http';
import { Events } from '../types/events';
/**
 * IVAO Events API v1: scheduled events.
 * Generated from tools/specs/events-api-v1.json.
 */
export declare class EventsApi {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v1/events`
     * @param query.title Title of the event to search
     * @param query.division Division ISO code to search
     * @param query.airportIcao Airport ICAO code to search
     */
    list(query?: {
        title?: string;
        division?: string;
        airportIcao?: string;
    }): Promise<Events[]>;
    /**
     * `GET /v1/events/{id}`
     * @param id ID of the event to search
     */
    get(id?: number): Promise<Events>;
}
