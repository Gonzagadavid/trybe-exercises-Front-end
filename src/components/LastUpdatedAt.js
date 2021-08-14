import React from 'react';

const LastUpdatedAt = ({ lastUpdated }) => {
  return <span>{`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}</span>;
}

export default LastUpdatedAt;
