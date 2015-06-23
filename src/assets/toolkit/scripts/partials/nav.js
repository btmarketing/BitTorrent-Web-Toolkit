$(window).scroll(function() {
var test = $('.nav__btn').width() + 24;
var test2 = $('nav').height();
if ($(this).scrollTop() > test2){  
    $('.nav').css({'right': '0'});
    $('.nav__btn').css({opacity: '1'});
  }
  else{
    $('.nav').css({'right': test * -1});
    $('.nav__btn').css({opacity: '0'});
  }
});