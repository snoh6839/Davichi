$(function() {
  let winHeight = $(window).innerHeight();
  // console.log(winHeight);
  let count = 0;
  let wheelAct = false;

  function wheelMove() {
    $('html').animate({
      scrollTop: count * winHeight
    }, {
      duration: 1000,
      start: function() {
        wheelAct = true;
      },
      complete: function() {
        wheelAct = false;
      }
    });
  };
  wheelMove();
  $(window).on('mousewheel', function(event) {
    // console.log(event);
    // console.log(event.originalEvent.wheelDelta);
    let eventDelta = event.originalEvent.wheelDelta;
    let secLeng = $('section').length
    if (eventDelta > 0 && wheelAct == false) {
      // console.log('wheel up');
      if (count <= 0) {
        count = 0
      } else {
        count -= 1;
        wheelMove();
      }
    } else if (eventDelta < 0 && wheelAct == false) {
      // console.log('wheel down');
      if (count >= secLeng - 1) {
        count = secLeng - 1
      } else {
        count += 1;
        wheelMove();
      }
    };
    if (eventDelta == 1 && wheelAct == false){
      $('.count-year').addClass('.fixed-ban');
    }
  });
});
