var crystalgame = {
    score : 0,
    wins : 0,
    losses : 0,
    randomWinningNum : "",
    randomCrystal1Num : "",
    randomCrystal2Num : "",
    randomCrystal3Num : "",
    randomCrystal4Num : ""
}

$( document ).ready(function() {
 // For each iteration, generate a new random number between 19 and 120.
    crystalgame.randomWinningNum = getRandomNumber(19, 120);
    crystalgame.randomCrystal1Num = getRandomNumber(1, 12);
    crystalgame.randomCrystal2Num = getRandomNumber(1, 12);
    crystalgame.randomCrystal3Num = getRandomNumber(1, 12);
    crystalgame.randomCrystal4Num = getRandomNumber(1, 12);
    
    $("#random-number").text(crystalgame.randomWinningNum);
    $("#crystal-1").text(crystalgame.randomCrystal1Num);
    $("#crystal-2").text(crystalgame.randomCrystal2Num);
    $("#crystal-3").text(crystalgame.randomCrystal3Num);
    $("#crystal-4").text(crystalgame.randomCrystal4Num);
    $("#wins").text(crystalgame.wins);
    $("#losses").text(crystalgame.losses);

});
 
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}