//MAKE THE MAGIC HAPPEN
//MAKE THE MAGIC HAPPEN


//Papp's part

/* 

I have opened the tree image and measured precentage,
where i wish to randomly appear the apples and then implemented it

*/

let boxWidthX1 = (getTreePos().right - getTreePos().left) * 0.1067 + getTreePos().left
let boxWidthX2 = (getTreePos().right - getTreePos().left) * 0.884 + getTreePos().left
let boxHeightY1 = (getTreePos().bottom - getTreePos().top) * 0.1425 + getTreePos().top
let boxHeightY2 = (getTreePos().bottom - getTreePos().top) * 0.425 + getTreePos().top

$(document).ready(function() {
    // Call to function
    randomMovement("#butterfly");
    $('#butterfliesCaught').text("Butterflies caught: 0").css({ "font-weight": "bold", "font-size": "x-large", "font-family": "Calibri", "margin-left": "30px", "z-index": "2", "position": "relative" });


    // Petra hid all baby butterflies - EXTRA functionality 
    $('#baby1').hide();
    $('#baby2').hide();
    $('#baby3').hide();
    $('#baby4').hide();
    $('#baby5').hide();
    $('#baby6').hide();
    $('#baby7').hide();
    $('#baby8').hide();
    $('#baby9').hide();
    $('#baby10').hide();
    $('#baby11').hide();
    $('#baby12').hide();

    //Veronica hid all these
    $('.waterdrop').hide();
    $('.flower').hide();
    $('.verysmall').hide();
    $('#squirel').hide();
    $('#talk_sq').hide();

    //Papp did this

    //puts the apples on random coordinates in the measured part of the image

    let X1 = Math.floor(Math.random() * (boxWidthX2 - boxWidthX1)) + boxWidthX1 + 1
    let Y1 = Math.floor(Math.random() * (boxHeightY2 - boxHeightY1)) + boxHeightY1 + 1
    $("#apple1").animate({
        left: X1,
        top: Y1
    }, 1);
    console.log(Y1, )

    let X2 = Math.floor(Math.random() * (boxWidthX2 - boxWidthX1)) + boxWidthX1 + 1
    let Y2 = Math.floor(Math.random() * (boxHeightY2 - boxHeightY1)) + boxHeightY1 + 1
    $("#apple2").animate({
        left: X2,
        top: Y2
    }, 1);

    console.log(Y2, )
    let X3 = Math.floor(Math.random() * (boxWidthX2 - boxWidthX1)) + boxWidthX1 + 1
    let Y3 = Math.floor(Math.random() * (boxHeightY2 - boxHeightY1)) + boxHeightY1 + 1
    $("#apple3").animate({
        left: X3,
        top: Y3
    }, 1);
    console.log(Y3, )
});


// Net
// Petra made the net to follow the mouse cursor as well as to turn 
// base on the cursor's direction - BASIC + EXTRA functionality
var oldX = 0;

$(document).mousemove(function(e) {
    $("#net").css({
        left: e.pageX + 10,
        top: e.pageY + 10
    });

    if (oldX < e.pageX) {
        $("#net").css('transform', 'rotateY(180deg)');

    } else {
        $("#net").css('transform', 'none');
    }
    oldX = e.pageX;
});

//Cedric added function for random movements
function randomMovement(IdRef) {
    var width = $(window).width() - $(IdRef).width();
    var height = $(window).height() - $(IdRef).height();
    var randomVertical = Math.random() * height;
    var randomHorizontal = Math.random() * width;
    $(IdRef).animate({ top: randomVertical }, 5000).animate({ left: randomHorizontal }, 5000, function() { randomMovement(IdRef) });
};

// Petra did this - function that moves baby butterflies - EXTRA functionality
function moveBabyButterfly(element) {
    var width = $(window).width() - $(element).width(); // width = screen width - baby butterfly width
    var height = $(window).height() - $(element).height(); // same goes for height
    var randomVertical = Math.random() * height; // generate random vertical location 
    var randomHorizontal = Math.random() * width; // generate random horizontal location 
    // This animate function makes the butterflies parallelly move across the screen
    $(element).animate({ "left": randomHorizontal, "top": randomVertical }, 5000, function() { moveBabyButterfly(element) });
};

// Petra did this - function that makes baby butterflies fly out of the screen and hide again - EXTRA functionality 
function flyAway(element) {
    var newWidth = $(window).width() + $(element).width(); // location outside of the screen
    var newHeight = $(window).height() + $(element).height(); // location outside of the screen
    // Animate the butterfly out of the screen
    $(element).animate({ "left": newWidth, "top": newHeight }, 5000, function() {});
    // And hide the butterfly after it flies away 
    setTimeout(function() { $(element).hide() }, 8000);
}

//Cedric added extra functionality that keeps track of butterflies being caught as well as some added text upon catching the butterfly a certain amount of times.
var counter = 0;
$("#butterfly").mouseenter(function() {
    counter++; //
    if (counter >= 10 && counter < 25) {
        $('#butterfliesCaught').html("Butterflies caught: " + counter + " Please he has a family! Think of the children!");
        //Special function by Veronica, when butterfly is caught 10 times, the squirell & text appears
        $('#squirel').show();
        $('#talk_sq').show();


    } else if (counter >= 25 && counter < 50) {
        $('#butterfliesCaught').html("Butterflies caught: " + counter + " You truly are a monster. Will I have to guilt trip you to make you stop?");
        //here the squirell's text  hides
        $('#talk_sq').hide();
    } else if (counter >= 50) {
        //Cedric added the butterfly "dying" when caught 50 times.
        $("#butterfly").hide();
        $('#butterfliesCaught').text("You've killed Papp the butterfly... I hope you're happy. He leaves behind a wife and 12 children");
        //Veronica added this to make the game more dramatic
        //When the butterfly dies, the flower gets smaller, it's a special function
        $("#talk").text("You are heartless, I will die now (just kidding), goodbye Papp the butterfly");
        $(".flower_small").hide();
        $('.verysmall').show();

        // Petra added this - Wait 2 seconds after Papp gets killed to show baby butterflies 
        setTimeout(function() {

            // Petra added small baby buttreflies - EXTRA functionality
            $('#baby1').show().css({ top: 50, left: 1700 });
            $('#baby2').show().css({ top: 100, left: -100 });
            $('#baby3').show().css({ top: 150, left: 1700 });
            $('#baby4').show().css({ top: 250, left: -100 });
            $('#baby5').show().css({ top: 300, left: 1700 });
            $('#baby6').show().css({ top: 350, left: -100 });
            $('#baby7').show().css({ top: 400, left: 1700 });
            $('#baby8').show().css({ top: 450, left: -100 });
            $('#baby9').show().css({ top: 500, left: 1700 });
            $('#baby10').show().css({ top: 550, left: -100 });
            $('#baby11').show().css({ top: 600, left: 1700 });
            $('#baby12').show().css({ top: 650, left: -100 });
            moveBabyButterfly("#baby1");
            moveBabyButterfly("#baby2");
            moveBabyButterfly("#baby3");
            moveBabyButterfly("#baby4");
            moveBabyButterfly("#baby5");
            moveBabyButterfly("#baby6");
            moveBabyButterfly("#baby7");
            moveBabyButterfly("#baby8");
            moveBabyButterfly("#baby9");
            moveBabyButterfly("#baby10");
            moveBabyButterfly("#baby11");
            moveBabyButterfly("#baby12");

        }, 3000);

        // Petra - wait 20 seconds till baby butterflies disappear again - EXTRA functionality
        setTimeout(function() {
            flyAway("#baby1");
            flyAway("#baby2");
            flyAway("#baby3");
            flyAway("#baby4");
            flyAway("#baby5");
            flyAway("#baby6");
            flyAway("#baby7");
            flyAway("#baby8");
            flyAway("#baby9");
            flyAway("#baby10");
            flyAway("#baby11");
            flyAway("#baby12");

        }, 10000);

    } else {
        $('#butterfliesCaught').text("Butterflies caught: " + counter).css({ "font-weight": "bold", "font-size": "x-large", "font-family": "Calibri", "margin-left": "30px" });
    }
    $("#butterfly").stop(true);

    var width = $(window).width() - $(this).width();
    var height = $(window).height() - $(this).height();
    var randomHeight = Math.floor(Math.random() * height);
    var randomWidth = Math.floor(Math.random() * width);

    $(this).animate({ left: randomWidth }, 200).animate({ top: randomHeight }, 200, function() { randomMovement("#butterfly") });
});

//Veronica did it
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

//Veronicas part is done here

//Papp's part
//load audio
const audio = new Audio("images/whistle.mp3");

//functions to get the position of the tree
function getTreePos() {
    var treeTop = $('#tree').offset().top
    var treeLeft = $('#tree').offset().left
    var treeBottom = $('#tree').offset().top + $('#tree').height()
    var treeRight = $('#tree').offset().left + $('#tree').width()


    return { top: treeTop, left: treeLeft, bottom: treeBottom, right: treeRight }
}
//same for the basket
function getBasketPos() {
    var basketTop = $('.basket').offset().top
    var basketLeft = $('.basket').offset().left
    var basketBottom = $('.basket').offset().top + $('.basket').height()
    var basketRight = $('.basket').offset().left + $('.basket').width()


    return { top: basketTop, left: basketLeft, bottom: basketBottom, right: basketRight }
}




//implementing the function that moves the apples into the basket on click


$("#apple1").click(function() {

    $("#apple1").animate({
        left: getBasketPos().left +
            (getBasketPos().right - getBasketPos().left) / 20,
        top: getBasketPos().top +
            (getBasketPos().bottom - getBasketPos().top) / 1.75
    }, 1000);
});


$("#apple2").click(function() {

    $("#apple2").animate({
        left: getBasketPos().left +
            (getBasketPos().right - getBasketPos().left) / 2.75,
        top: getBasketPos().top +
            (getBasketPos().bottom - getBasketPos().top) / 1.75
    }, 1000);
});

$("#apple3").click(function() {
    $("#apple3").animate({
        left: getBasketPos().left +
            (getBasketPos().right - getBasketPos().left) / 1.5,
        top: getBasketPos().top +
            (getBasketPos().bottom - getBasketPos().top) / 1.75
    }, 1000);
});


//Extra functionality "apples falling comedically slowly"
//here i use the loaded audio on click

$("#tree").click(function() {
    audio.play();


    if ($("#apple1").offset().left > getBasketPos().top) {
        $("#apple1").animate({ top: $('#tree').height() }, 9000);


    }
    if ($("#apple2").offset().left > getBasketPos().top) {
        $("#apple2").animate({ top: $('#tree').height() }, 9000);

    }
    if ($("#apple3").offset().left > getBasketPos().top) {
        $("#apple3").animate({ top: $('#tree').height() }, 9000);

    }
});