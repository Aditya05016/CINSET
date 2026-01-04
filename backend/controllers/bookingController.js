const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const {
  createBooking,
  getMyBookings
} = require("../controllers/booking.controller");

// create booking (protected)
router.post("/", authMiddleware, createBooking);

// get logged-in user's bookings
router.get("/me", authMiddleware, getMyBookings);

module.exports = router;
