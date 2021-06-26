import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {
      typeInput, idInput, valueInput, handler, text, validation,
    } = this.props;
    const erro = validation && validation(valueInput);
    return (
      <label htmlFor={idInput} className="element">{text}
        <input
          type={typeInput}
          name={idInput}
          id={idInput}
          onInput={(event) => handler(event, validation)}
          value={valueInput}
        />
        <span className="error">{erro ? 'O campo está preenchido incorretamente' : ''}</span>
      </label>
    );
  }
}

export default Input;
