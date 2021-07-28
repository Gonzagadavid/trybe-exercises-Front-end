import { combineReducers } from 'redux';
import personal from './personalReducer';
import professional from './professionalReducer';

const reducerRoot = combineReducers({ personal, professional });

export default reducerRoot;
