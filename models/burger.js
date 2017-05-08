var orm = require("../config/orm.js");

var burger = {
 selectAll: function(cb) {
        orm.selectAll("the_burgers", function(res) {
        cb(res);
    });
  },
 insertOne: function(cols, vals, cb) {
        orm.insertOne("the_burgers", cols, vals, function(res) {
        cb(res);
        });
  },
 updateOne: function(objColVals, condition, cb) {
     orm.updateOne("the_burgers", objColVals, condition, function(res) {
         cb(res);
     });
 }
};

module.exports = burger;