import React, { Component } from 'react';

class Select extends Component {
  render() {
    const {
      idSelect, handler, valueSelect, text, options,
    } = this.props;
    return (
      <label htmlFor={idSelect} className="element">
        {text}
        <select
          name={idSelect}
          id={idSelect}
          onChange={handler}
          value={valueSelect}
        >
          {
            options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.text}
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

export default Select;
