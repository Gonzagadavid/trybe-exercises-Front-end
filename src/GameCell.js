import React from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';

// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

class GameCell extends React.Component {
  render() {
    const { id, toMark, playerId } = this.props;
    const src = playerId === 1 ? xImage : oImage
    return (
      <div data-testid={`cell_${id}`} className="game-cell" onClick={() => toMark(id)}>
        { this.props.playerId ? <img src={src}/> : '' }
      </div>
    );
  }
}

export default GameCell;
