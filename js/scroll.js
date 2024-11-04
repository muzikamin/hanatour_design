$(document).ready(function(){


    // 스크롤
    $('.top_btn').click(function(){
        $('html, body').animate({
            scrollTop: 0
        });
    });



    // 헤더
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);

        if(scrollTop >= 10) {
            $('header').css({
                backgroundColor: 'rgba(255, 255, 255, 0.7)'
            });
            $('.scroll_img').css({
                display: 'block'
            });
            $('.none_img').css({
                display: 'none'
            });
            $('.header_nav>.nav').css({
                color: '#535353'
            });
        }else {
            $('header').css({
                backgroundColor: 'rgba(255, 255, 255, 0)'
            });
            $('.scroll_img').css({
                display: 'none'
            });
            $('.none_img').css({
                display: 'block'
            });
            $('.header_nav>.nav').css({
                color: '#fff'
            });
        }
    });



});