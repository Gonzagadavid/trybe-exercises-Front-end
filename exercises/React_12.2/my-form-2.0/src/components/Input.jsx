import React, { Component } from 'react';
import './formElement.css';

class Input extends Component {
  render() {
    const {
      inputType, inputValue, inputId, inputText, handler, validation, erroMessage, inputBlur,
    } = this.props;
    return (
      <label htmlFor="inputId" className="element">{inputText}
        <input
          type={inputType}
          value={inputValue}
          id={inputId}
          name={inputId}
          onInput={(event) => handler(event, validation)}
          onBlur={inputBlur}
        />
        <span className="error">{validation && validation(inputValue) ? erroMessage : ''}</span>
      </label>
    );
  }
}

export default Input;
