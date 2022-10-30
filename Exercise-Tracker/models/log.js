const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true,
        default: 0
    },
    log: [
        {
            description: String,
            duration: Number,
            date: Date
        }
    ]
})

module.exports.Log = mongoose.model("Log", logSchema);