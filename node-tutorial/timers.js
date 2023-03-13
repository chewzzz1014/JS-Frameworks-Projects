// setTimeout and setInterval

// setTimeout: delay execution of function
// setTimeout will return timer id (can be used to delete this scheduled function execution)
const greet = (myName, yourName) => {
    console.log(`${myName} met ${yourName}!`)
}
const timerId = setTimeout(greet, 2000, 'chewzzz', 'zzzzz')
clearTimeout(timerId)


// to avoid execution overlaps in setInterval, schedule setTimeout to be called when callback function finishes
const myFunc = () => {
    setTimeout(myFunc, 1000)
}

setTimeout(myFunc, 1000)


// setImmediate: equivalent to setTimeout(() => {}, 0)
