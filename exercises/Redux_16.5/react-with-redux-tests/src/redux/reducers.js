import { MOVE_CAR } from './actionCreators';
import { CHANGE_SIGNAL } from './actionCreators';

const initialStateSignal = {
  signal: {
    color: 'red',
  },
}

const initialStateCar = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

export function reducerCar(state = initialStateCar, action) {
  switch (action.type) {
    case MOVE_CAR:
      return { ...state, cars: { ...state.cars, [action.car]: action.side } };
    default:
      return state;
  }
}


export function reducerSignal(state = initialStateSignal, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}
