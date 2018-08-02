$(function() {

    //meny mobile
    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();
        // return false;
    });
    //mobile menu scroll
    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 0){
            $('.toggle-mnu').addClass('background-button');
        }
        if(scrolled <= 0){
            $('.toggle-mnu').removeClass('background-button');
        }
    };


});
