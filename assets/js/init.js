$(document).ready(function () {

	$(".button-collapse").sideNav();

	$(".slider").slider({

		indicators: false,

		height: 500,

		transition: 600,

		interval: 6500

	});

	$(".sliderBlog").slider({

		indicators: false,

		height: 600,

		transition: 600,

		interval: 6500

	});

	$(".slider img").css('filter', 'brightness(85%)');

	$('.parallax').parallax();

	$('.scrollspy').scrollSpy({

		scrollOffset: 50

	});

	$(".button-collapse").sideNav();



	$('.mobile').click(function (event) {

		$('.button-collapse').sideNav('hide');

	});



	var options = [

		{

			selector: '#staggered-test', offset: 200, callback: function (el) {

				Materialize.showStaggeredList($(el));

			}

		},

		{

			selector: '#staggered-test1', offset: 200, callback: function (el) {

				Materialize.showStaggeredList($(el));

			}

		},

		{

			selector: '#image-profile', offset: 100, callback: function (el) {

				Materialize.fadeInImage($(el));

			}

		},

		{

			selector: '#navbar', offset: 500, callback: function (el) {

				$(this).css('background-color', 'white');

			}

		}

	];

	Materialize.scrollFire(options);



	var $backToTop = $(".back-to-top");

	var $navLink = $("#idnya");

	$(window).on('scroll', function () {

		if ($(this).scrollTop() > 400) {

			$('.nav-index').removeClass('cyan');

			$('.nav-blog').removeClass('orange');

			$('.nav-code').removeClass('green');

			$('nav').removeClass('darken-1');

			$navLink.addClass('.nav-color');

			$backToTop.fadeIn();

			// $('nav').addClass('nav-light');

			$('.nav-link').addClass('grey-text');

			$('.nav-link').addClass('text-darken-4');

		}

		else {

			$('.nav-index').addClass('cyan');

			$('.nav-blog').addClass('orange');

			$('.nav-code').addClass('green');

			$('nav').addClass('darken-1');

			$backToTop.fadeOut();

			$('nav').removeClass('nav-light');

			$('#nav-link').removeClass('.nav-link');

			$('.nav-link').removeClass('grey-text');

			$('.nav-link').addClass('text-darken-4');

		}

	});
});