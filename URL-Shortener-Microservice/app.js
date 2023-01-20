import express from "express";
import mongoose from "mongoose";
import logger from 'morgan'
import createError from "http-errors";
import * as dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import path from 'path';
import dns from 'dns'
import url from 'url'
import URL_SHORT from './models/url.js'
import cors from 'cors'

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
// to be able to read .env file
dotenv.config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Basic Configuration
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});


app.post("/api/shorturl", (req, res, next) => {
  const user_url = req.body.url;
  const url_hostname = url.parse(user_url).hostname;

  // dns lookup on hostname of url 
  dns.lookup(url_hostname, async (err, address) => {
    if (address) {

      console.log(address, url_hostname);

      const new_url = new URL_SHORT({
        url: user_url
      });

      new_url.save((err, data) => {
        res.json({ original_url: data.url, short_url: data.id })
      });

    }
    else
      res.json({ error: "Invalid URL" });
  });
})


app.get("/api/shorturl/:short_url", async (req, res, next) => {
  const { short_url } = req.params;
  URL_SHORT.findById(short_url, (err, data) => {
    if (!data)
      res.json({ error: "Invalid URL" });
    res.redirect(data.url);
  })
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


