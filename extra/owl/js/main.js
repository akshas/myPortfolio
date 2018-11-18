$(function(){
	let owl     = $('.owl-carousel'),
	url     = null,
	bgDrop 	= $('.bg-drop'),
	left   	= $('#left'),
	right   =$('#right');

	owl.owlCarousel({
		center: true,
		loop: true,
		items: 2,
		stagePadding: 20,
		margin: 0,
		responsive:{
			0:{
				items: 1,
				stagePadding: 20,
				margin: 10
			},
			640:{
				margin: 0,
				items: 1.4
			},
			1024:{
				margin: 0,
				items: 1.8
			}
		}
	});
	owl.on('changed.owl.carousel', function(){
		setTimeout(() => {
			let centerImg = owl.find('.center').find('div');
			url = centerImg.css('background-image');
			bgDrop.css('background-image', url);
		}, 20);
	});
	right.on('click', () => {
		owl.trigger('next.owl.carousel');
	});
	left.on('click', () => {
		owl.trigger('prev.owl.carousel');
	});
});