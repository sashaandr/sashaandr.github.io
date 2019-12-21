let userMail;

$(document).ready(function () {

    const social = $('.social').clone();

    const logo = $('.logo').clone();

    const menu = $('.menu').clone();

    const login = $('.login').clone();

    $('.footer-contacts').append(social);

    $('.mobile-menu').append(logo, menu, login);

    $('.open-menu').click(function(){
      $(this).toggleClass('open-menu_active');
      $('.mobile-menu').fadeToggle();
    });

    

    $('.partners-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1344,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        }
      ]
    });

    $('.testimonials-slider').slick({
      infinite: false,
      adaptiveHeight: true,
      arrows: false
    });

    $('.tes-next').on('click', function() {
      $('.testimonials-slider').slick('slickNext');
    });

    $('.tes-prev').on('click', function() {
      $('.testimonials-slider').slick('slickPrev');
    });

   
   

    $('.main-form__input').on('input keyup', function(e){
      
      userMail = $(this).val();

      $.cookie('email', userMail , { expires: 365 });
    });
  

    $('#user-email').val($.cookie('email'));
  

    $('.form').on('submit', function(e){
      
      if ( $(this).val().length < 3 ) {
        $('.error').addClass('error_active');
        return false;
      }
    });


});
 