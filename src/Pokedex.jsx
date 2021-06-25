import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = { index: 0, type: '' };
    this.nextPkn = this.nextPkn.bind(this);
  }

  setType(event) {
    const newType = event.target.value;
    this.setState({ type: newType, index: 0 });
  }

  nextPkn(limit) {
    const { index } = this.state;
    if (index === limit) this.setState({ index: -1 });
    this.setState((beforeState) => ({ index: beforeState.index + 1 }));
  }

  render() {
    const { index, type } = this.state;
    const { pokemons } = this.props;
    const pokemensList = type ? pokemons.filter((pkn) => pkn.type === type) : pokemons;
    const limit = pokemensList.length - 1;
    return (
      <div>
        <div className="pokedex">
          <Pokemon pokemon={pokemensList[index]} />
        </div>
        <button type="button" onClick={(event) => this.setType(event)} className="btn-type" value="Fire">Fire</button>
        <button type="button" onClick={(event) => this.setType(event)} className="btn-type" value="Psychic">Psychic</button>
        <button type="button" onClick={(event) => this.setType(event)} className="btn-type" value="">All</button>
        <button onClick={() => this.nextPkn(limit)} type="button">Next</button>
      </div>
    );
  }
}
export default Pokedex;
