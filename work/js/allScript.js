$(document).ready(function(){

    $('.item_btn').mouseenter(function(){
        $(this).find('.item_desc').stop().animate({'margin-bottom':'0'}, 600, 'easeOutQuint');
    }).mouseleave(function(){
        $(this).find('.item_desc').stop().animate({'margin-bottom':'-80px'}, 600, 'easeInQuint');
        
    })

    var itemHeight, $windowW;

    function heightSetting(){

        var $windowW = $(window).width();

        if($windowW >= 1280){
            console.log($windowW);
            itemHeight = 260;
        }
        if($windowW <= 1024 && $windowW >= 1279){
            itemHeight = 220;            
        }
        if($windowW <= 1023 && $windowW >= 768){
            console.log($windowW);
            itemHeight = 260;
        }
        if($windowW <= 767){
            itemHeight = 180;            
        }

        $('.worklist_item').stop().css({'height':itemHeight});
    }



    function winResize1(){
        heightSetting();

    };

    $(window).resize(winResize1);
    
    $(window).trigger('resize');

    $('.all_btn').click(function(){
        $('.worklist_item').stop().fadeIn(500).stop().animate({'height':itemHeight});
        $('.sort_btn').removeClass('sel');
        $('.all_btn').addClass('sel');
    })

    $('.web_btn').click(function(){
        $('.worklist_item').stop().fadeOut().stop().animate({'height':'0'});
        $('.web').stop().fadeIn().stop().animate({'height':itemHeight});
        $('.sort_btn').removeClass('sel');
        $('.web_btn').addClass('sel');
    })

    $('.design_btn').click(function(){
        $('.worklist_item').stop().fadeOut().stop().animate({'height':'0'});
        $('.design').stop().fadeIn().stop().animate({'height':itemHeight});
        $('.sort_btn').removeClass('sel');
        $('.design_btn').addClass('sel');
    })

    $('.video_btn').click(function(){
        $('.worklist_item').stop().fadeOut().stop().animate({'height':'0'});
        $('.video').stop().fadeIn().stop().animate({'height':itemHeight});
        $('.sort_btn').removeClass('sel');
        $('.video_btn').addClass('sel');
    })

    $('.etc_btn').click(function(){
        $('.worklist_item').stop().fadeOut().stop().animate({'height':'0'});
        $('.etc').stop().fadeIn().stop().animate({'height':itemHeight});
        $('.sort_btn').removeClass('sel');
        $('.etc_btn').addClass('sel');
    })

});