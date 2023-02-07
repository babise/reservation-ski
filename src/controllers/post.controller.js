const Post = require("../models/post.model");

const PostController = {
	getAll: async (req, res) => {
		const posts = await Post.find();
		res.send(posts);
	},
	getOne: async (req, res) => {
		const post = await Post.findById(req.params.id);
		res.send(post);
	},
	create: async (req, res) => {
		const post = await Post.create(req.body);
		res.send(post);
	},
	update: async (req, res) => {
		const post = await Post.findByIdAndUpdate(req.params.id, req.body);
		res.send(post);
	},
	delete: async (req, res) => {
		const post = await Post.findByIdAndRemove(req.params.id);
		res.send(post);
	},
};

module.exports = PostController;
