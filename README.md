# IVAO.js

Typed Node.js client for the **whole [IVAO API](https://api.ivao.aero/docs)**. Every endpoint of every published
OpenAPI document (data, core, tracker, oauth, mtl, flight plans, webeye, status, atc bookings, events, auto-atis)
is available as a typed method, generated from the official swagger files.

```text
NOTE: Versions below 1.9.0 do not work! Version 2.0.0 is a rewrite: see "Migrating from 1.x" below.
```

## Installation

```bash
npm install ivao.js
```

## Authentication

```typescript
import { Client } from 'ivao.js';

// Legacy API key
const client = new Client({ type: 'apiKey', apiKey: 'YOUR_API_KEY' });

// OAuth2 client credentials (client id + secret), token is fetched and refreshed automatically
const client = new Client({
    type: 'oauth2',
    client_id: 'YOUR_CLIENT_ID',
    secret_id: 'YOUR_CLIENT_SECRET',
    scopes: ['tracker', 'profile'], // optional
});

// A user access token you obtained yourself (authorization code / PKCE flow)
const client = new Client({ type: 'bearer', token: () => getAccessTokenSomehow() });

// No credentials: only public endpoints (whazzup, NAT tracks, MOTD, .well-known...) work
const client = new Client({ type: 'none' });
```

To obtain OAuth access, follow the [HQ documentation](https://wiki.ivao.aero/en/home/devops/api/oauth-request).

Other options: `throwErrors` (throw an `IvaoApiError` instead of logging and returning `null` / `[]`),
`logErrors`, `timeout`, `userAgent`, `baseUrl`, `statusBaseUrl`.

## Usage

Each IVAO API is a property of the client, and each swagger tag is a module:

```typescript
const whazzup = await client.tracker.whazzup.get();
const lfpg = await client.data.airports.get('LFPG');
const metar = await client.data.airports.metar('LFPG');
const page2 = await client.data.airports.list({ page: 2, perPage: 50, countryId: 'FR' });
const fr = await client.core.divisions.get('FR');
const logo = await client.core.divisions.svgLogo('FR'); // Buffer
const me = await client.core.users.me(); // bearer token required
const bookings = await client.atc.bookings.daily({ date: '2026-09-06' });
const events = await client.events.list({ division: 'FR' });

// Downloads: the Buffer is returned and, when a destination is given, written to disk
await client.data.sectors.downloadLatestFiles('FR', './sectorfiles/');

// Flight plans (use 'me' as vid for the authenticated user)
await client.fpl.flightPlans.create('me', { callsign: 'AFR123', /* ... */ });

// Error handling
const strict = new Client({ type: 'apiKey', apiKey: '...', throwErrors: true });
try {
    await strict.data.airports.get('XXXX');
} catch (err) {
    if (err instanceof IvaoApiError) console.log(err.status, err.body);
}
```

| Property | API | Content |
| --- | --- | --- |
| `client.data` | Data | aircrafts, airlines, airports, ATC positions, centers, countries, NOTAMs, navaids, sectors, servers, simulators, softwares, squawks, weather, virtual airlines... |
| `client.core` | Core | users, divisions, departments, staff positions, groups, permissions, settings, FRAs |
| `client.tracker` | Tracker | whazzup, live sessions, flight plans, ATIS, tracks, statistics |
| `client.oauth` | OAuth | tokens, scopes, applications, granted apps, `.well-known` |
| `client.mtl` | MTL | aircraft models, textures, base models, effects, sounds, scripts, paintkits |
| `client.fpl` | Flight Plan | user aircrafts and flight plans |
| `client.webeye` | Webeye | friends |
| `client.status` | Status | status images (`status.ivao.aero`) |
| `client.atc` | ATC Scheduling | ATC bookings |
| `client.events` | Events v1 | scheduled events |
| `client.autoAtis` | Auto ATIS | digital ATIS and runway parameters |

The complete list of methods is in [docs/API.md](docs/API.md). All response types are exported:

```typescript
import { Airport, Whazzup, Paginated, Division } from 'ivao.js';
```

Naming conventions: `list(query)` is the paginated endpoint (`Paginated<T>`), `all(query)` the `/all` endpoint,
`get(id)` the single-item endpoint. Binary endpoints (logos, images) return a `Buffer`; `download*` methods
accept an optional destination path or directory.

## Migrating from 1.x

- `client.data` and `client.core` still exist and the old method names are kept as deprecated aliases
  (`getAirport`, `allAirports`, `getSvgLogo`, `client.data.aircraft.aircrafts.all()`, ...).
- Arguments now follow the URL order and query parameters are passed as an object:
  `navaids.get(type, id)`, `softwares.get(type, id)`, `servers.all({ type: 'FSD' })`.
- `simple-oauth2` and `superagent` are no longer dependencies; the `client.oauth2` property is gone.
  Use `client.auth` (a `ClientCredentialsAuth` for `type: 'oauth2'`) if you need the raw token.
- `download*` methods return the file as a `Buffer` and take an optional destination instead of always writing a zip.

## Regenerating from the swagger

```bash
npm run fetch-specs   # refresh tools/specs/*.json from https://api.ivao.aero/docs
npm run build         # regenerate src/types, src/api, docs/API.md and compile
```

Method names live in `tools/mapping.js`; the generator refuses to build if an endpoint is unmapped,
so a new IVAO endpoint shows up as a build error instead of being silently missing.

## Contributing

Contributions are always welcome! See `CONTRIBUTING.md` for ways to get started.

## License

[GPL-2.0](https://github.com/Jules010209/ivao.js/blob/master/LICENSE)

## Authors

- [@jules010209](https://www.github.com/jules010209)
