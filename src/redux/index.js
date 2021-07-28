import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerRoot from './reducers';

const store = createStore(reducerRoot, composeWithDevTools());

export default store;
