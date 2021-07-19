function checkDigonals(array) {
  const left = [];
  const right = [];
  const size = array.length - 1;
  for (let index = 0; index <= size; index += 4) left.push(array[index]);
  for (let index = 2; index <= 6; index += 2) right.push(array[size - index]);

  const checkLeft = !left.includes(0) && new Set(left).size === 1;
  const checkRight = !right.includes(0) && new Set(right).size === 1;
  return checkLeft || checkRight;
}

function checkColunm(array) {
  for (let index = 0; index < 3; index += 1) {
    const check = array[index] === array[index + 3] && array[index] === array[index + 6];
    if (check && array[index] !== 0) return check;
  }
  return false;
}

function checkLine(array) {
  let col = 0;

  while (col < 9) {
    const arrCheck = [];
    for (let index = col; index < col + 3; index += 1) arrCheck.push(array[index]);
    const check = new Set(arrCheck).size === 1 && arrCheck[0] !== 0;
    if (check) return check;
    col += 3;
  }
  return false;
}

const checkGame = (array) => checkLine(array) || checkColunm(array) || checkDigonals(array);
export default checkGame;
