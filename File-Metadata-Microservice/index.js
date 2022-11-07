const express = require("express");
const path = require("path")
const app = express();

app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(3000, () => {
    console.log("Listening at Port 3000")
})