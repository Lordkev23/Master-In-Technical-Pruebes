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
    //
    let hiddenWord = "_".repeat(secretWord.length);

    //
    let attempts = 5;

    //
    while (attempts > 0 && hiddenWord !== secretWord) {

        //
        let letter = prompt("Guess a letter");

        //
        if(secretWord.includes(letter)){

            //
            for (let letterCounter = 0; letterCounter < secretWord.length; letterCounter++) {
                if (letter === secretWord[letterCounter]) {
                    
                    //
                    let hiddenWordArray = Array.from(hiddenWord);

                    //
                    hiddenWordArray[letterCounter] = letter;

                    //
                    hiddenWord = hiddenWordArray.join("");
                }
                
            }
        } else{

            //
            attempts--;
        }

        //
        console.log(`The word is: ${hiddenWord}`);

        //
        console.log(`You have ${attempts} attempts!`);
    }

    //
    if (hiddenWord === secretWord) {
        console.log(`Congratulations, you win! The secret word was: ${secretWord}`);
    }else{
        console.log(`Sorry, you lose! The secret word was: ${secretWord}`);
    }
}

const startGame = document.querySelector("#startGame").addEventListener("click", () => ahorcadoGame("kevin"));