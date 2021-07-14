import { SET_PROFESSIONAL_VALUE, SET_PERSONAL_VALUE } from '../action/action';

const initialState = {
  personalInputs: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
  },
  professionalInputs: {
    curriculo: '',
    cargo: '',
    descricao: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  // Caso o tipo da action seja SET_PROFESSIONAL_VALUE,
  // retorne o que já existe no estado e atualize
  // o professionalInputs com a informação trazida pela action case
  case SET_PROFESSIONAL_VALUE:
    return (
      { ...state, professionalInputs: action.payload }
    );
  case SET_PERSONAL_VALUE:
    return (
      { ...state, personalInputs: action.payload }
    );
  default: return state;
  }
};

export default reducer;
