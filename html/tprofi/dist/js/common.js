$(document).ready(function () {

	$('.banner-slider').slick({
		slidesToShow: 1,
		dots: true,
		appendDots: $(".banner-controls"),
		appendArrows: $('.banner-controls'),
        prevArrow: '<button class="banner-arrow banner-prev" type="button"></button>',
        nextArrow: '<button class="banner-arrow banner-next" type="button"></button>',
        asNavFor: '.banner-nav'
	});

	$('.banner-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '.banner-slider',
	  dots: false,
	  focusOnSelect: true
	});

	$('.popular-slider').slick({
		slidesToShow: 3,
		responsive: [
	    {
	      breakpoint: 1350,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        arrows: false,
	      }
	    }
	  ]
		
	});

	$('.equipment-next').on('click', function() {
	  $('.popular-slider').slick('slickNext');
	});

	$('.equipment-prev').on('click', function() {
	  $('.popular-slider').slick('slickPrev');
	});


	$('.clients-slider').slick({
		slidesToShow: 4,
		responsive: [
	    {
	      breakpoint: 1350,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        dots: true,
	        prevArrow: '<button class="prev-btn suppliers-prev" type="button"><img src="img/icons/prev.png" alt="prev"></button>',
	        nextArrow: '<button class="next-btn suppliers-next" type="button"><img src="img/icons/next.png" alt="next"></button>',
	      }
	    },
	    {
	      breakpoint: 481,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        dots: true,
	        prevArrow: '<button class="prev-btn suppliers-prev" type="button"><img src="img/icons/prev.png" alt="prev"></button>',
	        nextArrow: '<button class="next-btn suppliers-next" type="button"><img src="img/icons/next.png" alt="next"></button>',
	      }
	    }
	  ]
		
	});

	$('.clients__next').on('click', function() {
	  $('.clients-slider').slick('slickNext');
	});

	$('.clients__prev').on('click', function() {
	  $('.clients-slider').slick('slickPrev');
	});

	let slider = $('.news-item__slider');

	slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){

		let i = (currentSlide ? currentSlide : 0) + 1;

		$(".news-item__count .first").text(i);
		$(".news-item__count .second").text(slick.slideCount);

	   
	});

	$('.news-item__slider').slick({

	});

	$('.news-item__next').on('click', function() {
	  $('.news-item__slider').slick('slickNext');
	});

	$('.news-item__prev').on('click', function() {
	  $('.news-item__slider').slick('slickPrev');
	});

	$('.catalog__tabs-item').click(function(){
		$('.catalog__tabs-item').removeClass('catalog__tabs-item_selected');
		$(this).addClass('catalog__tabs-item_selected')
	});


	$('.catalog__select').click(function(){
		$('ul', this).slideToggle(100);
	});

	$('.catalog__select li').click(function(){
		let txt = $(this).text();
		$(this).parent().parent().find('span').text(txt)
	});

	$('.product-img').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  swipe: false,
	  infinite: false,
	  fade: true,
	  asNavFor: '.product-preview',

	});
	$('.product-preview').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.product-img',
	  vertical: true,
	  focusOnSelect: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        vertical: false,
	        variableWidth: true,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        vertical: false,
	        variableWidth: true,
	      }
	    }
	  ]
	});

	$('.product-info__tabs-item').click(function(event) {

		$('.product-info__tabs-item').removeClass('product-info__tabs-item_selected');
		$(this).addClass('product-info__tabs-item_selected');

		$('.product-info__content').removeClass('product-info__content_active')
		let num = $(this).attr('data-tab');
		$('#productInfo'+num).addClass('product-info__content_active')
	});

	

	$('.product-img__item').click(function(){

		$('.modal-slider').remove();

		$('.modal-photo__center').append('<div class="modal-slider"></div>')
		
		$('.product-img__item').clone().appendTo('.modal-slider').removeAttr('style');

		$('#modal-product').fadeIn();

		$('.modal-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){

			let i = (currentSlide ? currentSlide : 0) + 1;

			$(".modal-photo__count .first").text(i);
			$(".modal-photo__count .second").text(slick.slideCount);

		   
		});

		$('.modal-slider').slick({
			arrows: false,
		});
		
	});

	$('.modal-next').on('click', function() {
		  $('.modal-slider').slick('slickNext');
		});

		$('.modal-prev').on('click', function() {
		  $('.modal-slider').slick('slickPrev');
		});

	$('.modal-photo .modal-close').click(function(e){
		$('#modal-product').fadeOut();
	});

	$('.modal__overlay').click(function(e){
		$(this).parent().fadeOut();
	});
	

	




	$(window).on('load resize', function() {
	  if ($(window).width() < 768) {
	    $('.suppliers:not(.slick-initialized)').slick({
	      dots: true,
	      slidesToShow: 2,
	      slidesToScroll: 2,
	      prevArrow: '<button class="prev-btn suppliers-prev" type="button"><img src="img/icons/prev.png" alt="prev"></button>',
          nextArrow: '<button class="next-btn suppliers-next" type="button"><img src="img/icons/next.png" alt="next"></button>',
	    });

	    $('.service__body:not(.slick-initialized)').slick({
	      dots: true,
	      slidesToShow: 2,
	      slidesToScroll: 2,
	      prevArrow: '<button class="prev-btn suppliers-prev" type="button"><img src="img/icons/prev.png" alt="prev"></button>',
          nextArrow: '<button class="next-btn suppliers-next" type="button"><img src="img/icons/next.png" alt="next"></button>',
	    });

	    $('.about-stats:not(.slick-initialized)').slick({
	      dots: true,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      prevArrow: '<button class="prev-btn suppliers-prev" type="button"><img src="img/icons/prev.png" alt="prev"></button>',
          nextArrow: '<button class="next-btn suppliers-next" type="button"><img src="img/icons/next.png" alt="next"></button>',
	    });
	  } else {
	    $(".suppliers.slick-initialized").slick("unslick");
	    $(".service__body.slick-initialized").slick("unslick");
	    $(".about-stats.slick-initialized").slick("unslick");
	  }



	  if ($(window).width() > 1023) {
			$('.has-child').hover(function () {
			   clearTimeout($.data(this,'timer'));
			   $(this).addClass('menu__item_selected');
			   $('.dropdown-menu',this).stop(true,true).slideDown(200);
			   }, function () {
			   $.data(this,'timer', setTimeout($.proxy(function() {
			   $(this).removeClass('menu__item_selected');
			   $('.dropdown-menu',this).stop(true,true).slideUp(200);
			   }, this), 100));
			});

			$('.has-menu').hover(function () {
			   clearTimeout($.data(this,'timer'));
			   $(this).addClass('dropdown-menu__item_selected');
			   $('.sub-menu',this).stop(true,true).slideDown(200);
			   }, function () {
			   $.data(this,'timer', setTimeout($.proxy(function() {
			   $(this).removeClass('dropdown-menu__item_selected');
			   $('.sub-menu',this).stop(true,true).slideUp(200);
			   }, this), 100));
			});
		}

	});

	
	$('.dropdown-menu').prepend('<li class="dropdown-menu__item menu-title back">Назад</li>');
	$('.sub-menu').prepend('<li class="sub-menu__item menu-title back">Назад</li>');
	$('.has-child > a').append('<span class="my-btn"><img src="img/icons/menu-arrow.png" alt="icon" /></span>');
	$('.has-menu > a').append('<span class="my-btn"><img src="img/icons/menu-arrow.png" alt="icon" /></span>');

	$('.header__phones').clone().appendTo('.header__menu')

	$('.has-child > a > .my-btn').click(function(e) {
		e.preventDefault();

		let title1 = $(this).parent().text();

		$('.dropdown-menu .back').text(title1);

		$(this).parent().parent().find('.dropdown-menu').toggleClass('active');

	

		$('.back').click(function(){
			$(this).parent().removeClass('active');
		});
	});

	$('.has-menu > a > .my-btn').click(function(e) {
		e.preventDefault();

		let title2 = $(this).parent().text();

		$('.sub-menu .back').text(title2);

		$(this).parent().parent().find('.sub-menu').toggleClass('active');

		

		$('.back').click(function(){
			$(this).parent().removeClass('active');
		});
	});

	$('.open-menu').click(function(){
		$(this).toggleClass('open-menu_active');
		$('.header__menu').toggleClass('header__menu_active');
	});

	$('body').wrapInner('<div class="page-wrapper"></div>');

	$('#order-form').submit(function () {
	    let form = $(this);
	    let field = [];
	    form.find('input[data-validate]').each(function () {
	      field.push('input[data-validate]');
	      let value = $(this).val(),
	          line = $(this).closest('.modal-form__group');
	      for(let i=0;i<field.length;i++) {
	        if( !value ) {
	          line.addClass('modal-form__group_required');
	          setTimeout(function() {
	            line.removeClass('modal-form__group_required')
	          }.bind(this),2000);
	          event.preventDefault();
	        }
	      }
	    });
	  });	

	 $('#order-callback').submit(function () {
	    let form = $(this);
	    let field = [];
	    form.find('input[data-validate]').each(function () {
	      field.push('input[data-validate]');
	      let value = $(this).val(),
	          line = $(this).closest('.modal-form__group');
	      for(let i=0;i<field.length;i++) {
	        if( !value ) {
	          line.addClass('modal-form__group_required');
	          setTimeout(function() {
	            line.removeClass('modal-form__group_required')
	          }.bind(this),2000);
	          event.preventDefault();
	        }
	      }
	    });
	  });		

	$('.modal-close').click(function(){
		$(this).closest('.modal').fadeOut();
	});

	$('.product-desc__btn').click(function(e){
		e.preventDefault();
		$('#modal-order').fadeIn();
	});

	$('.callback').click(function(e){
		e.preventDefault();
		$('#modal-callback .modal-content__title').text('Обратный звонок');
		$('#modal-callback').fadeIn();
	});

	$('.banner-item__link').click(function(e){
		e.preventDefault();
		$('#modal-callback .modal-content__title').text('Получить консультацию');
		$('#modal-callback').fadeIn();
	});

	$('.order-project').click(function(e){
		e.preventDefault();
		$('#modal-project').fadeIn();
	});

	

	/*$('.service-card a').click(function(e){
		e.preventDefault();
		$('*').removeClass('open-service');
		$(this).closest('.col-md-4').addClass('open-service');
	});

	$('.close-card').click(function(){
		$(this).closest('.open-service').removeClass('open-service');
	});*/

	

	$(".input-phone").mask("+7(999) 999-9999");


	
});
 
