import React from 'react';
import MyContext from '../MyContext';

const LastUpdatedAt = () => (
  <MyContext.Consumer>
    {({ lastUpdated }) => (
      <span>{`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}</span>
    )}
  </MyContext.Consumer>
)

export default LastUpdatedAt;
