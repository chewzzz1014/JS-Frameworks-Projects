// EventEmitter class 
// emit(): trigger an event
// on(): add a callback function that's going to be executed when event is triggered
const EventEmitter = require('events')
const eventEmitter = EventEmitter()

eventEmitter.on('start', (num) => {
    console.log(`started event ${num}`)
})

eventEmitter.emit('start', 23)
