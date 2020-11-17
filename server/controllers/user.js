const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { decodeCookie } = require("../utils/decode-cookie");
const { cookieOptions } = require("../config/environment");

async function register(req, res) {
    const { username, password, repeatPassword } = req.body;

    if (password === repeatPassword) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                try {
                    const user = new User({ username, password: hash });
                    const userObject = await user.save();

                    const token = jwt.sign({
                        userID: userObject._id,
                        username: userObject.username
                    }, process.env.JWT_KEY);

                    return res.cookie("auth-token", token, cookieOptions).send(user);
                } catch (error) {
                    if (error.code === 11000) {
                        return res.status(409).send("Username already taken!");
                    }
                    return res.status(500).send(error.message);
                }
            });
        });
    } else {
        return res.status(401).send("Both passwords should match!");
    }
}

async function login(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username })
        .populate("cart")
        .populate("wishlist");

    if (user === null) {
        return res.status(401).send("Wrong username or password!");
    }

    const status = await bcrypt.compare(password, user.password);

    if (status) {
        const token = jwt.sign({
            userID: user._id,
            username: user.username
        }, process.env.JWT_KEY);

        return res.cookie("auth-token", token, cookieOptions).send(user);
    } else {
        return res.status(401).send("Wrong username or password!");
    }
}

async function logout(req, res) {
    if (!req.cookies["auth-token"]) {
        return res.status(422).send("Auth cookie missing!");
    }
    return res.clearCookie("auth-token", cookieOptions).send("Logout is successful!");
}

async function editUser(req, res) {
    const { userID } = decodeCookie(req.cookies["auth-token"]);

    try {
        const user = await User.findByIdAndUpdate(userID, req.body, { new: true });
        return res.send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    register,
    login,
    logout,
    editUser
};