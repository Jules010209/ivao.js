/** OpenAPI: EventTypeDto (events-api-v1) */
export type EventType = "generic" | "hq_event" | "pde" | "rfe";
/** OpenAPI: RouteDto (events-api-v1) */
export interface EventRoute {
    departureIcao: string;
    arrivalIcao: string;
    route: string;
}
/** OpenAPI: EventsDto (events-api-v1) */
export interface Events {
    id: number;
    /** Format: date-time */
    startDate: string;
    /** Format: date-time */
    endDate: string;
    title: string;
    imageUrl: string;
    description: string;
    infoUrl: string;
    divisions: string[];
    airports: string[];
    eventType: EventType;
    hqeAward: boolean;
    routes?: EventRoute[];
}
