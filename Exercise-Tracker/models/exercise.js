const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports.Exercise = mongoose.model("Exercise", exerciseSchema);