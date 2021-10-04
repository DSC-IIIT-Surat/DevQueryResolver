/**
 * Module dependencies.
 */
const process = require("process");
const { checkMongoDBConnection } = require("./db");

checkMongoDBConnection();
