var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var user = require('./user');


app.use(bodyParser.json());