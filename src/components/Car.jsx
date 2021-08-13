import React from 'react';

const Car = ({ classCar, srcCar, moveCar, color}) => (
  <div>
    <img
      className={classCar ? 'car-right' : 'car-left'}
      src={srcCar}
      alt="red car"
    />
    <button
      onClick={() => moveCar(color, !classCar)}
      type="button"
      >
      Move
    </button>
  </div>
)

export default Car;
