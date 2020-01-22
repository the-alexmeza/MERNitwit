const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
  name: {
    // username
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("users", User);
