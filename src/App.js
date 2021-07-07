import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Router>
        <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
      </Router>
    </div>
  );
}

export default App;