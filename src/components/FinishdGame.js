import { bool, string } from 'prop-types';
import React, { Component } from 'react';

class FinishedGame extends Component {
  render() {
    const { statusGame, tie, gameFinished } = this.props;
    return (
      <div>
        <p>Fim de Jogo</p>
        <p>{tie && !gameFinished ? 'Empate!!' : statusGame}</p>
      </div>
    );
  }
}

FinishedGame.propTypes = {
  statusGame: string.isRequired,
  tie: bool.isRequired,
  gameFinished: bool.isRequired,
};

export default FinishedGame;
