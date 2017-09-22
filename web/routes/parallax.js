var express = require("express");
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('parallax', {"title": "parallax demo", "time": "now"});
})

module.exports = router;