const game = function(){
    let rightGuess = 0;
    let wrongGuess = 0;
    let guessesLeft = 6;

    const startGame = function(){
        const playBtn = document.querySelector(".game button");
        const introScreen = document.querySelector(".game");
        const game = document.querySelector(".gametime");

        playBtn.addEventListener("click", function(){
            gameScreen.classList.add("fadeOut");
            gametime.classList.add("fadeIn");
        });
    };

   






}