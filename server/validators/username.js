const { body } = require("express-validator");

module.exports = [
    body("username", "Потребителското име е невалидно!")
        .not().isEmpty()
        .trim()
        .isLength({ min: 4, max: 18 }).withMessage("Потребителското име трябва да бъде между 4 и 18 символа!")
        .matches(/^[\w\d.]+$/).withMessage("Потребителското име може да съдържа само букви, цифри, точки и долни черти!"),
];