var _ = require('lodash');
var data = [{name: 'Omri Stackson', content: 'Yo giggity geezer'}];
var id = 0;

var add = function (name, content) {
  data.push({ name: name, content: content, id: id++ });
}
var list = function () {
  return _.cloneDeep(data);
}
var find = function (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = {
  add: add,
  list: list,
  find: find
}


var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};


for (var i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}
