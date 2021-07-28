import { string, func } from 'prop-types';
import React from 'react';

function Input(props) {
  const { labelText, inputName, inputValue, handleChange } = props;
  return (
    <label htmlFor={ inputName }>
      {labelText}
      <input
        type="text"
        id={ inputName }
        value={ inputValue }
        onChange={ handleChange }
        name={ inputName }
      />
    </label>
  );
}

Input.propTypes = {
  labelText: string.isRequired,
  inputName: string.isRequired,
  inputValue: string.isRequired,
  handleChange: func.isRequired,
};

export default Input;
