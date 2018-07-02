const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const counter = new Schema({
  count: { type: Number, required: true },
});

const Count = mongoose.model("Count", counter);
module.exports = Count;
