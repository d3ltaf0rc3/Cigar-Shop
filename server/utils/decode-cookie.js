const jwt = require("jsonwebtoken");

module.exports = (cookie) => {
    try {
        const decodedCookie = jwt.verify(cookie, process.env.JWT_KEY);
        return decodedCookie;
    } catch (error) {
        throw new Error("Invalid cookie!");
    }
};
