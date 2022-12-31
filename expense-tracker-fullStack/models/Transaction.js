const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Text is required']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negetive number']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transaction', transactionSchema)