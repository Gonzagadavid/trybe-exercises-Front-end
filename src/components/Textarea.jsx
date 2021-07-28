import { string, func } from 'prop-types';
import React from 'react';

function Textarea(props) {
  const { labelText, inputName, inputValue, handleChange } = props;
  return (
    <label htmlFor={ inputName }>
      {labelText}
      <textarea
        id={ inputName }
        value={ inputValue }
        onChange={ handleChange }
        name={ inputName }
      />
    </label>
  );
}

Textarea.propTypes = {
  labelText: string.isRequired,
  inputName: string.isRequired,
  inputValue: string.isRequired,
  handleChange: func.isRequired,
};

export default Textarea;
