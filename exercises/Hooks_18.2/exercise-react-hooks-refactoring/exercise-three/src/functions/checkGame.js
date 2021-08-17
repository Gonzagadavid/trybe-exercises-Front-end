const victoryArchivedInLine = (gameBoard) => {
  for (let i = 0; i <= 6; i += 3) {
    if (
      gameBoard[i] === gameBoard[i + 1]
      && gameBoard[i + 1] === gameBoard[i + 2]
      && gameBoard[i] !== 0
      ) return gameBoard[i];
    }
    return false;
  }
  
const victoryArchivedInColumn = (gameBoard) => {
  for (let i = 0; i <= 2; i += 1) {
    if (
      gameBoard[i] === gameBoard[i + 3]
      && gameBoard[i + 3] === gameBoard[i + 6]
      && gameBoard[i] !== 0
      ) return gameBoard[i];
    }
    return false;
  }
    
const victoryArchivedInDiagonals = (gameBoard) =>{
  if (gameBoard[4] === 0) return false;
  if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    return gameBoard[0];
  }
  if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    return gameBoard[2];
  }
  return false;
}

 const victoryArchieved = (gameBoard) => (
  victoryArchivedInLine(gameBoard)
  || victoryArchivedInColumn(gameBoard)
  || victoryArchivedInDiagonals(gameBoard)
)

export default victoryArchieved;
