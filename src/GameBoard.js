import React, { useContext } from 'react';
import GameCell from './GameCell';
import './GameBoard.css';
import GameContext from './GameContext';

const GameBoard = () => {
  const { gameBoard } = useContext(GameContext)
return (
  <div className="game-board">
    {gameBoard.map((playerId, i) => (
      <GameCell
        id={i}
        key={i}
        content={playerId}
      />
    ))}
  </div>
);
    }

export default GameBoard;