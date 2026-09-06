import { Paginated } from './common';
import { AircraftVariant, SimulatorVersion } from './data';
/** OpenAPI: BaseTextureDto (mtl) */
export interface BaseTexture {
    id: number;
    airlineId: string;
    name: string;
    folderExtension: string;
    active: boolean;
}
/** OpenAPI: ManufacturerDto (mtl) */
export interface Manufacturer {
    id: number;
    name: string;
}
/** OpenAPI: AircraftDto (mtl) */
export interface MtlAircraft {
    icaoCode: string;
    iataCode: string;
    description: string;
    model: string;
    wakeTurbulence: string;
    manufactureId: number;
    isMilitary: boolean;
    aircraftTextures: BaseTexture[];
    manufacturer: Manufacturer;
}
/** OpenAPI: AuthorDto (mtl) */
export interface Author {
    id: number;
    userId: string;
    name: string;
    email: string;
    description: string;
}
/** OpenAPI: PaginatedAuthorDto (mtl) */
export type PaginatedAuthor = Paginated<Author>;
/** OpenAPI: BaseModelFileDto (mtl) */
export interface BaseModelFile {
    id: number;
    aircraftBaseModelId: string;
    name: string;
    description: string;
    valid: boolean;
}
/** OpenAPI: BaseModelFileAuthorDto (mtl) */
export interface BaseModelFileAuthor {
    id: number;
    aircraftBaseModelFileId: number;
    aircraftAuthorId: number;
    aircraftAuthor?: Author;
    aircraftBaseModelFile?: BaseModelFile;
}
/** OpenAPI: BaseModelDto (mtl) */
export interface BaseModel {
    id: string;
    aircraftVariantId: string;
    name: string;
    latestFile: BaseModelFile;
    modelFile: string;
    folderExtension: string;
    active: boolean;
    simulatorVersions: SimulatorVersion[];
    aircraftVariant: AircraftVariant[];
}
/** OpenAPI: PaginatedBaseModelDto (mtl) */
export type PaginatedBaseModel = Paginated<BaseModel>;
/** OpenAPI: CFGDto (mtl) */
export interface CFG {
    id: string;
    cfg: string;
}
/** OpenAPI: CommonTextureFileDto (mtl) */
export interface CommonTextureFile {
    id: number;
    aircraftCommonTextureId: string;
    name: string;
    valid: boolean;
}
/** OpenAPI: CommonTextureDto (mtl) */
export interface CommonTexture {
    id: number;
    name: string;
    active: boolean;
    latestFile: CommonTextureFile;
}
/** OpenAPI: EffectFileDto (mtl) */
export interface EffectFile {
    id: number;
    aircraftEffectId: string;
    name: string;
    valid: boolean;
}
/** OpenAPI: EffectDto (mtl) */
export interface Effect {
    id: number;
    name: string;
    active: boolean;
    latestFile: EffectFile;
}
/** OpenAPI: ModelDto (mtl) */
export interface Model {
    id: number;
    aircraftBaseModelId: string;
    name: string;
    folderExtension: string;
    active: boolean;
}
/** OpenAPI: ModelFileDto (mtl) */
export interface ModelFile {
    id: number;
    aircraftModelId: string;
    name: string;
    valid: boolean;
}
/** OpenAPI: PaintkitDto (mtl) */
export interface Paintkit {
    id: number;
    name: string;
    active: boolean;
}
/** OpenAPI: PaginatedPaintkitDto (mtl) */
export type PaginatedPaintkit = Paginated<Paintkit>;
/** OpenAPI: PaintkitFileDto (mtl) */
export interface PaintkitFile {
    id: number;
    aircraftPaintkitId: string;
    name: string;
    valid: boolean;
}
/** OpenAPI: ScriptFileDto (mtl) */
export interface ScriptFile {
    id: number;
    aircraftScriptId: string;
    name: string;
    valid: boolean;
}
/** OpenAPI: ScriptDto (mtl) */
export interface Script {
    id: number;
    name: string;
    active: boolean;
    latestFile: ScriptFile;
}
/** OpenAPI: SoundFileDto (mtl) */
export interface SoundFile {
    id: number;
    aircraftSoundId: string;
    name: string;
    valid: boolean;
}
/** OpenAPI: SoundDto (mtl) */
export interface Sound {
    id: number;
    name: string;
    folderName: string;
    active: boolean;
    latestFile: SoundFile;
}
/** OpenAPI: TextureFileDto (mtl) */
export interface TextureFile {
    id: number;
    aircraftTextureId: string;
    name: string;
    valid: boolean;
}
/** OpenAPI: TextureFileAuthorDto (mtl) */
export interface TextureFileAuthor {
    id: number;
    aircraftTextureFileId: number;
    aircraftAuthorId: number;
    aircraftAuthor?: Author;
    aircraftTextureFile?: TextureFile;
}
/** OpenAPI: ModelExtendedDto (mtl) */
export interface ModelExtended {
    id: number;
    aircraftBaseModelId: string;
    name: string;
    folderExtension: string;
    active: boolean;
    aircraftBaseModel: BaseModel;
    latestFile: ModelFile;
}
/** OpenAPI: TextureDto (mtl) */
export interface Texture {
    id: number;
    airlineId: string;
    name: string;
    folderExtension: string;
    active: boolean;
    aircraftModels: ModelExtended[];
    latestFile: TextureFile;
}
/** OpenAPI: PaginatedTextureDto (mtl) */
export type PaginatedTexture = Paginated<Texture>;
