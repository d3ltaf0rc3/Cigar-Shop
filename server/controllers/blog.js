const Blog = require("../models/Blog");

async function createPost(req, res) {
    try {
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
    try {
        const blogId = req.params.id;
        const blog = await Blog.findOne({ _id: blogId });

        if (blog === null) {
            return res.status(404).send('Not found!');
        }
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