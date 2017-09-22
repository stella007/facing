var express = require("express");
var router = express.Router();

const Parallax = require('parallax-js');

router.get('/', function (req, res, next) {
    res.render('speed', {"title": "speed", "time": "now"});
})

module.exports = router;