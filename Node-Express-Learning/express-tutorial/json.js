const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.json([
        { name: 'chewzzz' },
        { name: "John" }
    ])
})

app.listen(3000, () => {
    console.log('Server running ar port 3000')
})