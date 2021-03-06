var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var user = require('./user');
var mainCtrl = require('./controllers/mainCtrl.js');
var middleware = require('./controllers/middleware.js');
var skillz = require('./skillz')

app.use(bodyParser.json());

app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.latestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/getHobbiesByType', mainCtrl.getHobbiesByType);
app.get('/family', mainCtrl.getFamily);
app.get('/getByGender', mainCtrl.getFamilyByGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/getByName', mainCtrl.getRestaurantsByName);
app.get('/skillz', mainCtrl.getSkillz);

app.put('/name', mainCtrl.changeName)
app.put('/location', mainCtrl.changeLocation)

app.post('/hobbies', mainCtrl.addHobby)
app.post('/occupations', mainCtrl.addOccupation)
app.post('/family', mainCtrl.addFamily)
app.post('/restaurants', mainCtrl.addRestaurant)
app.post('/skillz', middleware.addSkillzId, mainCtrl.addSkillz)


app.listen(3000, function(){
    console.log('THUUGG LIIIFFEEE!!!!')
});