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
    imageUrl: {
        type: String,
        default: "https://res.cloudinary.com/smile-social-network/image/upload/v1600976280/download_udtdbe.png"
    },
    wishlist: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product"
    }]
});

module.exports = mongoose.model("User", UserSchema);