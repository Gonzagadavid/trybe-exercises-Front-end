import { createStore, combineReducers } from 'redux';
import changeSinal from './changeSignal'
import carMove from './moveCar'

const reducer = combineReducers({
    changeSinal,
    carMove,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
