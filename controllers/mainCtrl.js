var user = require('../user');

module.exports = {

    getName: function(req, res){
        res.json({ 'name':user.name });
    },
    getLocation: function(req, res){
        res.json({ 'location':user.location });
    },
    getOccupations: function(req, res){
        res.json({ 'occupations':user.occupations });
    },
    latestOccupation: function(req, res){
        res.slice({ 'latestOccupation':user.occupations })
    },
    getHobbies: function(req, res){

    },
    getHobbiesByType: function(req, res){

    },
    getFamily: function(req, res){

    },
    getFamilyByGender: function(req, res){

    },
    getResturants: function(req, res){

    },
    getResturantsByName: function(req, res){

    }


};