import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    this.toMark = this.toMark.bind(this);
  }

  toMark(id) {
    this.setState(({ activePlayer, gameBoard }) => {
      if (gameBoard[id] !== 0) return { gameBoard }
      gameBoard[id] = activePlayer
      
      return { gameBoard: gameBoard}
    }, () => {
      const { activePlayer } = this.state
      this.setState({ activePlayer: activePlayer === 1 ? 2 : 1})
    })
  }

  render() {
    return <GameBoard gameState={this.state.gameBoard} toMark={ this.toMark }/>;
  }
}

export default TicTacToe;
