const express = require("express");

const { breadditController, postBreaddit } = require("./breaddit.controller");

const router = express.Router();

router.get("", breadditController);
router.post("", postBreaddit);

module.exports = {
  breadditRouter: router
};
