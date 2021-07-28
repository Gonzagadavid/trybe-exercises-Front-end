import { PROFESSIONAL_DATA } from '../actions/actions';

const INITIAL_STATE = {
  resumo: '',
  descricao: '',
  cargo: '',
};

const professionalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFESSIONAL_DATA: return action.state;

  default: return state;
  }
};

export default professionalReducer;
