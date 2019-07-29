
var crystalgame = {
    score : 0,
    wins : 0,
    losses : 0,
    counter : 0,
    randomWinningNum : "",
    randomCrystal1Num : "",
    randomCrystal2Num : "",
    randomCrystal3Num : "",
    randomCrystal4Num : "",

    createNewGame : function(){
        crystalgame.score = 0;
        crystalgame.counter = 0;

        crystalgame.randomWinningNum = getRandomNumber(19, 120);
        crystalgame.randomCrystal1Num = getRandomNumber(1, 12);
        crystalgame.randomCrystal2Num = getRandomNumber(1, 12);
        crystalgame.randomCrystal3Num = getRandomNumber(1, 12);
        crystalgame.randomCrystal4Num = getRandomNumber(1, 12);
    }
}

//Load a new game and the DOM with new values
$( document ).ready(function() {
 
    crystalgame.createNewGame();
    setHtmlOutput();
    
});

//On image click grab the random values and add it to our score.  
//Output the new values.  Check if the user won or lost the game.
$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    crystalgame.counter += crystalValue;

    $("#score").text(crystalgame.counter);

    if(crystalgame.counter === crystalgame.randomWinningNum){
        $("#finish-game").text("You Won!");
        crystalgame.wins++;
        crystalgame.createNewGame();
        setHtmlOutput();

    } else if (crystalgame.counter > crystalgame.randomWinningNum){
        $("#finish-game").text("You Lost!");
        crystalgame.losses++;
        crystalgame.createNewGame();
        setHtmlOutput();
    }
});

//Output game values to the DOM
function setHtmlOutput(){
    // For each iteration, generate a new random number between 19 and 120.
    $("#random-number").text(crystalgame.randomWinningNum);

    $("#wins").text(crystalgame.wins);
    $("#losses").text(crystalgame.losses);
    $("#score").text(crystalgame.counter);

    $("#crystal-1").attr("data-crystalvalue", crystalgame.randomCrystal1Num);
    $("#crystal-2").attr("data-crystalvalue", crystalgame.randomCrystal2Num);
    $("#crystal-3").attr("data-crystalvalue", crystalgame.randomCrystal3Num);
    $("#crystal-4").attr("data-crystalvalue", crystalgame.randomCrystal4Num);   
}

//Create random number from a min and a max
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


