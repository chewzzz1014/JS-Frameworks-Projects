const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const ejs = require('ejs')
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

app.use('/', mainRoute)
app.use('/users', userRoute)


app.listen(process.env.PORT, () => {
    console.log('Server Running')
})