//MAKE THE MAGIC HAPPEN

let boxWidthX1 = (getTreePos().right - getTreePos().left) * 0.1067 + getTreePos().left
let boxWidthX2 = (getTreePos().right - getTreePos().left) * 0.884 + getTreePos().left
let boxHeightY1 = (getTreePos().bottom - getTreePos().top) * 0.1425 + getTreePos().top
let boxHeightY2 = (getTreePos().bottom - getTreePos().top) * 0.425 + getTreePos().top

const audio = new Audio("images/whistle.mp3");


function getTreePos() {
    var treeTop = $('#tree').offset().top
    var treeLeft = $('#tree').offset().left
    var treeBottom = $('#tree').offset().top + $('#tree').height()
    var treeRight = $('#tree').offset().left + $('#tree').width()


    return { top: treeTop, left: treeLeft, bottom: treeBottom, right: treeRight }
}

function getBasketPos() {
    var basketTop = $('.basket').offset().top
    var basketLeft = $('.basket').offset().left
    var basketBottom = $('.basket').offset().top + $('.basket').height()
    var basketRight = $('.basket').offset().left + $('.basket').width()


    return { top: basketTop, left: basketLeft, bottom: basketBottom, right: basketRight }
}

$(document).ready(function() {
   
    //Papp did this
    
    let X1 = Math.floor(Math.random() * (boxWidthX2 - boxWidthX1)) + boxWidthX1 + 1
    let Y1 = Math.floor(Math.random() * (boxHeightY2 - boxHeightY1)) + boxHeightY1 + 1
    $("#apple1").animate({
        left: X1,
        top: Y1
    }, 1);
    console.log(Y1,)

    let X2 = Math.floor(Math.random() * (boxWidthX2 - boxWidthX1)) + boxWidthX1 + 1
    let Y2 = Math.floor(Math.random() * (boxHeightY2 - boxHeightY1)) + boxHeightY1 + 1
    $("#apple2").animate({
        left: X2,
        top: Y2
    }, 1);

    console.log(Y2,)
    let X3 = Math.floor(Math.random() * (boxWidthX2 - boxWidthX1)) + boxWidthX1 + 1
    let Y3 = Math.floor(Math.random() * (boxHeightY2 - boxHeightY1)) + boxHeightY1 + 1
    $("#apple3").animate({
        left: X3,
        top: Y3
    }, 1);
    console.log(Y3,)
});







    $("#apple1").click(function () {

        $("#apple1").animate({
            left: getBasketPos().left
                + (getBasketPos().right - getBasketPos().left) / 20,
            top: getBasketPos().top
                + (getBasketPos().bottom - getBasketPos().top) / 1.75
        }, 1000);
 });


    $("#apple2").click(function () {

        $("#apple2").animate({
            left: getBasketPos().left
                + (getBasketPos().right - getBasketPos().left) / 2.75,
            top: getBasketPos().top
                + (getBasketPos().bottom - getBasketPos().top) / 1.75
        }, 1000);
    });

    $("#apple3").click(function () {
        $("#apple3").animate({
            left: getBasketPos().left
                + (getBasketPos().right - getBasketPos().left) / 1.5,
            top: getBasketPos().top
                + (getBasketPos().bottom - getBasketPos().top) / 1.75
        }, 1000);
    });




    $("#tree").click(function () {
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

