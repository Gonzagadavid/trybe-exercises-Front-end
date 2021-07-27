import { AMERICA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const americaContinent = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case AMERICA_ENERGY:
    return { ...state, percentage: action.percentage };

  default: return state;
  }
};

export default americaContinent;
