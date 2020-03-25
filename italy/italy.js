/* サイドバー */

$(function() {

    $(".nav-item").mouseover(function() {

        $(this).css("font-size", "30px");
    });

    $(".nav-item").mouseout(function() {

        $(this).css("font-size", "20px")
    })
});


/* スクロールエフェクト */

window.onload = function() {

    scroll_effect();

    $(window).scroll(function() {

        scroll_effect();
    });

    function scroll_effect() {

        $(".effect-fade").each(function() {

            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();

            if (scroll > elemPos - windowHeight) {

                $(this).addClass("effect-scroll");
            }
        });
    }
};