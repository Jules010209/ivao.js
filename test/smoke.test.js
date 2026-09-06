'use strict';

/**
 * Smoke tests. Offline checks always run; live checks against public IVAO endpoints
 * run only when IVAO_ONLINE=1 (they need network access, no credentials).
 */
const assert = require('assert');
const { Client, IvaoApiError, ApiKeyAuth, ClientCredentialsAuth, BearerAuth } = require('../lib');

const countMethods = (obj, depth = 0) => {
    let n = 0;
    const proto = Object.getPrototypeOf(obj);
    for (const key of Object.getOwnPropertyNames(proto)) {
        if (key === 'constructor') continue;
        const desc = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof desc.value === 'function') n++;
    }
    for (const key of Object.keys(obj)) {
        if (['http', 'auth', 'options'].includes(key)) continue;
        const value = obj[key];
        if (value && typeof value === 'object' && depth < 5) n += countMethods(value, depth + 1);
    }
    return n;
};

(async () => {
    // --- offline -------------------------------------------------------------------------------
    const client = new Client({ type: 'none', throwErrors: true });
    for (const api of ['data', 'core', 'tracker', 'oauth', 'mtl', 'fpl', 'webeye', 'status', 'atc', 'events', 'autoAtis']) {
        assert.ok(client[api], `client.${api} is missing`);
    }
    assert.ok(countMethods(client) >= 336, 'expected at least 336 generated methods');

    // 1.x compatibility paths
    assert.strictEqual(typeof client.data.aircraft.aircrafts.all, 'function');
    assert.strictEqual(typeof client.data.aircraft.aircraftManufacture.get, 'function');
    assert.strictEqual(typeof client.data.airports.getAirport, 'function');
    assert.strictEqual(typeof client.data.sectors.downloadLatestFiles, 'function');
    assert.strictEqual(typeof client.core.divisions.getSvgLogo, 'function');

    // auth providers
    assert.deepStrictEqual(await new ApiKeyAuth('k').headers(), { apiKey: 'k' });
    assert.deepStrictEqual(await new BearerAuth(async () => 't').headers(), { Authorization: 'Bearer t' });
    assert.ok(new ClientCredentialsAuth({ clientId: 'a', clientSecret: 'b' }).currentToken === null);
    assert.strictEqual(new Client({ type: 'apiKey', apiKey: 'x' }).options.type, 'apiKey');
    assert.strictEqual(new Client({ type: 'oauth2', client_id: 'a', secret_id: 'b' }).auth instanceof ClientCredentialsAuth, true);

    // fallback behaviour without throwErrors: unreachable host returns the fallback value
    const quiet = new Client({ type: 'none', baseUrl: 'http://127.0.0.1:1', logErrors: false, timeout: 500 });
    assert.deepStrictEqual(await quiet.data.sectors.all(), []);
    assert.strictEqual(await quiet.data.sectors.get('FR'), null);
    await assert.rejects(() => quiet.core.divisions.svgLogo('FR'), IvaoApiError);

    console.log('offline smoke tests: OK');

    // --- online --------------------------------------------------------------------------------
    if (process.env.IVAO_ONLINE !== '1') {
        console.log('online smoke tests skipped (set IVAO_ONLINE=1 to run them)');
        return;
    }
    const whazzup = await client.tracker.whazzup.get();
    assert.ok(Array.isArray(whazzup.clients.pilots));
    const tracks = await client.data.natTracks.all();
    assert.ok(Array.isArray(tracks));
    const motd = await client.data.motds.latest();
    assert.ok(typeof motd.contents === 'string');
    await assert.rejects(() => client.data.airports.get('LFPG'), (err) => err instanceof IvaoApiError && err.status === 401);
    const openid = await client.oauth.wellKnown.openidConfiguration();
    assert.ok(typeof openid.token_endpoint === 'string');
    console.log('online smoke tests: OK');
})().catch((err) => {
    console.error(err);
    process.exit(1);
});
