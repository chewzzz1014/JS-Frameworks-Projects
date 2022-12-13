const express = require('express')
const app = express()

// middleware
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

const authorize = (req, res, next) => {
    const { user } = req.query

    // update req.user
    if (user === 'john') {
        req.user = { name: 'john', id: 3 }
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
    next()
}

// we can specify path for applying middleware
//app.use("/api", logger)

app.use([authorize, logger])

app.get("/", (req, res) => {
    res.json(req.user)
})

app.get("/about", (req, res) => {
    res.send('About')
})

app.get("/api/products", (req, res) => {
    res.send('Products')
})

app.get("/api/items", (req, res) => {
    res.send('Items')
})

app.listen(3000, () => {
    console.log('Server running at port 3000')
})