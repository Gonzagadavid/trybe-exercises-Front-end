import React, { useState } from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

function App() {
  const initialState = { red: false, blue: false, yellow: false };
  const [ cars, moveCar ] = useState(initialState)

  return (
    <MyContext.Provider value={{ cars, moveCar }} >
      <Cars />
    </MyContext.Provider>
  );
}

export default App;
