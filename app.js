var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var user = require('./user');
var mainCtrl = require('./controllers/mainCtrl.js');
var middleware = require('./controllers/middleware.js');

app.use(bodyParser.json());

app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.latestOccupations);


app.listen(3000, function(){
    console.log('THUUGG LIIIFFEEE!!!!')
});