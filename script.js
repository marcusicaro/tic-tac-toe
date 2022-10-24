const gameBoard = (() => {
    const boardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

    function changeContent() {
        console.log(gameFlow.activePlayer);
        // console.log(playerNames.playerone);
        if (this.textContent === 'o' || this.textContent === 'x'){
            return
        } else if (gameFlow.activePlayer === playerNames.playerone){
        this.textContent = 'x';
        gameFlow.activePlayer = playerNames.playertwo;
        } else if (gameFlow.activePlayer === playerNames.playertwo){      
        this.textContent = 'o';
        gameFlow.activePlayer = playerNames.playerone;
        } 
    };

    const squareOne = document.querySelector('#square1');
    squareOne.addEventListener('click', changeContent);

    const squareTwo = document.querySelector('#square2');
    squareTwo.addEventListener('click', changeContent);

    const squareThree = document.querySelector('#square3');
    squareThree.addEventListener('click', changeContent);

    const squareFour = document.querySelector('#square4');
    squareFour.addEventListener('click', changeContent);

    const squareFive = document.querySelector('#square5');
    squareFive.addEventListener('click', changeContent);

    const squareSix = document.querySelector('#square6');
    squareSix.addEventListener('click', changeContent);

    const squareSeven = document.querySelector('#square7');
    squareSeven.addEventListener('click', changeContent);

    const squareEight = document.querySelector('#square8');
    squareEight.addEventListener('click', changeContent);

    const squareNine = document.querySelector('#square9');
    squareNine.addEventListener('click', changeContent);

    const gameBoardFill = () => squareOne.textContent = boardArray[0]; squareTwo.textContent = boardArray[1]; squareThree.textContent = boardArray[2]; squareFour.textContent = boardArray[3]; squareFive.textContent = boardArray[4]; squareSix.textContent = boardArray[5]; squareSeven.textContent = boardArray[6]; squareEight.textContent = boardArray[7]; squareNine.textContent = boardArray[8];

    return { 
        gameBoardFill
    };
})();

const playerNames = (() => {
    const playerone = 'marcus';
    const playertwo = prompt('Player two name');
    return { playerone, playertwo };
})();

const gameFlow = (() => {
    let activePlayer = playerNames.playerone;


    return { activePlayer }

})();