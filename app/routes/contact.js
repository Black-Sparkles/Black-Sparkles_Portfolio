var express = require("express");
var router = express.Router();

/* GET header and others. */
router.get("./contact", function (req, res, next) {
  console.log("I am in contact");

  res.render("contact", { title: "Contact" });
});

router.get("./header", function (req, res, next) {
  console.log("I am in header");

  res.render("header", { title: "Header" });
});
router.get("./contactform", function (req, res, next) {
  console.log("I am in contactform");

  res.render("contactform", { title: "Contact" });
});
module.exports = router;
