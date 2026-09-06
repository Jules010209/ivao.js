'use strict';

/**
 * Downloads the OpenAPI documents published at https://api.ivao.aero/docs
 * into tools/specs/<name>.json. Run `npm run generate` afterwards.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const APIS = ['data', 'core', 'tracker', 'oauth', 'mtl', 'fpl', 'webeye', 'status', 'atc', 'events-api-v1', 'auto-atis'];
const OUT = path.join(__dirname, 'specs');

const get = (url) => new Promise((resolve, reject) => {
    https.get(url, (res) => {
        if (res.statusCode !== 200) {
            res.resume();
            return reject(new Error(`${url} -> HTTP ${res.statusCode}`));
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        res.on('error', reject);
    }).on('error', reject);
});

(async () => {
    fs.mkdirSync(OUT, { recursive: true });
    for (const name of APIS) {
        const raw = await get(`https://api.ivao.aero/docs/${name}-json`);
        const json = JSON.parse(raw);
        fs.writeFileSync(path.join(OUT, `${name}.json`), JSON.stringify(json, null, 2) + '\n');
        console.log(`${name}: ${Object.keys(json.paths).length} paths, ${Object.keys((json.components || {}).schemas || {}).length} schemas`);
    }
})().catch((err) => {
    console.error(err);
    process.exit(1);
});
