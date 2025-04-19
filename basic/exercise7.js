// Exercise 7: Guess the Number Game
let randomNumber = Math.floor(Math.random() * 5) + 1;
let userGuess = prompt("Guess a number between 1 and 5");
if (parseInt(userGuess) === randomNumber) {
    alert("You guessed right!");
} else {
    alert("Wrong guess. The number was " + randomNumber);
}

