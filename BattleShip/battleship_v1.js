var randdomLoc = Math.floor(Math.random() * 5);
var shipLocation = [randdomLoc, randomLoc + 1, randomLoc + 2];

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk === false) {
    guess = prompt("Ready, aim, fire! (Enter a number from 0-6):");

if (guess === null){
    alert("Thank you for playing!");
    break;
}
}

guess = parseInt(guess, 10);

if (isNaN(guess)  || guess < 0 || guess > 6) {
    alert("Please enter a valid number between 0 and 6.");
    continue;
}

guesses++;

const hitIndex = shipLocation.indexOf(guess);

if(hitIndex !== -1) {
    alert("HIT!");
    shipLocation,splice(hitIndex, 1);
    hits++;
    if (shipLocation.length === 0) {
        isSunk = true;
    } else{
        alert("MIss!");
    }
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFIxed(2);
var stats = "You took " + guesses + " guesses to sink the battleship!\n" +
    "Accuracy: " + accuracy + "%";
alert(stats);