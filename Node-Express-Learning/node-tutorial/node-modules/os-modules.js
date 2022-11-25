// interacting with os and server
// built-in modules

const os = require('os')

// current user info
const user = os.userInfo()
console.log(user)

// system uptime in seconds
console.log(`System uptime : ${os.uptime()} seconds`)

// about os
const currentOs = {
    name: os.type(),
    release: os.release(),
    totolMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)