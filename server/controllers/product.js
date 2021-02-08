const Product = require("../models/product");
const User = require("../models/user");

async function createProduct(req, res) {
    try {
        const newProduct = new Product(req.body);
        const product = await newProduct.save();
        return res.send(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getProduct(req, res) {
    try {
        const productId = req.params.id;
        const product = await Product.findOne({ _id: productId });

        if (product === null) {
            return res.status(404).send("Not found!");
        }
        return res.send(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getProducts(req, res) {
    const { type } = req.params;
    try {
        const products = await Product.find({ type });
        res.send(products);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function addToWishlist(req, res) {
    const { id } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.userId, { $addToSet: { wishlist: id } }, { new: true })
            .populate("cart")
            .populate("wishlist");
        return res.send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function addToCart(req, res) {
    const { id } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.userId, { $addToSet: { cart: id } }, { new: true })
            .populate("cart")
            .populate("wishlist");
        return res.send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function removeFromWishlist(req, res) {
    const { id } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.userId, { $pull: { wishlist: id } }, { new: true })
            .populate("cart")
            .populate("wishlist");
        return res.send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function removeFromCart(req, res) {
    const { id } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.userId, { $pull: { cart: id } }, { new: true })
            .populate("cart")
            .populate("wishlist");
        return res.send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    addToWishlist,
    addToCart,
    removeFromWishlist,
    removeFromCart
};