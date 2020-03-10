const fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const { validationResult } = require("express-validator");

const breadditdata = require("../../../db/breaddit.data.json");

const getPost = (req, res) => {
  return res.json({
    data: breadditdata
  });
};

const getPostById = (req, res) => {
  const breadditId = req.params.id;

  const posts = breadditdata.find(post => post.id === breadditId);

  if (posts) {
    return res.json(posts);
  } else {
    res.status(404).send("Breaddit not found!");
  }
};
const updatePost = (req, res) => {
  const breadditId = req.params.id;
  const breaddit = req.body;
  const posts = breadditdata.find(post => post.id === breadditId);

  const filteredPosts = breadditdata.filter(post => post.id !== breadditId);
  const updatedPosts = [...filteredPosts, breaddit];

  if (posts) {
    return res.json(updatedPosts);
  } else {
    res.status(404).send("Breaddit not found!");
  }
};

const deletePost = async (req, res) => {
  const breadditId = req.params.id;
  const filteredPosts = breadditdata.filter(post => post.id !== breadditId);
  const posts = breadditdata.find(post => post.id === breadditId);

  if (posts) {
    return res.json(filteredPosts);
  } else {
    res.status(404).send("Breaddit not found!");
  }
};

const post = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const id = breadditdata.length + 1;

  const postBreadditData = {
    id,
    ...req.body
  };
  await writeFile(
    "db/breaddit.data.json",
    JSON.stringify([...breadditdata, postBreadditData])
  );
  res.status(201);
  return res.json({
    id,
    ...req.body
  });
};

module.exports = {
  getPost,
  post,
  getPostById,
  updatePost,
  deletePost
};
