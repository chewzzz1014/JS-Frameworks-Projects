const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3001, () => {
    console.log('Listening at Port 3001')
})