$(function () {
	// Custom JS
	var title = $('title').html();

	$('.title').html(title);
	$('.menu ul li').each(function (index, elem) {

		var elem = $(elem);

		if ($(elem).find('a').html() == title) {

			if ($(window).width() <= 576) {
				$(this).css('display', 'none');
			}

			$(window).on('resize', function () {

				if ($(this).width() >= 576) {
					$('.menu ul').removeClass('showMenu');
					elem.css('display', 'block');
				} else {
					elem.css('display', 'none');
				}

			});
		} else {

			$(this).css('display', 'block');

		}
	});

	$('.bars').on('click', function () {
		$('.menu ul').toggleClass('showMenu');
	});
});