import React from 'react';
import GameCell from './GameCell';
import {arrayOf, number, func} from 'prop-types';
import './GameBoard.css';

class GameBoard extends React.Component {
  render() {
    const {gameState, toMark} = this.props;
    return (
      <div className="game-board">
        {gameState.map((playerId, i) => (
          <GameCell id={i} key={i} toMark={toMark} playerId={playerId} />
        ))}
      </div>
    );
  }
}

GameBoard.propTypes = {
  gameState: arrayOf(number).isRequired,
  toMark: func.isRequired,
}

export default GameBoard;
