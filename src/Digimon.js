import React from 'react';
import PropTypes from 'prop-types';

const Digimon = ({ digimon }) => (
  <div>
    <h2>{digimon.name}</h2>
    <p>level: {digimon.level}</p>
    <img src={digimon.img} alt={digimon.name} />
  </div>
);

export default Digimon;

Digimon.prototype = PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.number,
  img: PropTypes.string,
}).isRequired;