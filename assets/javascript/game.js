images = ["assets/images/Sapphire.png", "assets/images/Ruby.png", "assets/images/Emerald.png", "assets/images/Diamond.png"]

var counter = 0;
var wins = 0;
var losses = 0;
var targetNumber = "";



function randomTargetNumber() {
    targetNumber = Math.floor(Math.random()*101+19);
    }

function createCrystals() {
    for (var i = 0; i < images.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", images[i]);
        imageCrystal.attr("value", (Math.floor(Math.random()*12)+1));
        imageCrystal.attr("height", "200px");
        imageCrystal.attr("width", "200px");
        $("#crystals").append(imageCrystal);
    }
}

function resetHTML() {
    $("#random-number").text(targetNumber);
    $("#winner").text(wins);
    $("#loser").text(losses);
    $("#current-score").text(counter);
    $("#crystals").empty();
}

function newGame() {
    randomTargetNumber();
    counter = 0;
    resetHTML();
    createCrystals();    

    $(".crystal-image").on("click", function() {

        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#current-score").text(counter);
    
        if (counter === targetNumber) {
            $("#message").text("You won!");
            wins ++;
            $("#winner").text(wins);
            createCrystals();
            newGame();
        }
        else if (counter > targetNumber) {
            $("#message").text("You lost!");
            losses ++;
            $("#loser").text(losses);
            createCrystals();
            newGame();
        }
    
        console.log(this);
    });
}

randomTargetNumber();
resetHTML();
createCrystals();

$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#current-score").text(counter);

    if (counter === targetNumber) {
        $("#message").text("You won!");
        wins ++;
        $("#winner").text(wins);
        createCrystals();
        newGame();
    }
    else if (counter > targetNumber) {
        $("#message").text("You lost!");
        losses ++;
        $("#loser").text(losses);
        createCrystals();
        newGame();
    }

    console.log(this);
});