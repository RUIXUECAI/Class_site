$(".tu").mouseover(function() {
    $(this).find(".one").css("display", "none");
})
$(".tu").mouseout(function() {
    $(this).find(".one").css("display", "block");
})