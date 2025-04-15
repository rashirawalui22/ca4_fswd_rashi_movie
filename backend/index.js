const express = require("express");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movieRoutes"); // Adjust path if needed
const theaterRoutes = require('./routes/theaterRoutes');

const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON
app.use("/api/movies", movieRoutes); // Mounting the routes
app.use('/api/theaters', theaterRoutes);

mongoose.connect("mongodb://localhost:27017/moviedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB Error:", err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
