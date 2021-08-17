import React, { useState } from 'react';
import GameContext from './GameContext';


const Provider = ({ children }) => {
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
  
  const context = { 
    gameBoard, activePlayer, resetGame, updateState 
  }

  return (
    <GameContext.Provider value={ context } >
      { children }
    </GameContext.Provider>
  )

}

export default Provider;
