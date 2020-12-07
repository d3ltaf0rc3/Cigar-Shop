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

async function changePassword(req, res) {
    const { currentPassword, newPassword, repeatNewPassword } = req.body;

    if (newPassword === repeatNewPassword) {
        try {
            const { userID } = decodeCookie(req.cookies["auth-token"]);
            const currentUser = await User.findById(userID);
            const result = await bcrypt.compare(currentPassword, currentUser.password);

            if (result) {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(newPassword, salt);

                const user = await User.findByIdAndUpdate(userID, { password: hash });
                return res.clearCookie("auth-token").send(user);
            } else {
                return res.status(401).send("Wrong current password!");
            }
        } catch (error) {
            return res.status(500).send(error.message);
        }
    } else {
        return res.status(422).send("Password and repeat password don't match!");
    }
}

async function getCart(req, res) {
    try {
        const { userID } = decodeCookie(req.cookies["auth-token"]);
        const user = await User.findById(userID).select("-password").populate("cart");
        return res.send(user.cart);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getWishlist(req, res) {
    try {
        const { userID } = decodeCookie(req.cookies["auth-token"]);
        const user = await User.findById(userID).select("-password").populate("wishlist");
        return res.send(user.wishlist);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getProfile(req, res) {
    try {
        const { userID } = decodeCookie(req.cookies["auth-token"]);
        const user = await User.findById(userID).select("-password");
        return res.send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function deleteProfile(req, res) {
    try {
        const { userID } = decodeCookie(req.cookies["auth-token"]);
        const user = await User.findByIdAndDelete(userID);
        return res.send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    register,
    login,
    logout,
    getCart,
    getWishlist,
    getProfile,
    changePassword,
    deleteProfile
};