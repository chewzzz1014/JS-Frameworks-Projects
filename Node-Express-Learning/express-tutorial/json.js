const express = require('express')
const { products, people } = require("./../node-express-course/02-express-tutorial/data")
const app = express()

app.get("/", (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">All Products</a>')
})

app.get("/api/products", (req, res) => {
    const newProducts = products.map((ele) => {
        const { id, name, image } = ele
        return { id, name, image }
    })
    res.json(newProducts)
})

app.listen(3000, () => {
    console.log('Server running ar port 3000')
})