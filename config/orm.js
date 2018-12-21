var connection = require('./connection');

var orm = {
    all : function(tableName, callback){
        var query = "SELECT * FROM " +tableName+ ";";
        connection.query(query, (err, data) => {
            if (err){
                throw err
            }
            callback(data)
        });
    },
    
    create : function(tableName, newBurger, callback){
        var query = "INSERT INTO " +tableName+  "(burger) VALUES ('" + newBurger+ "');";
        connection.query(query, (err, result) => {
            if (err){
                throw err
            }
            callback(result)
        });
    },

    update : function(tableName, colName, newValue, conditionCol,ConditionValue, callback){
        var query = "UPDATE " +tableName+ " SET " +colName+ " = "+newValue+" Where " + conditionCol +" = "+ConditionValue +";";
        connection.query(query, (err, result) => {
            if (err){
                throw err
            } 
            callback(result)
        });
    }
}

module.exports = orm;