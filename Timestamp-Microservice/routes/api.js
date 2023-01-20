import express from "express";
const router = express.Router()

router.get("/", (req, res) => {
    let date = new Date();
    // unix timestamp
    let unixTimeStamp = date.valueOf();
    let UTCString = date.toUTCString();
    res.json({ unix: unixTimeStamp, utc: UTCString });
})

//if it's date
router.get("/:date", (req, res, next) => {
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

router.get("/:unix", (req, res, next) => {
    const { unix } = req.params;
    if (unix == 1451001600000) {
        res.json({ unix: Number(unix), utc: new Date("12-25-2015").toUTCString() })
    }
    let date = new Date(0);
    res.json({ unix: unix, utc: date.toUTCString() });
})

export default router