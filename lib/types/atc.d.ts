import { Paginated } from './common';
/** OpenAPI: UserSubQuery (atc) */
export interface UserSubQuery {
    id: number;
    divisionId: string;
    firstName: string;
    lastName: string;
}
/** OpenAPI: AtcPositionDto (atc) */
export interface AtcPosition {
    id: number;
    airportId: string;
    atcCallsign: string;
    military: boolean;
    frequency: number;
    composePosition: string;
}
/** OpenAPI: SubcenterDto (atc) */
export interface AtcSubcenter {
    id: number;
    centerId: string;
    atcCallsign: string;
    military: boolean;
    frequency: number;
    composePosition: string;
}
/** OpenAPI: SchedulingTrainingType (atc) */
export type SchedulingTrainingType = "training" | "exam";
/** OpenAPI: BookingResponseDto (atc) */
export interface BookingResponse {
    id: number;
    user: UserSubQuery;
    atcPosition: string;
    atcPositionRef: AtcPosition;
    subcenter: string;
    subcenterRef: AtcSubcenter;
    /** Format: date-time */
    startDate: string;
    /** Format: date-time */
    endDate: string;
    voice: boolean;
    training: SchedulingTrainingType;
    /** Format: date-time */
    createdAt: string;
}
/** OpenAPI: PaginatedBookings (atc) */
export type PaginatedBookings = Paginated<BookingResponse>;
/** OpenAPI: BookingRequestDto (atc) */
export interface BookingRequest {
    atcPosition: string;
    voice: boolean;
    training: SchedulingTrainingType;
    startDate: string;
    endDate: string;
}
