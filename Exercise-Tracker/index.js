const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./models/user");
//const { Exercise } = require("./models/exercise");
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

app.get("/api/users/:id/logs", async (req, res, next) => {
    // from, to and limit are optional
    // from and to are date
    // limit is number
    const { id } = req.params;
    let from, to, limit;

    if (!req.query.limit && !req.query.to && !req.query.from) {
        const foundUser = await Log.findById(id);
        res.json(foundUser)
    } else {
        from = (req.query.from === 0 || req.query.from) ? new Date(req.query.from) : new Date(0);
        to = (req.query.to === 0 || req.query.to) ? new Date(req.query.to) : new Date(Date.now());
        // limit = Number(req.query.limit) || 100;

        const foundUser = await Log.findById(id);

        console.log(foundUser.log + '\n\n') // an array of object(logs)
        let returnedRecord = [];

        if (req.query.limit && !req.query.to && !req.query.from) {
            returnedRecord = Array.from(foundUser.log).slice(0, Number(req.query.limit))
        } else if (req.query.to && !req.query.from) {
            Array.from(foundUser.log).forEach((ele) => {
                if (new Date(ele.date).getTime() <= to.getTime())
                    returnedRecord.push(ele);
                console.log(typeof ele.date)
            })

            limit = Number(req.query.limit) || returnedRecord.length;
            returnedRecord = returnedRecord.slice(0, limit)

        }
        else if (!req.query.to && req.query.from) {
            Array.from(foundUser.log).forEach((ele) => {
                if (new Date(ele.date).getTime() >= from.getTime())
                    returnedRecord.push(ele);
            })

            limit = Number(req.query.limit) || returnedRecord.length;
            returnedRecord = returnedRecord.slice(0, limit)
        }


        const result = {
            _id: id,
            username: foundUser.username,
            count: returnedRecord.length,
            log: returnedRecord
        };
        if (req.query.to)
            result.to = req.query.to
        if (req.query.from)
            result.from = req.query.from
        console.log(result)

        res.send(result)
    }

})


app.post("/api/users", async (req, res, next) => {
    const { username } = req.body;
    const user = new User({ username: username });
    await user.save();

    const foundUser = await User.findOne({ username: username })
    res.json(foundUser)
})

app.post("/api/users/:id/exercises", async (req, res, next) => {
    const { id } = req.params;
    const { description, duration, date } = req.body;

    try {
        let formattedDate;
        if (!date) {
            formattedDate = new Date().toDateString();
        } else {
            formattedDate = new Date(date).toDateString();
        }

        const exercise = {
            description: description,
            duration: parseInt(duration),
            date: formattedDate
        };

        const foundUser = await User.findById(id);

        const isLogExist = await Log.exists({ _id: foundUser._id });

        if (!isLogExist) {
            const userLog = new Log({
                _id: foundUser,
                username: foundUser.username,
                count: 1
            });
            userLog.log.push(exercise);
            await userLog.save();

            const { _id: uId, username } = foundUser;
            //res.json({ ...foundUser, ...exercise });
            res.json({ _id: uId, username: username, ...exercise });

        } else {
            const foundLog = await Log.findByIdAndUpdate(id, {
                $inc: {
                    count: 1
                }
            }, { new: true })
            foundLog.log.push(exercise);
            foundLog.save();

            const { _id: uId, username } = foundUser;
            res.json({ _id: uId, username: username, ...exercise });
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
