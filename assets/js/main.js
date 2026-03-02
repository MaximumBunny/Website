/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Fade in elements on scroll.
		var $fadeElements = $(".fade-in-up");

		$window.on("scroll load", function() {
			var bottom_of_window = $window.scrollTop() + $window.height();

			$fadeElements.each(function() {
				var bottom_of_object = $(this).offset().top + ($(this).outerHeight() / 4);

				if (bottom_of_window > bottom_of_object) {
					$(this).addClass("visible");
				}
			});
		});

})(jQuery);