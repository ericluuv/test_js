"use strict";

require('dotenv').config();
const express = require('express')
const path = require('path');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080;

const { getStars } = require('./sql/stars.js');

app.use("/static", express.static('./static/'));

// Initial html for the web page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

// An API endpoint
app.get('/api/stars', cors(), function(req, res) {
  res.set({
    'Content-Type': 'text/plain',
    'Content-Length': '123',
    'ETag': '12345'
  });
  res.status(200);
  res.send("HELLO");
});
