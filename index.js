$("footer").css({ "opacity": "0" })
$("#bn1").hide()
$(".thirdpage").hide()
$(".secondpage").hide()
$("#recyclable").hide()
$("#fpimg").hide();
$("#fph2").hide();
$("#fph3").hide();
$("#fph2").slideDown(2000, function () {
    $("#fpimg").slideDown(1500, function () {
        $("#fph3").slideDown(1500, function () {
            $("#bn1").slideDown(1000);
        });
        $("footer").css({ "opacity": "100%" })
        $("#recyclable").show();
        $(".secondpage").fadeIn();
        $(".thirdpage").fadeIn();
    })
})
