const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookingSchema = new Schema({
	id: {
		type: Number,
		unique: true,
		required: true,
		autoIncrement: true,
	},
	telephoneNumber: {
		type: String,
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

module.exports = mongoose.model("Booking", BookingSchema);
