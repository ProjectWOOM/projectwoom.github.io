var filter = "win16|win32|win64|mac|macintel";
    
if ( navigator.platform ) {
    if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
            //mobile 
            //alert('mobile 접속'); 
            
            //SLICK SLIDER
            $('.slide-wrap').slick({
                dots: true,
                infinite: false,
                speed: 300,
                arrows: false,
                touchMove : true
        
              });
            //SLICK SLIDER


            //WORK MOUSE OVER
            // $('.work-list-li').mouseenter(function(){
            //     $(this).addClass('focus');
            //     $(this).find('.work-about').stop().animate({'margin-bottom':'0'}, 600, 'easeOutQuint');
            // }).mouseleave(function(){
            //     $(this).removeClass('focus');
            //     $(this).find('.work-about').stop().animate({'margin-bottom':'-80px'}, 600, 'easeInQuint');
                
            // });
            //WORK MOUSE OVER
            
    } else {
            $(document).ready(function(){
            //pc
            //alert('pc 접속'); 

            //SLICK SLIDER
            $('.slide-wrap').slick({
                dots: true,
                infinite: false,
                speed: 300,
                arrows: false,
                swipeToSlide: true
        
              });
            //SLICK SLIDER


            //WORK MOUSE OVER
            $('.work-list-li').mouseenter(function(){
                $(this).addClass('focus');
                $(this).find('.work-about').stop().animate({'margin-bottom':'0'}, 600, 'easeOutQuint');
            }).mouseleave(function(){
                $(this).removeClass('focus');
                $(this).find('.work-about').stop().animate({'margin-bottom':'-80px'}, 600, 'easeInQuint');
                
            });
            //WORK MOUSE OVER
        }); 

    }
}


