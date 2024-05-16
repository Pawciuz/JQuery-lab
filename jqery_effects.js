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
    $(".btn5").click(() => {
        $(".text").slideDown("slow", function () {
            // Animation complete.
        });
    })
    $(".btn6").click(() => {
        $(".text").slideUp("slow", function () {
            // Animation complete.
        });
    })
    $(".btn7").click(() => {
        $(".text").slideToggle("slow", function () {
            // Animation complete.
        });
    })
    $(".btn8").click(() => {
        $(".square").animate({
            width: "200px",
            height: "200px",
            backgroundColor: "#FFF",
            color: "yellow",
            fontSize: "2em",
            borderRadius: "50%"
        }, 3000)
            .animate({
                width: "100px",
                height: "100px",
                backgroundColor: "red",
                color: "white",
                fontSize: "1em",
                borderRadius: "0"
            }, 2000)
            .animate({
                width: "150px",
                height: "150px",
                backgroundColor: "green",
                color: "purple",
                fontSize: "1.5em",
                borderRadius: "25%"
            }, 2000).animate({
                width: "200px",
                height: "200px",
                backgroundColor: "red",
                color: "white",
                fontSize: "1.5em",
                borderRadius: "10%"
            }, 3000)
            .animate({
                rotate: "90deg",
                backgroundColor: "red",
                color: "red",
                fontSize: "2em",
                borderRadius: "0%"
            }, 1000).animate({
                rotate: "180deg",
                backgroundColor: "black",
                color: "black",
                fontSize: "3em",
                borderRadius: "90%"
            }, 1000);
    })
    $(".btn9").click(() => {
        $(".square").stop()
    })
    $(".btn10").click(() => {
        $(".square").slideToggle("slow", function () {
            $(".text").animate({
                rotate: "100deg",
            })
        });
    })
    $(".btn11").click(() => {
        $(".square").css("background-color", "blue").animate({ rotate: "90deg" })
    })
})