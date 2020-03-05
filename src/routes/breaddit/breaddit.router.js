const express = require("express");

const { breadditController } = require("./breaddit.controller");

const router = express.Router();

router.get("", breadditController);

module.exports = {
  breadditRouter: router
};
