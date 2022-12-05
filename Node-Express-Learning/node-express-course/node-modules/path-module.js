const path = require('path')

// get platform specific seperator
console.log(`Path seperator: ${path.sep}`)

// join segments using platform seperator
const filePath = path.join('/Node-Express-Learning', 'node-tutorial', 'node-modules')
console.log(filePath)

// basename(last portion) of path
console.log(path.basename(filePath))

// return absolute path 
const absolute = path.resolve(__dirname, 'meme-generator')
console.log(absolute)