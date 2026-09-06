'use strict';

/**
 * Generates src/types/<api>.ts and src/api/<api>.ts from the OpenAPI documents in tools/specs
 * and the method mapping in tools/mapping.js.
 *
 *   node tools/generate.js
 */
const fs = require('fs');
const path = require('path');
const mapping = require('./mapping');

const ROOT = path.join(__dirname, '..');
const SPECS = path.join(__dirname, 'specs');
const TYPES_DIR = path.join(ROOT, 'src', 'types');
const API_DIR = path.join(ROOT, 'src', 'api');

const API_ORDER = ['data', 'core', 'tracker', 'oauth', 'mtl', 'fpl', 'webeye', 'status', 'atc', 'events-api-v1', 'auto-atis'];

/** File / prefix names per API. */
const API_META = {
    data: { file: 'data', prefix: 'Data' },
    core: { file: 'core', prefix: 'Core' },
    tracker: { file: 'tracker', prefix: 'Tracker' },
    oauth: { file: 'oauth', prefix: 'OAuth' },
    mtl: { file: 'mtl', prefix: 'Mtl' },
    fpl: { file: 'fpl', prefix: 'Fpl' },
    webeye: { file: 'webeye', prefix: 'Webeye' },
    status: { file: 'status', prefix: 'Status' },
    atc: { file: 'atc', prefix: 'Atc' },
    'events-api-v1': { file: 'events', prefix: 'Event' },
    'auto-atis': { file: 'autoAtis', prefix: 'AutoAtis' },
};

/** Schemas that get an explicit TypeScript name. */
const SCHEMA_RENAMES = {
    'data:BaseSubcenterInterfaces': 'BaseSubcenter',
    'data:Airline': 'NestedAirline',
    'data:MixedVirtualAirlineDTO': 'MixedVirtualAirline',
    'core:AllowedFraCheckDTO': 'AllowedFraCheck',
    'core:ErrorFraCheckDTO': 'ErrorFraCheck',
};

/** Types defined by hand in src/types/common.ts and src/types/manual.ts. */
const COMMON_TYPES = ['Paginated', 'ApiErrorBody'];
const MANUAL_TYPES = ['SectorFileExtend', 'DivisionLanguage', 'Jwks', 'OpenIdConfiguration'];

// ---------------------------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------------------------

const specs = {};
for (const api of API_ORDER) {
    specs[api] = JSON.parse(fs.readFileSync(path.join(SPECS, `${api}.json`), 'utf8'));
}

const canon = (o) => {
    if (Array.isArray(o)) return '[' + o.map(canon).join(',') + ']';
    if (o && typeof o === 'object') return '{' + Object.keys(o).sort().map((k) => JSON.stringify(k) + ':' + canon(o[k])).join(',') + '}';
    return JSON.stringify(o);
};

const upperFirst = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const lowerFirst = (s) => s.charAt(0).toLowerCase() + s.slice(1);
const camel = (s) => lowerFirst(s.replace(/[-_\s]+(\w)/g, (_, c) => c.toUpperCase()));
const pascal = (s) => upperFirst(camel(s));
const isIdent = (s) => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(s);
const propKey = (s) => (isIdent(s) ? s : JSON.stringify(s));
const refName = (ref) => ref.split('/').pop();

const stripDto = (name) => name.replace(/(Dto|DTO)$/, '');

const jsdoc = (lines, indent = '') => {
    const clean = lines.filter((l) => l !== undefined && l !== null && l !== '').map((l) => String(l).replace(/\*\//g, '* /'));
    if (!clean.length) return '';
    if (clean.length === 1) return `${indent}/** ${clean[0]} */\n`;
    return `${indent}/**\n${clean.map((l) => `${indent} * ${l}`).join('\n')}\n${indent} */\n`;
};

// ---------------------------------------------------------------------------------------------
// type registry
// ---------------------------------------------------------------------------------------------

/**
 * registry[api][swaggerName] = { ts, owner, schema, paginatedOf? }
 *  - ts: TypeScript type name
 *  - owner: api whose types file defines it
 */
const registry = {};
const byCanon = {}; // ts base name -> [{ api, canon }]

const isPaginated = (schema) => {
    if (!schema || schema.type !== 'object' || !schema.properties) return false;
    const keys = Object.keys(schema.properties).sort().join(',');
    if (keys !== 'items,page,pages,perPage,totalItems') return false;
    const items = schema.properties.items;
    return items && items.type === 'array' && items.items && items.items.$ref;
};

for (const api of API_ORDER) {
    registry[api] = {};
    const schemas = (specs[api].components || {}).schemas || {};
    for (const [name, schema] of Object.entries(schemas)) {
        if (name === 'SwaggerResponsesDto') {
            registry[api][name] = { ts: 'ApiErrorBody', owner: 'common', schema };
            continue;
        }
        const base = SCHEMA_RENAMES[`${api}:${name}`] || stripDto(name);
        const c = canon(schema);
        const seen = byCanon[base] || (byCanon[base] = []);
        const same = seen.find((s) => s.canon === c);
        if (same) {
            registry[api][name] = { ts: same.ts, owner: same.api, schema, shared: true };
            continue;
        }
        const ts = seen.length === 0 ? base : `${API_META[api].prefix}${base}`;
        seen.push({ api, canon: c, ts });
        registry[api][name] = { ts, owner: api, schema };
    }
}

// Detect name clashes inside a single API file (e.g. renamed or prefixed names colliding).
for (const api of API_ORDER) {
    const names = new Map();
    for (const [sw, info] of Object.entries(registry[api])) {
        if (info.owner !== api) continue;
        if (names.has(info.ts)) throw new Error(`Type name clash in ${api}: ${info.ts} (${sw} and ${names.get(info.ts)})`);
        names.set(info.ts, sw);
    }
}

const resolveRef = (api, ref) => {
    const name = refName(ref);
    const info = registry[api][name];
    if (!info) throw new Error(`Unknown schema ${name} in ${api}`);
    return info;
};

/**
 * Converts a JSON schema to a TypeScript type expression.
 * `used` collects referenced registry entries so the caller can emit imports.
 */
const tsType = (api, schema, used, ctx = {}) => {
    if (!schema) return 'unknown';
    if (schema.$ref) {
        const info = resolveRef(api, schema.$ref);
        used.add(info);
        if (info.schema && isPaginated(info.schema)) {
            // Paginated<X> is emitted as a type alias, importing it is enough.
        }
        return info.ts;
    }
    if (schema.allOf && schema.allOf.length) {
        return schema.allOf.map((s) => tsType(api, s, used, ctx)).join(' & ');
    }
    if (schema.oneOf && schema.oneOf.length) {
        return schema.oneOf.map((s) => tsType(api, s, used, ctx)).join(' | ');
    }
    if (schema.anyOf && schema.anyOf.length) {
        return schema.anyOf.map((s) => tsType(api, s, used, ctx)).join(' | ');
    }
    if (schema.enum) {
        return schema.enum.map((v) => JSON.stringify(v)).join(' | ');
    }
    let type = schema.type;
    if (!type) {
        if (schema.items) type = 'array';
        else if (schema.properties) type = 'object';
        else if (schema.default !== undefined) type = typeof schema.default;
        else if (schema.minimum !== undefined || schema.maximum !== undefined) type = 'number';
        else type = ctx.param ? 'string' : 'unknown';
    }
    switch (type) {
        case 'string':
        case 'number':
        case 'integer':
        case 'boolean':
            return type === 'integer' ? 'number' : type;
        case 'array': {
            const inner = tsType(api, schema.items, used, ctx);
            return /[|&]/.test(inner) ? `(${inner})[]` : `${inner}[]`;
        }
        case 'object': {
            if (schema.properties) {
                const required = new Set(schema.required || []);
                const props = Object.entries(schema.properties).map(([k, v]) => {
                    const t = tsType(api, v, used, ctx) + (v.nullable ? ' | null' : '');
                    return `${propKey(k)}${required.has(k) ? '' : '?'}: ${t}`;
                });
                return `{ ${props.join('; ')} }`;
            }
            if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
                return `Record<string, ${tsType(api, schema.additionalProperties, used, ctx)}>`;
            }
            return ctx.param ? 'string' : 'unknown';
        }
        default:
            return 'unknown';
    }
};

// ---------------------------------------------------------------------------------------------
// types emission
// ---------------------------------------------------------------------------------------------

const emitTypesFile = (api) => {
    const meta = API_META[api];
    const info = specs[api].info || {};
    const out = [];
    const used = new Set();
    const body = [];

    const owned = Object.entries(registry[api]).filter(([, i]) => i.owner === api);
    for (const [swName, entry] of owned) {
        const schema = entry.schema;
        const doc = jsdoc([schema.description, `OpenAPI: ${swName} (${api})`]);
        if (isPaginated(schema)) {
            const inner = tsType(api, schema.properties.items.items, used);
            body.push(`${doc}export type ${entry.ts} = Paginated<${inner}>;\n`);
            continue;
        }
        if (schema.type === 'object' && schema.properties) {
            const required = new Set(schema.required || []);
            const props = Object.entries(schema.properties).map(([k, v]) => {
                const t = tsType(api, v, used) + (v.nullable ? ' | null' : '');
                const pdoc = jsdoc([v.description, v.format ? `Format: ${v.format}` : undefined, v.example !== undefined ? `Example: ${JSON.stringify(v.example)}` : undefined], '    ');
                return `${pdoc}    ${propKey(k)}${required.has(k) ? '' : '?'}: ${t};`;
            });
            body.push(`${doc}export interface ${entry.ts} {\n${props.join('\n')}\n}\n`);
            continue;
        }
        body.push(`${doc}export type ${entry.ts} = ${tsType(api, schema, used)};\n`);
    }

    // imports
    const imports = {};
    for (const u of used) {
        if (u.owner === api) continue;
        (imports[u.owner] = imports[u.owner] || new Set()).add(u.ts);
    }
    const needsPaginated = owned.some(([, e]) => isPaginated(e.schema));
    if (needsPaginated) (imports.common = imports.common || new Set()).add('Paginated');

    out.push('/* eslint-disable */');
    out.push(`// Generated from tools/specs/${api}.json by tools/generate.js - DO NOT EDIT.`);
    out.push(`// ${info.title || api}${info.description ? ' - ' + info.description.replace(/<br\s*\/?>/g, ' ') : ''}`);
    out.push('');
    for (const owner of Object.keys(imports).sort()) {
        const file = owner === 'common' ? 'common' : API_META[owner].file;
        out.push(`import { ${[...imports[owner]].sort().join(', ')} } from './${file}';`);
    }
    if (Object.keys(imports).length) out.push('');
    if (!body.length) body.push('// This API does not declare any schema.\nexport {};\n');
    out.push(body.join('\n'));
    return out.join('\n');
};

// ---------------------------------------------------------------------------------------------
// client emission
// ---------------------------------------------------------------------------------------------

const httpMethodOrder = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options'];

/** Collects all operations of an API with resolved signature information. */
const collectOps = (api) => {
    const spec = specs[api];
    const conf = mapping[api];
    const ops = [];
    const seen = new Set();

    for (const [tpl, item] of Object.entries(spec.paths)) {
        for (const method of httpMethodOrder) {
            const op = item[method];
            if (!op) continue;
            const placements = conf.ops[op.operationId];
            if (!placements) throw new Error(`No mapping for ${api}:${op.operationId} (${method.toUpperCase()} ${tpl})`);
            seen.add(op.operationId);
            for (const p of [].concat(placements)) {
                ops.push(buildOp(api, tpl, method.toUpperCase(), op, p));
            }
        }
    }
    for (const id of Object.keys(conf.ops)) {
        if (!seen.has(id)) throw new Error(`Mapping ${api}:${id} does not exist in the swagger`);
    }
    for (const extra of conf.extra || []) {
        ops.push(buildExtraOp(api, extra));
    }
    return ops;
};

const scopesOf = (op) => {
    const scopes = new Set();
    for (const s of op.security || []) {
        for (const list of Object.values(s)) for (const scope of list) scopes.add(scope);
    }
    return [...scopes];
};

const buildOp = (api, tpl, method, op, place) => {
    const used = new Set();
    const drop = new Set(place.drop || []);
    const placeholders = [...tpl.matchAll(/\{([^}]+)\}/g)].map((m) => m[1]);
    const params = (op.parameters || []).filter((p) => !drop.has(p.name));

    const pathArgs = [];
    const consumed = new Set();
    for (const ph of placeholders) {
        const p = params.find((x) => x.name === ph) || params.find((x) => x.name.toLowerCase() === ph.toLowerCase());
        if (p) consumed.add(p);
        pathArgs.push({
            placeholder: ph,
            name: camel(ph),
            type: p ? tsType(api, p.schema, used, { param: true }) : 'string',
            optional: p ? p.required === false : false,
            description: p && p.description,
        });
    }

    const queryProps = [];
    for (const p of params) {
        if (consumed.has(p)) continue;
        if (p.in === 'header' || p.in === 'cookie') continue;
        const misplaced = p.in === 'path';
        queryProps.push({
            name: p.name,
            type: (place.queryTypes && place.queryTypes[p.name]) || tsType(api, p.schema, used, { param: true }),
            required: !misplaced && p.required === true && !(place.optionalQuery || []).includes(p.name),
            description: p.description,
            deprecated: p.deprecated,
        });
    }

    let bodyType = null;
    let bodyOptional = false;
    if (op.requestBody) {
        const content = op.requestBody.content || {};
        const media = content['application/json'] || content['multipart/form-data'] || content[Object.keys(content)[0]];
        if (media && media.schema) bodyType = tsType(api, media.schema, used);
        bodyOptional = op.requestBody.required === false;
    }
    if (place.body) {
        if (place.body === 'optional') bodyOptional = true;
        else bodyType = place.body;
    }

    let returns = 'unknown';
    let responseSchema = null;
    for (const code of ['200', '201', '202', '204', 'default']) {
        const r = op.responses && op.responses[code];
        if (!r) continue;
        const content = r.content || {};
        const media = content['application/json'];
        if (media && media.schema) responseSchema = media.schema;
        break;
    }
    const has2xx = Object.keys(op.responses || {}).some((c) => c.startsWith('2'));
    if (responseSchema) returns = tsType(api, responseSchema, used);
    else if (method === 'DELETE' || (!has2xx && method !== 'GET')) returns = 'void';
    else if (op.responses && op.responses['204']) returns = 'void';
    if (place.returns) returns = place.returns;
    if (place.kind === 'buffer' || place.kind === 'download') returns = 'Buffer';

    const isArray = /\[\]$/.test(returns) && !/^\(/.test(returns);

    return {
        api,
        method,
        template: tpl,
        at: place.at,
        name: place.name,
        aliases: place.aliases || [],
        kind: place.kind || 'json',
        noAuth: !!place.noAuth,
        summary: op.summary,
        description: op.description,
        deprecated: !!op.deprecated,
        scopes: scopesOf(op),
        pathArgs,
        queryProps,
        bodyType,
        bodyOptional,
        returns,
        fallback: place.kind === 'json' || !place.kind ? (returns === 'void' ? 'undefined' : isArray ? '[]' : 'null') : null,
        used,
        operationId: op.operationId,
    };
};

const buildExtraOp = (api, extra) => {
    const placeholders = [...extra.path.matchAll(/\{([^}]+)\}/g)].map((m) => m[1]);
    const params = extra.params || [];
    const pathArgs = placeholders.map((ph) => {
        const p = params.find((x) => x.name === ph) || {};
        return { placeholder: ph, name: camel(ph), type: p.type || 'string', optional: false, description: p.description };
    });
    const queryProps = params.filter((p) => p.in === 'query').map((p) => ({ name: p.name, type: p.type || 'string', required: !!p.required, description: p.description }));
    const isArray = /\[\]$/.test(extra.returns || '');
    return {
        api,
        method: extra.method,
        template: extra.path,
        at: extra.at,
        name: extra.name,
        aliases: extra.aliases || [],
        kind: extra.kind || 'json',
        noAuth: !!extra.noAuth,
        summary: extra.summary,
        scopes: [],
        pathArgs,
        queryProps,
        bodyType: extra.body || null,
        bodyOptional: false,
        returns: extra.returns || 'unknown',
        fallback: extra.kind ? null : isArray ? '[]' : 'null',
        used: new Set(),
        operationId: null,
    };
};

/** Builds the parameter list and call expression for one operation. */
const signature = (op) => {
    const args = [];
    // An optional path argument may only stay optional when nothing required follows it.
    for (const [i, a] of op.pathArgs.entries()) {
        const laterRequired = op.pathArgs.slice(i + 1).some((x) => !x.optional) || (op.bodyType && !op.bodyOptional) || op.queryProps.some((q) => q.required);
        args.push(`${a.name}${a.optional && !laterRequired ? '?' : ''}: ${a.type}`);
    }
    if (op.bodyType) args.push(`body${op.bodyOptional ? '?' : ''}: ${op.bodyType}`);
    let queryType = null;
    if (op.queryProps.length) {
        const required = op.queryProps.some((q) => q.required);
        queryType = `{ ${op.queryProps.map((q) => `${propKey(q.name)}${q.required ? '' : '?'}: ${q.type}`).join('; ')} }`;
        args.push(`query${required ? '' : '?'}: ${queryType}`);
    }
    if (op.kind === 'download') args.push('destination?: PathLike');
    return { args, queryType };
};

const pathExpr = (op) => {
    let s = op.template;
    for (const a of op.pathArgs) {
        s = s.replace(`{${a.placeholder}}`, `\${p(${a.name})}`);
    }
    return '`' + s + '`';
};

const methodDoc = (op, indent) => {
    const lines = [];
    if (op.summary) lines.push(op.summary);
    if (op.description && op.description !== op.summary) lines.push(op.description);
    if (lines.length) lines.push('');
    lines.push(`\`${op.method} ${op.template}\``);
    for (const a of op.pathArgs) if (a.description) lines.push(`@param ${a.name} ${a.description}`);
    for (const q of op.queryProps) if (q.description) lines.push(`@param query.${q.name} ${q.description}`);
    if (op.scopes.length) lines.push(`OAuth scopes: ${op.scopes.join(', ')}`);
    if (op.deprecated) lines.push('@deprecated Marked as deprecated in the IVAO swagger.');
    return jsdoc(lines, indent);
};

const emitMethod = (op, indent, apiConf) => {
    const { args } = signature(op);
    const callArgs = [];
    for (const a of op.pathArgs) callArgs.push(a.name);
    if (op.bodyType) callArgs.push('body');
    if (op.queryProps.length) callArgs.push('query');
    if (op.kind === 'download') callArgs.push('destination');

    const reqParts = [`method: '${op.method}'`, `path: ${pathExpr(op)}`];
    if (op.queryProps.length) reqParts.push('query');
    if (op.bodyType) reqParts.push('body');
    if (op.noAuth) reqParts.push('auth: false');
    if (apiConf.baseUrlOption) reqParts.push(`baseUrl: this.http.baseUrls.${apiConf.property}`);
    if (op.kind === 'json' && op.fallback !== 'undefined') reqParts.push(`fallback: ${op.fallback}`);

    let call;
    if (op.kind === 'buffer') call = `this.http.buffer({ ${reqParts.join(', ')} })`;
    else if (op.kind === 'download') call = `this.http.download({ ${reqParts.join(', ')}, destination })`;
    else if (op.returns === 'void') call = `this.http.request<void>({ ${reqParts.join(', ')} })`;
    else call = `this.http.request<${op.returns}>({ ${reqParts.join(', ')} })`;

    const ret = `Promise<${op.returns}>`;
    let s = methodDoc(op, indent);
    s += `${indent}${op.name}(${args.join(', ')}): ${ret} {\n${indent}    return ${call};\n${indent}}\n`;
    for (const alias of op.aliases) {
        s += `\n${indent}/** @deprecated Use {@link ${op.name}} instead. */\n`;
        s += `${indent}${alias}(${args.join(', ')}): ${ret} {\n${indent}    return this.${op.name}(${callArgs.join(', ')});\n${indent}}\n`;
    }
    return s;
};

/** Builds a tree of modules from dotted paths. */
const buildTree = (ops) => {
    const root = { name: '', children: {}, ops: [] };
    for (const op of ops) {
        let node = root;
        if (op.at) {
            for (const seg of op.at.split('.')) {
                node = node.children[seg] || (node.children[seg] = { name: seg, children: {}, ops: [] });
            }
        }
        if (node.ops.some((o) => o.name === op.name) || node.ops.some((o) => o.aliases.includes(op.name))) {
            throw new Error(`Duplicate method ${op.api}:${op.at || '<root>'}.${op.name}`);
        }
        for (const alias of op.aliases) {
            if (node.ops.some((o) => o.name === alias || o.aliases.includes(alias))) throw new Error(`Duplicate alias ${op.api}:${op.at}.${alias}`);
        }
        node.ops.push(op);
    }
    return root;
};

const emitClientFile = (api) => {
    const conf = mapping[api];
    const meta = API_META[api];
    const ops = collectOps(api);
    const tree = buildTree(ops);
    const used = new Set();
    for (const op of ops) for (const u of op.used) used.add(u);

    // Collect identifiers from overridden return / body types so they get imported.
    const extraIdents = new Set();
    const collectIdents = (expr) => {
        for (const m of expr.matchAll(/[A-Za-z_$][A-Za-z0-9_$]*/g)) extraIdents.add(m[0]);
    };
    for (const op of ops) {
        collectIdents(op.returns);
        if (op.bodyType) collectIdents(op.bodyType);
    }

    const classes = [];
    const emitNode = (node, pathSegs) => {
        const childEntries = Object.entries(node.children);
        for (const [, child] of childEntries) emitNode(child, [...pathSegs, child.name]);

        const className = pathSegs.length ? `${meta.prefix}${pathSegs.map(pascal).join('')}` : conf.className;
        const lines = [];
        if (!pathSegs.length) lines.push(jsdoc([conf.description, `Generated from tools/specs/${api}.json.`]).trimEnd());
        else lines.push(jsdoc([`\`${conf.property}.${pathSegs.join('.')}\` module.`]).trimEnd());
        lines.push(`export class ${className} {`);
        for (const [, child] of childEntries) {
            const childClass = `${meta.prefix}${[...pathSegs, child.name].map(pascal).join('')}`;
            lines.push(`    readonly ${child.name}: ${childClass};`);
        }
        if (childEntries.length) lines.push('');
        if (!childEntries.length) {
            lines.push('    constructor(protected readonly http: HttpClient) {}');
        } else {
            lines.push('    constructor(protected readonly http: HttpClient) {');
            for (const [, child] of childEntries) {
                const childClass = `${meta.prefix}${[...pathSegs, child.name].map(pascal).join('')}`;
                lines.push(`        this.${child.name} = new ${childClass}(http);`);
            }
            lines.push('    }');
        }
        for (const op of node.ops) {
            lines.push('');
            lines.push(emitMethod(op, '    ', conf).replace(/\n$/, ''));
        }
        // deprecated module aliases (old property names), e.g. 'aircraft' -> 'aircrafts'
        const here = pathSegs.join('.');
        for (const [alias, target] of Object.entries(conf.moduleAliases || {})) {
            const aliasParent = alias.split('.').slice(0, -1).join('.');
            if (aliasParent !== here) continue;
            const aliasName = alias.split('.').pop();
            const targetSegs = target ? target.split('.') : [];
            let expr;
            if (target === here) expr = 'this';
            else if (target.startsWith(here ? `${here}.` : '') && targetSegs.length === pathSegs.length + 1) expr = `this.${targetSegs[targetSegs.length - 1]}`;
            else throw new Error(`Module alias ${api}:${alias} must target the module itself or a direct child`);
            const targetClass = target === here ? className : `${meta.prefix}${targetSegs.map(pascal).join('')}`;
            lines.push('');
            lines.push(`    /** @deprecated Use \`${target}\` instead. */`);
            lines.push(`    get ${aliasName}(): ${targetClass} {`);
            lines.push(`        return ${expr};`);
            lines.push('    }');
        }
        lines.push('}');
        classes.push(lines.join('\n'));
    };
    emitNode(tree, []);

    // imports
    const imports = {};
    const addImport = (owner, ts) => (imports[owner] = imports[owner] || new Set()).add(ts);
    for (const u of used) addImport(u.owner, u.ts);
    const allKnown = new Map();
    for (const a of API_ORDER) for (const info of Object.values(registry[a])) allKnown.set(info.ts, info.owner);
    for (const id of extraIdents) {
        if (COMMON_TYPES.includes(id)) addImport('common', id);
        else if (MANUAL_TYPES.includes(id)) addImport('manual', id);
        else if (allKnown.has(id)) addImport(allKnown.get(id), id);
    }
    const needsPathLike = ops.some((o) => o.kind === 'download');

    const out = [];
    out.push('/* eslint-disable */');
    out.push(`// Generated from tools/specs/${api}.json by tools/generate.js - DO NOT EDIT.`);
    out.push('');
    if (needsPathLike) out.push("import { PathLike } from 'fs';");
    out.push("import { HttpClient, p } from '../http';");
    for (const owner of Object.keys(imports).sort()) {
        const file = owner === 'common' ? 'common' : owner === 'manual' ? 'manual' : API_META[owner].file;
        out.push(`import { ${[...imports[owner]].sort().join(', ')} } from '../types/${file}';`);
    }
    out.push('');
    out.push(classes.join('\n\n'));
    out.push('');
    return { source: out.join('\n'), ops };
};

// ---------------------------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------------------------

const write = (file, content) => {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content.replace(/\r?\n/g, '\n'));
};

let total = 0;
const typeExports = [];
const apiExports = [];
const clientProps = [];
const docs = ['# ivao.js API reference', '', 'Generated by `tools/generate.js` from the IVAO OpenAPI documents. Every method returns a Promise.', ''];
for (const api of API_ORDER) {
    const meta = API_META[api];
    write(path.join(TYPES_DIR, `${meta.file}.ts`), emitTypesFile(api));
    const { source, ops } = emitClientFile(api);
    write(path.join(API_DIR, `${meta.file}.ts`), source);
    total += ops.length;

    const conf = mapping[api];
    docs.push(`## \`client.${conf.property}\` - ${(specs[api].info || {}).title || api}`, '', conf.description, '');
    docs.push('| Method | Endpoint | Returns |', '| --- | --- | --- |');
    const sorted = [...ops].sort((a, b) => (a.at || '').localeCompare(b.at || '') || a.name.localeCompare(b.name));
    for (const op of sorted) {
        const { args } = signature(op);
        const full = `${conf.property}${op.at ? '.' + op.at : ''}.${op.name}`;
        const esc = (s) => s.replace(/\|/g, '\\|');
        docs.push(`| \`${esc(full)}(${esc(args.join(', '))})\` | \`${op.method} ${op.template}\` | \`${esc(op.returns)}\` |`);
    }
    docs.push('');
    typeExports.push(`export * from './${meta.file}';`);
    apiExports.push(`export * from './${meta.file}';`);
    clientProps.push({ property: mapping[api].property, className: mapping[api].className, file: meta.file, description: mapping[api].description });
    console.log(`${api}: ${ops.length} methods, ${Object.values(registry[api]).filter((i) => i.owner === api).length} types`);
}

write(path.join(TYPES_DIR, 'index.ts'), [
    '// Generated by tools/generate.js - DO NOT EDIT.',
    "export * from './common';",
    "export * from './manual';",
    ...typeExports,
    "export * from './legacy';",
    '',
].join('\n'));

write(path.join(API_DIR, 'index.ts'), [
    '// Generated by tools/generate.js - DO NOT EDIT.',
    ...apiExports,
    '',
].join('\n'));

write(path.join(API_DIR, 'registry.ts'), [
    '// Generated by tools/generate.js - DO NOT EDIT.',
    "import { HttpClient } from '../http';",
    ...clientProps.map((c) => `import { ${c.className} } from './${c.file}';`),
    '',
    '/** All IVAO APIs exposed by the client, keyed by property name. */',
    'export class ApiRegistry {',
    ...clientProps.map((c) => `    /** ${c.description} */\n    readonly ${c.property}: ${c.className};`),
    '',
    '    constructor(http: HttpClient) {',
    ...clientProps.map((c) => `        this.${c.property} = new ${c.className}(http);`),
    '    }',
    '}',
    '',
].join('\n'));

write(path.join(ROOT, 'docs', 'API.md'), docs.join('\n') + '\n');

console.log(`Total: ${total} methods`);
