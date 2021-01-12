const User = require("../models/user");
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
                        return res.status(409).send({ message: "Потребителското име вече е заето!" });
                    }
                    return res.status(500).send({ message: error.message });
                }
            });
        });
    } else {
        return res.status(401).send({ message: "Двете пароли трябва да съвпадат!" });
    }
}

async function login(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username })
        .populate("cart")
        .populate("wishlist");

    if (user === null) {
        return res.status(401).send({ message: "Грешно потребителско име или парола!" });
    }

    const status = await bcrypt.compare(password, user.password);

    if (status) {
        const token = jwt.sign({
            userID: user._id,
            username: user.username
        }, process.env.JWT_KEY);

        return res.cookie("auth-token", token, cookieOptions).send(user);
    } else {
        return res.status(401).send({ message: "Грешно потребителско име или парола!" });
    }
}

async function logout(req, res) {
    if (!req.cookies["auth-token"]) {
        return res.status(422).send({ message: "Auth cookie missing!" });
    }
    return res.clearCookie("auth-token", cookieOptions).send({ message: "Logout is successful!" });
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
                return res.send(user);
            } else {
                return res.status(401).send("Грешна парола!");
            }
        } catch (error) {
            return res.status(500).send(error.message);
        }
    } else {
        return res.status(422).send("Двете пароли трябва да съвпадат!");
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

async function clearWishlist(req, res) {
    try {
        const { userID } = decodeCookie(req.cookies["auth-token"]);
        const user = await User.findByIdAndUpdate(userID, { wishlist: [] }, { new: true })
            .populate("cart");
        return res.send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function verifyUser(req, res) {
    try {
        const { userID } = decodeCookie(req.cookies["auth-token"]);
        const user = await User.findById(userID)
            .populate("cart")
            .populate("wishlist");
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
    deleteProfile,
    clearWishlist,
    verifyUser
};