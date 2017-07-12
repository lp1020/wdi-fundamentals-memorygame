//console.log("Up and running!");
//console.log("User flipped " + cardFour);
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = ["queen"]
//var cardOne = cards [0];
cardsInPlay.push('cardOne');
console.log("User flipped " + cardOne);
var cardTwo = ["king"];
cardsInPlay.push('cardTwo');
console.log("User flipped " + cardTwo);
if (cardsInPlay.length === 2) {
  console.log ("Two cards in play")
 if(cardsInPlay[0] === cardsInPlay [1]) {
  alert ("You found a match!");
}
else {
  alert ("Sorry, try again.")
}
}
