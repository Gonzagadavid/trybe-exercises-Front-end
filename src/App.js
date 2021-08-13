import React, { useState } from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

function App() {
  const initialState = { 
    cars: { red: false, blue: false, yellow: false },
    signalColor: 'red',
  }
  const [state, setState] = useState(initialState);
  const moveCar = (color, bool) => (
    setState({ ...state, cars: { ...state.cars, [color]: bool }})
  )
  const changeSignal = (color) => setState({ ...state, signalColor: color })
  
  return (
    <MyContext.Provider value={{ state, moveCar, changeSignal }}>
      <div className="container">
        <Cars />
        <TrafficSignal />
      </div>
    </MyContext.Provider>
  );
}

export default App;
