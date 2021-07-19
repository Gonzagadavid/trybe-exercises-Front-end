import { bool, func, string } from 'prop-types';
import React, { Component } from 'react';

class FinishedGame extends Component {
  render() {
    const {
      statusGame, tie, gameFinished, restart,
    } = this.props;
    return (
      <div>
        <p>Fim de Jogo</p>
        <p>{tie && !gameFinished ? 'Empate!!' : statusGame}</p>
        <button type="button" onClick={restart}>Jogar Novamente</button>
      </div>
    );
  }
}

FinishedGame.propTypes = {
  statusGame: string.isRequired,
  tie: bool.isRequired,
  gameFinished: bool.isRequired,
  restart: func.isRequired,
};

export default FinishedGame;
