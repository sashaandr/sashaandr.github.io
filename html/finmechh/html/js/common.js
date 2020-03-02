$(document).ready(function () {

    

    $('.main-menu__item_has-child').hover(function () {
        clearTimeout($.data(this,'timer'));
        $(this).toggleClass('main-menu__item_selected');
    $('.dropdown',this).stop(true,true).slideDown(200);
        }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
        $('.dropdown',this).stop(true,true).slideUp(200);
    }, this), 100));
        $(this).toggleClass('main-menu__item_selected');
    });

    $(window).scroll(function () {

        if ($(this).scrollTop() > 450) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('.scroll-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    

    $('.edition__tabs-list .tabs-item').click(function(){

      let left = $(this).offset().left - $('.edition__tabs-list').offset().left, width = $(this).innerWidth();

      $('.edition__tabs-line .indicator').css({'margin-left': left, 'width' : width});

      let block = $(this).attr('data-edition');
      $('.edition-slider').removeClass('edition-slider_active');
      $('#block'+block).addClass('edition-slider_active');

      edition.slick('setPosition');
      
    });

    let edition = $('.edition-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="edition__prev edition__arrows nav-slider" type="button"><i class="icon-prev"></i></button>',
      nextArrow: '<button class="edition__next edition__arrows nav-slider" type="button"><i class="icon-next"></i></button>',
      responsive: [
        {
          breakpoint: 1230,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });

    $('.publication__tabs-list .tabs-item').click(function(){

      let left = $(this).offset().left - $('.publication__tabs-list').offset().left, width = $(this).innerWidth();

      $('.publication__tabs-line .indicator').css({'margin-left': left, 'width' : width});

      let block = $(this).attr('data-publication');
      $('.publication-list').removeClass('publication-list_active');
      $('#publ'+block).addClass('publication-list_active');

    });


    $('.notification__link span').click(function(e){
      e.preventDefault();
      $(this).parent().toggleClass('notification__link_active');
      if( $(this).text() == 'Открыть подробности' ){
        $(this).text('Скрыть подробности');
      }else{
          $(this).text('Открыть подробности');
      }
      $('.notification__full-txt').slideToggle('slow');
    });

    $('.pamm-more').click(function(e){
      e.preventDefault();
      $('.pamm-item:nth-child(n+8)').slideToggle(300);
    });

    $('.search-btn, .open-search').click(function(){
        $('.popup-search').fadeIn();
    });

    $('.popup-search__close, .popup-search__overlay').click(function(){
        $('.popup-search').fadeOut();
    });

    $('.similar-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1230,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });

    $('.similar__next').on('click', function() {
      $('.similar-slider').slick('slickNext');
    });

    $('.similar__prev').on('click', function() {
      $('.similar-slider').slick('slickPrev');
    });

    $('.company__tabs-list .tabs-item').click(function(){

        $('.tabs-item').removeClass('tabs-item_selected');
        $(this).addClass('tabs-item_selected');

      

      let left = $(this).offset().left - $('.company__tabs-list').offset().left, width = $(this).innerWidth();

      $('.company__tabs-line .indicator').css({'margin-left': left, 'width' : width});

      let block = $(this).attr('data-company');
      $('.company-wrapper').removeClass('company-wrapper_active');
      $('#companyb'+block).addClass('company-wrapper_active');

    });

    let animateButton = function(e) {

      e.preventDefault();

      e.target.classList.remove('animate');
      
      e.target.classList.add('animate');
      
      e.target.classList.add('animate');
      setTimeout(function(){
        e.target.classList.remove('animate');
      },6000);
    };

    let classname = document.getElementsByClassName("btn");

    for (let i = 0; i < classname.length; i++) {
      classname[i].addEventListener('click', animateButton, false);
    }


    $('.company-block__inner .read-link').click(function(e){
        e.preventDefault();
        if( $(this).text() == 'Читать полностью' ){
            $(this).text('Скрыть').addClass('read-link_active');
          }else{
              $(this).text('Читать полностью').removeClass('read-link_active');
          }
        $(this).parent().find('.company-hidden').slideToggle(400);
    });


    $('.chargeback-form__select').click(function(){
      $(this).toggleClass('chargeback-form__select_opened');
      $('.chargeback-form__select ul').slideToggle(400);
    });

    $('.chargeback-form__select li').click(function(){
      let txt = $(this).text();
      $('.chargeback-form__select > span').text(txt);
    });

     $('.chargeback__tabs-list .tabs-item').click(function(){

        $('.tabs-item').removeClass('tabs-item_selected');
        $(this).addClass('tabs-item_selected');

      

      let left = $(this).offset().left - $('.chargeback__tabs-list').offset().left, width = $(this).innerWidth();

      $('.chargeback__tabs-line .indicator').css({'margin-left': left, 'width' : width});

      let block = $(this).attr('data-chargeback');
      $('.chargeback-info').removeClass('chargeback-info_active');
      $('#chargeback'+block).addClass('chargeback-info_active');

    });


     $('.trade-invest-item__title').click(function(){
      let parent = $(this).parent().parent();


      if ( parent.hasClass('trade-invest-item_active') ) {
        parent.removeClass('trade-invest-item_active');
        parent.find('.trade-invest-item__body').slideToggle('slow');
      } else {
        $("html, body").animate({scrollTop: $('body').offset().top+"px"});


        $('.trade-invest-item_active .trade-invest-item__body').slideToggle('slow');
        $('.trade-invest-item').removeClass('trade-invest-item_active');

        parent.toggleClass('trade-invest-item_active');
        
        parent.find('.trade-invest-item__body').slideToggle('slow');
      }


      
      

      
      
     });


     $('.companyItem .more-detailed').click(function(e){
      e.preventDefault();
      if( $(this).text() == 'Подробнее' ){
          $(this).text('Свернуть');
      }else{
           $(this).text('Подробнее');
      }
      let parent = $(this).parent().parent().parent();
      parent.find('.companyItem__hidden').slideToggle('slow');
      parent.find('.companyItem-more__item:nth-child(n+5)').slideToggle('slow');
      parent.toggleClass('companyItem_active');
     });

     $('.companyItem-more__item').wrapInner('<div class="companyItem-more__inner"></div>');

     $('.revision-form__select').click(function(e){
      $(this).toggleClass('revision-form__select_opened');
      $('.revision-form__select ul').slideToggle(400);
      

    });

     $(document).mouseup(function (e){ 
      let div = $('.revision-form__select'); 
      if (!div.is(e.target) 
          && div.has(e.target).length === 0  && div.hasClass('revision-form__select_opened')) { 
        div.removeClass('revision-form__select_opened');
        $('.revision-form__select ul').slideToggle(400);
      }
    });

     $(window).on("scroll resize", function() {
            var o = $(window).scrollTop() / ($(document).height() - $(window).height());
            $(".progress-read span").css({
                "width": (100 * o | 0) + "%"
            });
        })

     

     

     

    $('.revision-form__select li').click(function(){
      let txt = $(this).text();
      $('.revision-form__select > span').text(txt);
    });

    $('.sitemap-publications-item__title').click(function(){
      $(this).toggleClass('sitemap-publications-item__title_active');
      $(this).parent().find('.sitemap-publications-item__list').slideToggle('slow');
    });

    $('.see-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button class="see-slider__prev see-slider__arrows nav-slider" type="button"><i class="icon-prev"></i></button>',
      nextArrow: '<button class="see-slider__next see-slider__arrows nav-slider" type="button"><i class="icon-next"></i></button>',
      responsive: [
        {
          breakpoint: 1230,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        }
      ]
    });

    $('span.comments-form__photo').click(function(){
      $('.comments-popup').fadeIn();
    });

    $('span.close-popup, .comments-popup__overlay').click(function(){
      $('.comments-popup').fadeOut();
    });

    $('.article-navigation__title').click(function(){
      $(this).toggleClass('article-navigation__title_active');
      $('.article-navigation__list').slideToggle(300);
    });

    $('.spoiler__link').click(function(e){
      e.preventDefault();

      let body = $(this).parent().parent().parent().find('.spoiler__body');

      let link = $(this).parent().parent().parent().find('.spoiler__link');



      
      $(link).toggleClass('spoiler__link_active');
      $(this).parent().parent().parent().find('.spoiler__body').slideToggle(300);

      if ( $('.spoiler__link').hasClass('spoiler__link_active') ) {
        $('.spoiler__link').text('Скрыть подробности');
      } else {
        $('.spoiler__link').text('Узнать подробности');
      }
    });

    $('.spoiler-3__link').click(function(e){
      e.preventDefault();
      if( $(this).text() == 'Узнать подробности' ){
          $(this).text('Скрыть подробности');
      }else{
           $(this).text('Узнать подробности');
      }
      $(this).toggleClass('spoiler-3__link_active');
      $(this).parent().find('.spoiler-3__hidden').slideToggle(300);
    });

   
    
    $('.pamm-page-filter__select').click(function(){

      //$('.pamm-page-filter__select_opened ul').slideToggle(400);
      $('.pamm-page-filter__select').removeClass('pamm-page-filter__select_opened');

      $(this).toggleClass('pamm-page-filter__select_opened');
      //$(this).parent().parent().find('ul').slideToggle(400);
    });

    $('.pamm-page-filter__select li').click(function(){
      let txt = $(this).text();


      $(this).parent().parent().addClass('pamm-page-filter__select_closed');


      $(this).parent().parent().find('input').val(txt);
    });

    $(document).mouseup(function (e){ 
      let divs = $('.pamm-page-filter__select'); 
      if (!divs.is(e.target) 
          && divs.has(e.target).length === 0  && divs.hasClass('pamm-page-filter__select_opened')) { 
        // $('.pamm-page-filter__select_opened ul').slideToggle(400);
        divs.removeClass('pamm-page-filter__select_opened');
      }
    });


    $('.pamm-page-filter__desc').click(function(){
      if( $(this).hasClass('pamm-page-filter__desc_active') ) {
        $(this).toggleClass('pamm-page-filter__desc_deactive');
      } else {
        $('.pamm-page-filter__desc').removeClass('pamm-page-filter__desc_active').removeClass('pamm-page-filter__desc_deactive');
        $(this).addClass('pamm-page-filter__desc_active');
      }
    });



  $('body').wrapInner( '<div class="page-wrapper"></div>' );
  $('body').append('<nav id="menu"><ul></ul></nav>');
  $('.main-menu > li').clone().appendTo("#menu > ul").removeAttr('class');

  $(window).on("load scroll", function () {
    scroll = $(this).scrollTop();
});

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
              $('.header').css('top', 0);
              setTimeout(function() {
                d.removeClass("open-menu_active")
              }, 10)
            }), c.bind("open:finish", function() {
              $('.header').css('top', scroll);
              setTimeout(function() {
                d.addClass("open-menu_active")
              }, 10)
            });


  



});

const wrapper = document.querySelector(".search-form__input-wrapper"),
          textInput = document.querySelector(".search-form__input");
        
    textInput.addEventListener("keyup", event => {
      wrapper.setAttribute("data-text", event.target.value);
    });