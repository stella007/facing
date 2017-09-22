var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', 'list': [{"title":"new york", "desc":"the news of new york"}, {"title":"new york", "desc":"the news of new york"}, {"title":"new york", "desc":"the news of new york"}] });
});

module.exports = router;
