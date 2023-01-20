import express from "express";
import multer from 'multer'
import logger from 'morgan'
import createError from "http-errors";
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "/views"))

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "/public")))

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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // Send the error status
    res.status(err.status || 500);
    res.send(err.message);
});

export default app