import { ANTARCTICA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const antarcticaContinent = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ANTARCTICA_ENERGY:
    return { percentage: action.percentage };
  default:
    return state;
  }
};

export default antarcticaContinent;
