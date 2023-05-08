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

const ahorcadoGame = (word) =>{
    alert(`This is the exercise 4`)
}

const startGame = document.querySelector("#startGame").addEventListener("click", () => ahorcadoGame("kevin"));