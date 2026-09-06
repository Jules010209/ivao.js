/* eslint-disable */
// Generated from tools/specs/events-api-v1.json by tools/generate.js - DO NOT EDIT.
// IVAO Events API v1 - IVAO Events API for third-party services to access our scheduled events!

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
