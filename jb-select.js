(function($) {

	// Create jigybit namespace if doesn't exist
	window.jiggybit = typeof(window.jiggybit) === 'undefined' ? {} : window.jiggybit;
	window.jiggybit.Select = typeof(window.jiggybit.Select) === 'undefined' ? {} : window.jiggybit.Select;

	$.extend($.fn, {

		jbSelect: function(options) {

			$.extend($.fn.jbSelect.prototype, {
				defaults: jbSelect.defaults,
				prototype: jiggybit.jbSelect
			});

			// Initialise and return the plugin instance
			return new $.fn.jbSelect.prototype(options, this);
		}

	});

	$.fn.jbSelect.prototype = function(options, selects) {
		this.settings = $.extend(true, {}, $.fn.jbSelect.prototype.defaults, options);
		this.selects = selects;
		this.initialize();
	};

	/**
	 * The actual plugin constructor
	 * @constructor
	 */
	function jbSelect() {

	}

	/**
	 * Every <select> control will have a new instance of this object instantiated against it
	 *
	 * @constructor
	 */
	function Select() {

	}



})(jQuery);
