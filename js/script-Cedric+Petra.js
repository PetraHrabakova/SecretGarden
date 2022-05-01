//MAKE THE MAGIC HAPPEN
$(document).ready(function() {
    // Call to function
    randomMovement("#butterfly");

    // Petra hid all baby butterflies
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
});

function randomMovement(IdRef) {
    var width = $(window).width() - $(IdRef).width(); //butterfly 300 wide
    var height = $(window).height() - $(IdRef).height(); //butterfly 200 high
    var randomVertical = Math.random() * height;
    var randomHorizontal = Math.random() * width;
    $(IdRef).animate({ top: randomVertical }, 5000).animate({ left: randomHorizontal }, 5000, function() { randomMovement(IdRef) });
};

// Petra did this - function that moves baby butterflies 
function moveBabyButterfly(element) {
    var width = $(window).width() - $(element).width(); // width = screen width - baby butterfly width
    var height = $(window).height() - $(element).height(); // same goes for height
    var randomVertical = Math.random() * height; // generate random vertical location 
    var randomHorizontal = Math.random() * width; // generate random horizontal location 
    // This animate function makes the butterflies parallelly move across the screen
    $(element).animate({ "left": randomHorizontal, "top": randomVertical }, 5000, function() { moveBabyButterfly(element) });
};

// Petra did this - function that makes baby butterflies fly out of the screen and hide again
function flyAway(element) {
    var newWidth = $(window).width() + $(element).width(); // location outside of the screen
    var newHeight = $(window).height() + $(element).height(); // location outside of the screen
    // Animate the butterfly out of the screen
    $(element).animate({ "left": newWidth, "top": newHeight }, 5000, function() {});
    // And hide the butterfly after it flies away 
    setTimeout(function() { $(element).hide() }, 8000);
}

var counter = 0;
$("#butterfly").mouseenter(function() {
    counter++;
    if (counter >= 10 && counter < 25) {
        $('#butterfliesCaught').text("Butterflies caught: " + counter + " Please he has a family! Think of the children!");
        $('#squirel').show();
        $('#talk_sq').show();


    } else if (counter >= 25 && counter < 50) {
        $('#butterfliesCaught').text("Butterflies caught: " + counter + " You truly are a monster. Will I have to guilt trip you to make you stop?");
        $('#talk_sq').hide();
    } else if (counter >= 50) {
        $("#butterfly").hide();
        $('#butterfliesCaught').text("You've killed Papp the butterfly... I hope you're happy. He leaves behind a wife and 12 children");
        //Veronica added this to make the game more dramatic
        //When the butterfly dies, the flower dies with him
        $("#talk").text("You are heartless, I will die now (just kidding), goodbye Papp the butterfly");
        $(".flower_small").hide();
        $('.verysmall').show();

        // Petra added this - Wait 2 seconds after Papp gets killed to show baby butterflies 
        setTimeout(function() {

            // Petra added small baby buttreflies
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

        // Petra - wait 20 seconds till baby butterflies disappear again
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
        $('#butterfliesCaught').text("Butterflies caught: " + counter);
    }
    $("#butterfly").stop(true);

    var width = $(window).width() - $(this).width();
    var height = $(window).height() - $(this).height();
    var randomHeight = Math.floor(Math.random() * height);
    var randomWidth = Math.floor(Math.random() * width);

    $(this).animate({ left: randomWidth }, 200).animate({ top: randomHeight }, 200, function() { randomMovement("#butterfly") });
});