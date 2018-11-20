var leveljs = require('level-js');
var levelup = require('levelup');
var fs = require('level-filesystem');

// var db = levelup('level-filesystem', {db:leveljs});
var db = levelup(leveljs('level-filesystem'));
module.exports = fs(db);