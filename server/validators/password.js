const { body } = require("express-validator");

module.exports = [
    body("password", "Паролата е невалидна!")
        .not().isEmpty()
        .trim()
        .isLength({ min: 8, max: 18 }).withMessage("Паролата трябва да бъде между 8 и 18 символа!"),
    body("repeatPassword").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Двете пароли не съвпадат!");
        }
        return true;
    }),
];