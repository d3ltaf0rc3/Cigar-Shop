const express = require("express");
const router = express.Router();
const { createProduct, getProduct } = require("../controllers/product");

router.post("/add", createProduct);
router.get("/get/:id", getProduct);

module.exports = router;