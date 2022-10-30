const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const Exercise = require("./models/exercise");
const app = express();

// to be able to read .env file
require("dotenv").config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res) => {
    res.send("Hello");
})

app.listen(3000, () => {
    console.log("Listening to Port 3000")
})