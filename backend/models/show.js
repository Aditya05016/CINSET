const mongoose = require('mongoose');

const showSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true
    },

    date: {
      type: String,
      required: true
    },

    time: {
      type: String,
      required: true
    },

    totalSeats: {
      type: Number,
      required: true
    },

    bookedSeats: {
      type: [String], // e.g. ["A1", "A2"]
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Show", showSchema);
