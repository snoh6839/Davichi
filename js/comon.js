// console.log($('.count-year').offset.top);
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
//
// window.onload = () => {
//   setTimeout(() => counter( document.querySelector(".count1"), 283), 3000);
//   setTimeout(() => counter( document.querySelector(".count2"), 418), 3000);
//   setTimeout(() => counter( document.querySelector(".count3"), 408), 3000);
//   setTimeout(() => counter( document.querySelector(".count4"), 200), 3000);
// }

window.addEventListener("wheel", function(e){
  e.preventDefault();},{passive : false});
  var mHtml = $("html");
  var page = 1;
  mHtml.animate({scrollTop : 0},10);

  $(window).on("wheel", function(e) {
    var posTop = (page-1) * $(window).height();
    // var vpx = $(window).height();
      if(mHtml.is(":animated")) return;
      // var target1 = $('.count-year').offset().top;
      // var target2 = $('#products').offset().top;
      // console.log(target1);
      console.log(page);
      if(e.originalEvent.deltaY > 0) {
        if(page == 8) return;
          if(page == 1) {
            mHtml.animate({scrollTop : $(window).height() - 540});
            setTimeout(() => counter( document.querySelector(".count1"), 283));
            setTimeout(() => counter( document.querySelector(".count2"), 418));
            setTimeout(() => counter( document.querySelector(".count3"), 408));
            setTimeout(() => counter( document.querySelector(".count4"), 200));
          }else if (page == 5) {
            mHtml.animate({scrollTop : posTop + 540 - 500});
          }else if (page == 6){
            mHtml.animate({scrollTop : posTop});
          }else{
            mHtml.animate({scrollTop : posTop + 540});
          }
          page++;

      } else if(e.originalEvent.deltaY < 0) {
        if(page == 0) return;
          page--;
          mHtml.animate({scrollTop : posTop});
      }
      var cur_pos = $(this).scrollTop();
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



// let bulletActive = document.querySelector('.swiper-pagination-bullet-active');
// bulletActive.appand('<div class="progress-bar"></div>');

});

const fambtn = document.querySelector('.familysite-btn');

fambtn.addEventListener('click', () => {
  fambtn.classList.toggle('clicked');
});

});



$(document).ready(function () {
	$(".mySlideDiv").not(".show").hide(); //화면 로딩 후 첫번째 div를 제외한 나머지 숨김

	setInterval(nextSlide, 4000); //4초(4000)마다 다음 슬라이드로 넘어감
});

//이전 슬라이드
function prevSlide() {
	$(".mySlideDiv").hide(); //모든 div 숨김
	var allSlide = $(".mySlideDiv"); //모든 div 객체를 변수에 저장
	var currentIndex = 0; //현재 나타난 슬라이드의 인덱스 변수

	//반복문으로 현재 show 클래스를 가진 div를 찾아 index 저장
	$(".mySlideDiv").each(function(index,item){
		if($(this).hasClass("show")) {
			currentIndex = index;
		}

	});

	//새롭게 나타낼 div의 index
	var newIndex = 0;

	if(currentIndex <= 0) {
		//현재 슬라이드의 index가 0인 경우 마지막 슬라이드로 보냄(무한반복)
		newIndex = allSlide.length-1;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 뒤로 간 index 지정
		newIndex = currentIndex-1;
	}

	//모든 div에서 show 클래스 제거
	$(".mySlideDiv").removeClass("show");

	//새롭게 지정한 index번째 슬라이드에 show 클래스 부여 후 show()
	$(".mySlideDiv").eq(newIndex).addClass("show");
	$(".mySlideDiv").eq(newIndex).show();

}

//다음 슬라이드
function nextSlide() {
	$(".mySlideDiv").hide();
	var allSlide = $(".mySlideDiv");
	var currentIndex = 0;

	$(".mySlideDiv").each(function(index,item){
		if($(this).hasClass("show")) {
			currentIndex = index;
		}

	});

	var newIndex = 0;

	if(currentIndex >= allSlide.length-1) {
		//현재 슬라이드 index가 마지막 순서면 0번째로 보냄(무한반복)
		newIndex = 0;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 앞으로 간 index 지정
		newIndex = currentIndex+1;
	}

	$(".mySlideDiv").removeClass("show");
	$(".mySlideDiv").eq(newIndex).addClass("show");
	$(".mySlideDiv").eq(newIndex).show();

}
