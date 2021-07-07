import React from 'react';
import pokemons from './data';
import Map from './Map';
import './pokemon.css';

class PokemonDetails extends React.Component {
   render() {
    const { match} = this.props;
    const { id } = match.params;
    const pokemon = pokemons.find(pkm => pkm.id === +id)
    const {name, type, averageWeight, image, summary, foundAt, moreInfo} = pokemon;
    return (
      <div className="pokemon-details">
        <div>
          <h3>{name}</h3>
          <img src={image} alt={`${name} sprite`} />
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <p>{summary}</p>
          <div className="pokemon-map">
            {foundAt.map((loc, index) => <Map key={index} location={loc.location} map={loc.map} name={name}/>)}
          </div>
          <a href={moreInfo}>More Informations</a>
        </div>
      </div>
    );
  }
}

export default PokemonDetails
;