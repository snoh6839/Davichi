window.addEventListener("wheel", function(e){
  e.preventDefault();},{passive : false});
  var mHtml = $("html");
  var page = 1;
  mHtml.animate({scrollTop : 0},10);

  $(window).on("wheel", function(e) {
      if(mHtml.is(":animated")) return;
      if(e.originalEvent.deltaY > 0) {
          if(page == 7) return;
          page++;
      } else if(e.originalEvent.deltaY < 0) {
          if(page == 1) return;
          page--;
      }
      var posTop = (page-1) * $(window).height();
      mHtml.animate({scrollTop : posTop});

  })

$(function() {
  $(window).scroll(function() {
    var winHeight = $(window).height();
    var scTop = $(this).scrollTop();

    var header = $('.header-wrap');
    var topbt = $('.top-btn');

  if (0 < scTop ) {
    header.addClass('scroll');
    topbt.addClass('active');
  } else {
    header.removeClass('scroll');
    topbt.removeClass('active');
  }
});

const fambtn = document.querySelector('.familysite-btn');

fambtn.addEventListener('click', () => {
  fambtn.classList.toggle('clicked');
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
  setTimeout(() => counter( document.querySelector(".count1"), 283), 3000);
  setTimeout(() => counter( document.querySelector(".count2"), 418), 3000);
  setTimeout(() => counter( document.querySelector(".count3"), 408), 3000);
  setTimeout(() => counter( document.querySelector(".count4"), 200), 3000);
}
