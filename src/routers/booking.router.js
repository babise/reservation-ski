const express = require("express");
const BookingController = require("../controllers/booking.controller");
const router = express.Router();

router.get("/bookings", BookingController.getAll);
router.put("/bookings/:id", BookingController.update);
router.delete("/bookings/:id", BookingController.delete);
router.post("/bookings", BookingController.create);

module.exports = router;
