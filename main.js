$(function(){

	$('.full').click(function(){
		$('.product-list').addClass('full-view');
		$('.js-double').removeClass('double');
	});

	$('.basic').click(function(){
		$('.product-list').removeClass('full-view');
		$('.js-double').addClass('double');
	});

	$('.button-up').click(function(){
		$('body').animate({scrollTop:0}, '500');
	});

	$('.button-up').hide();
	$(window).scroll(function(){
		if($('body').scrollTop() < 700) {
			$('.button-up').hide();
		} else {
			$('.button-up').show();
		}
	});

	$('.mobile-menu').click(function(){
		$('.page-nav').toggleClass('open')
	})

		$('.aside-menu').click(function(){
		$('.drop-menu').toggleClass('open')
	})
});