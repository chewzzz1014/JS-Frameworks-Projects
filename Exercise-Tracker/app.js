import express from "express";
import mongoose from "mongoose";
import path from "path";
import logger from 'morgan'
import createError from "http-errors";
import * as dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import path from 'path';
import userRouter from './routes/users.js'

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")))
app.use(express.urlencoded({ extended: true }))
// to be able to read .env file
dotenv.config()


mongoose.connect(process.env.MONGO_URI)
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


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // Send the error status
    res.status(err.status || 500);
    res.send(err.message);
});

export default app
