$(function(){
  $(window).scroll(function() {
    var winHeight = $(window).height();
    var scTop = $(this).scrollTop();

    var navBar = $('.header-wrap');

    if (winHeight - 70 < scTop) {
      navBar.addClass('scroll-nav');
    }else {
      navBar.removeClass('scroll-nav');
    }
  });



});
