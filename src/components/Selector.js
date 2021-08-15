import React from 'react';
import MyContext from '../MyContext';

const renderOptions = (options) => (
  options.map((option) => (
    <option
      value={option}
      key={option}
    >
      {option}
    </option>
  ))
);

const Selector = ({ options, onChange }) => (
  <MyContext.Consumer>
    {({ selectedSubreddit }) => (
      <span>
        <h1>{`Selected: ${selectedSubreddit}`}</h1>
        <select
          onChange={(e) => onChange(e.target.value)}
          value={selectedSubreddit}
          >
          {renderOptions(options)}
        </select>
      </span>
    )}
  </MyContext.Consumer>
);

export default Selector;