var express = require("express");
var router = express.Router();

function generateTemperature() {
  return Math.floor(Math.random() * 30);
}

router.get("/", function (req, res, next) {
  let temp = generateTemperature();
  res.send({ temp: temp });
});

module.exports = router;
