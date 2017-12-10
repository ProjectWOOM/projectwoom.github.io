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
                swipeToSlide: true,
                touchMove : true
        
              });
            //SLICK SLIDER

            //NOTE SLIDER
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
                if(slideWrap.is(":animated")){return false;}

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
                if(slideWrap.is(":animated")){return false;}               

                if(btnClick < $('.note-slide-li').length -1){
                    btnClick++;
                    slideWrap.stop().animate({'margin-left':'-=' + slideWidth + 'px'});            
                }
                $('.note-slide-li').removeClass('note-sel');
                $('.note-slide-li').eq(btnClick).addClass('note-sel');
                $('.note-slide-li').stop().animate({'opacity':'0.2'});
                $('.note-sel').stop().animate({'opacity':'1'});
            })
            //NOTE SLIDER


            //WORK MOUSE OVER
            $('.work-list-li').mouseenter(function(){
                $(this).addClass('focus');
                $(this).find('.work-about').stop().animate({'margin-bottom':'0'}, 600, 'easeOutQuint');
            }).mouseleave(function(){
                $(this).removeClass('focus');
                $(this).find('.work-about').stop().animate({'margin-bottom':'-80px'}, 600, 'easeInQuint');
                
            });
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
                swipeToSlide: true,
                touchMove : true
        
              });
            //SLICK SLIDER

            //NOTE SLIDER
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
                if(slideWrap.is(":animated")){return false;}

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
                if(slideWrap.is(":animated")){return false;}               

                if(btnClick < $('.note-slide-li').length -1){
                    btnClick++;
                    slideWrap.stop().animate({'margin-left':'-=' + slideWidth + 'px'});            
                }
                $('.note-slide-li').removeClass('note-sel');
                $('.note-slide-li').eq(btnClick).addClass('note-sel');
                $('.note-slide-li').stop().animate({'opacity':'0.2'});
                $('.note-sel').stop().animate({'opacity':'1'});
            })
            //NOTE SLIDER


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


