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
        orm.update('burgers', 'devour', "true" , "id", id, function(result){
            callback(result);
        });
    }

};

module.exports = burger;
