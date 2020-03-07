const express = require("express");

const {
  breadditController,
  postBreaddit,
  getBreadditById,
  updateBreaddit,
  deleteBreaddit
} = require("./breaddit.controller");

const router = express.Router();

router.get("", breadditController);
router.get("/:id", getBreadditById);
router.post("", postBreaddit);
router.put("", updateBreaddit);
router.delete("", deleteBreaddit);

module.exports = {
  breadditRouter: router
};
