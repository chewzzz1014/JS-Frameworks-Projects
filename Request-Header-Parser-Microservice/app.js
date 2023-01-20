import express from "express";
import logger from 'morgan'
import createError from "http-errors";
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(logger("dev"));
app.use(express.static('public'));
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get("/api/whoami", (req, res, next) => {
  res.json({
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: req.headers["accept-language"],
    software: req.headers['user-agent']
  });
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
