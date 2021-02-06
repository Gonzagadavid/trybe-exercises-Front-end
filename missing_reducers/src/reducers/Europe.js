import { EUROPE_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const europeContinent = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EUROPE_ENERGY:
    return { percentage: action.percentage };
  default:
    return state;
  }
};

export default europeContinent;
