window.addEventListener("wheel", function(e){
  e.preventDefault();},{passive : false});
  var mHtml = $("html");
  var page = 1;
  mHtml.animate({scrollTop : 0},10);

  $(window).on("wheel", function(e) {
      if(mHtml.is(":animated")) return;
      if(e.originalEvent.deltaY > 0) {
          if(page == 9) return;
          page++;
      } else if(e.originalEvent.deltaY < 0) {
          if(page == 1) return;
          page--;
      }
      var posTop = (page-1) * $(window).height();
      mHtml.animate({scrollTop : posTop});

      var cur_pos = $(this).scrollTop();

  })

$(function() {
  $(window).scroll(function() {
    var winHeight = $(window).height();
    var scTop = $(this).scrollTop();

    var navBar = $('.header-wrap');

    if (winHeight < scTop) {
      navBar.addClass('scroll');
    } else {
      navBar.removeClass('scroll');
    }
  });
});

const counter = ($counter, max) => {
  let now = max;

  const handle = setInterval(() => {
    $counter.innerHTML = Math.ceil(max - now);

    // 목표수치에 도달하면 정지
    if (now < 1) {
      clearInterval(handle);
    }

    // 증가되는 값이 계속하여 작아짐
    const step = now / 10;

    // 값을 적용시키면서 다음 차례에 영향을 끼침
    now -= step;
  }, 50);
}

window.onload = () => {
  setTimeout(() => counter( document.querySelector(".count1"), 283), 2000);
  setTimeout(() => counter( document.querySelector(".count2"), 1418), 2000);
  setTimeout(() => counter( document.querySelector(".count3"), 41408), 2000);
  setTimeout(() => counter( document.querySelector(".count4"), 1200), 2000);

}
