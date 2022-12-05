// on - listen for an event
// emit - emit en event
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data received, ${name} (${id})!`)
})
customEmitter.on('response', () => {
    console.log(`some other data`)
})

customEmitter.emit('response', 'john', 22)

