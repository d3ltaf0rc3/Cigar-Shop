const express = require("express");
const router = express.Router();
const {
    register,
    login,
    logout,
    changePassword,
    deleteProfile,
    clearWishlist,
    verifyUser
} = require("../controllers/user");
const auth = require("../utils/auth");
const usernameValidator = require("../validators/username");
const passwordValidator = require("../validators/password");

router.post("/login", login);
router.post("/register", usernameValidator, passwordValidator, register);
router.post("/logout", auth, logout);
router.put("/user/change-password", auth, passwordValidator, changePassword);
router.delete("/user/delete", auth, deleteProfile);
router.delete("/user/wishlist", auth, clearWishlist);
router.get("/user/verify", auth, verifyUser);

module.exports = router;