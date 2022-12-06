const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    console.log(`user hit the server and sent ${req.method} request to ${req.url}`)

    const url = req.url

    if (url === '/') {
        // metedata for response
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write(homePage)
        res.end()
    } else if (url === '/about') {
        // metedata for response
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write('<h1>about</h1>')
        res.end()
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>404 Page Not Found</h1>')
        res.end()
    }

})

server.listen(3000, () => {
    console.log('Listening at port 3000')
})
