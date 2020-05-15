import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Esse state inicial é apenas uma sugestão para a lógica,
      // fique livre para modifica-ló.
      activePlayer: 1, // Jogador 1 e 2
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // Cada posição do array será uma casa do jogo da velha,
      // quando uma for clicada é necessário mudar o seu valor para o número do jogador.
      // Exemplo: Segunda foi clicada e estava na vez do jogador 1,
      // O array deve ficar assim: gameBoard: [0, 1, 0, 0, 0, 0, 0, 0, 0].
      // vez do segundo jogador, ele clica na quinta casa:
      // gameBoard: [0, 1, 0, 0, 2, 0, 0, 0, 0].
      // Visualização do jogo:
      //  0  1  0
      //  0  2  0
      //  0  0  0
      // Necessário criar a lógica para esse funcionamento,
      // relembrando que pode realizar o jogo de outra forma.
    };
  }

  render() {
    return <GameBoard gameState={this.state.gameBoard} />;
  }
}

export default TicTacToe;
