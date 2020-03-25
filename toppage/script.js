$(function(){

    $("document").css({opacity: "0"});
    setTimeout(function() {
        $("document").ready().animate({opacity: "1"},3000)
    });

});


/* サイドバー */

$(function() {

    $("a").mouseover(function() {

        $(this).css("font-size", "20px");
    });

    $("a").mouseout(function() {

        $(this).css("font-size", "15px")
    })
});




