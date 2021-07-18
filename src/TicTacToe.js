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

  // Antes de começar a realizar o exercício,
  // junte os dois outros exercícios na master (ou seja, mergeie as Pull Requests).
  // Atualize essa branch com o git merge master.

  // Adicione nesse arquivo a lógica para identificar
  // quando que o jogo deve acabar. É necessário passar
  // nos teste do arquivo exercise-3.test.js;

  // Analise bem como que os teste são realizados 
  // para criar o que se pede.

  render() {
    return <GameBoard gameState={this.state.gameBoard} toMark={ this.toMark }/>;
  }
}

export default TicTacToe;
