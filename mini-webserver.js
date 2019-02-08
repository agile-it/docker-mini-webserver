var express = require('express');
var app = express();

var port = process.env.PORT0 || 3000;
var host = process.env.HOST || "0.0.0.0";


app.use(function (req, res, next) {
  var domain = req.hostname;
  domain = domain.substring(domain.indexOf('.') + 1);

  if (req.hostname !== "www."+domain) {
    res.append("Location","https://www."+domain);
    res.status(302).end();
  }
  next();
});

app.use(express.static(__dirname + '/public'));


app.use(function(req, res, next) {
  res.status(404).end();
});

var server = app.listen(port, host);
