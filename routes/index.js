var express = require('express');
var router  = express.Router();
var models     = require("../models")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home', { title: 'Pair Project System' });
});

router.get('/student', function(req, res){
  res.render('pages/student', { title: 'Pair Project System' });
})

router.get('/report', function(req, res){
  res.render('pages/report', { title: 'Pair Project System' });
})

router.get('/about', function(req, res){
  res.render('pages/about', { title: 'Pair Project System' });
})

router.post('/addStudent', function(req, res){
  models.User.create()
})

module.exports = router;
