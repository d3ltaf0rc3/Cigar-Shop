const Product = require("../models/product");
const User = require("../models/user");

async function createProduct(req, res) {
    try {
        const product = new Product(req.body);
        await product.save();
        return res.status(201).send({
            success: true,
            data: product,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

async function getProduct(req, res) {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (product === null) {
            return res.status(404).send({
                success: false,
                data: "Not found!",
            });
        }
        return res.send({
            success: true,
            data: product,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

async function getProducts(req, res) {
    const { type } = req.params;
    try {
        const products = await Product.find({ type });

        if (products === null) {
            return res.status(404).send({
                success: false,
                data: 'Not found!',
            })
        }
        return res.send({
            success: true,
            data: products,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

async function addToWishlist(req, res) {
    const { id } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.userId, { $addToSet: { wishlist: id } }, { new: true })
            .select('-password')
            .populate("cart")
            .populate("wishlist");
        return res.send({
            success: true,
            data: user,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

async function addToCart(req, res) {
    const { id } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.userId, { $addToSet: { cart: id } }, { new: true })
            .select('-password')
            .populate("cart")
            .populate("wishlist");
        return res.send({
            success: true,
            data: user,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

async function removeFromWishlist(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndUpdate(req.userId, { $pull: { wishlist: id } }, { new: true })
            .select('-password')
            .populate("cart")
            .populate("wishlist");
        return res.send({
            success: true,
            data: user,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

async function removeFromCart(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndUpdate(req.userId, { $pull: { cart: id } }, { new: true })
            .select('-password')
            .populate("cart")
            .populate("wishlist");
        return res.send({
            success: true,
            data: user,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
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