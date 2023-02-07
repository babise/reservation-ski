const Comment = require("../models/comment.model");

const CommentController = {
	create: async (req, res) => {
		const comment = await Comment.create(req.body);
		res.send(comment);
	},
};

module.exports = CommentController;
