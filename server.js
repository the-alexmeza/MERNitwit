const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");

// import routes
const users = require("./routes/api/users");
const twits = require("./routes/twits/twits");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection successfully established.");
});

const port = process.env.PORT || 4000;

// load passport stuff
app.use(passport.initialize());

require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/twits", twits);

app.listen(port, function() {
  console.log("Server is running on port: " + port);
});
