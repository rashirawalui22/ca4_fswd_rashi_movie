const mongoose = require('mongoose');
const Movie = require('../backend/models/Movie');
const Theater = require('../backend/models/Theater');
require('dotenv').config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  await Movie.deleteMany();
  await Theater.deleteMany();

  const theaters = await Theater.insertMany([
    { name: 'PVR', location: 'Delhi', screenCount: 5 },
    { name: 'INOX', location: 'Mumbai', screenCount: 3 }
  ]);

  await Movie.insertMany([
    { title: 'Inception', genre: 'Sci-Fi', duration: 148, language: 'English' },
    { title: '3 Idiots', genre: 'Comedy', duration: 170, language: 'Hindi' }
  ]);

  console.log('Seeded DB');
  process.exit();
}

seed();