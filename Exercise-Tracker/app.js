import express from "express";
import mongoose from "mongoose";
import path from "path";
import './routes/users'

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
// to be able to read .env file
require("dotenv").config()


mongoose.connect('process.env.MONGO_URI', { useNewUrlParser: true, useUnifiedTopology: true })
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

app.use('/api/users', userRouter)

app.use((err, req, res, next) => {
    res.send(`${err} error!`)
})

app.listen(3000, () => {
    console.log("Listening to Port 3000")
})

export default app
