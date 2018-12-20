var connection = require("../config/connection.js");

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: function (cols, vals, cb) {
        var queryString = "INSERT INTO burgers WHERE burger = ?" + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    delete: function (col, val) {
        orm.delete("burgers", col, val, function (res) {
            cb(res);
        }
        )
    }
};

module.exports = orm;
