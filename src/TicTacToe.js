import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  }

  // Antes de começar a realizar o exercício,
  // junte os dois outros exercícios na master ( mergear os pr).
  // Atualize essa branch com o git merge master.

  // Adicione nesse arquivo a lógica para identificar
  // quando que o jogo de ve acabar, necessário passar
  // nós teste do arquivo exercise-3.test.js;

  // Analise bem como que os teste são realizados 
  // para criar o que se pede.

  render() {
    return <GameBoard gameState={this.state.gameBoard} />;
  }
}

export default TicTacToe;
