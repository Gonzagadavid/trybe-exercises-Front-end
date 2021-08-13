// src/Cars.jsx

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Car from './components/Car';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { moveCar } from './redux/actionCreators';

function Cars({ redCar, blueCar, yellowCar, moveCar }) {
  return (
    <div>
      <Car classCar={redCar} srcCar={carRed} moveCar={moveCar} color="red"/>
      <Car classCar={blueCar} srcCar={carBlue} moveCar={moveCar} color="blue"/>
      <Car classCar={yellowCar} srcCar={carYellow} moveCar={moveCar} color="yellow"/>
    </div>
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  redCar: state.cars.red,
  blueCar: state.cars.blue,
  yellowCar: state.cars.yellow});

const mapDispatchToProps = { moveCar };

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
