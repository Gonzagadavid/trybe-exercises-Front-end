import React from 'react';

const Digimon = ({ digimon }) => (
  <div>
    <h2>{digimon.name}</h2>
    <p>level: {digimon.level}</p>
    <img src={digimon.img} alt={digimon.name} />
  </div>
);

export default Digimon;
