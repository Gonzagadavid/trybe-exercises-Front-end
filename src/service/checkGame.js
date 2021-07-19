function checkLine(array) {
  let index = 0;

  while( index < 9) {
    let arrCheck = [];
    for (let i = index; i < index + 3; i++) arrCheck.push(array[i]);
    const check = new Set(arrCheck).size === 1 && arrCheck[0] !== 0;
    if(check) return check;
    index += 3;
  }
  return false;
}


const checkGame = array => checkLine(array) 
export default checkGame;
