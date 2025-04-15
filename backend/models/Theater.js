const mongoose = require("mongoose");
const theaterSchema = new mongoose.Schema({
  name: String,
  location: String,
  screenCount: Number
});
module.exports = mongoose.model("Theater", theaterSchema);
