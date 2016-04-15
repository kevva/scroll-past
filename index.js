'use strict';
var objectAssign = require('object-assign');

module.exports = function (el, opts) {
	opts = objectAssign({threshold: 0}, opts);

	var scrollTop = el.scrollTop;
	var height = el.offsetHeight + opts.threshold;
	var bottom = scrollTop + height;
	var tick;

	return new Promise(function (resolve) {
		window.addEventListener('scroll', function () {
			var pos = window.scrollY;

			if (!tick) {
				requestAnimationFrame(function () {
					tick = null;

					if (pos < bottom) {
						return;
					}

					resolve(pos);
				});
			}

			tick = true;
		});
	});
};
