import React from 'react';
import MyContext from '../MyContext';

const Car = ({ srcCar, color}) => (
  <MyContext.Consumer>
  { ({ cars, moveCar }) => (
    <div>
      <img
        className={cars[color] ? 'car-right' : 'car-left'}
        src={srcCar}
        alt={`${color} car`}
      />
      <button
        onClick={() => moveCar({ ...cars, [color]: !cars[color]})}
        type="button"
      >
        Move
      </button>
    </div>
  ) }
  </MyContext.Consumer>
)

export default Car;
