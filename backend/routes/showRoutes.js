const express = require("express");
const router = express.Router();

const {
  createShow,
  getShowsByMovie,
  getShowById
} = require("../controllers/show.controller");

// create show (admin later)
router.post("/", createShow);

// get shows by movie
router.get("/movie/:movieId", getShowsByMovie);

// get single show
router.get("/:id", getShowById);

module.exports = router;
