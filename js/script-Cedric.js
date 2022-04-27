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

var counter =0;
$("#butterfly").mouseenter(function(){
    counter++;
    if(counter>=10&&counter<25){
        $('#butterfliesCaught').text("Butterflies caught: "+counter +" Please he has a family! Think of the children!");
    }else if(counter>=25&&counter<50){
        $('#butterfliesCaught').text("Butterflies caught: "+counter +" You truly are a monster. Will I have to guilt trip you to make you stop?");
    }else if(counter>=50){
        $("#butterfly").hide();
        $('#butterfliesCaught').text("You've killed Papp the butterfly... I hope you're happy. He leaves behind a wife and 12 children");
        //Veronica added this to make the game more dramatic
        //When the butterfly dies, the flower dies with him
        $("#talk").text("You are heartless, I will die now, goodbye Papp the butterfly");
        $(".flower_small").hide();
    }else{
        $('#butterfliesCaught').text("Butterflies caught: "+counter);
    }    
    $("#butterfly").stop(true);
    
    var width = $(window).width() - $(this).width();
    var height = $(window).height() - $(this).height();
    var randomHeight = Math.floor(Math.random() * height);
    var randomWidth = Math.floor(Math.random() * width);

    $(this).animate({left:randomWidth},200).animate({top:randomHeight},200,function(){randomMovement("#butterfly")});
});