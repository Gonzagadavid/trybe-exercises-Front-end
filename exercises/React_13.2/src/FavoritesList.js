import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import './pokemon.css';

class FavoritesList extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemonsFavorites: []
    }
    this.renderFavorites = this.renderFavorites.bind(this)
    this.renderNoFavorites = this.renderNoFavorites.bind(this)
  }

  componentDidMount() {
    this.renderFavorites()
  }

  renderFavorites() {
    const pokedexJson = localStorage.getItem('pokedex') || "[]"
    const pokedex = JSON.parse(pokedexJson)
    this.setState({ pokemonsFavorites: pokemons.filter(pkm => pokedex.includes(`${pkm.id}`))})
  }

  renderNoFavorites() {
    return (
      <div>
        <h2>Without Favorites</h2>
      </div>
    )
  }

  render() {
    const { pokemonsFavorites } = this.state

    return (
      <div className="pokemon-details">
        { pokemonsFavorites.length ? 
        pokemonsFavorites.map(pokemon => < Pokemon pokemon={pokemon} key={pokemon.id}/>) :
        this.renderNoFavorites()}
      </div>
    );
  }
}

export default FavoritesList;