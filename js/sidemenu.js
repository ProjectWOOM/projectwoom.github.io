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


    var scrollPosition;
    // = $("#").offset().top

    $('.home_menu').on('click', function(){
        scrollPosition = $("#home").offset().top;
        
        $('.menu').removeClass('sel');

        $("html").animate({
            scrollTop:scrollPosition
        }, 500);
    })

    $('.about_menu').on('click', function(){
        scrollPosition = $("#about").offset().top;

        $('.menu').removeClass('sel');
        

        $("html").animate({
            scrollTop: scrollPosition
        }, 500);
    })

    $('.identity_menu').on('click', function(){
        scrollPosition = $("#identity").offset().top;

        $('.menu').removeClass('sel');
        

        $("html").animate({
            scrollTop: scrollPosition
        }, 500);
    })
    $('.work_menu').on('click', function(){
        scrollPosition = $("#work").offset().top;

        $('.menu').removeClass('sel');
        

        $("html").animate({
            scrollTop: scrollPosition
        }, 500);
    })
    // $('.note_menu').on('click', function(){
    //     scrollPosition = $("#note").offset().top;

    //     $("html").animate({
    //         scrollTop: scrollPosition
    //     }, 500);
    // })
    $('.contact_menu').on('click', function(){
        scrollPosition = $("#contact").offset().top;

        $('.menu').removeClass('sel');
        

        $("html").animate({
            scrollTop: scrollPosition
        }, 500);
    })



    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop(),
            $navEl = $('nav > ul > li > a'),
            $page = $('.sections');
        
        $.each($page, function(i, d){
          var $el = $(d), top = $el.offset().top - 200, limit = top+$el.height();
            if(scrollTop >= top && scrollTop < limit){
              $navEl.removeClass('sel');
              $navEl.eq(i).addClass('sel');
            }
        });
      });



}); 