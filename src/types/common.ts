/** Standard paginated envelope returned by every `list` endpoint. */
export interface Paginated<T> {
    totalItems: number;
    perPage: number;
    page: number;
    pages: number;
    items: T[];
}

/** Error body returned by the IVAO APIs (OpenAPI: SwaggerResponsesDto). */
export interface ApiErrorBody {
    statusCode: number;
    message: string;
    error?: string;
    error_uri?: string;
}
