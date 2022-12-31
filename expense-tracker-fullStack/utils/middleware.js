const morgan = require('morgan')

const invalidEndpoint = (req, res, next) => {
    res.status(401).send('Invalid Endpoint')
}

const morganLogger = morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')
})

const errorHandler = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(v => v.message)

        return res.status(400).json({
            success: false,
            error: messages
        })
    } else {
        console.log(`${err.message}`.red)
        return res.status(500).json({
            success: false,
            ...err
        })
    }
}

module.exports = {
    invalidEndpoint,
    morganLogger,
    errorHandler
}