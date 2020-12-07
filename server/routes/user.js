const express = require("express");
const router = express.Router();
const { register, login, logout, editUser, getCart, getWishlist, getProfile } = require("../controllers/user");

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);
router.put("/user/edit", editUser);
router.get("/user/cart", getCart);
router.get("/user/wishlist", getWishlist);
router.get("/user/profile", getProfile);

module.exports = router;