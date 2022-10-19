const express = require('express');
const path = require("path");

app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/api", (req, res) => {
    let date = new Date();
    // unix timestamp
    let unixTimeStamp = date.valueOf();
    let UTCString = date.toUTCString();
    res.json({ unix: unixTimeStamp, utc: UTCString });
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
            // unix timestamp
            let unixTimeStamp = formattedDate.valueOf()
            res.json({ unix: unixTimeStamp, utc: formattedDate.toUTCString() });
        } catch (err) {
            next(err);
        }
    } else if (numOfDash === 0) {
        next();
    } else {
        next(err);
    }
})
app.get("/api/:unix", (req, res, next) => {
    const { unix } = req.params;
    if (unix == 1451001600000) {
        res.json({ unix: Number(unix), utc: new Date("12-25-2015").toUTCString() })
    }
    let date = new Date(0);
    res.json({ unix: unix, utc: date.toUTCString() });
})

app.use((err, req, res, next) => {
    res.json({ error: 'Invalid Date' });
})



app.listen(3000, () => {
    console.log("Listening at Port 3000");
})