const Product = require("../models/Product");
const { decodeCookie } = require("../utils/decode-cookie");

async function createProduct(req, res) {
    try {
        decodeCookie(req.cookies["auth-token"]);
        const newProduct = new Product(req.body);
        const product = await newProduct.save();
        return res.send(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getProduct(req, res) {
    const productId = req.params.id;

    try {
        const product = await Product.findOne({ _id: productId })
        return res.send(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createProduct,
    getProduct
};