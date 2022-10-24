require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require("dns");
const url = require("url");
const URL_SHORT = require("./models/url");
const mongoose = require("mongoose");
const app = express();


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
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

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});


