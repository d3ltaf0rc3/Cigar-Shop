const Blog = require("../models/Blog");
const { decodeCookie } = require("../utils/decode-cookie");

async function createPost(req, res) {
    try {
        decodeCookie(req.cookies["auth-token"]);
        const newPost = new Blog(req.body);
        const post = await newPost.save();
        return res.send(post);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getAll(req, res) {
    try {
        const posts = await Blog.find({});
        return res.send(posts);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getBlogPost(req, res) {
    const blogId = req.params.id;

    try {
        const blog = await Blog.findOne({ _id: blogId });
        return res.send(blog);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createPost,
    getAll,
    getBlogPost
};