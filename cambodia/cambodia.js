/* サイドバー */

$(function() {

    $(".nav-item").mouseover(function() {

        $(this).css("font-size", "30px");
    });

    $(".nav-item").mouseout(function() {

        $(this).css("font-size", "20px")
    })
});


