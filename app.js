var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var user = require('./user');
var mainCtrl = require('./controllers/mainCtrl');
var middleware = require('./controllers/middleware');

app.use(bodyParser.json());

app.use(middleware.addHeaders);




app.listen(3000, function(){
    console.log('THUUGG LIIIFFEEE!!!!')
});