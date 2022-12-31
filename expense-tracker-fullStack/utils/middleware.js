const morgan = require('morgan')

const invalidEndpoint = (req, res, next) => {
    res.status(401).send('Invalid Endpoint')
}

const morganLogger = morgan()

module.exports = {
    invalidEndpoint,
    morganLogger
}