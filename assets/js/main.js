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

	// Fade in elements on scroll
	var $window = $(window);
	var $fadeElements = $('.fade-in-up');

	$window.on('scroll load', function() {
		var windowBottom = $window.scrollTop() + $window.innerHeight();

		$fadeElements.each(function() {
			var $element = $(this);
			var elementTop = $element.offset().top;

			// Add the visible class if the element is in view
			if (elementTop < windowBottom - 50) {
				$element.addClass('visible');
			}
		});
	});


})(jQuery);
