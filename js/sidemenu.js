$(document).ready(function(){
    $('.menu-btn').on('click', function(){
      $('.menu-btn').children('span').stop().animate({'width':'0'}, 300);
      $('.menu-wrap').stop().fadeIn(500);
      $('.menu-list-wrap').stop().animate({'margin-right':'0'}, 500);
    })

    $('.menu-close').on('click', function(){
      $('.menu-list-wrap').stop().animate({'margin-right':'-300px'}, 500);
      $('.menu-wrap').stop().fadeOut(500);
      $('.menu-btn').children('span').eq(0).stop().delay(100).animate({'width':'30px'}, 300);
      $('.menu-btn').children('span').eq(1).stop().delay(200).animate({'width':'30px'}, 400);
      $('.menu-btn').children('span').eq(2).stop().delay(300).animate({'width':'30px'}, 500);
    })
  });