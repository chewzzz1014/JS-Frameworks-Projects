const express = require('express')
const { invalidEndpoint, morganLogger } = require('./utils/middleware')
const colors = require('colors')
const transactionRouter = require('./routes/transactions')
const app = express()

require('dotenv').config({ path: './config/config.js' })

app.use(morganLogger)

app.use('/transaction', transactionRouter)
app.get('/', (req, res) => {
    res.send('Hello')
})

app.use(invalidEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT} (${process.env.NODE_ENV} mode)`.yellow.bold)
})