$(document).ready(function(){

    var btnClick = 0, slideWrap = $('.note-slide-ul');
    var prevBtn = $('.prev-btn'), nextBtn = $('.next-btn');

    $('.note-slide-li').eq(0).css({'opacity':'1'});

    prevBtn.click(function(){
        if(btnClick > 0){
            btnClick--;
            slideWrap.stop().animate({'margin-left':'-640' * btnClick + 'px'});
        }
        $('.note-slide-li').removeClass('note-sel');
        $('.note-slide-li').eq(btnClick).addClass('note-sel');
        $('.note-slide-li').stop().animate({'opacity':'0.2'});
        $('.note-sel').stop().animate({'opacity':'1'});
    });

    nextBtn.click(function(){
        if(btnClick < $('.note-slide-li').length -1){
            btnClick++;
            slideWrap.stop().animate({'margin-left':'-640' * btnClick + 'px'});            
        }
        $('.note-slide-li').removeClass('note-sel');
        $('.note-slide-li').eq(btnClick).addClass('note-sel');
        $('.note-slide-li').stop().animate({'opacity':'0.2'});
        $('.note-sel').stop().animate({'opacity':'1'});
    })

});