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

	// Scroll Animations
	if ('IntersectionObserver' in window) {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1
		};

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);

		document.querySelectorAll('.fade-in-up').forEach(el => {
			observer.observe(el);
		});
	} else {
		// Fallback for browsers that don't support IntersectionObserver
		document.querySelectorAll('.fade-in-up').forEach(el => {
			el.classList.add('visible');
		});
	}

})(jQuery);
