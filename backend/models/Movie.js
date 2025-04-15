const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  duration: Number,
  language: String,
  theaters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Theater" }]
});
module.exports = mongoose.model("Movie", movieSchema);
