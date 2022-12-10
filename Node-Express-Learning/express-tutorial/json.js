const express = require('express')
const { products, people } = require("./../node-express-course/02-express-tutorial/data")
const app = express()

app.get("/", (req, res) => {
    res.json(products)
})

app.listen(3000, () => {
    console.log('Server running ar port 3000')
})