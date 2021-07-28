import { func, string } from 'prop-types';

import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
  const { path, text, click } = props;
  return (
    <Link to={ path }>
      <button type="button" onClick={ click }>{text}</button>
    </Link>
  );
}

Button.propTypes = {
  path: string.isRequired,
  text: string.isRequired,
  click: func.isRequired,
};

export default Button;
