var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('My Data', { title: 'Vipul Kale' });
});

module.exports = router;

