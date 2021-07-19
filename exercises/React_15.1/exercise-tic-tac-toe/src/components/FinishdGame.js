import { bool, string } from 'prop-types';
import React, { Component } from 'react';

class FinishedGame extends Component {
  render() {
    const { statusGame, tie } = this.props;
    return (
      <div>
        <p>Fim de Jogo</p>
        <p>{tie ? 'Empate!!' : statusGame}</p>
      </div>
    );
  }
}

FinishedGame.propTypes = {
  statusGame: string.isRequired,
  tie: bool.isRequired,
};

export default FinishedGame;
