const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
    res.send('Hello')
})

app.listen(process.env.PORT, () => {
    console.log('Server Running')
})