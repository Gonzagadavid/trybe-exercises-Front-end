import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {
      typeInput, idInput, valueInput, handler, text, validation,
    } = this.props;
    let erro = '';
    if (validation && validation(valueInput)) erro = 'O campo está preenchido incorretamente';
    return (
      <label htmlFor={idInput} className="element">{text}
        <input
          type={typeInput}
          name={idInput}
          id={idInput}
          onChange={handler}
          value={valueInput}
        />
        <span className="error">{erro}</span>
      </label>
    );
  }
}

export default Input;
