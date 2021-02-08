const express = require("express");
const router = express.Router();
const { register, login, logout, changePassword, getCart, getWishlist, getProfile, deleteProfile, clearWishlist, verifyUser } = require("../controllers/user");
const auth = require("../utils/auth");

router.post("/login", login);
router.post("/register", register);
router.get("/logout", auth, logout);
router.put("/user/change-password", auth, changePassword);
router.get("/user/cart", auth, getCart);
router.get("/user/wishlist", auth, getWishlist);
router.get("/user/profile", auth, getProfile);
router.delete("/user/delete", auth, deleteProfile);
router.delete("/user/wishlist", auth, clearWishlist);
router.get("/user/verify", auth, verifyUser);

module.exports = router;