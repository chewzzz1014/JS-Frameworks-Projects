import express from "express";
import mongoose from "mongoose";
import logger from 'morgan'
import createError from "http-errors";
import { fileURLToPath } from 'url';
import path from 'path';
import flash from 'connect-flash'
import session from "express-session";
import passport from "passport";
import expressLayouts from 'express-ejs-layouts'

import mainRoute from './routes/home.js'
import userRoute from './routes/users.js'
import MONGO_URI from './config/keys.js'
import passportFunc from './config/passport.js'

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// passport config
passportFunc(passport)

app.use(logger("dev"));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(expressLayouts)
app.use(express.urlencoded({ extended: true }))
app.use(flash())

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('mongo connected')
    })
    .catch(err => {
        console.log(err)
    })

// express session
app.use(session({
    secret: 'keyboard warrior',
    resave: true,
    saveUninitialized: true
}))

// must put after session middleware
app.use(passport.initialize())
app.use(passport.session())

// global variables for flash colors
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})


app.use('/', mainRoute)
app.use('/users', userRoute)

// error middleware
app.use((err, req, res, next) => {
    console.log(err)
    next(err)
})

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