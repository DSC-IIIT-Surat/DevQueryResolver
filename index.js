/**
 * Module dependencies
 */
const express = require("express");
const mongoose = require("mongoose");
const db_config = require("./config/db.js");

// .env configuration
require("dotenv").config();

//import routes
const indexRouter = require("./routes/index"); // Test route

const app = express();
var port = 8000;

// Mongoose connection
const users_ATLAS_URI = db_config.users_mongo_uri;
const uri = users_ATLAS_URI;
console.log("URI: ", uri);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongoose database connection established successfully");
  // console.log(uri);				// This line exposes thDe ATLAS URI to terminal, to be used only during debugging
});

//routes middleware
app.use("/", indexRouter); // This router is only to test the connection

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
