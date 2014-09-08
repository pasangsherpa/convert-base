(function() {
	'use strict';
	var ConvertBase = function(bits) {
		return {
			convert: function convert(number, from, to) {
				var result = parseInt(number, from).toString(to).toUpperCase();
				if (to === 10) return ~~result;
				return result;
			}
		};
	};

	if (typeof define === 'function' && define.amd) {
		define(function() {
			return ConvertBase;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ConvertBase;
	} else {
		window.ConvertBase = ConvertBase;
	}
})();
