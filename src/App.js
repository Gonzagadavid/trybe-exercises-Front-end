import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import PokemonDetails from './PokemonDeatail';

function App() {
  return (
    <div className="App">
      <Router>
      <Link to="/" >Back</Link>
      <h1> Pokedex </h1>
        <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
        <Route path="/pokemon-details/:id" component={PokemonDetails} />
      </Router>
    </div>
  );
}

export default App;