const { createReadStream } = require('fs')

// const stream = createReadStream('../node-modules/test/first.txt')
const stream = createReadStream('../node-modules/test/first.txt', {
    highWaterMark: 9000,
    encoding: 'utf8'
})

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)
})

