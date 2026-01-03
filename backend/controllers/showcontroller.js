const Show = require("../models/Show");
const Movie = require("../models/movie");

// CREATE a show
const createShow = async (req, res) => {
  try {
    const { movieId, date, time, totalSeats } = req.body;

    // check movie exists
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    const show = await Show.create({
      movieId,
      date,
      time,
      totalSeats,
      bookedSeats: []
    });

    res.status(201).json({
      message: "Show created successfully",
      show
    });

  } catch (error) {
    console.error("Error creating show:", error);
    res.status(500).json({ message: "Failed to create show" });
  }
};

// GET all shows for a movie
const getShowsByMovie = async (req, res) => {
  try {
    const { movieId } = req.params;

    const shows = await Show.find({ movieId }).sort({ date: 1, time: 1 });

    res.status(200).json(shows);
  } catch (error) {
    console.error("Error fetching shows:", error);
    res.status(500).json({ message: "Failed to fetch shows" });
  }
};

// GET single show
const getShowById = async (req, res) => {
  try {
    const show = await Show.findById(req.params.id).populate("movieId");
    if (!show) {
      return res.status(404).json({ message: "Show not found" });
    }

    res.status(200).json(show);
  } catch (error) {
    console.error("Error fetching show:", error);
    res.status(500).json({ message: "Failed to fetch show" });
  }
};

module.exports = {
  createShow,
  getShowsByMovie,
  getShowById
};
