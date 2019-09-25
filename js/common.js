$(document).ready(function () {

 $('.slider').slick({
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
 });

 $('.prev-slide').on('click', function() {
  $('.slider').slick('slickPrev');
 });

 $('.next-slide').on('click', function() {
  $('.slider').slick('slickNext');
 });

 $('.articleList').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        variableWidth: true,
        arrows: false
      }
    }
  ]
 });


  $(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 107 ) {
        $('.header').addClass('scrolled');
        $('.logo__img img').attr('src', 'img/small-logo.png');
    }   
    if( scrolled <= 107 ) {     
        $('.header').removeClass('scrolled');
        $('.logo__img img').attr('src', 'img/logo.png');
    }

    if (scrolled > 500) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
});

  

  $('.slider__link').mouseover(function(){
    $('.slider__link').removeClass('slider__link-active');
    $(this).addClass('slider__link-active');
    let img = $(this).data('image');

    if( $('.jddQqE image').attr("xlink:href") == img ) {
      return false
    } else {
      $('.jddQqE image').attr({'xlink:href': img});

      $('.svg1').css( "display", "none" ).css( "top", "-100%" ).css( "display", "block" ).animate({top: "0px"}, 250);

      $('.svg2').css( "display", "none" ).css( "bottom", "-100%" ).css( "display", "block" ).animate({bottom: "0px"}, 250);
    }
  });

  if($(window).width() < 767) {
    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.slider__link').removeClass('slider__link-active');

      $('.slick-active .slider__link').addClass('slider__link-active');

      let img = $('.slick-active .slider__link').data('image');

      if( $('.jddQqE image').attr("xlink:href") == img ) {
      return false
    } else {
      $('.jddQqE image').attr({'xlink:href': img});

      $('.svg1').css( "display", "none" ).css( "top", "-100%" ).css( "display", "block" ).animate({top: "0px"}, 250);

      $('.svg2').css( "display", "none" ).css( "bottom", "-100%" ).css( "display", "block" ).animate({bottom: "0px"}, 250);
    }
    });

    $(window).on('load resize', function() {

      $('.pagination__item').hide();

      let span = $('.pagination__item span').parent();

      span.show().addClass('page-active');
      span.prev().show();
      span.next().show();

  }); 
  }
  

  $('.characteristicsItem__title').click(function(){
    $(this).toggleClass('characteristicsItem__title-active');
    $(this).parent().find('.characteristicsItem__list').slideToggle('slow');
  });

 


});