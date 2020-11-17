const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
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
        type: String,
        required: true
    },
    vitola: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    ring: {
        type: Number,
        required: true
    },
    strength: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Product", ProductSchema);