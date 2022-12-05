//synchronous or asynchronous
const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')



// read file synchronously
const first = readFileSync('./test/first.txt', 'utf8')
const second = readFileSync('./test/second.txt', 'utf8')

console.log(first, second)

// write file synchronously
// create new file/overwrite
// set flag to wrtie/append (overwrite by default)
writeFileSync('./test/result-sync.txt', `Here's the result:\n${first}\n${second}`, { flag: 'a' })


// read file asynchronously
// provide callback function
readFile('./test/first.txt', 'utf8', (err, result) => {
    if (err) {
        console, log(err)
        return
    }
    const first = result
    readFile('./test/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./test/result-async.txt', `Here's the result:\n${first}\n${second}`, (err, result) => {
            if (err)
                return
            return result
        })
    })
})