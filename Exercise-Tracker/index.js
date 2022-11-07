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

    if (!from) {
        try {
            const foundLog = await Log.findById(id);
            res.json(foundLog);
        } catch (err) {
            next(err);
        }
    } else {
        from = req.query.from || new Date(0);
        to = req.query.to || new Date();
        limit = Number(req.query.limit) || 100;

        const foundUser = await Log.findById(id);
        console.log(foundUser.log) // an array of object(logs)
        let returnedRecord = [];

        foundUser.log.forEach((ele) => {
            if (new Date(ele.date) >= from && new Date(ele.date) <= to) {
                if (returnedRecord.length < limit)
                    returnedRecord.push(ele);
            }
        })

        // Log.findById(id)
        //     .then(function (data) {
        //         if (data.length === 0) {
        //             res.json({
        //                 error: 'no exercises for this user in database!',
        //                 username: username,
        //                 _id: id
        //             })
        //         }
        //         else {
        //             for (let i in data) {
        //                 const d = new Date(data[i].date);
        //                 const dDate = new Date(d.getTime() +
        //                     d.getTimezoneOffset() *
        //                     60000
        //                 );
        //                 if ((dDate >= from) &&
        //                     (dDate <= to) &&
        //                     (returnedRecord.length < limit)) {
        //                     const o = {
        //                         description: data[i].description,
        //                         duration: sata[i].duration,
        //                         date: d.toDateString(),
        //                     };
        //                     returnedRecord.push(o);
        //                 }
        //             }
        //         }
        //     })

        console.log(returnedRecord)
        const result = {
            _id: id,
            username: foundUser.username,
            count: returnedRecord.length,
            log: returnedRecord
        };
        res.json(result)
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
