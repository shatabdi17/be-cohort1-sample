const express = require("express");
const { check } = require("express-validator");

const {
  breadditController,
  postBreaddit,
  getBreadditById,
  updateBreaddit,
  deleteBreaddit
} = require("./breaddit.controller");

const postValidator = [
  check("title")
    .not()
    .isEmpty(),
  check("image")
    .not()
    .isEmpty(),
  check("score").isInt(),
  check("author")
    .not()
    .isEmpty()
];
const { validateBody } = require("../../middleware/validate-body");
const router = express.Router();

router.get("", breadditController);
router.get("/:id", getBreadditById);
router.post("", postValidator, validateBody, postBreaddit);
router.put("", updateBreaddit);
router.delete("", deleteBreaddit);

module.exports = {
  breadditRouter: router
};
