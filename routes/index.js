var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

/* router.get('/stylesheets/style.css', function (req, res) {
  res.sendFile('/Users/Elizabeth/Documents/GHA/twitter-js/public/stylesheets/style.css');
}); */

router.use(express.static('public'));
router.use(express.static('routes'));
router.use(express.static('views'));
router.use(express.static('node_modules'));

module.exports = router;
