function checkDigonals(array) {
  const left = [];
  const right = [];
  const size = array.length;
  for (let i = 0; i < 3; i =+ 4) {
    left.push(array[i]);
    right.push(array[size - i]);
  }
  const checkLeft = !left.includes(0) && new Set(left).size === 1;
  const checkRigth = !left.includes(0) && new Set(right).size === 1;
  return checkLeft || checkRigth;
}

function checkColunm(array) {
  for (let i = 0; i < 3; i += 1) {
    const check = array[i] === array[i + 3] && array[i] === array[i + 6];
    if (check && array[i] !== 0) return check;
  }
  return false;
}

function checkLine(array) {
  let index = 0;

  while( index < 9) {
    let arrCheck = [];
    for (let i = index; i < index + 3; i += 1) arrCheck.push(array[i]);
    const check = new Set(arrCheck).size === 1 && arrCheck[0] !== 0;
    if(check) return check;
    index += 3;
  }
  return false;
}


const checkGame = array => checkLine(array) || checkColunm(array) || checkDigonals(array);
export default checkGame;
