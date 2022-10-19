const express = require('express');
const path = require("path");

app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
})

//if it's date
app.get("/api/:date", (req, res, next) => {
    const { date } = req.params;
    const numOfDash = date.length - date.replaceAll("-", "").length;
    if (numOfDash === 2 || numOfDash === 1) {
        try {
            let formattedDate = new Date(date);
            if (isNaN(formattedDate))
                next(err);
            let unix = Math.floor(1000000000000 + Math.random() * 9000000000000);
            res.json({ "unix": unix, "utc": formattedDate });
        } catch (err) {
            next(err);
        }
    } else if (numOfDash == 0) {
        next();
    } else {
        next(err);
    }
})

app.get("/api/:unix", (req, res, next) => {
    const { unix } = req.params;
    let date = new Date(0);
    res.json({ "unix": unix, "utc": date });
})

app.use((err, req, res, next) => {
    res.json({ "error": 'Invalid Date' });
})


app.listen(3000, () => {
    console.log("Listening at Port 3000");
})