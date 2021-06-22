import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const { path, description } = props;
  return <img src={path} alt={description} />;
};

Image.propTypes = {
  path: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Image;
