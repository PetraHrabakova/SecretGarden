//MAKE THE MAGIC HAPPEN
$(document).ready(function() {
    // Call to function
    randomMovement("#butterfly");
});

function randomMovement(IdRef) {
    var width = $(window).width()-$(IdRef).width();//butterfly 300 wide
    var height = $(window).height()-$(IdRef).height();//butterfly 200 high
    var randomVertical = Math.random()*height;
    var randomHorizontal = Math.random()*width;
    $(IdRef).animate({top:randomVertical},5000).animate({left:randomHorizontal},5000,function(){randomMovement(IdRef)});
};

$("#butterfly").mouseenter(function(){
    $("#butterfly").stop(true);
    var width = $(window).width() - $(this).width();
    var height = $(window).height() - $(this).height();
    var randomHeight = Math.floor(Math.random() * height);
    var randomWidth = Math.floor(Math.random() * width);

    $(this).animate({left:randomWidth},500).animate({top:randomHeight},500,function(){randomMovement("#butterfly")});
});