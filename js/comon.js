$(function(){
  $(window).scroll(function() {
    var winHeight = $(window).height();
    var scTop = $(this).scrollTop();

    var navBar = $('.header-wrap');

    if (winHeight < scTop) {
      navBar.addClass('scroll');
    }else {
      navBar.removeClass('scroll');
    }
  });



});
