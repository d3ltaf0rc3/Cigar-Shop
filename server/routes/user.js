const express = require("express");
const router = express.Router();
const { register, login, logout, editUser } = require("../controllers/user");

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);
router.put("/user/edit", editUser);

module.exports = router;