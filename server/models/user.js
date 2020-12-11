const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cart: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product"
    }],
    wishlist: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product"
    }]
});

module.exports = mongoose.model("User", UserSchema);