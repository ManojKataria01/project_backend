let mongoose = require("mongoose");

let handSchema = new mongoose.Schema({
  handinfo: String,
});

module.exports = mongoose.model("User", handSchema);
