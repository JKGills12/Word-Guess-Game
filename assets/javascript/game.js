const game = function(){
    let rightGuess = 0;
    let wrongGuess = 0;
    let guessesLeft = 6;

    const startGame = function(){
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const game = document.querySelector(".game");

        playBtn.addEventListener("click", function(){
            introScreen.classList.add("fadeOut");
            game.classList.add("fadeIn");
        });
    };

   






}