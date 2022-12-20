const express = require('express')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const app = express()
const mainRoute = require('./routes/home')
const userRoute = require('./routes/users')
require('dotenv').config()

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('mongo connected')
    })
    .catch(err => {
        console.log(err)
    })

app.use(express.static(path.join(__dirname, 'public')))
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))

// express session
app.use(session({
    secret: 'keyboard warrior',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use('/', mainRoute)
app.use('/users', userRoute)

// error middleware
app.use((err, req, res, next) => {
    console.log(err)
    next(err)
})

app.listen(process.env.PORT, () => {
    console.log('Server Running')
})