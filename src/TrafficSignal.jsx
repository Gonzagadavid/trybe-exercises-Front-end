import React from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
<<<<<<< HEAD
import { changeSignal } from './redux/actionCreators';
import { connect } from 'react-redux';
=======
>>>>>>> exercise-three

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

<<<<<<< HEAD
function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div>
      <div className="button-container">
        <button onClick={ () => changeSignal('red') } type="button">Red</button>
        <button onClick={ () => changeSignal('yellow') } type="button">Yellow</button>
        <button onClick={ () => changeSignal('green') } type="button">Green</button>
=======
export default function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div>
      <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">Red</button>
        <button onClick={() => changeSignal('yellow')} type="button">Yellow</button>
        <button onClick={() => changeSignal('green')} type="button">Green</button>
>>>>>>> exercise-three
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}
<<<<<<< HEAD

const mapStateToProps = (state) => ({
  signalColor: state.signal.color
});

const mapDispatchToProps = (dispach) => ({
  changeSignal: (value) => dispach(changeSignal(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal)
=======
>>>>>>> exercise-three
