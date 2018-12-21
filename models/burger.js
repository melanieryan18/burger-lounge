var orm = require('../config/orm');

var burger = {
    all : function(callback){
        orm.all('burgers', function(result){
            callback(result)
        });
    },
    create : function(newburger, callback){
        orm.create('burgers', newburger, function(result){
            callback(result);
        });
    },
    update : function(id, callback){
        orm.update('burgers', 'devoured', "true" , "id", id, function(result){
            console.log("model update")
            callback(result);
        });
    }

};

module.exports = burger;
