import React, { useState } from 'react';
import GameBoard from './GameBoard';
import victoryArchieved from './functions/checkGame';

const TicTacToe = () => {
  const INITIAL_BOARD = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const FIRST_PLAYER = 1;
  const [gameBoard, setGameBoard] = useState(INITIAL_BOARD);
  const [activePlayer, setPlayer] = useState(FIRST_PLAYER);

  const resetGame = () => {
    setGameBoard(INITIAL_BOARD);
    setPlayer(FIRST_PLAYER);
  }

  const updateState = (cellClicked) => {
    if (gameBoard[cellClicked] !== 0) return null;
      
    const newState = [...gameBoard];
      
    newState[cellClicked] = activePlayer;
    setGameBoard(newState)
    setPlayer(activePlayer === 1 ?  2 : 1);
  }
  
  const game = () => {
    const win = victoryArchieved(gameBoard);
    return (
      <>
        {(!win)
          ? (
            <GameBoard
              gameState={gameBoard}
              updateGame={updateState}
            />
          )
          : <h1>{`Player ${win === 2 ? 'O' : 'X'} Ganhou`}</h1>}
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={resetGame}
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
      {
      !gameBoard.includes(0) && !victoryArchieved(gameBoard) ?
        <h1>Empate</h1> :
        game()
      }
    </>
  );
 
}

export default TicTacToe;
