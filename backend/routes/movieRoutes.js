const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', async (req, res) => {
  const movies = await Movie.find().populate('theaters');
  res.json(movies);
});

router.post('/', async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.status(201).json(movie);
});

router.put('/:id/theaters', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  movie.theaters = req.body.theaterIds;
  await movie.save();
  res.json(movie);
});

router.delete('/:id', async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: 'Movie deleted' });
});

module.exports = router;