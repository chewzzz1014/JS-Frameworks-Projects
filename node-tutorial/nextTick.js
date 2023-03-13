// process.nextTick(): pass a function to it, to invoke this function at the end of current operation before next event loop tick starts (tick = event loop takes a full trip)

// setTimeout: execute function at the end of next tick
console.log('Order: 1')

setTimeout(() => {
    console.log('Order: 4')
}, 0)

setImmediate(() => {
    console.log('Order: 3')
})

process.nextTick(() => {
    console.log('Order: 2')
})

/**
 * Output:
 * Order 1
 * Order 2
 * Order 3
 * Order 4
 */