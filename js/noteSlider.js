$(document).ready(function(){

    var btnClick = 0, slideWrap = $('.note-slide-ul');
    var prevBtn = $('.prev-btn'), nextBtn = $('.next-btn');
    var slideWidth = $('.note-slide-li').width() + 40;

    function resizeSlideW(){
        slideWidth = $('.note-slide-li').width() + 40;
    }

    // $(window).resize(function(){
    //     resizeSlideW();
    //     console.log(slideWidth);
    // });
    
    // $(window).trigger('resize');

    $('.note-slide-li').eq(0).css({'opacity':'1'});

    prevBtn.click(function(){
        if(btnClick > 0){
            btnClick--;
            slideWrap.stop().animate({'margin-left':'+=' + slideWidth + 'px'});
        }
        $('.note-slide-li').removeClass('note-sel');
        $('.note-slide-li').eq(btnClick).addClass('note-sel');
        $('.note-slide-li').stop().animate({'opacity':'0.2'});
        $('.note-sel').stop().animate({'opacity':'1'});
    });

    nextBtn.click(function(){
        if(btnClick < $('.note-slide-li').length -1){
            btnClick++;
            slideWrap.stop().animate({'margin-left':'-=' + slideWidth + 'px'});            
        }
        $('.note-slide-li').removeClass('note-sel');
        $('.note-slide-li').eq(btnClick).addClass('note-sel');
        $('.note-slide-li').stop().animate({'opacity':'0.2'});
        $('.note-sel').stop().animate({'opacity':'1'});
    })

});