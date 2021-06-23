import React, { Component } from 'react';
import { string, number, shape } from 'prop-types';
import pokemonsArray from './data';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    const { name, type, averageWeight, image, id } = pokemons;
    const { value, measurementUnit } = averageWeight;
    return (
      <div className="Pokedex">
        <h2>{name}</h2>
        <p>{type}</p>
        <p>Average weight: {value}{measurementUnit}</p>
        <img src={image} alt={id} />
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: shape({
    name: string,
    type: string,
    image: string,
    id: number,
    averageWeight: shape({
      value: number,
      measurementUnit: string,
    }),
  }),
};

const [defaultPokedex] = pokemonsArray;
Pokedex.defaultProps = defaultPokedex;
export default Pokedex;
