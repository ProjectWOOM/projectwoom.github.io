$(document).ready(function(){

    $('.slide-wrap').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        swipeToSlide: true,
        swipe: true,
        touchMove : true,
        mobileFirst : true

      });
    
    //$('.slick-arrow').remove();
    // $('.slick-dots').children('li').css({
    //     'float':'left', 
    //     'width': '12px', 
    //     'height':'12px', 
    //     'font-size': '0', 
    //     'text-indent':'-9999',
    //     'background-color':'#e3e3e3',
    //     'border-radius':'6px',
    //     'cursor':'pointer'
    // });

    // $('.slick-dots').children('.slick-active').css({
    //     'background-color':'#606060'
    // });
}); 