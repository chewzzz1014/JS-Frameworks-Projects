const http = require('htttp')

const server = http.createServer((req, res) => {
    res.write('Hello World')
})

server.listen(3000)