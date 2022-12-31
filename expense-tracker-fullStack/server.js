const path = require('path')
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
if (NODE_ENV === 'development')
    app.use(morganLogger)

// routes
app.use('/api/v1/transactions', transactionRouter)

// middleware
app.use(invalidEndpoint)
app.use(errorHandler)

if (NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT} (${NODE_ENV} mode)`.yellow.bold)
})