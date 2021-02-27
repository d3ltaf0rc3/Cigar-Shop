const express = require("express");
const router = express.Router();
const {
    createProduct,
    getProduct,
    getProducts,
    addToWishlist,
    addToCart,
    removeFromWishlist,
    removeFromCart
} = require("../controllers/product");
const auth = require("../utils/auth");

router.post("/add", auth, createProduct);
router.get("/get/:id", getProduct);
router.get("/get-all/:type", getProducts);
router.post("/wishlist/add", auth, addToWishlist);
router.post("/cart/add", auth, addToCart);
router.post("/wishlist/remove", auth, removeFromWishlist);
router.post("/cart/remove", auth, removeFromCart);

module.exports = router;