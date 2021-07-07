import React from 'react';
import pokemons from './data';
import Map from './Map';
import './pokemon.css';

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props)
    this.addFavorites = this.addFavorites.bind(this)
    this.renderFavorites = this.renderFavorites.bind(this)
    this.state = {
      favorite: false
    }
  }

  componentDidMount() {
    this.renderFavorites()
  }
  
  renderFavorites() {
    const { match} = this.props;
    const { id } = match.params;
    const pokedexJson = localStorage.getItem('pokedex') || "[]"
    const pokedex = JSON.parse(pokedexJson)
    this.setState({favorite: pokedex.includes(id)})
  }


  addFavorites() {
    const { match} = this.props;
    const { id } = match.params;
    const pokedexJson = localStorage.getItem('pokedex') || "[]"
    const pokedex = JSON.parse(pokedexJson)
    if (!pokedex.includes(id)) {
      localStorage.setItem('pokedex', JSON.stringify([...pokedex, id]))
      this.setState({ favorite: true})
    } else {
      localStorage.setItem('pokedex', JSON.stringify(pokedex.filter(save => save !== id)))
      this.setState({ favorite: false})
    }
  }
  
  render() {
    const { match} = this.props;
    const { id } = match.params;
    const pokemon = pokemons.find(pkm => pkm.id === +id)
    const {name, type, averageWeight, image, summary, foundAt, moreInfo} = pokemon;
    const { favorite } = this.state
    return (
    <div className="pokemon-details">
      <div className="pokemon">
        <div>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
          <img src={image} alt={`${name} sprite`} />
      </div>
          <p>{summary}</p>
          <a href={moreInfo}>More Informations</a>
          <label> Favorite:
          <input type="checkbox" checked={favorite} onChange={this.addFavorites} />
          </label>
        <div className="pokemon-map">
          {foundAt.map((loc, index) => <Map key={index} location={loc.location} map={loc.map} name={name}/>)}
        </div>
    </div>
    );
  }
}

export default PokemonDetails
;