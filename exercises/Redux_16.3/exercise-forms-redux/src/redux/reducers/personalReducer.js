import { PERSONAL_DATA } from '../actions/actions';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereço: '',
  cidade: '',
  estado: '',
};

const personalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_DATA: return action.state;

  default: return state;
  }
};

export default personalReducer;
