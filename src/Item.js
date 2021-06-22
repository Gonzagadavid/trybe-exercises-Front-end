import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, handleEvent } = props
  return (
    <div className="Item" onClick={ handleEvent }>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
