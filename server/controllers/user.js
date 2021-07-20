const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const deleteSensitiveData = require("../utils/deleteSensitiveData");
const { cookieOptions } = require("../config/environment");

async function register(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            success: false,
            data: errors.array()[0].msg
        });
    }

    const { username, password } = req.body;

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const user = new User({ username, password: hash });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);

        const userToSend = deleteSensitiveData(user);
        return res.cookie("auth-token", token, cookieOptions).send({
            success: true,
            data: userToSend,
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).send({
                success: false,
                data: "Потребителското име вече е заето!"
            });
        }
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

async function login(req, res) {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username })
            .populate("cart")
            .populate("wishlist");

        if (user === null) {
            return res.status(401).send({
                success: false,
                data: "Грешно потребителско име или парола!"
            });
        }

        const status = await bcrypt.compare(password, user.password);

        if (status) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);

            const userToSend = deleteSensitiveData(user);
            return res.cookie("auth-token", token, cookieOptions).send({
                success: true,
                data: userToSend,
            });
        } else {
            return res.status(401).send({
                success: false,
                data: "Грешно потребителско име или парола!",
            });
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        })
    }
}

async function logout(req, res) {
    return res.clearCookie("auth-token", cookieOptions).send({
        success: true,
        data: "Успешно излизане от акаунта!",
    });
}

async function changePassword(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            success: false,
            data: errors.array()[0].msg
        });
    }

    const { currentPassword, password } = req.body;

    try {
        const user = await User.findById(req.userId);
        const result = await bcrypt.compare(currentPassword, user.password);

        if (result) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            await User.findByIdAndUpdate(req.userId, { password: hash });
            return res.clearCookie("auth-token", cookieOptions).send({
                success: true,
                data: "Успешна промяна на паролата!",
            });
        } else {
            return res.status(401).send({
                success: false,
                data: "Грешна парола!",
            });
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

async function deleteProfile(req, res) {
    try {
        await User.findByIdAndDelete(req.userId);
        return res.clearCookie("auth-token", cookieOptions).send({
            success: true,
            data: "Успешно изтриване на профила!"
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

async function clearWishlist(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.userId, { wishlist: [] }, { new: true })
            .select("-password")
            .populate("cart");
        return res.send({
            success: true,
            data: user,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

async function verifyUser(req, res) {
    try {
        const user = await User.findById(req.userId)
            .select("-password")
            .populate("cart")
            .populate("wishlist");
        return res.send({
            success: true,
            data: user,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

module.exports = {
    register,
    login,
    logout,
    changePassword,
    deleteProfile,
    clearWishlist,
    verifyUser
};