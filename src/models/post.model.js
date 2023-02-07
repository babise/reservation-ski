const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
	id: {
		type: Number,
		unique: true,
		required: true,
		autoIncrement: true,
	},
	title: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
	},
	weight: {
		type: Number,
		required: true,
	},
	style: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
	},
	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: "Comment",
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
	bookings: [
		{
			type: Schema.Types.ObjectId,
			ref: "Booking",
		},
	],
	isAvailable: {
		type: Boolean,
		default: true,
	},
});

module.exports = mongoose.model("Post", PostSchema);
