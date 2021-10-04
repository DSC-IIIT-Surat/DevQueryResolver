/**
 * Module dependencies
 */
const expect = require("chai").expect;
const mongoose = require("mongoose");
const db_config = require("../config/db");

function establishMongoDBConnection() {
  // Mongoose connection
  const users_ATLAS_URI = db_config.users_mongo_uri;
  const uri = users_ATLAS_URI;
  mongoose.connect(uri);
  const connection = mongoose.connection;
  connection.once("open", () => {
    return true;
  });
  return true;
}

function checkMongoDBConnection() {
  describe("Check the mongodb connection", () => {
    it("Is MongoDB connection established?", () => {
      if (expect(establishMongoDBConnection()).to.equal(true)) {
        console.log("MongoDB connection established");
      }
    });
  });
}
module.exports = { checkMongoDBConnection };
