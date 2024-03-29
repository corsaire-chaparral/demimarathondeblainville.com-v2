(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(200);
//    handleHeader()
  });

  // Sticky Menu
  // disabled for now, wonky useless anmation
//  $(window).scroll(handleHeader);
  
  function handleHeader() {
    if ($('header').offset().top > 500) {
      $('.top-header').addClass('hide');
      $('.navigation').addClass('nav-bg');
      $('.top-hider').addClass('top-height');
      $(document.documentElement).addClass('scrolled')
    } 
    if ($('header').offset().top < 450) {
      $('.top-header').removeClass('hide');
      $('.navigation').removeClass('nav-bg');
      $('.top-hider').removeClass('top-height');
      $(document.documentElement).removeClass('scrolled')
    }
  }

  // Background-images
//  $('[data-background]').each(function () {
//    $(this).css({
//      'background-image': 'url(' + $(this).data('background') + ')'
//    });
//  });

  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 7500,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    arrows: true,
    fade: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
    dots: true
  });
  // $('.hero-slider').slickAnimation();

  // venobox popup
  $(document).ready(function () {
    $('.venobox').venobox();
  });

  // filter
  $(document).ready(function () {
    var containerEl = document.querySelector('.filtr-container');
    var filterizd;
    if (containerEl) {
      filterizd = $('.filtr-container').filterizr({});
    }
    //Active changer
    $('.filter-controls li').on('click', function () {
      $('.filter-controls li').removeClass('active');
      $(this).addClass('active');
    });
  });

  //  Count Up
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
//  $(window).on('scroll', function () {
//    counter();
//  });

  // Animation
  $(document).ready(function () {
    $('.has-animation').each(function (index) {
      $(this).delay($(this).data('delay')).queue(function () {
        $(this).addClass('animate-in');
      });
    });
  });


  // scrolldir
//  $(document).ready(function () {
//    scrollDir();
//  });

})(jQuery);