const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.cookies["auth-token"], process.env.JWT_KEY);
        req.userId = decoded.userID;
        next();
    } catch (error) {
        return res.status(401).send("Unauthenticated!");
    }
};
