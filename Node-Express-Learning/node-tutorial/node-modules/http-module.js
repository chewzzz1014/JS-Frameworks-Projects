const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('This is about page')
    }
    res.end(`
    <h1>Opps!</h1>
    <p>Page not found</p>
    <a href='/'>Back to Home Page</a>
    `)
})

server.listen(3000)