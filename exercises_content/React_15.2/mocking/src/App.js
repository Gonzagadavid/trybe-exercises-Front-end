import React from 'react'
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import FetchJoke from './components/FetchJoker';
import Input from './components/Input';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to="/fetchjoke">Joke</Link>
        <Link to="/input">Input</Link>
        <Link to="/">Home</Link>
      </nav>
      <div>
        <Route path="/fetchjoke" component={FetchJoke} />
        <Route path="/input" component={Input} />
        <Route exact path="/" component={Home} />
      </div>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
