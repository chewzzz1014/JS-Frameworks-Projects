const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();

app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

const upload = multer({ dest: './public/data/uploads/' })
app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
    const { originalname: name, mimetype: type, size } = req.file;
    res.json({
        name: name,
        type: type,
        size: size
    })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(3000, () => {
    console.log("Listening at Port 3000")
})