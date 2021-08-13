import React from 'react';
import Car from './components/Car';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

const Cars = () => (
  <div>
    <Car srcCar={carRed} color="red"/>
    <Car srcCar={carBlue} color="blue"/>
    <Car srcCar={carYellow} color="yellow"/>
  </div>
);

export default Cars;
