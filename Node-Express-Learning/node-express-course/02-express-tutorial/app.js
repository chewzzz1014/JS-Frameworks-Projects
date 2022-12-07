const express = require('express')
const path = require('path')
const app = express()

// GET
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
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