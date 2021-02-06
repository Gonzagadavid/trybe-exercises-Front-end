import { AFRICA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const africaContinent = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case AFRICA_ENERGY:
    return { percentage: action.percentage };
  default:
    return state;
  }
};

export default africaContinent;
