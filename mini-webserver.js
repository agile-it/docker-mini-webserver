var express = require('express');
var app = express();

var port = process.env.PORT0 || 3000;
var host = process.env.HOST || "0.0.0.0";


app.use(function (req, res, next) {
  if (req.hostname !== "www.piccocloud.de") {
    res.append("Location","https://www.piccocloud.de");
    res.status(302).end();
  }
  next();
});

app.use(express.static(__dirname + '/public'));


app.use(function(req, res, next) {
  res.status(404).end();
});

var server = app.listen(port, host);
