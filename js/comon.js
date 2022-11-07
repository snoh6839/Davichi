

const counter = ($counter, max) => {
  let now = max;
  const handle = setInterval(() => {
    $counter.innerHTML = Math.ceil(max - now);
    if (now < 1) {
      clearInterval(handle);
    }
    const step = now / 10;
    now -= step;
  }, 50);
}

window.addEventListener("wheel", function(e) {
  e.preventDefault();
}, {
  passive: false
});
var mHtml = $("html");
var page = 1;
mHtml.animate({
  scrollTop: 0
}, 10);

$(window).on("wheel", function(e) {
  var posTop = (page - 1) * $(window).height();
  if (mHtml.is(":animated")) return;
  // var target1 = $('.count-year').offset().top;
  // var target2 = $('.quickmenu').offset().top;
  // console.log(target1);
  console.log(page);
  if (e.originalEvent.deltaY > 0) {
    if (page == 8) return;
    if (page == 1) {
      mHtml.animate({
        scrollTop: $(window).height() - 540
      });
      setTimeout(() => counter(document.querySelector(".count1"), 283));
      setTimeout(() => counter(document.querySelector(".count2"), 418));
      setTimeout(() => counter(document.querySelector(".count3"), 408));
      setTimeout(() => counter(document.querySelector(".count4"), 200));
    } else if (page == 5) {
      mHtml.animate({
        scrollTop: posTop + 540 - 500
      });
    } else if (page == 6) {
      mHtml.animate({
        scrollTop: posTop
      });
    } else {
      mHtml.animate({
        scrollTop: posTop + 540
      });
    }
    page++;

  } else if (e.originalEvent.deltaY < 0) {
    if (page == 0) return;
    page--;
    mHtml.animate({
      scrollTop: posTop
    });
  }
  var cur_pos = $(this).scrollTop();
})



$(function() {

  var swiper = new Swiper(".mySwiper", {
    autoplay: true,
    autoplayDisableOnInteraction: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="swiper-pagination-bullet progress-bar"><p class="select-video-btn">0'+(index+1)+'</p></span><div class="progress bar'+(index+1)+'"></div>';
      },
    },
  });

  // console.log($("video").get(0));

$(".btn-play").click(
  function() {
    // swiper.autoplay.start();
    // $("video").get(0).play();
    $(".btn-play").addClass('on');
    $(".btn-pause").removeClass('on');
  }
)

$(".btn-pause").click(
  function() {
    // swiper.autoplay.stop();
    // $("video").get(0).pause();
    // $("video").autoplay.pause();
    $(".btn-pause").addClass('on');
    $(".btn-play").removeClass('on');
  }
)



  $(window).scroll(function() {
    var winHeight = $(window).height();
    var scTop = $(this).scrollTop();

    var header = $('.header-wrap');
    var topbt = $('.top-btn');

    if (0 < scTop) {
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



$(document).ready(function() {
  $(".mySlideDiv").not(".show").hide();
  setInterval(nextSlide, 4000);
});

function prevSlide() {
  $(".mySlideDiv").hide();
  var allSlide = $(".mySlideDiv");
  var currentIndex = 0;

  $(".mySlideDiv").each(function(index, item) {
    if ($(this).hasClass("show")) {
      currentIndex = index;
    }

  });

  var newIndex = 0;
  if (currentIndex <= 0) {
    newIndex = allSlide.length - 1;
  } else {
    newIndex = currentIndex - 1;
  }

  $(".mySlideDiv").removeClass("show");

  $(".mySlideDiv").eq(newIndex).addClass("show");
  $(".mySlideDiv").eq(newIndex).show();

}

function nextSlide() {
  $(".mySlideDiv").hide();
  var allSlide = $(".mySlideDiv");
  var currentIndex = 0;

  $(".mySlideDiv").each(function(index, item) {
    if ($(this).hasClass("show")) {
      currentIndex = index;
    }

  });

  var newIndex = 0;

  if (currentIndex >= allSlide.length - 1) {
    newIndex = 0;
  } else {
    newIndex = currentIndex + 1;
  }

  $(".mySlideDiv").removeClass("show");
  $(".mySlideDiv").eq(newIndex).addClass("show");
  $(".mySlideDiv").eq(newIndex).show();

}
