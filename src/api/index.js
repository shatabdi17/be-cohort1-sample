const express = require("express");

const { healthRouter } = require("../routes/health/health.router");
const { breadditRouter } = require("../routes/breaddit/breaddit.router");

const router = express.Router();
router.use("/health", healthRouter);
router.use("/postbreaddit", breadditRouter);

module.exports = router;
