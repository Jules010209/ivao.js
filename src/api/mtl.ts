/* eslint-disable */
// Generated from tools/specs/mtl.json by tools/generate.js - DO NOT EDIT.

import { PathLike } from 'fs';
import { HttpClient, p } from '../http';
import { Author, BaseModel, BaseModelFile, BaseModelFileAuthor, BaseTexture, CFG, CommonTexture, CommonTextureFile, Effect, EffectFile, Model, ModelFile, MtlAircraft, PaginatedAuthor, PaginatedBaseModel, PaginatedPaintkit, PaginatedTexture, Paintkit, PaintkitFile, Script, ScriptFile, Sound, SoundFile, Texture, TextureFile, TextureFileAuthor } from '../types/mtl';

/** `mtl.aircrafts` module. */
export class MtlAircrafts {
    constructor(protected readonly http: HttpClient) {}

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
    allTextures(query?: { fullRelationships?: boolean; simulatorId?: string; isActive?: boolean; airlineId?: string; isFullActive?: boolean; hasTextures?: boolean; baseModelId?: string; modelId?: string }): Promise<MtlAircraft[]> {
        return this.http.request<MtlAircraft[]>({ method: 'GET', path: `/v2/aircrafts/all/textures`, query, fallback: [] });
    }

    /**
     * `GET /v2/aircrafts/{id}/textures`
     * @param id Texture Id
     */
    textures(id: string): Promise<BaseTexture[]> {
        return this.http.request<BaseTexture[]>({ method: 'GET', path: `/v2/aircrafts/${p(id)}/textures`, fallback: [] });
    }
}

/** `mtl.authors` module. */
export class MtlAuthors {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircraftsAuthors`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name Get authors base on their name
     */
    list(query?: { page?: number; perPage?: number; name?: string }): Promise<PaginatedAuthor> {
        return this.http.request<PaginatedAuthor>({ method: 'GET', path: `/v2/aircraftsAuthors`, query, fallback: null });
    }

    /**
     * `GET /v2/aircraftsAuthors/{id}`
     * @param id effect Id
     */
    get(id: string): Promise<Author> {
        return this.http.request<Author>({ method: 'GET', path: `/v2/aircraftsAuthors/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsAuthors/{id}/baseModelsFiles`
     * @param id Sector ID
     */
    baseModelFiles(id: string): Promise<BaseModelFileAuthor> {
        return this.http.request<BaseModelFileAuthor>({ method: 'GET', path: `/v2/aircraftsAuthors/${p(id)}/baseModelsFiles`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsAuthors/{id}/TexturesFiles`
     * @param id Sector ID
     */
    textureFiles(id: string): Promise<TextureFileAuthor> {
        return this.http.request<TextureFileAuthor>({ method: 'GET', path: `/v2/aircraftsAuthors/${p(id)}/TexturesFiles`, fallback: null });
    }
}

/** `mtl.baseModels` module. */
export class MtlBaseModels {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircraftsBaseModels/{id}/files/latest/authors`
     * @param id baseModel ID
     */
    latestFileAuthors(id: string): Promise<BaseModelFileAuthor> {
        return this.http.request<BaseModelFileAuthor>({ method: 'GET', path: `/v2/aircraftsBaseModels/${p(id)}/files/latest/authors`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsBaseModels/{baseModelId}/files/{id}/authors`
     * @param baseModelId BaseModel ID
     * @param id BaseModelFile ID
     */
    fileAuthors(baseModelId: string, id: string): Promise<BaseModelFileAuthor> {
        return this.http.request<BaseModelFileAuthor>({ method: 'GET', path: `/v2/aircraftsBaseModels/${p(baseModelId)}/files/${p(id)}/authors`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsBaseModels`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.simulatorId Simulator id
     * @param query.isFullActive Get base models base on the full heritage state
     * @param query.isActive Get models base on their state
     */
    list(query?: { page?: number; perPage?: number; simulatorId?: string; isFullActive?: boolean; isActive?: boolean }): Promise<PaginatedBaseModel> {
        return this.http.request<PaginatedBaseModel>({ method: 'GET', path: `/v2/aircraftsBaseModels`, query, fallback: null });
    }

    /**
     * `GET /v2/aircraftsBaseModels/all`
     * @param query.simulatorId Simulator id
     * @param query.isFullActive Get base models base on the full heritage state
     * @param query.isActive Get models base on their state
     */
    all(query?: { simulatorId?: string; isFullActive?: boolean; isActive?: boolean }): Promise<PaginatedBaseModel> {
        return this.http.request<PaginatedBaseModel>({ method: 'GET', path: `/v2/aircraftsBaseModels/all`, query, fallback: null });
    }

    /**
     * `GET /v2/aircraftsBaseModels/{id}`
     * @param id BaseModel Id
     */
    get(id: string): Promise<BaseModel> {
        return this.http.request<BaseModel>({ method: 'GET', path: `/v2/aircraftsBaseModels/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsBaseModels/{id}/files`
     * @param id BaseModel Id
     */
    files(id: string): Promise<BaseModelFile[]> {
        return this.http.request<BaseModelFile[]>({ method: 'GET', path: `/v2/aircraftsBaseModels/${p(id)}/files`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsBaseModels/{id}/files/latest`
     * @param id BaseModel Id
     */
    latestFiles(id: string): Promise<BaseModelFile[]> {
        return this.http.request<BaseModelFile[]>({ method: 'GET', path: `/v2/aircraftsBaseModels/${p(id)}/files/latest`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsBaseModels/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsBaseModels/${p(id)}/files/latest/download`, destination });
    }

    /**
     * `GET /v2/aircraftsBaseModels/{baseModelId}/files/{id}`
     * @param baseModelId BaseModel ID
     * @param id BaseModelFile ID
     */
    getFile(baseModelId: string, id: string): Promise<BaseModelFile> {
        return this.http.request<BaseModelFile>({ method: 'GET', path: `/v2/aircraftsBaseModels/${p(baseModelId)}/files/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsBaseModels/{baseModelId}/files/{id}/download`
     * @param baseModelId BaseModel ID
     * @param id BaseModelFile ID
     */
    downloadFile(baseModelId: string, id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsBaseModels/${p(baseModelId)}/files/${p(id)}/download`, destination });
    }

    /**
     * `GET /v2/aircraftsBaseModels/{id}/cfg`
     * @param id Aircraft Variant ID
     */
    cfg(id: string): Promise<CFG> {
        return this.http.request<CFG>({ method: 'GET', path: `/v2/aircraftsBaseModels/${p(id)}/cfg`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsBaseModels/{id}/effects`
     * @param id AircraftBaseModels ID
     * @param query.isActive Get effects base on their state
     */
    effects(id: string, query?: { isActive?: boolean }): Promise<Effect[]> {
        return this.http.request<Effect[]>({ method: 'GET', path: `/v2/aircraftsBaseModels/${p(id)}/effects`, query, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsBaseModels/{id}/models`
     * @param id AircraftBaseModel ID
     * @param query.simulatorId Simulator id
     * @param query.isActive Get models base on their state
     */
    models(id: string, query?: { simulatorId?: string; isActive?: boolean }): Promise<Model[]> {
        return this.http.request<Model[]>({ method: 'GET', path: `/v2/aircraftsBaseModels/${p(id)}/models`, query, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsBaseModels/{id}/paintkits`
     * @param query.name Get paintkit base on their name
     * @param query.isActive Get paintkit base on their state
     */
    paintkits(id: number, query?: { name?: string; isActive?: boolean }): Promise<Paintkit[]> {
        return this.http.request<Paintkit[]>({ method: 'GET', path: `/v2/aircraftsBaseModels/${p(id)}/paintkits`, query, fallback: [] });
    }
}

/** `mtl.aircraftVariants` module. */
export class MtlAircraftVariants {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircraftVariants/{id}/baseModels`
     * @param id Aircraft Variant ID
     * @param query.simulatorId Simulator id
     * @param query.isFullActive Get base models base on the full heritage state
     * @param query.isActive Get base models base on their state
     */
    baseModels(id: string, query?: { simulatorId?: string; isFullActive?: boolean; isActive?: boolean }): Promise<BaseModel[]> {
        return this.http.request<BaseModel[]>({ method: 'GET', path: `/v2/aircraftVariants/${p(id)}/baseModels`, query, fallback: [] });
    }
}

/** `mtl.commonTextures` module. */
export class MtlCommonTextures {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircraftsCommonTextures/{id}/files`
     * @param id CommonTexture Id
     */
    files(id: string): Promise<CommonTextureFile[]> {
        return this.http.request<CommonTextureFile[]>({ method: 'GET', path: `/v2/aircraftsCommonTextures/${p(id)}/files`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsCommonTextures/{id}/files/latest`
     * @param id CommonTexture Id
     */
    latestFiles(id: string): Promise<CommonTextureFile[]> {
        return this.http.request<CommonTextureFile[]>({ method: 'GET', path: `/v2/aircraftsCommonTextures/${p(id)}/files/latest`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsCommonTextures/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsCommonTextures/${p(id)}/files/latest/download`, destination });
    }

    /**
     * `GET /v2/aircraftsCommonTextures/{commonTextureId}/files/{id}`
     * @param commonTextureId CommonTexture ID
     * @param id CommonTextureFile ID
     */
    getFile(commonTextureId: string, id: string): Promise<CommonTextureFile> {
        return this.http.request<CommonTextureFile>({ method: 'GET', path: `/v2/aircraftsCommonTextures/${p(commonTextureId)}/files/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsCommonTextures/{commonTextureId}/files/{id}/download`
     * @param commonTextureId CommonTexture ID
     * @param id CommonTextureFile ID
     */
    downloadFile(commonTextureId: string, id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsCommonTextures/${p(commonTextureId)}/files/${p(id)}/download`, destination });
    }

    /**
     * `GET /v2/aircraftsCommonTextures`
     * @param query.isActive Get common textures based on their state
     */
    all(query?: { isActive?: boolean }): Promise<CommonTexture[]> {
        return this.http.request<CommonTexture[]>({ method: 'GET', path: `/v2/aircraftsCommonTextures`, query, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsCommonTextures/{id}`
     * @param id effect Id
     */
    get(id: string): Promise<CommonTexture> {
        return this.http.request<CommonTexture>({ method: 'GET', path: `/v2/aircraftsCommonTextures/${p(id)}`, fallback: null });
    }
}

/** `mtl.models` module. */
export class MtlModels {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircraftsModels/{id}/commonTextures`
     * @param id AircraftModels ID
     * @param query.isActive Get effects  on their state
     */
    commonTextures(id: string, query?: { isActive?: boolean }): Promise<CommonTexture[]> {
        return this.http.request<CommonTexture[]>({ method: 'GET', path: `/v2/aircraftsModels/${p(id)}/commonTextures`, query, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsModels/{id}`
     * @param id Model Id
     */
    get(id: string): Promise<Model> {
        return this.http.request<Model>({ method: 'GET', path: `/v2/aircraftsModels/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsModels/{id}/files`
     * @param id Model Id
     */
    files(id: string): Promise<ModelFile[]> {
        return this.http.request<ModelFile[]>({ method: 'GET', path: `/v2/aircraftsModels/${p(id)}/files`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsModels/{id}/files/latest`
     * @param id Model Id
     */
    latestFiles(id: string): Promise<ModelFile[]> {
        return this.http.request<ModelFile[]>({ method: 'GET', path: `/v2/aircraftsModels/${p(id)}/files/latest`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsModels/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsModels/${p(id)}/files/latest/download`, destination });
    }

    /**
     * `GET /v2/aircraftsModels/{modelId}/files/{id}`
     * @param modelId Model ID
     * @param id ModelFile ID
     */
    getFile(modelId: string, id: string): Promise<ModelFile> {
        return this.http.request<ModelFile>({ method: 'GET', path: `/v2/aircraftsModels/${p(modelId)}/files/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsModels/{modelId}/files/{id}/download`
     * @param modelId Model ID
     * @param id ModelFile ID
     */
    downloadFile(modelId: string, id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsModels/${p(modelId)}/files/${p(id)}/download`, destination });
    }

    /**
     * `GET /v2/aircraftsModels/{id}/scripts`
     * @param id AircraftModels ID
     * @param query.isActive Get scripts base on their state
     */
    scripts(id: string, query?: { isActive?: boolean }): Promise<Script[]> {
        return this.http.request<Script[]>({ method: 'GET', path: `/v2/aircraftsModels/${p(id)}/scripts`, query, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsModels/{id}/sounds`
     * @param id AircraftModels ID
     * @param query.isActive Get sounds base on their state
     */
    sounds(id: string, query?: { isActive?: boolean }): Promise<Sound[]> {
        return this.http.request<Sound[]>({ method: 'GET', path: `/v2/aircraftsModels/${p(id)}/sounds`, query, fallback: [] });
    }

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
    textures(id: string, query?: { page?: number; perPage?: number; fullRelationships?: boolean; simulatorId?: string; isActive?: boolean; airlineId?: string }): Promise<PaginatedTexture> {
        return this.http.request<PaginatedTexture>({ method: 'GET', path: `/v2/aircraftsModels/${p(id)}/textures`, query, fallback: null });
    }
}

/** `mtl.effects` module. */
export class MtlEffects {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircraftsEffects/{id}/files`
     * @param id Effect Id
     */
    files(id: string): Promise<EffectFile[]> {
        return this.http.request<EffectFile[]>({ method: 'GET', path: `/v2/aircraftsEffects/${p(id)}/files`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsEffects/{id}/files/latest`
     * @param id Effect Id
     */
    latestFiles(id: string): Promise<EffectFile[]> {
        return this.http.request<EffectFile[]>({ method: 'GET', path: `/v2/aircraftsEffects/${p(id)}/files/latest`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsEffects/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsEffects/${p(id)}/files/latest/download`, destination });
    }

    /**
     * `GET /v2/aircraftsEffects/{effectId}/files/{id}`
     * @param effectId Effect ID
     * @param id EffectFile ID
     */
    getFile(effectId: string, id: string): Promise<EffectFile> {
        return this.http.request<EffectFile>({ method: 'GET', path: `/v2/aircraftsEffects/${p(effectId)}/files/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsEffects/{effectId}/files/{id}/download`
     * @param effectId Effect ID
     * @param id EffectFile ID
     */
    downloadFile(effectId: string, id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsEffects/${p(effectId)}/files/${p(id)}/download`, destination });
    }

    /**
     * `GET /v2/aircraftsEffects`
     * @param query.isActive Get effects base on their state
     */
    all(query?: { isActive?: boolean }): Promise<Effect[]> {
        return this.http.request<Effect[]>({ method: 'GET', path: `/v2/aircraftsEffects`, query, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsEffects/{id}`
     * @param id effect Id
     */
    get(id: string): Promise<Effect> {
        return this.http.request<Effect>({ method: 'GET', path: `/v2/aircraftsEffects/${p(id)}`, fallback: null });
    }
}

/** `mtl.paintkits` module. */
export class MtlPaintkits {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircraftsPaintkits`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name Get paintkit base on their name
     * @param query.isActive Get paintkit base on their state
     */
    list(query?: { page?: number; perPage?: number; name?: string; isActive?: boolean }): Promise<PaginatedPaintkit> {
        return this.http.request<PaginatedPaintkit>({ method: 'GET', path: `/v2/aircraftsPaintkits`, query, fallback: null });
    }

    /**
     * `GET /v2/aircraftsPaintkits/{id}`
     * @param id Paintkit Id
     */
    get(id: string): Promise<Paintkit> {
        return this.http.request<Paintkit>({ method: 'GET', path: `/v2/aircraftsPaintkits/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsPaintkits/{id}/files`
     * @param id Paintkit Id
     */
    files(id: string): Promise<PaintkitFile[]> {
        return this.http.request<PaintkitFile[]>({ method: 'GET', path: `/v2/aircraftsPaintkits/${p(id)}/files`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsPaintkits/{id}/files/latest`
     * @param id Paintkit Id
     */
    latestFiles(id: string): Promise<PaintkitFile[]> {
        return this.http.request<PaintkitFile[]>({ method: 'GET', path: `/v2/aircraftsPaintkits/${p(id)}/files/latest`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsPaintkits/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsPaintkits/${p(id)}/files/latest/download`, destination });
    }

    /**
     * `GET /v2/aircraftsPaintkits/{paintkitId}/files/{id}`
     * @param paintkitId Paintkit ID
     * @param id PaintkitFile ID
     */
    getFile(paintkitId: string, id: string): Promise<PaintkitFile> {
        return this.http.request<PaintkitFile>({ method: 'GET', path: `/v2/aircraftsPaintkits/${p(paintkitId)}/files/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsPaintkits/{paintkitId}/files/{id}/download`
     * @param paintkitId Paintkit ID
     * @param id PaintkitFile ID
     */
    downloadFile(paintkitId: string, id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsPaintkits/${p(paintkitId)}/files/${p(id)}/download`, destination });
    }
}

/** `mtl.scripts` module. */
export class MtlScripts {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircraftsScripts/{id}/files`
     * @param id Script Id
     */
    files(id: string): Promise<ScriptFile[]> {
        return this.http.request<ScriptFile[]>({ method: 'GET', path: `/v2/aircraftsScripts/${p(id)}/files`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsScripts/{id}/files/latest`
     * @param id Script Id
     */
    latestFiles(id: string): Promise<ScriptFile[]> {
        return this.http.request<ScriptFile[]>({ method: 'GET', path: `/v2/aircraftsScripts/${p(id)}/files/latest`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsScripts/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsScripts/${p(id)}/files/latest/download`, destination });
    }

    /**
     * `GET /v2/aircraftsScripts/{scriptId}/files/{id}`
     * @param scriptId Script ID
     * @param id ScriptFile ID
     */
    getFile(scriptId: string, id: string): Promise<ScriptFile> {
        return this.http.request<ScriptFile>({ method: 'GET', path: `/v2/aircraftsScripts/${p(scriptId)}/files/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsScripts/{scriptId}/files/{id}/download`
     * @param scriptId Script ID
     * @param id ScriptFile ID
     */
    downloadFile(scriptId: string, id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsScripts/${p(scriptId)}/files/${p(id)}/download`, destination });
    }

    /**
     * `GET /v2/aircraftsScripts`
     * @param query.isActive Get scripts base on their state
     */
    all(query?: { isActive?: boolean }): Promise<Script[]> {
        return this.http.request<Script[]>({ method: 'GET', path: `/v2/aircraftsScripts`, query, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsScripts/{id}`
     * @param id script Id
     */
    get(id: string): Promise<Script> {
        return this.http.request<Script>({ method: 'GET', path: `/v2/aircraftsScripts/${p(id)}`, fallback: null });
    }
}

/** `mtl.sounds` module. */
export class MtlSounds {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircraftsSounds/{id}/files`
     * @param id Sound Id
     */
    files(id: string): Promise<SoundFile[]> {
        return this.http.request<SoundFile[]>({ method: 'GET', path: `/v2/aircraftsSounds/${p(id)}/files`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsSounds/{id}/files/latest`
     * @param id Sound Id
     */
    latestFiles(id: string): Promise<SoundFile[]> {
        return this.http.request<SoundFile[]>({ method: 'GET', path: `/v2/aircraftsSounds/${p(id)}/files/latest`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsSounds/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsSounds/${p(id)}/files/latest/download`, destination });
    }

    /**
     * `GET /v2/aircraftsSounds/{soundId}/files/{id}`
     * @param soundId Sound ID
     * @param id SoundFile ID
     */
    getFile(soundId: string, id: string): Promise<SoundFile> {
        return this.http.request<SoundFile>({ method: 'GET', path: `/v2/aircraftsSounds/${p(soundId)}/files/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsSounds/{soundId}/files/{id}/download`
     * @param soundId Sound ID
     * @param id SoundFile ID
     */
    downloadFile(soundId: string, id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsSounds/${p(soundId)}/files/${p(id)}/download`, destination });
    }

    /**
     * `GET /v2/aircraftsSounds`
     * @param query.isActive Get sounds base on their state
     */
    all(query?: { isActive?: boolean }): Promise<Sound[]> {
        return this.http.request<Sound[]>({ method: 'GET', path: `/v2/aircraftsSounds`, query, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsSounds/{id}`
     * @param id sound Id
     */
    get(id: string): Promise<Sound> {
        return this.http.request<Sound>({ method: 'GET', path: `/v2/aircraftsSounds/${p(id)}`, fallback: null });
    }
}

/** `mtl.textures` module. */
export class MtlTextures {
    constructor(protected readonly http: HttpClient) {}

    /**
     * `GET /v2/aircraftsTextures/{id}/files/latest/authors`
     * @param id Texture ID
     */
    latestFileAuthors(id: string): Promise<TextureFileAuthor> {
        return this.http.request<TextureFileAuthor>({ method: 'GET', path: `/v2/aircraftsTextures/${p(id)}/files/latest/authors`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsTextures/{TextureId}/files/{id}/authors`
     * @param textureId Texture ID
     * @param id TextureFile ID
     */
    fileAuthors(textureId: string, id: string): Promise<TextureFileAuthor> {
        return this.http.request<TextureFileAuthor>({ method: 'GET', path: `/v2/aircraftsTextures/${p(textureId)}/files/${p(id)}/authors`, fallback: null });
    }

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
    list(query?: { page?: number; perPage?: number; fullRelationships?: boolean; simulatorId?: string; isActive?: boolean; airlineId?: string; aircraftId?: string; modelId?: string; baseModelId?: string; isFullActive?: boolean; textureName?: string }): Promise<PaginatedTexture> {
        return this.http.request<PaginatedTexture>({ method: 'GET', path: `/v2/aircraftsTextures`, query, fallback: null });
    }

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
    all(query?: { fullRelationships?: boolean; simulatorId?: string; isActive?: boolean; airlineId?: string; aircraftId?: string; modelId?: string; baseModelId?: string; isFullActive?: boolean }): Promise<Texture> {
        return this.http.request<Texture>({ method: 'GET', path: `/v2/aircraftsTextures/all`, query, fallback: null });
    }

    /**
     * `GET /v2/aircraftsTextures/{id}`
     * @param id Texture Id
     */
    get(id: string): Promise<Texture> {
        return this.http.request<Texture>({ method: 'GET', path: `/v2/aircraftsTextures/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsTextures/{id}/files`
     * @param id Texture Id
     */
    files(id: string): Promise<TextureFile[]> {
        return this.http.request<TextureFile[]>({ method: 'GET', path: `/v2/aircraftsTextures/${p(id)}/files`, fallback: [] });
    }

    /**
     * `GET /v2/aircraftsTextures/{id}/files/latest`
     * @param id Texture Id
     */
    latestFile(id: string): Promise<TextureFile> {
        return this.http.request<TextureFile>({ method: 'GET', path: `/v2/aircraftsTextures/${p(id)}/files/latest`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsTextures/{id}/files/latest/download`
     * @param id Texture ID
     */
    downloadLatestFile(id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsTextures/${p(id)}/files/latest/download`, destination });
    }

    /**
     * `GET /v2/aircraftsTextures/{id}/files/latest/image`
     * @param id Texture ID or MTL ID
     */
    latestImage(id: string): Promise<Buffer> {
        return this.http.buffer({ method: 'GET', path: `/v2/aircraftsTextures/${p(id)}/files/latest/image` });
    }

    /**
     * `GET /v2/aircraftsTextures/{textureId}/files/{id}`
     * @param textureId Texture ID
     * @param id TextureFile ID
     */
    getFile(textureId: string, id: string): Promise<TextureFile> {
        return this.http.request<TextureFile>({ method: 'GET', path: `/v2/aircraftsTextures/${p(textureId)}/files/${p(id)}`, fallback: null });
    }

    /**
     * `GET /v2/aircraftsTextures/{textureId}/files/{id}/download`
     * @param textureId Texture ID
     * @param id TextureFile ID
     */
    downloadFile(textureId: string, id: string, destination?: PathLike): Promise<Buffer> {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsTextures/${p(textureId)}/files/${p(id)}/download`, destination });
    }

    /**
     * `GET /v2/aircraftsTextures/{textureId}/files/{id}/image`
     * @param textureId Texture ID
     * @param id TextureFile ID
     */
    image(textureId: string, id: string): Promise<Buffer> {
        return this.http.buffer({ method: 'GET', path: `/v2/aircraftsTextures/${p(textureId)}/files/${p(id)}/image` });
    }
}

/**
 * IVAO MTL API: aircraft models, textures, base models, effects, sounds, scripts and paintkits.
 * Generated from tools/specs/mtl.json.
 */
export class MtlApi {
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

    constructor(protected readonly http: HttpClient) {
        this.aircrafts = new MtlAircrafts(http);
        this.authors = new MtlAuthors(http);
        this.baseModels = new MtlBaseModels(http);
        this.aircraftVariants = new MtlAircraftVariants(http);
        this.commonTextures = new MtlCommonTextures(http);
        this.models = new MtlModels(http);
        this.effects = new MtlEffects(http);
        this.paintkits = new MtlPaintkits(http);
        this.scripts = new MtlScripts(http);
        this.sounds = new MtlSounds(http);
        this.textures = new MtlTextures(http);
    }
}
