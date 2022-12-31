const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const transactionRouter = require('./routes/transactions')
const app = express()

require('dotenv').config({ path: './config/config.js' })
app.use(morgan())

app.use('/transaction', transactionRouter)
app.get('/', (req, res) => {
    res.send('Hello')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT} (${process.env.NODE_ENV} mode)`.yellow.bold)
})