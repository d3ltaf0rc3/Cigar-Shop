const express = require("express");
const router = express.Router();
const { createProduct, getProduct, getProducts } = require("../controllers/product");

router.post("/add", createProduct);
router.get("/get/:id", getProduct);
router.get("/get-all", getProducts);

module.exports = router;