import React from 'react';
import './pokemon.css';
import { Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'


class Pokemon extends React.Component {
  constructor() {
    super()
    this.state = {
      favorite: false,
    }
    this.renderFavorites = this.renderFavorites.bind(this)
  }

  componentDidMount() {
    this.renderFavorites()
  }
  
  componentDidUpdate() {
    this.renderFavorites()   
  }

  renderFavorites() {
    const { pokemon} = this.props;
    const { id } = pokemon;
    const pokedexJson = localStorage.getItem('pokedex') || "[]"
    const pokedex = JSON.parse(pokedexJson)
    const bool = pokedex.includes(`${id}`)
    if (this.state.favorite !== bool) {
      this.setState({favorite: bool})
    }
  }

  render() {
    const {name, type, averageWeight, image, id} = this.props.pokemon;
    const { favorite } = this.state
    const styleObj = {color: favorite ? 'goldenrod' : 'transparent', fontSize: '25px'}
    return (
      <div className="pokemon">
        <div>
        <p>{<AiFillStar style={styleObj}/>}</p>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Link to={`/pokemon-details/${id}`}>DETAILS</Link>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;