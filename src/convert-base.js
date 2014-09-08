(function() {
	'use strict';
	var ConvertBase = function(bits) {
		return {
			convert: function convert(number, from, to) {
				if (from === 16 && typeof number !== 'string') {
					number = Number(number).toString(16);
				}
				var result = parseInt(number, from);
				if (isNaN(result)) return result;
				result = result.toString(to);

				if (to === 10) return (~~result);
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
