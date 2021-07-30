import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import listTodo from './reducers/reducerList'
import selected from './reducers/reducerSelected'
import completed from './reducers/reducerCompleted'

export const reducerRoot = combineReducers({ listTodo, selected, completed })

const store = createStore(reducerRoot, composeWithDevTools())

export default store
