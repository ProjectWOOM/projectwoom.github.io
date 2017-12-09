$(document).ready(function(){

    var menuBool = false;

    $('.menu-btn').on('click', function(){
        if(menuBool == false){
            $('.menu-btn').children('span').removeClass('menu-bar');                
            $('.menu-btn').children('span').addClass('close-bar');
            $('.menu-wrap').stop().fadeIn(300);
            $('.menu-side').stop().animate({'margin-right':'0'}, 300, 'easeOutCubic');
            menuBool = true;
        } else if(menuBool == true){
            $('.menu-btn').children('span').removeClass('close-bar');
            $('.menu-btn').children('span').addClass('menu-bar');
            $('.menu-wrap').stop().fadeOut(300);
            $('.menu-side').stop().animate({'margin-right':'-300px'}, 300, 'easeOutCubic');
            menuBool = false;
        }
    });


    $('.menu').on('click', function(){
        $('.menu').removeClass('sel');
        $(this).addClass('sel');
    })
}); 