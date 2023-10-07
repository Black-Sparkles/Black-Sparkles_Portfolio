var express = require("express");
var router = express.Router();

/* GET header and others. */

router.get("./header", function (req, res, next) {
  console.log("I am in header");

  res.render("header", { title: "Header" });
});
router.get("./card", function (req, res, next) {
  console.log("I am in service");

  res.render("card", { title: "Service" });
});
router.get("./footer", function (req, res, next) {
  console.log("I am in service");

  res.render("footer", { title: "Service" });
});
module.exports = router;
