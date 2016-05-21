var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



app.use(express.static(__dirname + '/app'));
var port = process.env.PORT || 8081;
app.listen(port);

