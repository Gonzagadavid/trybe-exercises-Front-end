import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { reducerRoot } from '../../redux';

const renderWithRedux = (component, initialState) => {
  const store = createStore(reducerRoot, initialState)
  return {
    ...render(<Provider store={ store }>{ component }</Provider>), store
  }
}

export default renderWithRedux;
