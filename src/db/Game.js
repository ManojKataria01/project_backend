let mongoose = require("mongoose");

let gameSchema = new mongoose.Schema({
  gamedetails: String,
});

module.exports = mongoose.model("User", gameSchema);
