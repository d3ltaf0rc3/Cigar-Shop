const Blog = require("../models/Blog");

async function createPost(req, res) {
    const { title, imageUrl, content } = req.body;

    try {
        const post = new Blog({
            title,
            imageUrl,
            content
        });
        await post.save();

        return res.status(201).send({
            success: true,
            data: post,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

async function getAll(req, res) {
    try {
        const posts = await Blog.find({});
        return res.send({
            success: true,
            data: posts,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

async function getBlogPost(req, res) {
    const blogId = req.params.id;

    try {
        const blog = await Blog.findById(blogId);

        if (blog === null) {
            return res.status(404).send({
                success: false,
                data: "Статията не е намерена!"
            });
        }
        return res.send({
            success: true,
            data: blog,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            data: error.message,
        });
    }
}

module.exports = {
    createPost,
    getAll,
    getBlogPost
};