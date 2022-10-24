require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require("dns");
const URL_SHORT = require("./models/url");
const app = express();

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
  const url_obj = new URL(user_url);
  const url_hostname = url_obj.hostname;

  // dns lookup on hostname of url 
  dns.lookup(url_hostname, async (err, address) => {
    if (!err) {
      console.log(address, url_hostname);
      const new_url = new URL_SHORT({
        url: url_hostname,
        short_url: randomShortURL()
      })
      await new_url.save();
    }
    else
      next(err);
  });
})


app.get("/api/shorturl/:short_url", async (req, res, next) => {
  const { short_url } = req.params;
  try {
    const foundUrl = await URL_SHORT.findOne({ short_url: short_url });
    console.log(foundUrl.url);
  } catch (err) {
    next(err);
  }
})

app.use("/", (err, req, res, next) => {
  res.json({ error: "Invalid URL" });
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

function randomShortURL() {
  return Math.floor(Math.random() * 100000).toString()
}
