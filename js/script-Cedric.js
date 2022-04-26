//MAKE THE MAGIC HAPPEN
$(document).ready(function() {
    // Call to function
    $("#butterfly"),function() {randomMovement(this)};
});

function randomMovement(IdRef) {
    var width = $(window).width() - $(this).width();
    var height = $(window).height() - $(this).height();
    var randomVertical = Math.floor(Math.random()*height);
    var randomHorizontal = Math.floor(Math.random()*width);
    $(IdRef).delay(500).animate({top:randomVertical},"slow").delay(500).animate({left:randomHorizontal},"slow",function(){randomMovement(IdRef)});
};

$("#butterfly").mouseenter(function(){
    var width = $(window).width() - $(this).width();
    var height = $(window).height() - $(this).height();
    var randomHeight = Math.floor(Math.random() * height);
    var randomWidth = Math.floor(Math.random() * width);

    $(this).animate({left:randomWidth},"slow").animate({top:randomHeight},"slow",function(){randomMovement("#butterfly")});
});