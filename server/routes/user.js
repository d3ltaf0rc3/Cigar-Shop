const express = require("express");
const router = express.Router();
const { register, login, logout, changePassword, getCart, getWishlist, getProfile, deleteProfile, clearWishlist, verifyUser } = require("../controllers/user");

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);
router.put("/user/change-password", changePassword);
router.get("/user/cart", getCart);
router.get("/user/wishlist", getWishlist);
router.get("/user/profile", getProfile);
router.delete("/user/delete", deleteProfile);
router.delete("/user/wishlist", clearWishlist);
router.get("/user/verify", verifyUser);

module.exports = router;