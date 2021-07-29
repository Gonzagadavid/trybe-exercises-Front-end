import React from 'react';
import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { moveCar } from './redux/actionCreators';

function Cars({
  redCar, blueCar, yellowCar, moveCar,
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => moveCar('red', !redCar)} type="button" data-testid="red-car">move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => moveCar('blue', !blueCar)} type="button" data-testid="blue-car">move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => moveCar('yellow', !yellowCar)} type="button" data-testid="yellow-car">move</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  redCar: state.reducerCar.cars.red,
  blueCar: state.reducerCar.cars.blue,
  yellowCar: state.reducerCar.cars.yellow
})

const mapDispachToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side))
})

export default connect(mapStateToProps, mapDispachToProps)(Cars)
