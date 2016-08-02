var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');

swig.setDefaults({ cache: false });

app.set('views', './views'); // point res.render to the proper directory
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', swig.renderFile); // when giving html files to res.render, tell it to use swig


//app.use('/', function(req, res, next) {
//	res.render('index', locals);

//});

app.use('/', routes);

app.listen(3000);

