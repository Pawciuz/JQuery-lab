$(document).ready(function () {
    $("#button_01").click(function () {
        $("p").hide(500)
    })
    $("#button_02").click(function () {
        $("#p_03").hide();
    })
    $("#button_03").click(function () {
        $(".cp_01").hide();
    })
    $("#button_04").click(function () {
        $("p").show();
    })
    $("#button_05").click(function () {
        $(".p3").toggle();
    })
    $("#btn__1").click(function () {
        $("ul li:first").hide();
    })
    $("#btn__2").click(function () {
        $("ul li:odd").hide();
    })
    $("#btn__3").click(function () {
        $("button").hide();
    })
    $("#btn__4").click(function () {
        $("ul li:last").hide();
    })
}
)