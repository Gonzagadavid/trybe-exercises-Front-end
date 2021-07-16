import React from 'react';
import './pokemon.css';

class Map extends React.Component {
   render() {
    const { location, map, name} = this.props;
    return (
      <div className="pokemon-details">
          <h3>{location}</h3>
          <img src={map} alt={`${name} location map`} />
      </div>
    );
  }
}

export default Map;