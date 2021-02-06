import { ASIA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const asiaContinent = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ASIA_ENERGY:
    return { percentage: action.percentage };
  default:
    return state;
  }
};

export default asiaContinent;
