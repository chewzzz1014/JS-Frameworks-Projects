// const mongoose = require("mongoose");
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String
})


//module.exports.User = mongoose.model("User", userSchema);

export default mongoose.model("User", userSchema);