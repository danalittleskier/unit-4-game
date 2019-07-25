

$( document ).ready(function() {
 // For each iteration, generate a new random number between 19 and 120.
    var random = Math.floor(Math.random() * 120 ) + 19;
    console.log("Ready!")
  $("#random-number").text(random);
});
 