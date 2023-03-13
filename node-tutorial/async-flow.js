/**
 * 1. initiator style/input  (accept original input for the operation (if any))
 * 2. middleware (will return another function)
 * 3. terminator (will invoke callback)
 */

function final(arg, callback) {
    callback(`${arg} are terminated by executing callback`)
}

function middleware(arg, callback) {
    return final(`${arg} touched by middleware `, callback)
}

function initiate() {
    const arg = 'hello this is a function'
    middleware(arg, function (result) {
        console.log(result)
    })
}