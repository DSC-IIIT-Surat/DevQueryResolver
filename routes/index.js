/*** Module dependencies.***/
const express = require("express");
const router = express.Router();
const app = express();
const checkMongoDBConnection = require("../test/db")

checkMongoDBConnection();
const port = 5000;
app.use(express.json());

app.use("/api/article",require('./articles'));
app.use("/api/project",require('./project'));
app.use("/api/video",require('./video'));

// Test router
// router.("/").get((req, res, next) => {
//   res.status(200).json({ Test: "Successful" });
// });

app.listen(port, () => {
  console.log(`listening on port at http://localhost:${port}`)
});

// Module Exports
module.exports = router;
