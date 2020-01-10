const express = require("express");
const router = express.Router();

const Twit = require("../../models/Twit");

// @route GET twits/
// @desc get the public twitfeed
// @access Public
router.get("/", (req, res) => {
  Twit.find(function(err, twits) {
    if (err) {
      console.log(err);
    } else {
      res.json(twits);
    }
  });
});

// @route GET twits/:id
// @desc get individual twit
// @access Public
router.get("/:id", (req, res) => {
  let id = req.params.id;
  Twit.findById(id, function(err, twit) {
    res.json(twit);
  });
});

// TODO: EDIT path

// @route POST twits/post
// @desc Post a new twit
// @access Public
router.post("/post", (req, res) => {
  let twit = new Twit(req.body);
  twit
    .save()
    .then(twit => {
      res.status(200).json({ twit: "twit added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding twit failed");
    });
});

module.exports = router;
