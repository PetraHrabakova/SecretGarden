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
        $(".waterdrop").show();
       

       /* $("#drop").animate( "slow" ,function() {downMovement(this)});
        $(".waterdrop").animate( "slow" ,function() {downMovement(this)});
        $("#drop3").animate( "slow" ,function() {downMovement(this)});

        function downMovement(IdRef) {
           
            
                $(IdRef).animate({top: "+=100"}, function(){downMovement(IdRef);});  
            
        }*/
        
        $(".waterdrop").animate( "slow" ,function() {downMovement(this)});
        $("#drop").animate( "slow" ,function() {downMovement(this)});
        ("#drop2").animate( "slow" ,function() {downMovement(this)});

        function downMovement(IdRef) {
         
             function loop(){
                 for (var start = 1, end = 3; start < $(".waterdrop").length; start += 3, end += 3){
           $(".waterdrop")
           .animate({bottom:-30},1000)
           .animate({bottom:90},1000, loop);
           
    
           }
        }
            loop();  
        
        }

        
        
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

//$(document).ready(function () {
    //$('.waterdrop').hide();
//});
//$('#fade').slideDown("slow");









