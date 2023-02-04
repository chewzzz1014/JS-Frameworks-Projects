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
                throw new Error('Invalid Date');
            // unix timestamp
            let unixTimeStamp = formattedDate.valueOf()
            res.json({ unix: unixTimeStamp, utc: formattedDate.toUTCString() });
        } catch (err) {
            next(err);
            return;
        }
    } else {
        next();
    }
})

router.get("/:date", (req, res, next) => {
    const unix = req.params.date;
    let date = new Date(unix * 1000);
    res.json({ unix: unix, utc: date.toUTCString() });
})

export default router