const express = require("express");
const { check } = require("express-validator");

const {
  getPost,
  getPostById,
  post,
  updatePost,
  deletePost
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

router.get("", getPost);
router.get("/:id", getPostById);
router.post("", postValidator, validateBody, post);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = {
  breadditRouter: router
};
