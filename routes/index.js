/**
 * Module dependencies.
 */
const router = require("express").Router();

// Test router
router.route("/").get((req, res, next) => {
  res.status(200).json({ Test: "Successful" });
});

// Module Exports
module.exports = router;
