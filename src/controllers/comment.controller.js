const Comment = require("../models/comment.model");

const CommentController = {
	getAll: async (req, res) => {
		const comments = await Comment.find();
		res.send(comments);
	},
	getOne: async (req, res) => {
		const comment = await Comment.findById(req.params.id);
		res.send(comment);
	},
	create: async (req, res) => {
		const comment = await Comment.create(req.body);
		res.send(comment);
	},
	update: async (req, res) => {
		const comment = await Comment.findByIdAndUpdate(req.params.id, req.body);
		res.send(comment);
	},
	delete: async (req, res) => {
		const comment = await Comment.findByIdAndRemove(req.params.id);
		res.send(comment);
	},
};

module.exports = CommentController;
