$(document).ready(function () {

	$('.countries-slider').slick({
		
		slidesToShow: 5,
		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 4,
	        infinite: false,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 481,
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

	

	$('.popular-slider').slick({
		
		slidesToShow: 1,
		variableWidth: true,
		infinite: false,
		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 4,
	        variableWidth: false,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        variableWidth: false,
	      }
	    },
	    {
	      breakpoint: 481,
	      settings: {
	        slidesToShow: 1,
	        variableWidth: false,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
		
	});


	let objToStick = $(".header__bottom"); 
	let topOfObjToStick = $(objToStick).offset().top; 
	let heightHeader = objToStick.innerHeight();


	$(window).scroll(function () {
	    var windowScroll = $(window).scrollTop(); 

	    if (windowScroll > topOfObjToStick) { 
	        $(objToStick).addClass("fixed");
	        $('body').css('padding-top', heightHeader);
	    } else {
	        $(objToStick).removeClass("fixed");
	        $('body').css('padding-top', 0);
	    };
	});

	$('.btn-top').click(function() {
	    $('html, body').stop().animate({scrollTop : 0}, 300);
	});

	$('.has-child').hover(function () {
	   clearTimeout($.data(this,'timer'));
	   $('.dropdown-menu',this).stop(true,true).slideDown(200);
	   }, function () {
	   $.data(this,'timer', setTimeout($.proxy(function() {
	   $('.dropdown-menu',this).stop(true,true).slideUp(200);
	   }, this), 100));
	});

	$('.has-child > a').click(function(e){
		e.preventDefault();
	});


	$('.order-btn').click(function(){
		$('.modal .main-form__title').text('Оставить заявку');
		$('.modal-form').fadeIn();
	});

	$('.callback').click(function(){
		$('.modal .main-form__title').text('Заказать звонок');
		$('.modal-form').fadeIn();
	});

	$('.modal-close').click(function(){
		$(this).parent().parent().fadeOut();
	});

	$('.modal__overlay').click(function(){
		$(this).parent().fadeOut();
	});

	$('.modal-close-txt').click(function(){
		$('.modal-form').fadeOut();
	});

	$('.thanks-content__btn').click(function(){
		$('.modal-thanks').fadeOut();
	});

	$('input[type=email]').on('blur', function () {
	    let email = $(this).val();
	    
	    if (email.length > 0
	    && (email.match(/.+?\@.+/g) || []).length !== 1) {
	      $(this).addClass('main-form__input_error');
	  	  $(this).parent().find('.email-warning').fadeIn();
	    } else {
	      $(this).removeClass('main-form__input_error');
	      $(this).parent().find('.email-warning').fadeOut();
	    }
	  });



	$(window).on('load resize', function() {

		let banner = $('.banner').remove();

		if($(window).width() < 992 && $('.main-content').has('.banner')) {
		  
		  $('.main').prepend(banner);
		} else {
			$('.main-content').prepend(banner);
		}

		$('.main-form__select').click(function(){
		$(this).find('ul').slideToggle('slow');
	});

	$('.main-form__select ul li').click(function(){
		let txt = $(this).text();
		$(this).parent().parent().find('span').text(txt);
	});
	});


	$('.open-menu').click(function(){
		$('.header__top').slideToggle('slow');
	});

	$('.close-menu').click(function(){
		$('.header__top').slideToggle('slow');
	});



});
 