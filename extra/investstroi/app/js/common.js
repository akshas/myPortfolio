$(function() {

	// Custom JS
	$('.directions-blocks').slick({
	  infinite: true,
	  slidesToShow: 4,
	  dots: true,
	  arrows: false,
	  slidesToScroll: 1,
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	 });

var trigger = $('.top-nav_trigger');
var topMenu = $('.top-nav_menu');
$(window).on('resize', function(){
	topMenu.removeClass('top-nav_menu__active');
});
trigger.on('click', function(){
	topMenu.toggleClass('top-nav_menu__active');
	// topMenu.fadeToggle(500);
});


/* pure js подключение powerrange*/
  var elem = document.querySelector('.calc-sum_range');
  var display = document.querySelector('.calc-sum_invest_num');
  var init = new Powerange(elem, { min: 100000, max: 3000000, start: 100000, hideRange: true, step: 10000 });


/* настройка калькулятора инвестиций */

var persent = 0.2, month = 6, result;
var money = elem.value;
var radio = $('input[name="programms"]');

var totalSum = $('.calc-sum_total strong');
var monthsNum = $('.calc-sum_total small span');

var monthlySum = $('.calc-sum_month strong');

 result = persent * money;
  totalSum.text(Math.round(+result / 12 * month).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  monthlySum.text(Math.round(+result / 12).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  monthsNum.text(month);

/* выведение суммы в display */

radio.on('change', function(){
  persent = $(this).attr('data-persent');
  month = $(this).attr('data-month');
  result = persent * money;
  totalSum.text(Math.round(+result / 12 * month).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  monthlySum.text(Math.round(+result / 12).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  monthsNum.text(month);
});

$('.calc-sum_range').on('change', function(e){
  money = $(this).val();
  $('.calc-sum_invest_num').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' руб.');
  result = persent * money;
  totalSum.text(Math.round(+result / 12 * month).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  monthlySum.text(Math.round(+result / 12).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  monthsNum.text(month);
});



});

