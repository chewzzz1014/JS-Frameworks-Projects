const express = require('express')
const path = require('path')
const app = express()
const mainRoute = require('./routes/index')
const userRoute = require('./routes/users')

require('dotenv').config()

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))

app.use('/', mainRoute)
app.use('/user', userRoute)


app.listen(process.env.PORT, () => {
    console.log('Server Running')
})