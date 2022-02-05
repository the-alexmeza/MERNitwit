const mongoose = require("mongoose");

const TwitSchema = new mongoose.Schema(
  {
    twit: {
      type: String,
      required: true,
      maxLength: 72,
    },
    user: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  { timestamps: true }
);

const TwitModel = mongoose.model("twits", TwitSchema);
module.exports = TwitModel;
