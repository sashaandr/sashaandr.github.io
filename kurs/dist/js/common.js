$(document).ready(function () {

	$('.logos-slider').slick({
		variableWidth: true,
		slidesToShow: 1,
		infinite: false,
		arrows: false
	});

	$('.logos-item').hover(function(){
		let img = $(this).find('img');
		let src = $(this).find('img').attr('src');
		let datasrc = $(this).find('img').attr('data-src');

		img.attr('src', datasrc);
		img.attr('data-src', src);
	});

	$('.popular-item').hover(function(){
		let img = $('.popular-item__img', this).find('img');
		let src = $('.popular-item__img', this).find('img').attr('src');
		let datasrc = $('.popular-item__img', this).find('img').attr('data-src');

		img.attr('src', datasrc);
		img.attr('data-src', src);
	});


	$('.search__input').on('input', function(){
		$(this).parent().find('.search-find').fadeIn();
	});

	$('.search__input').on('blur', function(){
		$(this).parent().find('.search-find').fadeOut();
	});

	

    $('.sort__select').click(function(){
    	$('ul', this).slideToggle(100);
    });

    $('.sort__select li').click(function(){

    	let txt = $(this).text();

    	$(this).closest('.sort__select').find('span').text(txt);

    	
    });

    $(window).on('load resize', function() {

		let filter = $('.filter').remove();
		let courseTxt = $('.courses__head-txt').remove();

		let coursePrice = $('.course-page__foot').remove();

		if($(window).width() < 992 && $(window).width() > 767 && $('.courses__filter').has('.banner')) {
		  
		  $('.courses__filter').prepend(filter);
		} else {
			$('.aside').prepend(filter);
		}

		if($(window).width() < 992  && $('.course-page__left').has('.banner')) {
		  
		  $('.course-page__left').append(coursePrice);
		} else {
			$('.course-page__right').append(coursePrice);
		}

		if($(window).width() < 768 && $('.courses__head').has('.courses__head-txt')) {
		  
		  $('.courses__head').append(courseTxt);
		} else {
			$('.courses__head-info').append(courseTxt);
		}

		let courseInfo = $('.course-page__right').remove();

		if($(window).width() < 768 && $('.course-page__left').has('.course-page__right')) {
		  
		  $('.course-page__img').after(courseInfo);
		} else {
			$('.course-page__info').append(courseInfo);
		}



		if ( $('#price').length>0 ) {
	      $("#price").slider({
	        animate: "slow",
	        min: 500,
	        max: 100000,
	        range: true,    
	        values: [ 500, 20000 ],
	        slide : function(event, ui) {    
	            $("#price-min").val(  ui.values[ 0 ] );   
	            $("#price-max").val(  ui.values[ 1 ] ); 
	            $('.min-price').text( ui.values[ 0 ] )    
	            $('.max-price').text( ui.values[ 1 ] )   
	        }
	     });
	    }
	    let minPrice = $("#price-min").val();
	    let maxPrice = $("#price-max").val();

	    $('#price .ui-slider-handle:first').append('<span class="min-price slide-txt"></span>');
	    $('#price .ui-slider-handle:last').append('<span class="max-price slide-txt"></span>');

	    $('.min-price').text(minPrice);
	    $('.max-price').text(maxPrice);

	    if($(window).width() > 768 ) {
		  $('.filter-btn').click(function(){
	    	$('.filter').fadeToggle();
	      });
		}

		if($(window).width() < 768 ) {
		  $('.filter-btn').click(function(){
	    	$('.aside, .filter-overlay').fadeToggle();
	      });
	      $('.filter-overlay').click(function(){
	    	$('.aside, .filter-overlay').fadeToggle();
	      });
		}

	    
	});

	$('.setting__select').click(function(){
		$('ul', this).slideToggle(100);
	});

	$('.setting__select li').click(function(){

    	let txt = $(this).text();

    	$(this).closest('.setting__select').find('span.setting__select-txt').text(txt);

    	
    });

    $('.login-active').click(function(){
    	$(this).find('.login-dropdown').fadeToggle();
    });

    $('.modal__overlay').click(function(e){
		$(this).parent().fadeOut();
	});

	$('.modal-close').click(function(e){
		$(this).closest('.modal').fadeOut();
	});

	$(window).on('load resize', function() {
	  if ($(window).width() < 768) {
	    $('.course-more__list:not(.slick-initialized)').slick({
	      dots: true,
	      infinite: true,
	      arrows: false,
	      speed: 100,
	      slidesToShow: 1
	    });
	  } else {
	    $(".course-more__list.slick-initialized").slick("unslick");
	  }
	});
























	


	
});
 
