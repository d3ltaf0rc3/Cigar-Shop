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
router.put("/wishlist/add", auth, addToWishlist);
router.put("/cart/add", auth, addToCart);
router.delete("/wishlist/remove/:id", auth, removeFromWishlist);
router.delete("/cart/remove/:id", auth, removeFromCart);

module.exports = router;