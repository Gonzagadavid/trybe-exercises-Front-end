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

const Selector = () => (
  <MyContext.Consumer>
    {({ selectedSubreddit, setSelected  }) => (
      <span>
        <h1>{`Selected: ${selectedSubreddit}`}</h1>
        <select
          onChange={(e) => setSelected(e.target.value)}
          value={selectedSubreddit}
          >
          {renderOptions(['frontend', 'reactjs'])}
        </select>
      </span>
    )}
  </MyContext.Consumer>
);

export default Selector;