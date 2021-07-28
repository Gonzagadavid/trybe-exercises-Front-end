import { string, func, arrayOf } from 'prop-types';
import React from 'react';

function Select(props) {
  const { labelText, inputName, inputValue, handleChange, options } = props;
  return (
    <label htmlFor={ inputName }>
      {labelText}
      <select
        id={ inputName }
        value={ inputValue }
        onChange={ handleChange }
        name={ inputName }
      >
        {options.map((option) => <option key={ option }>{option}</option>)}
      </select>
    </label>
  );
}

Select.propTypes = {
  labelText: string.isRequired,
  inputName: string.isRequired,
  inputValue: string.isRequired,
  handleChange: func.isRequired,
  options: arrayOf(string).isRequired,
};

export default Select;
