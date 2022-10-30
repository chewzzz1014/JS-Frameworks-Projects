const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    _id: {
        type: mongoose.ObjectId,
        required: true,
    },
    username: {
        type: String
    },
    count: {
        type: Number,
        required: true,
        default: 0
    },
    log: [{
        description: String,
        duration: Number,
        date: String
    }
    ]
})

module.exports.Log = mongoose.model("Log", logSchema);