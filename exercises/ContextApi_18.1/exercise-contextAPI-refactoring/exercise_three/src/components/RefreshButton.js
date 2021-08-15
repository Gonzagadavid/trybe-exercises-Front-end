import React from 'react'
import MyContext from '../MyContext';

const RefreshButton = () => (
  <MyContext.Consumer>
    {({ fetchPosts, isFetching }) => (
      <button
        type="button"
        onClick={fetchPosts}
        disabled={isFetching}
      >
        Refresh
      </button>
    )}
  </MyContext.Consumer>
);

export default RefreshButton;
