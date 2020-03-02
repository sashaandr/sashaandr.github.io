$(document).ready(function () {

  $('.menu__item_has-child').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('.sub-menu',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('.sub-menu',this).stop(true,true).slideUp(200);
    }, this), 100));
  });

  $('.reading-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        variableWidth: false,
      }
    }
  ]
  });

  $('.reading-prev').on('click', function() {
    $('.reading-slider').slick('slickNext');
  });

  $('.reading-next').on('click', function() {
    $('.reading-slider').slick('slickPrev');
  });

  $('.open-search').click(function(){
    $('.search').slideToggle(200);
  });
  

  
  

  


  $('body').wrapInner( '<div class="page-wrapper"></div>' );
  $('body').append('<nav id="menu"><ul></ul></nav>');
  $('.menu > li').clone().appendTo("#menu > ul").removeAttr('class');

 t = $("html");
    var c = $("#menu").mmenu({
    navbar: {
      title: "Меню"
    },
    pageScroll : {
      scroll : true,
      update : true, 
      scrollOffset : 300 
    }
    }).data("mmenu"),
      d = $(".open-menu").on("click", function(e) {
        e.preventDefault(), t.hasClass("mm-opened") ? c.close() : c.open()
      });
            c.bind("close:finish", function() {
              setTimeout(function() {
                d.removeClass("open-menu_active")
              }, 10)
            }), c.bind("open:finish", function() {
              setTimeout(function() {
                d.addClass("open-menu_active")
              }, 10)
  });

            $('.mm-listview').removeClass('sub-menu');



  $('.article-navigation__title').click(function(){
    $(this).toggleClass('article-navigation__title_active');
    $('.article-navigation__list').slideToggle(300);
  });


     
    

   


});