const Booking = require("../models/booking.model");

const BookingController = {
	getAll: async (req, res) => {
		const bookings = await Booking.find();
		res.send(bookings);
	},
	getOne: async (req, res) => {
		const booking = await Booking.findById(req.params.id);
		res.send(booking);
	},
	create: async (req, res) => {
		const booking = await Booking.create(req.body);
		res.send(booking);
	},
	update: async (req, res) => {
		const booking = await Booking.findByIdAndUpdate(req.params.id, req.body);
		res.send(booking);
	},
	delete: async (req, res) => {
		const booking = await Booking.findByIdAndRemove(req.params.id);
		res.send(booking);
	},
};

module.exports = BookingController;
