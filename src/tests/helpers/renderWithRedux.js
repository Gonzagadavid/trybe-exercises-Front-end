import { render } from '@testing-library/react';
import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux'
import { reducerCar, reducerSignal } from '../../redux/reducers'


const renderWithRedux = (
  component, 
  { initialState, 
    store = createStore(combineReducers({reducerCar, reducerSignal}), initialState) 
  } = {}
  ) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>), store
    }
  }

export default renderWithRedux;
