"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRegistry = void 0;
const data_1 = require("./data");
const core_1 = require("./core");
const tracker_1 = require("./tracker");
const oauth_1 = require("./oauth");
const mtl_1 = require("./mtl");
const fpl_1 = require("./fpl");
const webeye_1 = require("./webeye");
const status_1 = require("./status");
const atc_1 = require("./atc");
const events_1 = require("./events");
const autoAtis_1 = require("./autoAtis");
/** All IVAO APIs exposed by the client, keyed by property name. */
class ApiRegistry {
    constructor(http) {
        this.data = new data_1.DataApi(http);
        this.core = new core_1.CoreApi(http);
        this.tracker = new tracker_1.TrackerApi(http);
        this.oauth = new oauth_1.OAuthApi(http);
        this.mtl = new mtl_1.MtlApi(http);
        this.fpl = new fpl_1.FlightPlanApi(http);
        this.webeye = new webeye_1.WebeyeApi(http);
        this.status = new status_1.StatusApi(http);
        this.atc = new atc_1.AtcApi(http);
        this.events = new events_1.EventsApi(http);
        this.autoAtis = new autoAtis_1.AutoAtisApi(http);
    }
}
exports.ApiRegistry = ApiRegistry;
