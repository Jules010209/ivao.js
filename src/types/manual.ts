// Hand-written types for endpoints whose response is not described in the IVAO swagger.

import { Language } from './data';
import { SectorFile } from './data';

/** `GET /v2/sectors/{sectorId}/files/{id}` */
export interface SectorFileExtend extends SectorFile {
    airacId: number;
}

/** `GET /v2/divisions/{id}/languages` */
export interface DivisionLanguage {
    id: number;
    languageId: string;
    divisionId: string;
    isNative: boolean;
    language: Language;
}

/** `GET /.well-known/jwks.json` */
export interface Jwks {
    keys: Array<{
        kty: string;
        use?: string;
        kid?: string;
        alg?: string;
        n?: string;
        e?: string;
        [key: string]: unknown;
    }>;
}

/** `GET /.well-known/openid-configuration` */
export interface OpenIdConfiguration {
    issuer: string;
    authorization_endpoint: string;
    token_endpoint: string;
    userinfo_endpoint?: string;
    jwks_uri: string;
    revocation_endpoint?: string;
    scopes_supported?: string[];
    response_types_supported?: string[];
    grant_types_supported?: string[];
    [key: string]: unknown;
}
