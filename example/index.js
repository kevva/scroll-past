'use strict';
var scrollPast = require('../');

scrollPast(document.querySelector('.div3')).then(function (pos) {
	console.log('I\'m at ' + pos);
});
