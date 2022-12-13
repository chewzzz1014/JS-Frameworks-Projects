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

app.use("/api", logger)

app.get("/", (req, res) => {
    res.send('Home')
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