if (process.env.NODE_ENV === "production") {
    module.exports = {
        cookieOptions: {
            expires: new Date(Date.now() + 604800000),
            httpOnly: true,
            sameSite: "None",
            secure: true
        }
    };
} else {
    module.exports = {
        cookieOptions: {
            expires: new Date(Date.now() + 604800000),
            httpOnly: true
        }
    };
}