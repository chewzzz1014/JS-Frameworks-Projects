const express = require('express')
const { invalidEndpoint, morganLogger, errorHandler } = require('./utils/middleware')
const { PORT, NODE_ENV, MONGO_URI } = require('./config/config')
const transactionRouter = require('./routes/transactions')
const connectDB = require('./config/db')
const app = express()
require('colors')

// connect db
connectDB()

// middleware
app.use(express.json())
app.use(morganLogger)

// routes
app.use('/api/v1/transactions', transactionRouter)
app.get('/', (req, res) => {
    res.send('Hello Home')
})

// middleware
app.use(invalidEndpoint)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT} (${NODE_ENV} mode)`.yellow.bold)
})