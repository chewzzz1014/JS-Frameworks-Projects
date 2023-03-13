// synchronous - blocking (must wait till non-JS operation completes)
// asynchronous - non-blocking (accept callback)

const fs = require('fs')

// sync
const data = fs.readFileSync('../README.md')
// async
fs.readFile('../README.md', (err, data) => {
    if (err)
        throw err
    console.log(data)
})