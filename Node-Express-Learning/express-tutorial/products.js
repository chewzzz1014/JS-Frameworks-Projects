const express = require('express')
const { products, people } = require("../node-express-course/02-express-tutorial/data")
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
    const { id } = req.params
    const foundProduct = products.find(ele => ele.id === Number(id))

    if (!foundProduct) {
        res.status(404).send(`<h1>404 Product with Id ${id} Not Found</h1>`)
    }
    res.json(foundProduct)
})

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
    const { productId, reviewId } = req.params
    res.send(`Viewing product of Id$ {productId} and review with Id ${reviewId}`)
})

app.get("/api/v1/query", (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]

    // only if search and limit query are provided
    if (search) {
        sortedProducts = sortedProducts.filter((ele) => {
            return ele.name.toLowerCase().startsWith(search.toLowerCase())
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        res.status(200).send('<h1>No Item Found</h1>')
    }

    res.status(200).json(sortedProducts)
})

app.listen(3000, () => {
    console.log('Server running ar port 3000')
})