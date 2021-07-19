import React from 'react';
import { number, func } from 'prop-types';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';

class GameCell extends React.Component {
  render() {
    const { id, toMark, playerId } = this.props;
    const src = playerId === 1 ? xImage : oImage
    const alt = playerId === 1 ? 'X' : 'O'
    return (
      <div data-testid={`cell_${id}`} className="game-cell" onClick={() => toMark(id)}>
        { this.props.playerId ? <img src={src} alt={alt}/> : '' }
      </div>
    );
  }
}

GameCell.propTypes = {
  id: number, 
  toMark: func, 
  playerId: number
}

export default GameCell;
