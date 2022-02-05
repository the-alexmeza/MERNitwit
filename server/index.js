require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE);
// Model goes here
const TwitModel = require("./models/Twits");

// API prefix
const prefix = "/api/v1";

// Get all twits
app.get(prefix + "/getTwits", (req, res) => {
  TwitModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// Get one twit
app.get(prefix + "/details/:id", (req, res) => {
  TwitModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// Post a twit
app.post(prefix + "/twit", async (req, res) => {
  const twit = req.body;
  const newTwit = new TwitModel(twit);
  await newTwit.save();
  res.json(twit);
});

// Delete a twit by ID
app.delete(prefix + "/delete/:id", async (req, res) => {
  await TwitModel.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err) {
      res.json(err);
    } else {
      res.json(doc);
    }
  });
});

// Like a twit
app.put(prefix + "/like/:id", async (req, res) => {
  const filter = { id: req.params.id };
  const doc = await TwitModel.findOne(filter);
  doc.likes = ++doc.likes;
  await doc.save();
  res.json(doc);
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port: " + process.env.PORT);
});
