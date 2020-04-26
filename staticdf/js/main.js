"use strict";

$(document).ready(function () {
  svg4everybody({});
  $('.best-offer-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [{
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $(".calc-group__price").slider({
    min: 10000,
    max: 2000000,
    step: 1000,
    value: 500000,
    range: "min",
    animate: "fast",
    slide: function slide(event, ui) {
      $("#price-input").val(ui.value);
    }
  });
  $("#price-input").on("change", function () {
    $('.calc-group__price').slider({
      "value": $(this).val()
    });
  });
  $(".calc-group__year").slider({
    min: 1,
    max: 20,
    step: 1,
    value: 1,
    range: "min",
    animate: "fast",
    slide: function slide(event, ui) {
      if (ui.value == 1) {
        $("#year-input").val('на ' + ui.value + ' год');
      } else if (ui.value == 2 || ui.value == 3 || ui.value == 4) {
        $("#year-input").val('на ' + ui.value + ' года');
      } else {
        $("#year-input").val('на ' + ui.value + ' лет');
      }
    }
  });
  $("#year-input").on("change", function () {
    $('.calc-group__year').slider({
      "value": $(this).val()
    });
  });
  $('.open-menu').click(function () {
    $('.m-menu').addClass('m-menu_opened');
  });
  $('.m-menu__close').click(function () {
    $('.m-menu').removeClass('m-menu_opened');
  });
  $('.m-menu .main-menu__item.has-child a').click(function (e) {
    e.preventDefault();
    $(this).parent().find('.dropdown-menu').slideToggle(200);
  });
  $('.m-menu .dropdown-menu__item.has-child a').click(function (e) {
    e.preventDefault();
    $(this).parent().find('.lvl3-menu').slideToggle(200);
  });
}); // Полифилы
// forEach IE 11

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // closest IE 11


(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})(); // matches IE 11


(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); //Array.form IE 11


if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
}