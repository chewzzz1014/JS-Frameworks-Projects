// const mongoose = require("mongoose");
import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
    userId: {
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
        type: String,
        required: true
    }
})

// module.exports.Exercise = mongoose.model("Exercise", exerciseSchema);

export default mongoose.model("Exercise", exerciseSchema);