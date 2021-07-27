import { COMPLETED, REMOVE_TODO } from '../actions';

const ESTADO_INICIAL = []

const reducerCompleted = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case COMPLETED: 
      return state.includes(action.state) ? state.filter(task => task !== action.state) : [...state, action.state] 
    
      case REMOVE_TODO: return state.filter((text) => text !== action.state)

    default: return state
  }
}

export default reducerCompleted;
