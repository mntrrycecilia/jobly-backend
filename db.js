"use strict";
/** Database setup for jobly. */

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

const db = new Client(getDatabaseUri());  // ✅ pass the object directly

db.connect();

module.exports = db;
