const express = require('express')
const app = express()

// GET
app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get("/about", (req, res) => {
    res.status(200).send("About Page")
})

// POST

// PUT

// DELETE

// ALL (work with all HTTP Method)
app.all('*', (req, res) => {
    res.status(404).send("<h1>404 Resource Not Found</h1>")
})

// USE (middleware)

app.listen(3000, () => {
    console.log('Server running at port 3000')
})