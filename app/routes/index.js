var express = require("express");
var router = express.Router();

/* GET home page and others */
router.get("/", function (req, res, next) {
  console.log("I am in home");
  res.render("index", { title: "Express" });
});

router.get("/contact", function (req, res, next) {
  console.log("I am in contact");

  res.render("contact", { title: "Contact" });
});

router.get("/about", function (req, res, next) {
  console.log("I am in about me");

  res.render("about", { title: "About Me" });
});
router.get("/service", function (req, res, next) {
  console.log("I am in service");

  res.render("service", { title: "Service" });
});
router.get("/projects", function (req, res, next) {
  console.log("I am in service");

  res.render("projects", { title: "Projects" });
});
router.get("/partials/header", function (req, res, next) {
  console.log("I am in header");

  res.render("header", { title: "Header" });
});
router.get("/partials/aboutme", function (req, res, next) {
  console.log("I am in aboutme");

  res.render("aboutme", { title: "Aboutme" });
});

module.exports = router;
