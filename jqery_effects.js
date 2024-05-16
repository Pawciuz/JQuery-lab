$(document).ready(function () {
    $(".btn1").click(() => {
        $(".items div:nth-child(1)").fadeIn();
        $(".items div:nth-child(2)").fadeIn(400);
        $(".items div:nth-child(3)").fadeIn(800);
    })
    $(".btn2").click(() => {
        $(".items div:nth-child(1)").fadeOut();
        $(".items div:nth-child(2)").fadeOut(400);
        $(".items div:nth-child(3)").fadeOut(800);
    })
    $(".btn3").click(() => {
        $(".items div:nth-child(1)").fadeToggle();
        $(".items div:nth-child(2)").fadeToggle(400);
        $(".items div:nth-child(3)").fadeToggle(800);
    })
    $(".btn4").click(() => {
        $(".items div:nth-child(1)").fadeTo(0, 0.5);
        $(".items div:nth-child(2)").fadeTo(400, 0.5);
        $(".items div:nth-child(3)").fadeTo(800, 0.5);
    })

})