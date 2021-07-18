import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, onSelected } = props
  return (
    <div className="Item">
      <span onClick={() => onSelected(content)}>{content}</span>
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
