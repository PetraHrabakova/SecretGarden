// Net
var oldX = 0;

$(document).mousemove(function(e) {
    $("#net").css({
        left: e.pageX,
        top: e.pageY
    });

    if (oldX < e.pageX) {
        $("#net").css('transform', 'rotateY(180deg)');

    } else {
        $("#net").css('transform', 'none');
    }
    oldX = e.pageX;
});