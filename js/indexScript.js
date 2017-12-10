var
words = ["안녕하세요. Project WOOM입니다.", "방문해주셔서 감사합니다.", "저는 웹사이트를 디자인하고 퍼블리싱하는 개발자입니다.", "HTML, CSS, Javascript, jQuery, php 등을 다룹니다."],
part,
i = 0,
offset = 0,
len = words.length,
forwards = true,
skip_count = 0,
skip_delay = 10,
speed = 120;

var wordflick = function(){
setInterval(function(){
    if (forwards) {
      if(offset >= words[i].length){
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
       if(offset == 0){
          forwards = true;
          i++;
          offset = 0;
          if(i >= len){ 
            i=0;
          } 
       }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
      $('.typing').text(part);
},speed);
};

$(document).ready(function(){
wordflick();
});