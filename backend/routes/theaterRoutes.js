const express = require('express');
const router = express.Router();
const Theater = require('../models/Theater');

// Create a new theater
router.post('/', async (req, res) => {
  const theater = new Theater(req.body);
  await theater.save();
  res.status(201).json(theater);
});

// Get all theaters (optional)
router.get('/', async (req, res) => {
  const theaters = await Theater.find();
  res.json(theaters);
});

module.exports = router;
