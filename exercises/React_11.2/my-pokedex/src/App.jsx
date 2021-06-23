import './App.css';
import React from 'react';
import Pokedex from './Pokedex';
import pokemonsArray from './data';

function App() {
  return (
    <div className="App">
      { pokemonsArray.map((pokemon) => <Pokedex pokemons={pokemon} key={pokemon.id} />)}
    </div>
  );
}

export default App;
