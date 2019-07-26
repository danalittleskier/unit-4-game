

$( document ).ready(function() {
 // For each iteration, generate a new random number between 19 and 120.
    var random = getRandomNumber(19, 120);
    console.log("Ready!")
  $("#random-number").text(random);
});
 
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}