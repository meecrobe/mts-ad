$(document).ready(function(){

  var timer;

  $('.anchor').on('click', function(){
    $('.slider-wrapper').fadeIn(function(){
      $('.popup-circle').show().addClass('animated zoomIn');
    });
    timer = setTimeout(function(){
      $('.slider-wrapper').hide();
      resetAll();
    }, 120000);
  });

  $('.slider-wrapper').on('click', function(){
    $(this).hide();
    resetAll();
  });

  $('.popup-circle').on('click', function(event){
    event.stopPropagation();
  });

  $('.a-1').on('click', function(){
    showSlide1();
  });

  $('.a-2').on('click', function(){
    showSlide2();
  });

  $('.a-3').on('click', function(){
    showSlide3();
  });

  $('.a-4').on('click', function(){
    showSlide4();
  });

  $('.a-5').on('click', function(){
    showSlide5();
  });

  function resetAll() {
    $('video')[0].pause();
    clearTimeout(timer);
    $('.slide').hide();
    $('.slide').finish();
    $('.slide, .slide *').finish(true, true).removeClass('animated');
  }

  function showSlide1() {
    var slide = $('#slide-1');

    slide.show().children().hide().delay(1000);

    slide.children('h1.center').delay(400).show(0).addClass('animated zoomIn');
    slide.children('h1 + p').delay(2500).show(0).addClass('animated zoomIn');
    slide.children('.img-1').delay(3000).show(0).addClass('animated zoomIn');
    slide.children('.img-2').delay(3500).show(0).addClass('animated zoomIn');
    slide.children('.img-3').delay(4000).show(0).addClass('animated zoomIn');
    slide.children('.img-4').delay(4500).show(0).addClass('animated zoomIn');
    slide.children('h2').delay(6000).show(0).addClass('animated zoomIn');
    slide.children('.minsk').delay(6500).show(0).addClass('animated slideInUp');
    slide.children('.lib').delay(7000).show(0).addClass('animated slideInUp');
  }

  function showSlide2() {
    var slide = $('#slide-2');

    slide.show().children().hide().delay(1000);
    slide.children('h1.center').delay(400).show(0).addClass('animated zoomIn');
    slide.children('.img-1').delay(2500).show(0).addClass('animated zoomIn');
    slide.children('.img-2').delay(3000).show(0).addClass('animated zoomIn');
    slide.children('.img-3').delay(3500).show(0).addClass('animated zoomIn');
    slide.children('.img-4').delay(4000).show(0).addClass('animated zoomIn');
    slide.children('.side').delay(5500).show(0).find('*').addClass('animated slideInRight');
  }

  function showSlide3() {
    var slide1 = $('#slide-3');
    var slide2 = $('#slide-4');

    slide1.show().children().hide().delay(1000);
    slide1.children('h1.center').delay(400).show(0).addClass('animated zoomIn');
    slide1.children('.img-1').delay(2500).show(0).addClass('animated zoomIn');
    slide1.children('.img-2').delay(3000).show(0).addClass('animated zoomIn');
    slide1.children('.img-3').delay(3500).show(0).addClass('animated zoomIn');
    slide1.children('.img-4').delay(4000).show(0).addClass('animated zoomIn');
    slide1.children('.side').delay(2000).show(0).find('*').addClass('animated slideInLeft');
    slide1.delay(10000).hide(0);
    slide2.show().children().hide().delay(1000);
    slide2.children('h1.center').delay(10400).show(0).addClass('animated zoomIn');
    slide2.children('.side').delay(14000).show(0).find('*').addClass('animated slideInRight');
    slide2.children('.img-1').delay(12500).show(0).addClass('animated zoomIn');
    slide2.children('.img-2').delay(13000).show(0).addClass('animated zoomIn');
    slide2.children('p.center').delay(15500).show(0).addClass('animated slideInUp');
  }

  function showSlide4() {
    var slide = $('#slide-5');

    slide.show().children().hide().delay(1000);
    slide.children('h1.center').delay(400).show(0).addClass('animated zoomIn');
    slide.children('.img-1').delay(2500).show(0).addClass('animated zoomIn');
    slide.children('.img-2').delay(3000).show(0).addClass('animated zoomIn');
    slide.children('.img-3').delay(3500).show(0).addClass('animated zoomIn');
    slide.children('.side').delay(5500).show(0).addClass('animated fadeIn');
  }

  function showSlide5() {
    var slide = $('#slide-6');

    slide.show().children().hide().delay(1000);
    slide.children('h1.center').delay(400).show(0).addClass('animated zoomIn');
    slide.children('h2').delay(2500).show(0).addClass('animated zoomIn');
    slide.children('video').delay(3500).show(0).addClass('animated bounceInUp');
  }

});