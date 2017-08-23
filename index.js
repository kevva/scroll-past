'use strict';
module.exports = function (el, opts) {
	opts = Object.assign({threshold: 0}, opts);

	const scrollTop = el.scrollTop;
	const height = el.offsetHeight + opts.threshold;
	const bottom = scrollTop + height;

	let tick;

	return new Promise(resolve => {
		window.addEventListener('scroll', () => {
			const pos = window.scrollY;

			if (!tick) {
				requestAnimationFrame(() => {
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
