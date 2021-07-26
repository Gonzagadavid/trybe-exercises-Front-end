function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case 'NEXT_COLOR':
    return { ...state, index: (state.index + 1) % state.colors.length };

  case 'PREVIOUS_COLOR':
    return { ...state, index: (state.index - 1) < 0 ? state.colors.length - 1 : (state.index - 1) };

  case 'RANDOM_COLOR' :
    return { colors: [...state.colors, criarCor()], index: state.colors.length}

  default: ESTADO_INICIAL;
  }
};

export default reducer;
