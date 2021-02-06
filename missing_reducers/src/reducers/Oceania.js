import { OCEANIA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const oceaniaContinent = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case OCEANIA_ENERGY:
    return { percentage: action.percentage };
  default:
    return state;
  }
};

export default oceaniaContinent;
