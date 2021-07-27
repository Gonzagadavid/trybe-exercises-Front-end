import { SELECTED } from '../actions';

const ESTADO_INICIAL = ''

const reducerSelected = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case SELECTED: return  action.state

    default: return state
  }
}

export default reducerSelected;
