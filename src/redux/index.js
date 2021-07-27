import { createStore, combineReducers } from 'redux';
import { reducerCar, reducerSignal } from './reducers'

const reducerRoot = combineReducers({reducerCar, reducerSignal})

const store = createStore(reducerRoot, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
