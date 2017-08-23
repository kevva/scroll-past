'use strict';
const scrollPast = require('../');

scrollPast(document.querySelector('.ScrollPast')).then(pos => {
	console.log(`I'm at ${pos}`);
});
