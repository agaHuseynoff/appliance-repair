/***************************
mobile button fixed bottom
***************************/
if ($(window).width() < '767.98') {
	var mob = $('.mob');
	$(window).scroll(function () {
		var pos = $(window).scrollTop();
		mobBottom();
	})

	function mobBottom() {
		var pos = $(window).scrollTop();
		if (pos > 800) {
			$(mob).css({
				bottom: '0px'
			})

		} else {
			$(mob).css({
				bottom: '-80px'
			})
		}
	}

}

/*******************************
navbar-fixed
********************************/
function posFixedNavBar() {
	var posy = $(window).scrollTop();
	if (posy > $('main').offset().top) {
		$('nav').addClass('fixed');
		$('nav').css({
			top: '0%',
			transition: 'all 0.4s'
		})
	} else {
		$('nav').css({
			top: '-100%',
			transition: 'all 0.4s'
		})
		$('nav').removeClass('fixed');

	}
}


/*****************************
the man from the right hand
*****************************/
var order = $('.order');
$(window).scroll(function () {
	var posy = $(window).scrollTop();
	scrTop();
	posFixedNavBar();
	scrollVertical = window.scrollY;
	up.innerHTML = scrollVertical;
})

function scrTop() {
	var posy = $(window).scrollTop();
	if (posy > 800) {
		$('.order').css({
			right: '-125px'
		})

	} else {
		$('.order').css({
			right: '-625px'
		})
	}
}




/******************************
scroll Up
******************************/
var initVelocity = 1;
var scrollVertical = 0;

function up() {
	if (scrollVertical <= 0)
		return;
	initVelocity = scrollVertical / 10;
	scrollVertical = scrollVertical - (0.5 * initVelocity);
	window.scroll(0, scrollVertical);
	setTimeout(up, 6);
}

/*****************************
functions contact us
*****************************/
//$(document).ready(function () {
//	/**************************
//	remove order-container
//	***************************/
//	var clone = $('.order-container').clone();
//
//	function removeOrder() {
//		$('.order-container').remove();
//
//	}
//	removeOrder();
//
//	/*****************************
//
//	******************************/
//	var contactUs = $('.contact-us');
//	for (var i = 0; i < contactUs.length; i++) {
//		$(contactUs[i]).on('click', contact);
//	}
//
//	function contact() {
//		$(clone).css({
//			opacity: '1'
//		});
//		$(clone).addClass('animate');
//		$('body').prepend(clone);
//
//		$('.closed').on('click', closed);
//		$('.bg-cover').on('click', closed);
//
//
//		$('.nn').click(function () {
//			if ($(window).width() > '767.98') {
//				if ($(this).val() == '77478' || $(this).val() == '77479' || $(this).val() == '77487' || $(this).val() == '77496' || $(this).val() == '77498') {
//					$('.compatible').fadeIn(500);
//					$('.order-form').animate({
//						width: '49%'
//					}, 500);
//
//
//				} else {
//					$('.compatible').fadeOut(500);
//					$('.order-form').animate({
//						width: '100%'
//					}, 500);
//
//				}
//			} else {
//				if ($(this).val() == '77478' || $(this).val() == '77479' || $(this).val() == '77487' || $(this).val() == '77496' || $(this).val() == '77498') {
//					$('.compatible').fadeIn(500);
//					$('.order-form').animate({
//						width: '100%'
//					}, 500);
//				} else {
//					$('.compatible').fadeOut(500);
//					$('.order-form').animate({
//						width: '100%'
//					}, 500);
//
//				}
//
//			}
//		});
//	}
//
//	/**********************
//	close order-container
//	**********************/
//	function closed() {
//		$('.order-container').remove();
//	}
//
//
//
//})
