module.exports = function(io) {
	var express = require('express');
	var router = express.Router();
	var bodyParser = require('body-parser');
	// could use one line instead: var router = require('express').Router();
	var tweetBank = require('../tweetBank');

	router.use(bodyParser.urlencoded({extended: true}));

	router.get('/', function (req, res) {
	  var tweets = tweetBank.list();
	  var showForm = true;
	  res.render( 'index', { tweets: tweets, showForm: true } );
	});

	router.get('/users/:name', function (req, res) {
	  var name = req.params.name;
	  var tweets = tweetBank.find( {name: name} );
	  if (tweets.length == 0) {
	  	tweets = [{name: 'Error', content: 'No tweets by specified user.'}];
	  }
	  res.render( 'index', { tweets: tweets, showForm: true, name: name } );
	});

	router.get('/tweets/:id', function (req, res) {
	  var id = req.params.id;
	  var tweets = tweetBank.find( function(element) {
	  	return element.id == id;
	  } );
	  if (tweets.length == 0) {
	  	tweets = [{name: 'Error', content: 'No tweets with specified ID.'}];
	  }
	  res.render( 'index', { tweets: tweets } );
	});


	router.use(express.static('public'));
	router.use(express.static('routes'));
	router.use(express.static('views'));
	router.use(express.static('node_modules'));

	router.post('/tweets', function(req, res) {
	  var name = req.body.name;
	  var text = req.body.text;
	  tweetBank.add(name, text);
	  io.sockets.emit('newTweet', { name: 'Steven U.', content: 'Pearl has a pointy nose' });
	  res.redirect('/');
	});
	return router;
};
