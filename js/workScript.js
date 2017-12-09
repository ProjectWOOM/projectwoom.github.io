$(document).ready(function(){

    $('.work-list-li').mouseenter(function(){
        $(this).addClass('focus');
        $(this).find('.work-about').stop().animate({'margin-bottom':'0'}, 600, 'easeOutQuint');
    }).mouseleave(function(){
        $(this).removeClass('focus');
        $(this).find('.work-about').stop().animate({'margin-bottom':'-80px'}, 600, 'easeInQuint');
        
    })

});