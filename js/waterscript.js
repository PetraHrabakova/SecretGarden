//When the page is loaded this elements are always hidden
$(document).ready(function() {
    $('.waterdrop').hide();
    $('.flower').hide();
    $('.verysmall').hide();
    $('#squirel').hide();
    $('#talk_sq').hide();
});


//function for water drops id with a loop
function downMovement() {
    function loop() {
        $('#drop1').animate({ bottom: '-40', }, 500, function() {
            loop();

        });
        $('#drop1').animate({ bottom: '100', }, 500, function() {
            loop();

        });
    }
    loop();
}


//function for water drops class with a loop
function downMovement2() {
    function loop() {
        $('.waterdrop').animate({ bottom: '-30', }, 1000, function() {
            loop();

        });
        $('.waterdrop').animate({ bottom: '150', }, 500, function() {
            loop();

        });
    }
    loop();
}


//toggle between tilted and not tilted wateringcan 
var toggle = 0;
$("#wateringcan").click(function() {
    if (toggle == 0) {
        $("#wateringcan").animate({ deg: -45 }, {
            step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });

            }

        });
//when the watering can is tilted, the drops appear
        $(".waterdrop").show();
        $("#drop").show();
        $("#drop1").show();
        //Special function where a flower grows when it's watered
        $('.flower').show();
        $('.flower1').hide();
//animating the waterdrops by calling the funtions when the watering can is tilted
        $(".waterdrop").animate("fast", function() { downMovement2(".waterdrop") });
        $("#drop").animate("fast", function() { downMovement2("#drop") });
        $("#drop1").animate("fast", function() { downMovement("#drop1") });
//also text changes when the can is tilted
        $("#talk").text("Please, please water me!I want to grow!");
        $("#talk_dirty").text("YES, come over here and make me wet !");

//here the watering can become untilted
        toggle = 1;
    } else {
        $("#wateringcan").animate({ deg: 0 }, {
            step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
        });
//when the watering can is not tilted these elements are hidden
        $('.waterdrop').hide();
        $('#drop').hide();
        $("#talk_dirty").hide();




        toggle = 0;

    }
});