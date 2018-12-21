var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var allTheBurgers = {
      burger: data
    };
    console.log(data);
    res.render("index", allTheBurgers);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(req.body.burger, function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }); 
});

router.put("/api/burgers/:id", function (req, res) {
  burger.put("id", req.params.id, function (data) {
    res.json(data);
  })
});


// Export routes for server.js to use.
module.exports = router;