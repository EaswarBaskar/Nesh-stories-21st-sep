$(function(){
  // ஆரம்ப slide-க்கு active
  $('.carousel-item').removeClass('active').eq(0).addClass('active');

  var total   = $('.carousel-item').length;
  var current = 0;

  $('#moveRight').on('click', function(){
    var prev = current;
    current = current + 1;
    setSlide(prev, current);
  });

  $('#moveLeft').on('click', function(){
    var prev = current;
    current = current - 1;
    setSlide(prev, current);
  });

  function setSlide(prev, next){
    var slide = current;

    if(next > total - 1){
      slide = 0;
      current = 0;
    }
    if(next < 0){
      slide = total - 1;
      current = total - 1;
    }

    $('.carousel-item').eq(prev).removeClass('active');
    $('.carousel-item').eq(slide).addClass('active');

    console.log('current ' + current);
    console.log('prev ' + prev);
  }
});
