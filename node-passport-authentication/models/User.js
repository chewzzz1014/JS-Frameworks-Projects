const mongoose = require('mongoose')
const { use } = require('passport')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
})

module.exports = new mongoose.model('User', userSchema)