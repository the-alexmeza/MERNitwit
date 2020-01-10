const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Twit = new Schema({
  body: String,
  author: { type: String, default: "Anon" },
  hidden: Boolean,
  likes: { type: Number, default: 0}
});

module.exports = mongoose.model('Twit', Twit);
