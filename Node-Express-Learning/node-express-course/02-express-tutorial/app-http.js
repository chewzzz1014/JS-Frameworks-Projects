const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

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
    } else if (url === '/styles.css') {
        // this part will get executed when idex.html is loaded 
        // when user entered / , also sent GET request to stylesheet and js
        res.writeHead(200, {
            'content-type': 'text/css'
        })
        res.write(homeStyles)
        res.end()
    } else if (url === '/logo.svg') {
        // metedata for response
        res.writeHead(200, {
            'content-type': 'image/svg+xml'
        })
        res.write(homeImage)
        res.end()
    } else if (url === '/browser-app.js') {
        // metedata for response
        res.writeHead(200, {
            'content-type': 'text/javascript'
        })
        res.write(homeLogic)
        res.end()
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>404 Page Not Found</h1>')
        res.end()
    }

})

server.listen(3000, () => {
    console.log('Listening at port 3000')
})
