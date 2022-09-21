function playGuessingGame(numToGuess, totalGuesses = 10) {
    let input;
    let guesses = 0;

    input = prompt("Enter a number between 1 and 100.");

    while (guesses < totalGuesses) {
                
        if (input === null) {
            return 0;
            break;
        }
        else if (isNaN(input) || input === "" || !input.replace(/\s/g, '').length) {
            input = prompt("Please Enter a number.")
        }
        else {
            guesses += 1;
            if (input == numToGuess) {
                return guesses;
                break;
            }
            else if (input < numToGuess && guesses <= totalGuesses) {
                input = prompt(input +" is too small. Guess a larger number.");
            }
            else if (input > numToGuess && guesses <= totalGuesses) {
                input = prompt(input +" is too large. Guess a smaller number.");
            }
        }
    }
    return 0;
}
playGuessingGame(5,3);