const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String
})


module.exports.User = mongoose.model("User", userSchema);