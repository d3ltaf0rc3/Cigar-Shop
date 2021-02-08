const express = require("express");
const router = express.Router();
const { createPost, getAll, getBlogPost } = require("../controllers/blog");
const auth = require("../utils/auth");

router.post("/add", auth, createPost);
router.get("/get/:id", getBlogPost);
router.get("/get-all", getAll);

module.exports = router;