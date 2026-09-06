import { PathLike } from 'fs';
import { HttpClient } from '../http';
import { Author, BaseModel, BaseModelFile, BaseModelFileAuthor, BaseTexture, CFG, CommonTexture, CommonTextureFile, Effect, EffectFile, Model, ModelFile, MtlAircraft, PaginatedAuthor, PaginatedBaseModel, PaginatedPaintkit, PaginatedTexture, Paintkit, PaintkitFile, Script, ScriptFile, Sound, SoundFile, Texture, TextureFile, TextureFileAuthor } from '../types/mtl';
/** `mtl.aircrafts` module. */
export declare class MtlAircrafts {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircrafts/all/textures`
     * @param query.fullRelationships Return all the objects which are related or just the one that match the request params
     * @param query.simulatorId Simulator id
     * @param query.isActive Get Textures base on their state
     * @param query.airlineId Get Textures base on their airline
     * @param query.isFullActive Get Textures base on the full heritage state
     * @param query.hasTextures Get Aircraft that has textures
     * @param query.baseModelId baseModel id
     * @param query.modelId Model id
     */
    allTextures(query?: {
        fullRelationships?: boolean;
        simulatorId?: string;
        isActive?: boolean;
        airlineId?: string;
        isFullActive?: boolean;
        hasTextures?: boolean;
        baseModelId?: string;
        modelId?: string;
    }): Promise<MtlAircraft[]>;
    /**
     * `GET /v2/aircrafts/{id}/textures`
     * @param id Texture Id
     */
    textures(id: string): Promise<BaseTexture[]>;
}
/** `mtl.authors` module. */
export declare class MtlAuthors {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircraftsAuthors`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name Get authors base on their name
     */
    list(query?: {
        page?: number;
        perPage?: number;
        name?: string;
    }): Promise<PaginatedAuthor>;
    /**
     * `GET /v2/aircraftsAuthors/{id}`
     * @param id effect Id
     */
    get(id: string): Promise<Author>;
    /**
     * `GET /v2/aircraftsAuthors/{id}/baseModelsFiles`
     * @param id Sector ID
     */
    baseModelFiles(id: string): Promise<BaseModelFileAuthor>;
    /**
     * `GET /v2/aircraftsAuthors/{id}/TexturesFiles`
     * @param id Sector ID
     */
    textureFiles(id: string): Promise<TextureFileAuthor>;
}
/** `mtl.baseModels` module. */
export declare class MtlBaseModels {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircraftsBaseModels/{id}/files/latest/authors`
     * @param id baseModel ID
     */
    latestFileAuthors(id: string): Promise<BaseModelFileAuthor>;
    /**
     * `GET /v2/aircraftsBaseModels/{baseModelId}/files/{id}/authors`
     * @param baseModelId BaseModel ID
     * @param id BaseModelFile ID
     */
    fileAuthors(baseModelId: string, id: string): Promise<BaseModelFileAuthor>;
    /**
     * `GET /v2/aircraftsBaseModels`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.simulatorId Simulator id
     * @param query.isFullActive Get base models base on the full heritage state
     * @param query.isActive Get models base on their state
     */
    list(query?: {
        page?: number;
        perPage?: number;
        simulatorId?: string;
        isFullActive?: boolean;
        isActive?: boolean;
    }): Promise<PaginatedBaseModel>;
    /**
     * `GET /v2/aircraftsBaseModels/all`
     * @param query.simulatorId Simulator id
     * @param query.isFullActive Get base models base on the full heritage state
     * @param query.isActive Get models base on their state
     */
    all(query?: {
        simulatorId?: string;
        isFullActive?: boolean;
        isActive?: boolean;
    }): Promise<PaginatedBaseModel>;
    /**
     * `GET /v2/aircraftsBaseModels/{id}`
     * @param id BaseModel Id
     */
    get(id: string): Promise<BaseModel>;
    /**
     * `GET /v2/aircraftsBaseModels/{id}/files`
     * @param id BaseModel Id
     */
    files(id: string): Promise<BaseModelFile[]>;
    /**
     * `GET /v2/aircraftsBaseModels/{id}/files/latest`
     * @param id BaseModel Id
     */
    latestFiles(id: string): Promise<BaseModelFile[]>;
    /**
     * `GET /v2/aircraftsBaseModels/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsBaseModels/{baseModelId}/files/{id}`
     * @param baseModelId BaseModel ID
     * @param id BaseModelFile ID
     */
    getFile(baseModelId: string, id: string): Promise<BaseModelFile>;
    /**
     * `GET /v2/aircraftsBaseModels/{baseModelId}/files/{id}/download`
     * @param baseModelId BaseModel ID
     * @param id BaseModelFile ID
     */
    downloadFile(baseModelId: string, id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsBaseModels/{id}/cfg`
     * @param id Aircraft Variant ID
     */
    cfg(id: string): Promise<CFG>;
    /**
     * `GET /v2/aircraftsBaseModels/{id}/effects`
     * @param id AircraftBaseModels ID
     * @param query.isActive Get effects base on their state
     */
    effects(id: string, query?: {
        isActive?: boolean;
    }): Promise<Effect[]>;
    /**
     * `GET /v2/aircraftsBaseModels/{id}/models`
     * @param id AircraftBaseModel ID
     * @param query.simulatorId Simulator id
     * @param query.isActive Get models base on their state
     */
    models(id: string, query?: {
        simulatorId?: string;
        isActive?: boolean;
    }): Promise<Model[]>;
    /**
     * `GET /v2/aircraftsBaseModels/{id}/paintkits`
     * @param query.name Get paintkit base on their name
     * @param query.isActive Get paintkit base on their state
     */
    paintkits(id: number, query?: {
        name?: string;
        isActive?: boolean;
    }): Promise<Paintkit[]>;
}
/** `mtl.aircraftVariants` module. */
export declare class MtlAircraftVariants {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircraftVariants/{id}/baseModels`
     * @param id Aircraft Variant ID
     * @param query.simulatorId Simulator id
     * @param query.isFullActive Get base models base on the full heritage state
     * @param query.isActive Get base models base on their state
     */
    baseModels(id: string, query?: {
        simulatorId?: string;
        isFullActive?: boolean;
        isActive?: boolean;
    }): Promise<BaseModel[]>;
}
/** `mtl.commonTextures` module. */
export declare class MtlCommonTextures {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircraftsCommonTextures/{id}/files`
     * @param id CommonTexture Id
     */
    files(id: string): Promise<CommonTextureFile[]>;
    /**
     * `GET /v2/aircraftsCommonTextures/{id}/files/latest`
     * @param id CommonTexture Id
     */
    latestFiles(id: string): Promise<CommonTextureFile[]>;
    /**
     * `GET /v2/aircraftsCommonTextures/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsCommonTextures/{commonTextureId}/files/{id}`
     * @param commonTextureId CommonTexture ID
     * @param id CommonTextureFile ID
     */
    getFile(commonTextureId: string, id: string): Promise<CommonTextureFile>;
    /**
     * `GET /v2/aircraftsCommonTextures/{commonTextureId}/files/{id}/download`
     * @param commonTextureId CommonTexture ID
     * @param id CommonTextureFile ID
     */
    downloadFile(commonTextureId: string, id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsCommonTextures`
     * @param query.isActive Get common textures based on their state
     */
    all(query?: {
        isActive?: boolean;
    }): Promise<CommonTexture[]>;
    /**
     * `GET /v2/aircraftsCommonTextures/{id}`
     * @param id effect Id
     */
    get(id: string): Promise<CommonTexture>;
}
/** `mtl.models` module. */
export declare class MtlModels {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircraftsModels/{id}/commonTextures`
     * @param id AircraftModels ID
     * @param query.isActive Get effects  on their state
     */
    commonTextures(id: string, query?: {
        isActive?: boolean;
    }): Promise<CommonTexture[]>;
    /**
     * `GET /v2/aircraftsModels/{id}`
     * @param id Model Id
     */
    get(id: string): Promise<Model>;
    /**
     * `GET /v2/aircraftsModels/{id}/files`
     * @param id Model Id
     */
    files(id: string): Promise<ModelFile[]>;
    /**
     * `GET /v2/aircraftsModels/{id}/files/latest`
     * @param id Model Id
     */
    latestFiles(id: string): Promise<ModelFile[]>;
    /**
     * `GET /v2/aircraftsModels/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsModels/{modelId}/files/{id}`
     * @param modelId Model ID
     * @param id ModelFile ID
     */
    getFile(modelId: string, id: string): Promise<ModelFile>;
    /**
     * `GET /v2/aircraftsModels/{modelId}/files/{id}/download`
     * @param modelId Model ID
     * @param id ModelFile ID
     */
    downloadFile(modelId: string, id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsModels/{id}/scripts`
     * @param id AircraftModels ID
     * @param query.isActive Get scripts base on their state
     */
    scripts(id: string, query?: {
        isActive?: boolean;
    }): Promise<Script[]>;
    /**
     * `GET /v2/aircraftsModels/{id}/sounds`
     * @param id AircraftModels ID
     * @param query.isActive Get sounds base on their state
     */
    sounds(id: string, query?: {
        isActive?: boolean;
    }): Promise<Sound[]>;
    /**
     * `GET /v2/aircraftsModels/{id}/textures`
     * @param id AircraftModel ID
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.fullRelationships Return all the objects which are related or just the one that match the request params
     * @param query.simulatorId Simulator id
     * @param query.isActive Get Textures base on their state
     * @param query.airlineId Get Textures base on their airline
     */
    textures(id: string, query?: {
        page?: number;
        perPage?: number;
        fullRelationships?: boolean;
        simulatorId?: string;
        isActive?: boolean;
        airlineId?: string;
    }): Promise<PaginatedTexture>;
}
/** `mtl.effects` module. */
export declare class MtlEffects {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircraftsEffects/{id}/files`
     * @param id Effect Id
     */
    files(id: string): Promise<EffectFile[]>;
    /**
     * `GET /v2/aircraftsEffects/{id}/files/latest`
     * @param id Effect Id
     */
    latestFiles(id: string): Promise<EffectFile[]>;
    /**
     * `GET /v2/aircraftsEffects/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsEffects/{effectId}/files/{id}`
     * @param effectId Effect ID
     * @param id EffectFile ID
     */
    getFile(effectId: string, id: string): Promise<EffectFile>;
    /**
     * `GET /v2/aircraftsEffects/{effectId}/files/{id}/download`
     * @param effectId Effect ID
     * @param id EffectFile ID
     */
    downloadFile(effectId: string, id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsEffects`
     * @param query.isActive Get effects base on their state
     */
    all(query?: {
        isActive?: boolean;
    }): Promise<Effect[]>;
    /**
     * `GET /v2/aircraftsEffects/{id}`
     * @param id effect Id
     */
    get(id: string): Promise<Effect>;
}
/** `mtl.paintkits` module. */
export declare class MtlPaintkits {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircraftsPaintkits`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name Get paintkit base on their name
     * @param query.isActive Get paintkit base on their state
     */
    list(query?: {
        page?: number;
        perPage?: number;
        name?: string;
        isActive?: boolean;
    }): Promise<PaginatedPaintkit>;
    /**
     * `GET /v2/aircraftsPaintkits/{id}`
     * @param id Paintkit Id
     */
    get(id: string): Promise<Paintkit>;
    /**
     * `GET /v2/aircraftsPaintkits/{id}/files`
     * @param id Paintkit Id
     */
    files(id: string): Promise<PaintkitFile[]>;
    /**
     * `GET /v2/aircraftsPaintkits/{id}/files/latest`
     * @param id Paintkit Id
     */
    latestFiles(id: string): Promise<PaintkitFile[]>;
    /**
     * `GET /v2/aircraftsPaintkits/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsPaintkits/{paintkitId}/files/{id}`
     * @param paintkitId Paintkit ID
     * @param id PaintkitFile ID
     */
    getFile(paintkitId: string, id: string): Promise<PaintkitFile>;
    /**
     * `GET /v2/aircraftsPaintkits/{paintkitId}/files/{id}/download`
     * @param paintkitId Paintkit ID
     * @param id PaintkitFile ID
     */
    downloadFile(paintkitId: string, id: string, destination?: PathLike): Promise<Buffer>;
}
/** `mtl.scripts` module. */
export declare class MtlScripts {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircraftsScripts/{id}/files`
     * @param id Script Id
     */
    files(id: string): Promise<ScriptFile[]>;
    /**
     * `GET /v2/aircraftsScripts/{id}/files/latest`
     * @param id Script Id
     */
    latestFiles(id: string): Promise<ScriptFile[]>;
    /**
     * `GET /v2/aircraftsScripts/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsScripts/{scriptId}/files/{id}`
     * @param scriptId Script ID
     * @param id ScriptFile ID
     */
    getFile(scriptId: string, id: string): Promise<ScriptFile>;
    /**
     * `GET /v2/aircraftsScripts/{scriptId}/files/{id}/download`
     * @param scriptId Script ID
     * @param id ScriptFile ID
     */
    downloadFile(scriptId: string, id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsScripts`
     * @param query.isActive Get scripts base on their state
     */
    all(query?: {
        isActive?: boolean;
    }): Promise<Script[]>;
    /**
     * `GET /v2/aircraftsScripts/{id}`
     * @param id script Id
     */
    get(id: string): Promise<Script>;
}
/** `mtl.sounds` module. */
export declare class MtlSounds {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircraftsSounds/{id}/files`
     * @param id Sound Id
     */
    files(id: string): Promise<SoundFile[]>;
    /**
     * `GET /v2/aircraftsSounds/{id}/files/latest`
     * @param id Sound Id
     */
    latestFiles(id: string): Promise<SoundFile[]>;
    /**
     * `GET /v2/aircraftsSounds/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsSounds/{soundId}/files/{id}`
     * @param soundId Sound ID
     * @param id SoundFile ID
     */
    getFile(soundId: string, id: string): Promise<SoundFile>;
    /**
     * `GET /v2/aircraftsSounds/{soundId}/files/{id}/download`
     * @param soundId Sound ID
     * @param id SoundFile ID
     */
    downloadFile(soundId: string, id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsSounds`
     * @param query.isActive Get sounds base on their state
     */
    all(query?: {
        isActive?: boolean;
    }): Promise<Sound[]>;
    /**
     * `GET /v2/aircraftsSounds/{id}`
     * @param id sound Id
     */
    get(id: string): Promise<Sound>;
}
/** `mtl.textures` module. */
export declare class MtlTextures {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    /**
     * `GET /v2/aircraftsTextures/{id}/files/latest/authors`
     * @param id Texture ID
     */
    latestFileAuthors(id: string): Promise<TextureFileAuthor>;
    /**
     * `GET /v2/aircraftsTextures/{TextureId}/files/{id}/authors`
     * @param textureId Texture ID
     * @param id TextureFile ID
     */
    fileAuthors(textureId: string, id: string): Promise<TextureFileAuthor>;
    /**
     * `GET /v2/aircraftsTextures`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.fullRelationships Return all the objects which are related or just the one that match the request params
     * @param query.simulatorId Simulator id
     * @param query.isActive Get Textures base on their state
     * @param query.airlineId Get Textures base on their airline
     * @param query.aircraftId Get Textures base on their aircraft
     * @param query.modelId Model id
     * @param query.baseModelId baseModel id
     * @param query.isFullActive Get Textures base on the full heritage state
     * @param query.textureName Partial name of the texture
     */
    list(query?: {
        page?: number;
        perPage?: number;
        fullRelationships?: boolean;
        simulatorId?: string;
        isActive?: boolean;
        airlineId?: string;
        aircraftId?: string;
        modelId?: string;
        baseModelId?: string;
        isFullActive?: boolean;
        textureName?: string;
    }): Promise<PaginatedTexture>;
    /**
     * `GET /v2/aircraftsTextures/all`
     * @param query.fullRelationships Return all the objects which are related or just the one that match the request params
     * @param query.simulatorId Simulator id
     * @param query.isActive Get Textures base on their state
     * @param query.airlineId Get Textures base on their airline
     * @param query.aircraftId Get Textures base on their aircraft
     * @param query.modelId Model id
     * @param query.baseModelId baseModel id
     * @param query.isFullActive Get Textures base on the full heritage state
     */
    all(query?: {
        fullRelationships?: boolean;
        simulatorId?: string;
        isActive?: boolean;
        airlineId?: string;
        aircraftId?: string;
        modelId?: string;
        baseModelId?: string;
        isFullActive?: boolean;
    }): Promise<Texture>;
    /**
     * `GET /v2/aircraftsTextures/{id}`
     * @param id Texture Id
     */
    get(id: string): Promise<Texture>;
    /**
     * `GET /v2/aircraftsTextures/{id}/files`
     * @param id Texture Id
     */
    files(id: string): Promise<TextureFile[]>;
    /**
     * `GET /v2/aircraftsTextures/{id}/files/latest`
     * @param id Texture Id
     */
    latestFile(id: string): Promise<TextureFile>;
    /**
     * `GET /v2/aircraftsTextures/{id}/files/latest/download`
     * @param id Texture ID
     */
    downloadLatestFile(id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsTextures/{id}/files/latest/image`
     * @param id Texture ID or MTL ID
     */
    latestImage(id: string): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsTextures/{textureId}/files/{id}`
     * @param textureId Texture ID
     * @param id TextureFile ID
     */
    getFile(textureId: string, id: string): Promise<TextureFile>;
    /**
     * `GET /v2/aircraftsTextures/{textureId}/files/{id}/download`
     * @param textureId Texture ID
     * @param id TextureFile ID
     */
    downloadFile(textureId: string, id: string, destination?: PathLike): Promise<Buffer>;
    /**
     * `GET /v2/aircraftsTextures/{textureId}/files/{id}/image`
     * @param textureId Texture ID
     * @param id TextureFile ID
     */
    image(textureId: string, id: string): Promise<Buffer>;
}
/**
 * IVAO MTL API: aircraft models, textures, base models, effects, sounds, scripts and paintkits.
 * Generated from tools/specs/mtl.json.
 */
export declare class MtlApi {
    protected readonly http: HttpClient;
    readonly aircrafts: MtlAircrafts;
    readonly authors: MtlAuthors;
    readonly baseModels: MtlBaseModels;
    readonly aircraftVariants: MtlAircraftVariants;
    readonly commonTextures: MtlCommonTextures;
    readonly models: MtlModels;
    readonly effects: MtlEffects;
    readonly paintkits: MtlPaintkits;
    readonly scripts: MtlScripts;
    readonly sounds: MtlSounds;
    readonly textures: MtlTextures;
    constructor(http: HttpClient);
}
