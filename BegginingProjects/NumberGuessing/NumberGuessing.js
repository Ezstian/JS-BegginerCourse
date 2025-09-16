let RandomNumber = Math.floor(Math.random() * 100) + 1;
console.log(RandomNumber);

function Guess() {
    let userGuess = Number(document.getElementById("guessInput").value);

    if (userGuess < 1 || userGuess > 100) {
        document.getElementById("result").innerHTML = "Please enter a number between 1 and 100";
    } else if (userGuess === RandomNumber) {
        document.getElementById("result").innerHTML = "Congratulations! You guessed the number!";
    } else if (userGuess < RandomNumber) {
        document.getElementById("result").innerHTML = "Too low! Try again.";
    } else if (userGuess > RandomNumber) {
        document.getElementById("result").innerHTML = "Too high! Try again.";
    }
}
 

