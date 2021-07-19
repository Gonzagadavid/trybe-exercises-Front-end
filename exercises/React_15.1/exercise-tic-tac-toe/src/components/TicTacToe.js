import React from 'react';
import FinishedGame from './FinishdGame';
import GameBoard from './GameBoard';
import checkGame from '../service/checkGame';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      gameFinished: false,
      win: '',
      tie: false,
    };
    this.toMark = this.toMark.bind(this);
    this.CheckGame = this.CheckGame.bind(this);
  }

  toMark(id) {
    this.setState(({ activePlayer, gameBoard }) => {
      if (gameBoard[id] !== 0) return { gameBoard };
      gameBoard[id] = activePlayer;

      return { gameBoard };
    }, () => {
      const { activePlayer } = this.state;
      const checkWin = activePlayer === 1 ? 'X' : 'O';
      this.setState({ activePlayer: activePlayer === 1 ? 2 : 1, win: checkWin });
      this.CheckGame();
    });
  }

  CheckGame() {
    const { gameBoard } = this.state;
    const check = checkGame(gameBoard);
    const checkTie = !gameBoard.includes(0);
    this.setState({ gameFinished: check, tie: checkTie });
  }

  render() {
    const {
      gameBoard, gameFinished, win, tie,
    } = this.state;
    return (
      <div>
        {
          gameFinished || tie
            ? <FinishedGame statusGame={`Jogador "${win}" Ganhou!!`} tie={tie} />
            : <GameBoard gameState={gameBoard} toMark={this.toMark} />
        }
      </div>
    );
  }
}

export default TicTacToe;
