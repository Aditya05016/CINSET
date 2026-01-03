const express = require("express");
const router = express.Router();

const {
  getAllMovies,
  getMovieById
} = require("../controllers/movie.controller");

router.get("/", getAllMovies);
router.get("/:id", getMovieById);

module.exports = router;
