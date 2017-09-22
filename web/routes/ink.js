var express = require("express");
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('ink', {"title": "ink paint", "time": "now"});
})

module.exports = router;