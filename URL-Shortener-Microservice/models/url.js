const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/url', { useNewUrlParser: true })
    .then(() => {
        console.log("connection open");
    })
    .catch((err) => {
        console.log(err);
    })


const urlSchema = new mongoose.Schema({
    url: String,
    short_url: String
});

const URL_SHORT = mongoose.model("URL", urlSchema);

const seedData = async () => {
    const fcc = new URL_SHORT({
        url: "forum.freecodecamp.org",
        short_url: "3"
    });
    await fcc.save();
}

const deleteAllData = async () => {
    await URL_SHORT.deleteMany();
}

seedData();
// console.log("Yayyyy");
// deleteAllData();

module.exports = URL_SHORT;

