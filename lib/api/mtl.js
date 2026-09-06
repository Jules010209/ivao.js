"use strict";
/* eslint-disable */
// Generated from tools/specs/mtl.json by tools/generate.js - DO NOT EDIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MtlApi = exports.MtlTextures = exports.MtlSounds = exports.MtlScripts = exports.MtlPaintkits = exports.MtlEffects = exports.MtlModels = exports.MtlCommonTextures = exports.MtlAircraftVariants = exports.MtlBaseModels = exports.MtlAuthors = exports.MtlAircrafts = void 0;
const http_1 = require("../http");
/** `mtl.aircrafts` module. */
class MtlAircrafts {
    constructor(http) {
        this.http = http;
    }
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
    allTextures(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircrafts/all/textures`, query, fallback: [] });
    }
    /**
     * `GET /v2/aircrafts/{id}/textures`
     * @param id Texture Id
     */
    textures(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircrafts/${(0, http_1.p)(id)}/textures`, fallback: [] });
    }
}
exports.MtlAircrafts = MtlAircrafts;
/** `mtl.authors` module. */
class MtlAuthors {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircraftsAuthors`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name Get authors base on their name
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsAuthors`, query, fallback: null });
    }
    /**
     * `GET /v2/aircraftsAuthors/{id}`
     * @param id effect Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsAuthors/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsAuthors/{id}/baseModelsFiles`
     * @param id Sector ID
     */
    baseModelFiles(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsAuthors/${(0, http_1.p)(id)}/baseModelsFiles`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsAuthors/{id}/TexturesFiles`
     * @param id Sector ID
     */
    textureFiles(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsAuthors/${(0, http_1.p)(id)}/TexturesFiles`, fallback: null });
    }
}
exports.MtlAuthors = MtlAuthors;
/** `mtl.baseModels` module. */
class MtlBaseModels {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircraftsBaseModels/{id}/files/latest/authors`
     * @param id baseModel ID
     */
    latestFileAuthors(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsBaseModels/${(0, http_1.p)(id)}/files/latest/authors`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsBaseModels/{baseModelId}/files/{id}/authors`
     * @param baseModelId BaseModel ID
     * @param id BaseModelFile ID
     */
    fileAuthors(baseModelId, id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsBaseModels/${(0, http_1.p)(baseModelId)}/files/${(0, http_1.p)(id)}/authors`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsBaseModels`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.simulatorId Simulator id
     * @param query.isFullActive Get base models base on the full heritage state
     * @param query.isActive Get models base on their state
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsBaseModels`, query, fallback: null });
    }
    /**
     * `GET /v2/aircraftsBaseModels/all`
     * @param query.simulatorId Simulator id
     * @param query.isFullActive Get base models base on the full heritage state
     * @param query.isActive Get models base on their state
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsBaseModels/all`, query, fallback: null });
    }
    /**
     * `GET /v2/aircraftsBaseModels/{id}`
     * @param id BaseModel Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsBaseModels/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsBaseModels/{id}/files`
     * @param id BaseModel Id
     */
    files(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsBaseModels/${(0, http_1.p)(id)}/files`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsBaseModels/{id}/files/latest`
     * @param id BaseModel Id
     */
    latestFiles(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsBaseModels/${(0, http_1.p)(id)}/files/latest`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsBaseModels/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsBaseModels/${(0, http_1.p)(id)}/files/latest/download`, destination });
    }
    /**
     * `GET /v2/aircraftsBaseModels/{baseModelId}/files/{id}`
     * @param baseModelId BaseModel ID
     * @param id BaseModelFile ID
     */
    getFile(baseModelId, id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsBaseModels/${(0, http_1.p)(baseModelId)}/files/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsBaseModels/{baseModelId}/files/{id}/download`
     * @param baseModelId BaseModel ID
     * @param id BaseModelFile ID
     */
    downloadFile(baseModelId, id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsBaseModels/${(0, http_1.p)(baseModelId)}/files/${(0, http_1.p)(id)}/download`, destination });
    }
    /**
     * `GET /v2/aircraftsBaseModels/{id}/cfg`
     * @param id Aircraft Variant ID
     */
    cfg(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsBaseModels/${(0, http_1.p)(id)}/cfg`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsBaseModels/{id}/effects`
     * @param id AircraftBaseModels ID
     * @param query.isActive Get effects base on their state
     */
    effects(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsBaseModels/${(0, http_1.p)(id)}/effects`, query, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsBaseModels/{id}/models`
     * @param id AircraftBaseModel ID
     * @param query.simulatorId Simulator id
     * @param query.isActive Get models base on their state
     */
    models(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsBaseModels/${(0, http_1.p)(id)}/models`, query, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsBaseModels/{id}/paintkits`
     * @param query.name Get paintkit base on their name
     * @param query.isActive Get paintkit base on their state
     */
    paintkits(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsBaseModels/${(0, http_1.p)(id)}/paintkits`, query, fallback: [] });
    }
}
exports.MtlBaseModels = MtlBaseModels;
/** `mtl.aircraftVariants` module. */
class MtlAircraftVariants {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircraftVariants/{id}/baseModels`
     * @param id Aircraft Variant ID
     * @param query.simulatorId Simulator id
     * @param query.isFullActive Get base models base on the full heritage state
     * @param query.isActive Get base models base on their state
     */
    baseModels(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftVariants/${(0, http_1.p)(id)}/baseModels`, query, fallback: [] });
    }
}
exports.MtlAircraftVariants = MtlAircraftVariants;
/** `mtl.commonTextures` module. */
class MtlCommonTextures {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircraftsCommonTextures/{id}/files`
     * @param id CommonTexture Id
     */
    files(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsCommonTextures/${(0, http_1.p)(id)}/files`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsCommonTextures/{id}/files/latest`
     * @param id CommonTexture Id
     */
    latestFiles(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsCommonTextures/${(0, http_1.p)(id)}/files/latest`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsCommonTextures/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsCommonTextures/${(0, http_1.p)(id)}/files/latest/download`, destination });
    }
    /**
     * `GET /v2/aircraftsCommonTextures/{commonTextureId}/files/{id}`
     * @param commonTextureId CommonTexture ID
     * @param id CommonTextureFile ID
     */
    getFile(commonTextureId, id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsCommonTextures/${(0, http_1.p)(commonTextureId)}/files/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsCommonTextures/{commonTextureId}/files/{id}/download`
     * @param commonTextureId CommonTexture ID
     * @param id CommonTextureFile ID
     */
    downloadFile(commonTextureId, id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsCommonTextures/${(0, http_1.p)(commonTextureId)}/files/${(0, http_1.p)(id)}/download`, destination });
    }
    /**
     * `GET /v2/aircraftsCommonTextures`
     * @param query.isActive Get common textures based on their state
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsCommonTextures`, query, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsCommonTextures/{id}`
     * @param id effect Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsCommonTextures/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.MtlCommonTextures = MtlCommonTextures;
/** `mtl.models` module. */
class MtlModels {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircraftsModels/{id}/commonTextures`
     * @param id AircraftModels ID
     * @param query.isActive Get effects  on their state
     */
    commonTextures(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsModels/${(0, http_1.p)(id)}/commonTextures`, query, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsModels/{id}`
     * @param id Model Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsModels/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsModels/{id}/files`
     * @param id Model Id
     */
    files(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsModels/${(0, http_1.p)(id)}/files`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsModels/{id}/files/latest`
     * @param id Model Id
     */
    latestFiles(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsModels/${(0, http_1.p)(id)}/files/latest`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsModels/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsModels/${(0, http_1.p)(id)}/files/latest/download`, destination });
    }
    /**
     * `GET /v2/aircraftsModels/{modelId}/files/{id}`
     * @param modelId Model ID
     * @param id ModelFile ID
     */
    getFile(modelId, id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsModels/${(0, http_1.p)(modelId)}/files/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsModels/{modelId}/files/{id}/download`
     * @param modelId Model ID
     * @param id ModelFile ID
     */
    downloadFile(modelId, id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsModels/${(0, http_1.p)(modelId)}/files/${(0, http_1.p)(id)}/download`, destination });
    }
    /**
     * `GET /v2/aircraftsModels/{id}/scripts`
     * @param id AircraftModels ID
     * @param query.isActive Get scripts base on their state
     */
    scripts(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsModels/${(0, http_1.p)(id)}/scripts`, query, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsModels/{id}/sounds`
     * @param id AircraftModels ID
     * @param query.isActive Get sounds base on their state
     */
    sounds(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsModels/${(0, http_1.p)(id)}/sounds`, query, fallback: [] });
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
    textures(id, query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsModels/${(0, http_1.p)(id)}/textures`, query, fallback: null });
    }
}
exports.MtlModels = MtlModels;
/** `mtl.effects` module. */
class MtlEffects {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircraftsEffects/{id}/files`
     * @param id Effect Id
     */
    files(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsEffects/${(0, http_1.p)(id)}/files`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsEffects/{id}/files/latest`
     * @param id Effect Id
     */
    latestFiles(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsEffects/${(0, http_1.p)(id)}/files/latest`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsEffects/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsEffects/${(0, http_1.p)(id)}/files/latest/download`, destination });
    }
    /**
     * `GET /v2/aircraftsEffects/{effectId}/files/{id}`
     * @param effectId Effect ID
     * @param id EffectFile ID
     */
    getFile(effectId, id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsEffects/${(0, http_1.p)(effectId)}/files/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsEffects/{effectId}/files/{id}/download`
     * @param effectId Effect ID
     * @param id EffectFile ID
     */
    downloadFile(effectId, id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsEffects/${(0, http_1.p)(effectId)}/files/${(0, http_1.p)(id)}/download`, destination });
    }
    /**
     * `GET /v2/aircraftsEffects`
     * @param query.isActive Get effects base on their state
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsEffects`, query, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsEffects/{id}`
     * @param id effect Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsEffects/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.MtlEffects = MtlEffects;
/** `mtl.paintkits` module. */
class MtlPaintkits {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircraftsPaintkits`
     * @param query.page The number of the page
     * @param query.perPage The number of elements per page
     * @param query.name Get paintkit base on their name
     * @param query.isActive Get paintkit base on their state
     */
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsPaintkits`, query, fallback: null });
    }
    /**
     * `GET /v2/aircraftsPaintkits/{id}`
     * @param id Paintkit Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsPaintkits/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsPaintkits/{id}/files`
     * @param id Paintkit Id
     */
    files(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsPaintkits/${(0, http_1.p)(id)}/files`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsPaintkits/{id}/files/latest`
     * @param id Paintkit Id
     */
    latestFiles(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsPaintkits/${(0, http_1.p)(id)}/files/latest`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsPaintkits/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsPaintkits/${(0, http_1.p)(id)}/files/latest/download`, destination });
    }
    /**
     * `GET /v2/aircraftsPaintkits/{paintkitId}/files/{id}`
     * @param paintkitId Paintkit ID
     * @param id PaintkitFile ID
     */
    getFile(paintkitId, id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsPaintkits/${(0, http_1.p)(paintkitId)}/files/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsPaintkits/{paintkitId}/files/{id}/download`
     * @param paintkitId Paintkit ID
     * @param id PaintkitFile ID
     */
    downloadFile(paintkitId, id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsPaintkits/${(0, http_1.p)(paintkitId)}/files/${(0, http_1.p)(id)}/download`, destination });
    }
}
exports.MtlPaintkits = MtlPaintkits;
/** `mtl.scripts` module. */
class MtlScripts {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircraftsScripts/{id}/files`
     * @param id Script Id
     */
    files(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsScripts/${(0, http_1.p)(id)}/files`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsScripts/{id}/files/latest`
     * @param id Script Id
     */
    latestFiles(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsScripts/${(0, http_1.p)(id)}/files/latest`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsScripts/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsScripts/${(0, http_1.p)(id)}/files/latest/download`, destination });
    }
    /**
     * `GET /v2/aircraftsScripts/{scriptId}/files/{id}`
     * @param scriptId Script ID
     * @param id ScriptFile ID
     */
    getFile(scriptId, id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsScripts/${(0, http_1.p)(scriptId)}/files/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsScripts/{scriptId}/files/{id}/download`
     * @param scriptId Script ID
     * @param id ScriptFile ID
     */
    downloadFile(scriptId, id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsScripts/${(0, http_1.p)(scriptId)}/files/${(0, http_1.p)(id)}/download`, destination });
    }
    /**
     * `GET /v2/aircraftsScripts`
     * @param query.isActive Get scripts base on their state
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsScripts`, query, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsScripts/{id}`
     * @param id script Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsScripts/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.MtlScripts = MtlScripts;
/** `mtl.sounds` module. */
class MtlSounds {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircraftsSounds/{id}/files`
     * @param id Sound Id
     */
    files(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsSounds/${(0, http_1.p)(id)}/files`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsSounds/{id}/files/latest`
     * @param id Sound Id
     */
    latestFiles(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsSounds/${(0, http_1.p)(id)}/files/latest`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsSounds/{id}/files/latest/download`
     * @param id Sector ID
     */
    downloadLatestFiles(id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsSounds/${(0, http_1.p)(id)}/files/latest/download`, destination });
    }
    /**
     * `GET /v2/aircraftsSounds/{soundId}/files/{id}`
     * @param soundId Sound ID
     * @param id SoundFile ID
     */
    getFile(soundId, id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsSounds/${(0, http_1.p)(soundId)}/files/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsSounds/{soundId}/files/{id}/download`
     * @param soundId Sound ID
     * @param id SoundFile ID
     */
    downloadFile(soundId, id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsSounds/${(0, http_1.p)(soundId)}/files/${(0, http_1.p)(id)}/download`, destination });
    }
    /**
     * `GET /v2/aircraftsSounds`
     * @param query.isActive Get sounds base on their state
     */
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsSounds`, query, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsSounds/{id}`
     * @param id sound Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsSounds/${(0, http_1.p)(id)}`, fallback: null });
    }
}
exports.MtlSounds = MtlSounds;
/** `mtl.textures` module. */
class MtlTextures {
    constructor(http) {
        this.http = http;
    }
    /**
     * `GET /v2/aircraftsTextures/{id}/files/latest/authors`
     * @param id Texture ID
     */
    latestFileAuthors(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsTextures/${(0, http_1.p)(id)}/files/latest/authors`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsTextures/{TextureId}/files/{id}/authors`
     * @param textureId Texture ID
     * @param id TextureFile ID
     */
    fileAuthors(textureId, id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsTextures/${(0, http_1.p)(textureId)}/files/${(0, http_1.p)(id)}/authors`, fallback: null });
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
    list(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsTextures`, query, fallback: null });
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
    all(query) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsTextures/all`, query, fallback: null });
    }
    /**
     * `GET /v2/aircraftsTextures/{id}`
     * @param id Texture Id
     */
    get(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsTextures/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsTextures/{id}/files`
     * @param id Texture Id
     */
    files(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsTextures/${(0, http_1.p)(id)}/files`, fallback: [] });
    }
    /**
     * `GET /v2/aircraftsTextures/{id}/files/latest`
     * @param id Texture Id
     */
    latestFile(id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsTextures/${(0, http_1.p)(id)}/files/latest`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsTextures/{id}/files/latest/download`
     * @param id Texture ID
     */
    downloadLatestFile(id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsTextures/${(0, http_1.p)(id)}/files/latest/download`, destination });
    }
    /**
     * `GET /v2/aircraftsTextures/{id}/files/latest/image`
     * @param id Texture ID or MTL ID
     */
    latestImage(id) {
        return this.http.buffer({ method: 'GET', path: `/v2/aircraftsTextures/${(0, http_1.p)(id)}/files/latest/image` });
    }
    /**
     * `GET /v2/aircraftsTextures/{textureId}/files/{id}`
     * @param textureId Texture ID
     * @param id TextureFile ID
     */
    getFile(textureId, id) {
        return this.http.request({ method: 'GET', path: `/v2/aircraftsTextures/${(0, http_1.p)(textureId)}/files/${(0, http_1.p)(id)}`, fallback: null });
    }
    /**
     * `GET /v2/aircraftsTextures/{textureId}/files/{id}/download`
     * @param textureId Texture ID
     * @param id TextureFile ID
     */
    downloadFile(textureId, id, destination) {
        return this.http.download({ method: 'GET', path: `/v2/aircraftsTextures/${(0, http_1.p)(textureId)}/files/${(0, http_1.p)(id)}/download`, destination });
    }
    /**
     * `GET /v2/aircraftsTextures/{textureId}/files/{id}/image`
     * @param textureId Texture ID
     * @param id TextureFile ID
     */
    image(textureId, id) {
        return this.http.buffer({ method: 'GET', path: `/v2/aircraftsTextures/${(0, http_1.p)(textureId)}/files/${(0, http_1.p)(id)}/image` });
    }
}
exports.MtlTextures = MtlTextures;
/**
 * IVAO MTL API: aircraft models, textures, base models, effects, sounds, scripts and paintkits.
 * Generated from tools/specs/mtl.json.
 */
class MtlApi {
    constructor(http) {
        this.http = http;
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
exports.MtlApi = MtlApi;
