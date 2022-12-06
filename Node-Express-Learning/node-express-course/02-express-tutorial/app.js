const http = require('http')

const server = http.createServer((req, res) => {
    console.log(`user hit the server and sent ${req.method} request to ${req.url}`)

    // metedata for response
    res.writeHead(200, {
        'content-type': 'text/html'
    })

    res.write('<h1>my home page</h1>')
    res.end()
})

server.listen(3000, () => {
    console.log('Listening at port 3000')
})
