import React from 'react'

const RefreshButton = ({ fetchPosts,isFetching }) => (
  <button
    type="button"
    onClick={fetchPosts}
    disabled={isFetching}
  >
    Refresh
  </button>
);

export default RefreshButton;
