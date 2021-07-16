import React, { Component } from 'react';
import { func, string } from 'prop-types';

class Input extends Component {
  render() {
    const { inputValue, inputChange } = this.props;
    return (
      <label htmlFor="nameDog">
        Dê um nome ao Dog:
        <input type="text" id="nameDog" value={ inputValue } onChange={ inputChange } />
      </label>
    );
  }
}

Input.propTypes = {
  inputValue: string.isRequired,
  inputChange: func.isRequired,
};

export default Input;
