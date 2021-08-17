import React, { useContext } from 'react';
import GameBoard from './GameBoard';
import victoryArchieved from './functions/checkGame';
import GameContext from './GameContext';

const TicTacToe = () => {
  const { gameBoard, resetGame, activePlayer } = useContext(GameContext)
  const game = () => {
    const win = victoryArchieved(gameBoard);
    return (
      <>
        {(!win)
          ? <GameBoard />
          : <h1>{`Player ${activePlayer === 1 ? 'O' : 'X'} Ganhou`}</h1>}
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
