var user = require('../user');
var skillz = require('../skillz');

module.exports = {

    getName: function(req, res){
        return res.status(200).json({ 'name':user.name });
    },
    getLocation: function(req, res){
        return res.status(200).json({ 'location':user.location });
    },
    getOccupations: function(req, res){
        var order = req.query.order
        return res.status(200).json((order == 'asc') ? user.occupations.sort((a,b)=>a-b).reverse() : user.occupations.sort((a,b)=>(a-b)));
    },
    latestOccupation: function(req, res){
        return res.status(200).json({ 'latestOccupation':user.occupations.slice(-1) })
    },
    getHobbies: function(req, res){
        return res.status(200).json({ 'hobbies':user.hobbies });
    },
    getHobbiesByType: function(req, res){
        var type = req.query.type;
        var filteredHobbies = user.hobbies.filter(function(hobbies){
            return hobbies.type == type;
        });
        return res.status(200).json(filteredHobbies);
    },
    getFamily: function(req, res){
        if (req.query.relation){
            var relation = req.query.relation;
            var filterByRelation = user.family.filter(function(family){
            return family.relation.toLowerCase() == relation.toLowerCase();
            });
            return res.status(200).json(filterByRelation)
        };
            return res.status(200).json(user.family)    
    },
    getFamilyByGender: function(req, res){
        var gender = req.query.gender;
        var filterByGender = user.family.filter(function(family){
            return family.gender == gender;
        });
        return res.status(200).json(filterByGender);
    },
    getRestaurants: function(req, res){
        if (req.query.rating){
            var rating = req.query.rating;
            var filterByRating = user.restaurants.filter(function(val){
                if(val.rating >= rating){
                    return true;
                }
            });
            return res.status(200).json(filterByRating)
        };
            return res.status(200).json(user.restaurants)
    },
    getRestaurantsByName: function(req, res){
        var name = req.query.name
        var filterByName = user.restaurants.filter(function(restaurants){
            return restaurants.name.toLowerCase() == name.toLowerCase();
        });
        return res.status(200).json(filterByName);
    },
    changeName: function(req, res){
        user.name = req.body.name;
        return res.status(200).json(user.name);
    },
    changeLocation: function(req, res){
        user.location = req.body.location;
        return res.status(200).json(user.location);
    },
    addHobby: function(req, res){
        var name = req.body.name;
        var type = req.body.type;
        user.hobbies.push({ "name":name, "type":type });
        return res.status(200).json(user.hobbies);
    },
    addOccupation: function(req, res){
       var occupation = req.body.occupation;
       user.occupations.push(occupation); 
       return res.status(200).json(user.occupations);
    },
    addFamily: function(req, res){
        var name = req.body.name;
        var relation = req.body.relation;
        var gender = req.body.gender;
        user.family.push({ "name":name, "relation":relation, "gender":gender });
        return res.status(200).json(user.family);
    },  
    addRestaurant: function(req, res){
        var name = req.body.name;
        var type = req.body.type;
        var rating = req.body.rating;
        user.restaurants.push({ "name":name, "type":type , "rating":rating });
        return res.status(200).json(user.restaurants);
    },
    getSkillz: function(req, res){
        if (req.query.experience){
            var experience = req.query.experience;
            var filterByExperience = skillz.filter(function(skill){
                return skill.experience == experience;
            });
            return res.status(200).json(filterByExperience)
        };
            return res.status(200).json(skillz) 

    },
    addSkillz: function(req, res){
        var id = req.body.id;
        var name = req.body.name;
        var experience = req.body.experience;
        skillz.push({ "id": id, "name": name, "experience": experience });
        return res.status(200).json(skillz);
    }   


};