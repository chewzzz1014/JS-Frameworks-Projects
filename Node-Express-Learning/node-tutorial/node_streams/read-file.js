const { createReadStream } = require('fs')

const stream = createReadStream('../node-modules/test/first.txt')

stream.on('data', (result) => {
    console.log(result) // <Buffer 48 65 6c 6c 6f 20 66 69 72 73 74 21 0d 0a 77 6f 6f 68 6f 6f>
})

