const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  model: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  image: {
    type: String
  },

  pricePerKm: {
    type: Number,
    required: true
  },

  available: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Car", CarSchema);