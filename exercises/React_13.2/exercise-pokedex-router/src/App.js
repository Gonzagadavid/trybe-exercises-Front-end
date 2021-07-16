import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import PokemonDetails from './PokemonDeatail';
import About from './About';
import NotFound from './NotFound';
import FavoritesList from './FavoritesList';

function App() {
  return (
    <div className="App">
      <Router>
      <nav className="nav-bar">
        <Link to="/" >HOME</Link>
        <Link to="/about" >ABOUT</Link>
        <Link to="/favorites" >FAVORITES</Link>
      </nav>
      <h1> Pokedex </h1>
        <Switch>
          <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
          <Route exact path="/pokemon-details/:id" component={PokemonDetails} />
          <Route exact path="/about" component={About} />
          <Route exact path="/favorites" component={FavoritesList} />
          <Route path="*" component={NotFound} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;