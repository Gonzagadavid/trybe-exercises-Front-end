import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { click, text, disabledBtn } = this.props;
    return <button type="button" onClick={click} className="btn-type" value={text} disabled={disabledBtn}>{text || 'All'}</button>;
  }
}

export default Button;
