// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {
  const INITIAL_CARS = { red: false, blue: false, yellow: false }
  const [cars, setCars] = useState(INITIAL_CARS)
  const [signal, changeSignal] =  useState('red')

  const moveCar = (car, side) => {
   setCars({ ...cars, [car]: side,});
  };


  const context = { cars, moveCar, signal, changeSignal };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
