$(document).ready(function () {

  $('.phone a').click(function(e){
    e.preventDefault();
    $('#modal1').fadeIn();
  });

  $('.modal-overlay').click(function(){
    $(this).parent().fadeOut();
  });

  $('.close-modal').click(function(){
    $(this).parent().parent().parent().fadeOut();
  });

  const logo = $('.logo').clone();

  const menu = $('.menu').clone();

  const phone = $('.header .phone').clone();


  $('.mobile-menu').append(logo, menu, phone);

  $('.m-menu').click(function(){
    $(this).toggleClass('m-menu_active');
    $('.mobile-menu').fadeToggle();
  });

  $('.work-slider').slick({
    dots: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
      }
    }
  ]
  });

  $('.work-arrows .next').on('click', function() {
    $('.work-slider').slick('slickNext');
  });

  $('.work-arrows .prev').on('click', function() {
    $('.work-slider').slick('slickPrev');
  });

  $(".menu__item a").click(function(){
      let _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
  });

  $('.mobile-menu .menu__item a').click(function(){
    $('.mobile-menu').fadeToggle();
    $('.m-menu').removeClass('m-menu_active');
  });


  $("#play").on("click", function(){
    $('#video')[0].play();
    $('#play').hide();
    $('#pause').show();
  });

  $("#pause").on("click", function(){
    $('#video')[0].pause();
    $('#pause').hide();
    $('#play').show();
  });

});


