var express = require("express");
var router = express.Router();

// file name: header.css
// name:Habibat Dolapo
// stu ID: 301270896
// date: 06-07-23

/* GET header and others. */
router.get("./aboutme", function (req, res, next) {
  console.log("I am in aboutme");

  res.render("aboutme", { title: "About" });
});
router.get("./about", function (req, res, next) {
  console.log("I am in about");

  res.render("about", { title: "About" });
});

router.get("./header", function (req, res, next) {
  console.log("I am in header");

  res.render("header", { title: "Header" });
});

module.exports = router;
