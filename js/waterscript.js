$(document).ready(function () {
    $('.waterdrop').hide();
    $('.flower').hide();
    $('.verysmall').hide();
});



function downMovement() {
    function loop(){
        $('#drop1').animate({bottom:'-40', },1000,  function(){
            loop();
    
        });
        $('#drop1').animate({bottom:'154', },1000,  function(){
            loop();
    
        });
    }
        loop();
    }



function downMovement2() {
function loop(){
    $('.waterdrop').animate({bottom:'-30', },900,  function(){
        loop();

    });
    $('.waterdrop').animate({bottom:'150', },900,  function(){
        loop();

    });
}
    loop();
}



var toggle = 0;
$("#wateringcan").click(function () {
    if (toggle==0) {
        $("#wateringcan").animate({deg: -45}, {
            step: function (now) {
                $(this).css({transform: 'rotate(' + now + 'deg)'});

            }     
        });
        $(".waterdrop").show();
        $("#drop").show();
        $("#drop1").show();
        $('.flower').show();
        $('.flower1').hide();
       
        $(".waterdrop").animate( "slow" ,function() {downMovement2(".waterdrop")});
        $("#drop").animate( "slow" ,function() {downMovement2("#drop")});
        $("#drop1").animate( "slow" ,function() {downMovement("#drop1")});
        $("#talk").text("Please, please water me!I want to grow!");
        $("#talk_dirty").text("YES, come over here and make me wet !");

       
        toggle=1;
    } else {
        $("#wateringcan").animate({deg: 0}, {
            step: function (now) {
                $(this).css({transform: 'rotate(' + now + 'deg)'});
            }
        });
        $('.waterdrop').hide();
        $('#drop').hide();
        $("#talk_dirty").hide();

        
        
       
        toggle=0;
       
    }
});











