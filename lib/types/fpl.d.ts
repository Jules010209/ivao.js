import { Paginated } from './common';
/** OpenAPI: BaseUserAircraftDto (fpl) */
export interface BaseUserAircraft {
    id: number;
    registration: string;
    aircraftId: string;
    selcal: string;
}
/** OpenAPI: PaginatedUserAircraftDto (fpl) */
export type PaginatedUserAircraft = Paginated<BaseUserAircraft>;
/** OpenAPI: AircraftRequestDto (fpl) */
export interface AircraftRequest {
    aircraftId: string;
    registration: string;
    selcal: string;
    remarks: string;
    equipments: string[];
    transponderTypes: string[];
    wakeTurbulence: string;
}
/** OpenAPI: UserAircraftDto (fpl) */
export interface UserAircraft {
    id: number;
    registration: string;
    aircraftId: string;
    selcal: string;
    remarks: string;
    equipments: string[];
    transponderTypes: string[];
}
/** OpenAPI: FlightPlanListDto (fpl) */
export interface FlightPlanList {
    id: number;
    callsign: string;
    userId: number;
    aircraftId: string;
    departureId: string;
    arrivalId: string;
    /** Format: date-time */
    eobt: string;
    isArchived: boolean;
}
/** OpenAPI: PaginatedFlightPlanDto (fpl) */
export type PaginatedFlightPlan = Paginated<FlightPlanList>;
/** OpenAPI: CreateFlightPlanDto (fpl) */
export interface CreateFlightPlan {
    callsign: string;
    flightRules: "I" | "V" | "Y" | "Z";
    flightType: "S" | "N" | "G" | "M" | "X";
    aircraftNumber?: number;
    aircraftId: string;
    aircraftWakeTurbulence: "L" | "M" | "H" | "J";
    aircraftEquipments: string[];
    aircraftTransponderTypes: string[];
    departureId: string;
    /** Seconds since 0000UTC */
    departureTime: number;
    cruisingSpeedType: "N" | "M" | "K";
    cruisingSpeed: number;
    altitudeType: "F" | "A" | "S" | "M" | "VFR";
    /** null, if and only if, altitude type is set to VFR */
    altitude?: number;
    route: string;
    arrivalId: string;
    /** time in seconds */
    eet: number;
    alternativeId?: string;
    alternative2Id?: string;
    remarks: string;
    /** time in seconds */
    endurance: number;
    pob: number;
}
/** OpenAPI: FlightPlanShowDto (fpl) */
export interface FlightPlanShow {
    id: number;
    callsign: string;
    userId: number;
    flightRules: "I" | "V" | "Y" | "Z";
    flightType: "S" | "N" | "G" | "M" | "X";
    aircraftNumber?: number;
    aircraftId: string;
    aircraftWakeTurbulence: "L" | "M" | "H" | "J";
    aircraftEquipments: string[];
    aircraftTransponderTypes: string[];
    departureId: string;
    /** Seconds since 0000UTC */
    departureTime: number;
    cruisingSpeedType: "N" | "M" | "K";
    cruisingSpeed: string;
    altitudeType: "F" | "A" | "S" | "M" | "VFR";
    /** null, if and only if, altitude type is set to VFR */
    altitude?: number;
    route: string;
    arrivalId: string;
    /** time in seconds */
    eet: number;
    alternativeId: string;
    alternative2Id?: string;
    remarks: string;
    /** time in seconds */
    endurance: number;
    pob: number;
    /** Format: date-time */
    eobt: string;
    isArchived: boolean;
    pic: string;
    level: string;
    /** Format: date-time */
    updatedAt: string;
}
