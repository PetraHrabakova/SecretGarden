$(document).ready(function () {
    $('.waterdrop').hide();
});


var toggle = 0;
$("#wateringcan").click(function () {
    if (toggle==0) {
        $("#wateringcan").animate({deg: -45}, {
            step: function (now) {
                $(this).css({transform: 'rotate(' + now + 'deg)'});

            }     
        });
        $('.waterdrop').show();
       
        toggle=1;
    } else {
        $("#wateringcan").animate({deg: 0}, {
            step: function (now) {
                $(this).css({transform: 'rotate(' + now + 'deg)'});
            }
        });
        $('.waterdrop').hide();
        toggle=0;
    }
});

$(document).ready(function () {
    $('.waterdrop').hide();
});
$('#fade').slideDown("slow");









