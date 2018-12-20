var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function (req, res) {
  burger.create([
    "burger", "req.param.id"
  ], [
      req.body.name, req.body.id
    ], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.delete("/api/burgers/:id", function (req, res) {
  burger.delete("id", req.params.id, function (data) {
    res.json(data);
  })
});


// Export routes for server.js to use.
module.exports = router;