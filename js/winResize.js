$(document).ready(function(){

    var winResize = function(){
            
        toCenterBox1($('#home'), $('.main-wrap'));
        toCenterBox2($('#contact'), $('.contact-design-box'));

    };
    

    
    //content-box 중앙정렬
    // var _home= $('#home'), _homeBox = $('.design-box');
    
    // var _homeHeight = _home.height(), _homeBoxHeight = _homeBox.height();
    
    function toCenterBox1(_section, _box){
        var topMargin = _section.height()/2 - _box.height()/2 - 100;
        _box.css({'top':topMargin + 'px'});
    }

    function toCenterBox2(_section, _box){
        var topMargin = _section.height()/2 - _box.height()/2;
        _box.css({'top':topMargin + 'px'});
    }

    
    // toCenterBox1($('#home'), $('.main-wrap'));
    // toCenterBox2($('#contact'), $('.contact-design-box'));

    $(window).resize(winResize);
    
    $(window).trigger('resize');

    
    
}); 