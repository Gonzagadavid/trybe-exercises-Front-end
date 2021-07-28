import charAPI from '../../services/charAPI';
import { actionError, actionRequest, actionSucess, REQUEST_CHARACTER, REQUEST_CHARACTER_SUCESS, REQUEST_ERROR } from '../actions';

const INTIAL_STATE = {
  loading: false,
  character: {},
  erro: ''
}

const reducerCharacter = (state = INTIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_CHARACTER:
      return { ...state, loading: true }
    
    case REQUEST_CHARACTER_SUCESS:
      return { ...state, loading: false, character: action.state[0] }

    case REQUEST_ERROR:
      return { ...state, loading: false, erro: action.state }

    default: return state
  }
}

export const fetchCharacter = (character) => async (dispatch) => {
  dispatch(actionRequest())
  try {
    const resp = await charAPI(character)
    dispatch(actionSucess(resp))
  } catch(erro) {
    dispatch(actionError(erro))
  }
}

export default reducerCharacter;
