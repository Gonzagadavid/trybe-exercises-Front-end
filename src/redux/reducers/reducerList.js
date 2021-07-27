import {  ADD_TODO, REMOVE_TODO } from '../actions';

const ESTADO_INICIAL = []

const reducerList = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case ADD_TODO: return [...state, action.state]

    case REMOVE_TODO: return state.filter((text) => text !== action.state)

    default: return state
  }
}

export default reducerList;
