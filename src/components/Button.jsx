import { func, string } from 'prop-types';
import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { callback, text } = this.props;

    return (
      <div>
        <button type="button" onClick={ callback }>{text}</button>
      </div>
    );
  }
}

Button.propTypes = {
  callback: func.isRequired,
  text: string.isRequired,
};

export default Button;
