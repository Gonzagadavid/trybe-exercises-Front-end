import React from 'react';
import { connect } from 'react-redux'
import { changeSignal } from './redux/actionCreators'
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

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

class TrafficSignal extends React.Component {

  renderSignal = (signalColor) => {
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

  render() {
    const { signalColor, changeSignalColor } = this.props;
    return (
      <div>
        <div className="button-container">
          <button type="button" onClick={() => changeSignalColor('red')}>Red</button>
          <button type="button" onClick={() => changeSignalColor('yellow')}>Yellow</button>
          <button type="button" onClick={() => changeSignalColor('green')}>Green</button>
        </div>
        <img className="signal" src={renderSignal(signalColor)} alt="" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signalColor: state.signal.color,
});

const mapDispatchToProps = (dispatch) => ({
  changeSignalColor: (color) => dispatch(changeSignal(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);