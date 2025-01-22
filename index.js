var express = require('express');
const crypto = require('crypto');
const multer = require('multer');
var bodyParser = require('body-parser');

const app = express();
const port = 8000;

// MIDDLEWARE
// body parser
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('this is global middleware');
  next()
});

app.use('/about', (req, res, next) => {
  console.log('I am middleware for about route');
  next()
});

// ROUTING
app.get('/', function (req, res) {
  res.send('This is home page');
});

app.get('/about', function (req, res) {
  res.send('This is about page');
});

app.get('/contact', function (req, res) {
  res.send('This is contact page');
});

app.listen(port, function () {
  console.log('Server run Success');
});
