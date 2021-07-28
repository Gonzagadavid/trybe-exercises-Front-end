import { combineReducers } from 'redux';
import reducerCharacter from './reducerCharacter';

const reducerRoot = combineReducers({ reducerCharacter })

export default reducerRoot;
