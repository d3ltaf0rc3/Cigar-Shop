const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String
    },
    vitola: {
        type: String
    },
    length: {
        type: Number
    },
    ring: {
        type: Number
    },
    strength: {
        type: String
    },
    time: {
        type: Number
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model("Product", ProductSchema);