const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
	id: {
		type: Number,
		unique: true,
		required: true,
		autoIncrement: true,
	},
	username: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	stars: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	post: {
		type: Schema.Types.ObjectId,
		ref: "Post",
		required: true,
	},
});

module.exports = mongoose.model("Comment", CommentSchema);
