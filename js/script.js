//MAKE THE MAGIC HAPPEN

// Net
$(document).mousemove(function(event) {
    $("#net").css({
        left: event.pageX,
        top: event.pageY
    });
});