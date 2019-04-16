

$(document).ready(function() {

  $('.other-service_list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="other-prev"></button>',
    nextArrow: '<button type="button" class="other-next"></button>',
     responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
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
  ]
  });

  $('.comment-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="comment-prev"></button>',
    nextArrow: '<button type="button" class="comment-next"></button>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
  });

  $('.work-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="comment-prev"></button>',
    nextArrow: '<button type="button" class="comment-next"></button>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
  });

  $('.service-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="comment-prev"></button>',
    nextArrow: '<button type="button" class="comment-next"></button>',
     responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
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
  ]
  });
  

  $('.open-item a').click(function(){
    $(this).toggleClass('active');
    $('.hidden-menu').slideToggle('slow');
  });

  $('.main-menu > ul > li').clone().appendTo('.mobile-menu > ul').removeAttr('class');
  $('.main-menu ul.drop > li').clone().appendTo('.mobile-menu > ul').removeAttr('class');

  $('.open-menu').click(function(){
    $('.mobile-menu').slideToggle('slow');
  });

  $('.close-menu').click(function(){
    $('.mobile-menu').slideToggle('slow');
  });


  

  $('.category-more_list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
         arrows: true,
          prevArrow: '<button type="button" class="comment-prev"></button>',
          nextArrow: '<button type="button" class="comment-next"></button>',

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         arrows: true,
          prevArrow: '<button type="button" class="comment-prev"></button>',
          nextArrow: '<button type="button" class="comment-next"></button>',
      }
    }
  ]
  });

  $('.open-info').wrap('<div class="new-div"></div>');


  $('.comments-prev').on('click', function() {
    $('category-more_list').slick('slickPrev');
  });

  $('.comments-next').on('click', function() {
    $('category-more_listr').slick('slickNext');
  });

  $('.category-item').click(function(){
    $('.category-item').removeClass('active');
    $('.new-div').css('display', 'none');

    /*var num = $(this).attr('data-num');
    $('.open-info-'+num).slideToggle('slow');*/

    $(this).toggleClass('active');
    $(this).parent().find('.new-div').slideToggle('slow');

    $('.category-more_list').slick('destroy');

    $('.category-more_list').slick("reinit"); 

    
  });


  $('.modification-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="mod-prev"></button>',
    nextArrow: '<button type="button" class="mod-next"></button>',
     responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });


  $('.modification-item').click(function(event) {
    $('.modification-info').removeClass('active');
    var num = $(this).attr('data-num');
    $('#mod'+num).addClass('active');
    $('.modification-item').removeClass('active');
    $(this).addClass('active');
  });

  $(window).on('load resize', function() {
  if ($(window).width() < 992) {
    $('.step-list').slick({

      dots: true,
      arrows: false,
      slidesToShow: 3,
      responsive: [

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
  } else {
    $(".step-list").slick("unslick");
  }
});

});

