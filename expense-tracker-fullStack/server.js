const express = require('express')
const { invalidEndpoint, morganLogger } = require('./utils/middleware')
const { PORT, NODE_ENV, MONGO_URI } = require('./config/config')
const transactionRouter = require('./routes/transactions')
const app = express()

require('colors')

app.use(morganLogger)

app.use('/api/v1/transactions', transactionRouter)
app.get('/', (req, res) => {
    res.send('Hello Home')
})

app.use(invalidEndpoint)

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT} (${NODE_ENV} mode)`.yellow.bold)
})