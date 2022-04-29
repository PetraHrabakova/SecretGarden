$(document).ready(function() {
    $('.waterdrop').hide();
    $('.flower').hide();
    $('.verysmall').hide();
    $('#squirel').hide();
    $('#talk_sq').hide();
});



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



var toggle = 0;
$("#wateringcan").click(function() {
    if (toggle == 0) {
        $("#wateringcan").animate({ deg: -45 }, {
            step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });

            }

        });

        $(".waterdrop").show();
        $("#drop").show();
        $("#drop1").show();
        $('.flower').show();
        $('.flower1').hide();

        $(".waterdrop").animate("fast", function() { downMovement2(".waterdrop") });
        $("#drop").animate("fast", function() { downMovement2("#drop") });
        $("#drop1").animate("fast", function() { downMovement("#drop1") });

        $("#talk").text("Please, please water me!I want to grow!");
        $("#talk_dirty").text("YES, come over here and make me wet !");


        toggle = 1;
    } else {
        $("#wateringcan").animate({ deg: 0 }, {
            step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
        });

        $('.waterdrop').hide();
        $('#drop').hide();
        $("#talk_dirty").hide();




        toggle = 0;

    }
});