const express = require('express')
const app = express()

// GET
app.get('/', (req, res) => {
    res.send('Home Page')
})

// POST

// PUT

// DELETE

// ALL (work with all HTTP Method)

// USE (middleware)

app.listen(3000, () => {
    console.log('Server running at port 3000')
})