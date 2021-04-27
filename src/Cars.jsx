import React from 'react';
import { connect } from 'react-redux';
import { moveCar } from './redux/actionCreators';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars({ red, blue, yellow , setCar}) {
  return (
    <div>
      <div>
        <img className={red ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => setCar('red', !red)} type="button">move</button>
      </div>
      <div>
        <img className={blue ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => setCar('blue', !blue)} type="button">move</button>
      </div>
      <div>
        <img className={yellow ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => setCar('yellow', !yellow)} type="button">move</button>
      </div>
    </div>
  );
}

const mapToStateProps = (state) => ({
  ...state.cars,
})

const mapDispatchProps = (dispatch) => ({
  setCar: (car, boolean) => dispatch(moveCar(car, boolean)),
})

export default connect(mapToStateProps, mapDispatchProps)(Cars)