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

app.get("/api/products/:id", (req, res) => {
    const foundProduct = products.find(ele => ele.id === Number(req.params.id))

    if (!foundProduct) {
        res.status(404).send('<h1>404 Resource Not Found</h1>')
    }
    res.json(foundProduct)
})

app.listen(3000, () => {
    console.log('Server running ar port 3000')
})