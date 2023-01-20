// const mongoose = require("mongoose");
import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    url: String,
});

const URL_SHORT = mongoose.model("URL", urlSchema);

const seedData = async () => {
    const fcc = new URL_SHORT({
        url: "forum.freecodecamp.org",
        // _id: "3"
    });
    await fcc.save();
}

const deleteAllData = async () => {
    await URL_SHORT.deleteMany();
}

seedData();
// console.log("Yayyyy");
deleteAllData();

// module.exports = URL_SHORT;

export default URL_SHORT

