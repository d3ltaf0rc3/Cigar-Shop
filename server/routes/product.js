const express = require("express");
const router = express.Router();
const { createProduct, getProduct, getProducts, addToWishlist, addToCart } = require("../controllers/product");

router.post("/add", createProduct);
router.get("/get/:id", getProduct);
router.get("/get-all/:type", getProducts);
router.post("/wishlist/add", addToWishlist);
router.post("/cart/add", addToCart);

module.exports = router;