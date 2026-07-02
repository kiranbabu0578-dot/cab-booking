const mongoose = require("mongoose");

const MyBookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true
  },

  pickupLocation: {
    type: String,
    required: true
  },

  destination: {
    type: String,
    required: true
  },

  bookingDate: {
    type: Date,
    default: Date.now
  },

  rideStatus: {
    type: String,
    default: "Booked"
  }
});

module.exports = mongoose.model("MyBooking", MyBookingSchema);