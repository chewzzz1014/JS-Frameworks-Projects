const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./models/user");
const { Exercise } = require("./models/exercise");
const { Log } = require("./models/log");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
// to be able to read .env file
require("dotenv").config()

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect('mongodb://localhost:27017/exercise', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open");
    })
    .catch((err) => {
        console.log(err);
    })

app.get("/", (req, res) => {
    res.render("home");
    //res.send("ok")
})

app.get("/api/users", async (req, res, next) => {
    const users = await User.find();
    res.send(users);
})

app.post("/api/users", async (req, res, next) => {
    const { username } = req.body;
    const user = new User({ username: username });
    await user.save();

    const { username: fUsername, _id } = await User.findOne({ username: username })
    res.json({ username: fUsername, _id: _id })
})

app.post("/api/users/:id/exercises", async (req, res, next) => {
    const { id } = req.params;
    const { description, duration, date } = req.body;

    try {
        const foundUser = await User.findById(id);

        // check if user fill in date
        if (!date) {
            const formattedDate = new Date();
            const exercise = new Exercise({
                userId: foundUser._id,
                username: foundUser.username,
                description: description,
                duration: duration,
                date: formattedDate
            });
            await exercise.save();
            res.json(generateJson(exercise));
        } else {
            const formattedDate = new Date(date);
            const exercise = new Exercise({
                userId: foundUser._id,
                username: foundUser.username,
                description: description,
                duration: duration,
                date: formattedDate
            });
            await exercise.save();
            res.json(generateJson(exercise));
        }
    } catch (err) {
        next(err)
    }
})

app.use((err, req, res, next) => {
    res.send(`${err} error!`)
})

app.listen(3000, () => {
    console.log("Listening to Port 3000")
})

function generateJson({ userId, username, date, duration, description }) {
    return {
        _id: userId,
        username: username,
        date: date.toDateString(),
        duration: duration,
        description: description
    }
}