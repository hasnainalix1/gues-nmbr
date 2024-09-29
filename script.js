const randomNumber = 6;

function checkGuess() {
    const userGuess = prompt("Enter your guess:");

    if (userGuess == randomNumber) {
        alert("Correct! You guessed the right number.");
    } else {
        alert("Wrong! The correct number was " + randomNumber);
    }
}
