const gameBoard = (() => {
    const boardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

    const CheckWinner = () => {
        if ((squareOne.textContent === 'x' && squareTwo.textContent === 'x' && squareThree.textContent === 'x') || (squareOne.textContent === 'x' && squareFour.textContent === 'x' && squareSeven.textContent === 'x') ||
         (squareOne.textContent === 'x' && squareFive.textContent === 'x' && squareNine.textContent === 'x') || 
         (squareTwo.textContent === 'x' && squareFive.textContent === 'x' && squareEight.textContent === 'x') ||
         (squareThree.textContent === 'x' && squareSix.textContent === 'x' && squareNine.textContent === 'x') ||
         (squareFour.textContent === 'x' && squareFive.textContent === 'x' && squareSix.textContent === 'x') ||
         (squareSeven.textContent === 'x' && squareEight.textContent === 'x' && squareNine.textContent === 'x') ||
         (squareThree.textContent === 'x' && squareFive.textContent === 'x' && squareSeven.textContent === 'x')){
            setTimeout(function() {alert(`${playerNames.playerone} Wins`)}, 50); 
            setTimeout(gameBoardFill, 100);
        } else if ((squareOne.textContent === 'o' && squareTwo.textContent === 'o' && squareThree.textContent === 'o') || 
        (squareOne.textContent === 'o' && squareFour.textContent === 'o' && squareSeven.textContent === 'o') ||
        (squareOne.textContent === 'o' && squareFive.textContent === 'o' && squareNine.textContent === 'o') || 
        (squareTwo.textContent === 'o' && squareFive.textContent === 'o' && squareEight.textContent === 'o') ||
        (squareThree.textContent === 'o' && squareSix.textContent === 'o' && squareNine.textContent === 'o') ||
        (squareFour.textContent === 'o' && squareFive.textContent === 'o' && squareSix.textContent === 'o') ||
        (squareSeven.textContent === 'o' && squareEight.textContent === 'o' && squareNine.textContent === 'o') ||
        (squareThree.textContent === 'o' && squareFive.textContent === 'o' && squareSeven.textContent === 'o')){
            setTimeout(function() {alert(`${playerNames.playertwo} Wins`)}, 50); 
            setTimeout(gameBoardFill, 100);
        }
          else if (squareOne.textContent !== ' ' && squareTwo.textContent !== ' ' && squareThree.textContent !== ' ' && 
            squareFour.textContent !== ' ' && squareFive.textContent !== ' ' && squareSix.textContent !== ' ' && 
            squareSeven.textContent !== ' ' && squareEight.textContent !== ' ' && squareNine.textContent !== ' ') {
            setTimeout(function() {alert(`Draw`)}, 50); 
            setTimeout(gameBoardFill, 100);
        }
    }

    function ChangeContent() {
        if (this.textContent === 'o' || this.textContent === 'x'){
            return
        } else if (gameFlow.activePlayer === playerNames.playerone){
        this.textContent = 'x';
        gameFlow.activePlayer = playerNames.playertwo;
        CheckWinner();
        } else if (gameFlow.activePlayer === playerNames.playertwo){      
        this.textContent = 'o';
        gameFlow.activePlayer = playerNames.playerone;
        CheckWinner();
        } 
    };

    const squareOne = document.querySelector('#square1');
    squareOne.addEventListener('click', ChangeContent);

    const squareTwo = document.querySelector('#square2');
    squareTwo.addEventListener('click', ChangeContent);

    const squareThree = document.querySelector('#square3');
    squareThree.addEventListener('click', ChangeContent);

    const squareFour = document.querySelector('#square4');
    squareFour.addEventListener('click', ChangeContent);

    const squareFive = document.querySelector('#square5');
    squareFive.addEventListener('click', ChangeContent);

    const squareSix = document.querySelector('#square6');
    squareSix.addEventListener('click', ChangeContent);

    const squareSeven = document.querySelector('#square7');
    squareSeven.addEventListener('click', ChangeContent);

    const squareEight = document.querySelector('#square8');
    squareEight.addEventListener('click', ChangeContent);

    const squareNine = document.querySelector('#square9');
    squareNine.addEventListener('click', ChangeContent);

    const gameBoardFill = () => {squareOne.textContent = boardArray[0], squareTwo.textContent = boardArray[1], 
        squareThree.textContent = boardArray[2], squareFour.textContent = boardArray[3], squareFive.textContent = boardArray[4],
         squareSix.textContent = boardArray[5], squareSeven.textContent = boardArray[6], squareEight.textContent = boardArray[7],
        squareNine.textContent = boardArray[8]}

    return { 
        gameBoardFill,
        CheckWinner
    };
})();

gameBoard.gameBoardFill();
gameBoard.CheckWinner();

const playerNames = (() => {
    let playerone = prompt('Player one name');
    let playertwo = prompt('Player two name');
    while (playerone === playertwo){
    playertwo = prompt('Please insert a different player 2 name');
    }
    return { playerone, playertwo };
})();

const gameFlow = (() => {
    let activePlayer = playerNames.playerone;


    return { activePlayer }

})();