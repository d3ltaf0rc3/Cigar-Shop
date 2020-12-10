const express = require("express");
const router = express.Router();
const { createProduct, getProduct, getProducts, addToWishlist, addToCart, removeFromWishlist, removeFromCart } = require("../controllers/product");

router.post("/add", createProduct);
router.get("/get/:id", getProduct);
router.get("/get-all/:type", getProducts);
router.post("/wishlist/add", addToWishlist);
router.post("/cart/add", addToCart);
router.post("/wishlist/remove", removeFromWishlist);
router.post("/cart/remove", removeFromCart);

module.exports = router;