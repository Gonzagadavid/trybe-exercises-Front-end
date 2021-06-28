import React, { Component } from 'react';
import Button from './Button';
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
    const types = [...new Set(pokemons.map((pokemon) => pokemon.type))];
    types.push('');
    const pokemensList = type ? pokemons.filter((pkn) => pkn.type === type) : pokemons;
    const limit = pokemensList.length - 1;
    return (
      <div>
        <div className="pokedex">
          <Pokemon pokemon={pokemensList[index]} />
        </div>
        {types.map((typePkn) => <Button click={(event) => this.setType(event)} text={typePkn} key={typePkn} />)}
        <div className="nextBtn">
          <Button click={() => this.nextPkn(limit)} text="next" disabledBtn={limit === 0} />
        </div>
      </div>
    );
  }
}
export default Pokedex;
