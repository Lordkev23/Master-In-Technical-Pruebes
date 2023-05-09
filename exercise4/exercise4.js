/* 
Statement:
    Make ahorcado game.
    The user will have to guess and discover the letters of a secret word, and will have 5 attempts
    (An attempt per limb of the human body).

    Useful data input methode usual in your language, in the caso of JS, we use the function prompt.

    Example:
            INPUT                                          OUTPUT
    ahorcadoGame('kevin');                          Guess the letter: e
                                                    the word is: _e___
                                                    You get 5 attemps.
*/

const ahorcadoGame = (secretWord) =>{

    //Create variable: hidden word with underscores.
    let hiddenWord = "_".repeat(secretWord.length);

    //Create variable with the number of attempts to have.
    let attempts = 5;

    //Loop to ask for letters to be executed while not all the letters have been guessed and while there are still attempts
    while (attempts > 0 && hiddenWord !== secretWord) {

        //ask for a letter
        let letter = prompt("Guess a letter");

        //Check if the letter is inside the word to update the hiddenword variable
        if(secretWord.includes(letter)){

            //Update the hiddenWord variable and replace the letter in the correct position
            for (let letterCounter = 0; letterCounter < secretWord.length; letterCounter++) {
                if (letter === secretWord[letterCounter]) {
                    
                    //Convert the hiddenWord to an array
                    let hiddenWordArray = Array.from(hiddenWord);

                    //Select its index and change '_' for the guessed letter
                    hiddenWordArray[letterCounter] = letter;

                    //Join the array into a string again and update the hiddenWord variable
                    hiddenWord = hiddenWordArray.join("");
                }
                
            }
        } else{

            //If there is no letter in the word then subtract one attempt
            attempts--;
        }

        //Show the current status of the hidden word
        console.log(`The word is: ${hiddenWord}`);

        //Show how many attemps left
        console.log(`You have ${attempts} attempts!`);
    }

    //When you exit the loop. If all the letters have been guessed, show a victory message.
    if (hiddenWord === secretWord) {
        console.log(`Congratulations, you win! The secret word was: ${secretWord}`);
    }else{
        console.log(`Sorry, you lose! The secret word was: ${secretWord}`);
    }
}

const startGame = document.querySelector("#startGame").addEventListener("click", () => ahorcadoGame("kevin"));