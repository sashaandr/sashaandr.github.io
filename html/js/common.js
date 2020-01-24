$(document).ready(function () {

  $(window).on('scroll', function(){
    let scrolled = $(this).scrollTop();
    if ($(this).scrollTop() > 1) {
      $('.header').addClass('header_scroll');
    } else {
      $('.header').removeClass('header_scroll');
    }

    if (scrolled > 500) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }

    let scrollTop = $(window).scrollTop(); 
    let docHeight = $(document).height(); 
    let winHeight = $(window).height(); 
    let scrollPercent = (scrollTop) / (docHeight - winHeight); 
    let scrollPercentRounded = Math.round(scrollPercent*100); 

    $('.scroll-top .txt').html(scrollPercentRounded + '%');

    if(scrollPercentRounded >= 98) {
      $('.scroll-top .txt').addClass('txt-white');
    } else {
      $('.scroll-top .txt').removeClass('txt-white');
    }
  });

  $('.characteristicsItem__title').click(function(){
    $(this).toggleClass('characteristicsItem__title-active');
    $(this).parent().find('.characteristicsItem__list').slideToggle('slow');
  });

  $(window).on('load resize', function(){
    if($(window).width() < 1024 && $(window).width() > 479) {
      $('.pagination-list li').removeClass('pagination-active')
      $('.pagination-selected').next().addClass('pagination-active')
      $('.pagination-selected').next().next().addClass('pagination-active')
      $('.pagination-selected').prev().addClass('pagination-active')
      $('.pagination-selected').prev().prev().addClass('pagination-active')
    }
    if($(window).width() < 480) {
      $('.pagination-list li').removeClass('pagination-active')
      $('.pagination-selected').next().addClass('pagination-active')
      $('.pagination-selected').prev().addClass('pagination-active')
    }
  });

  $('.open-search').click(function(){
    $('.popup-search').fadeIn();
  });

  $('.popup-search__close, .popup-search__overlay').click(function(){
    $('.popup-search').fadeOut();
  });

  const wrapper = $(".search-form__input-wrapper"),
        textInput = $(".search-form__input");
        
    textInput.on("keyup", event => {
      wrapper.attr("data-text", event.target.value);
    });

  $('.slider').slick({
    arrows: true,
    appendArrows: $('.slider-arrows'),
    prevArrow: '<button class="slider-prev slider-arrow" type="button" aria-label="Предыдущий слайд"></button>',
    nextArrow: '<button class="slider-next slider-arrow" type="button" aria-label="Следующий слайд"></button>',
    responsive: [
      {
        breakpoint: 720,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  });

  $('.section-slider').slick({
    speed: 300,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
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
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.section-next').on('click', function() {
    $(this).parent().parent().parent().find('.section-slider').slick('slickNext');
  });

  $('.section-prev').on('click', function() {
    $(this).parent().parent().parent().find('.section-slider').slick('slickPrev');
  });

  

  $('body').wrapInner( '<div class="page-wrapper"></div>' );
  $('body').append('<nav id="menu"><ul></ul></nav>');
  $('.menu > li').clone().appendTo("#menu > ul").removeAttr('class');

  $(window).on("load scroll", function () {
    scroll = $(this).scrollTop();
  });

  t = $("html");
    var c = $("#menu").mmenu({
    navbar: {
      title: "Меню"
    },
    offCanvas: {
      position  : 'right'
    },
    extensions: [
            "theme-black",
            "fx-panels-zoom"
         ],
    
    }).data("mmenu"),
      d = $(".open-menu").on("click", function(e) {
        e.preventDefault(), t.hasClass("mm-opened") ? c.close() : c.open()
      });
            c.bind("close:finish", function() {
              $('.header').css({'top': 0, 'transition': '0s'});
              setTimeout(function() {
                d.removeClass("open-menu_active");
                $('.header').removeAttr('style');
              }, 10)
            }), c.bind("open:finish", function() {
              $('.header').css({'top': scroll});
              setTimeout(function() {
                d.addClass("open-menu_active")
              }, 10)
  });

 


  $(window).scroll(function () {
    if ($(this).scrollTop() > 450) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });
    
    $('.scroll-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });


});