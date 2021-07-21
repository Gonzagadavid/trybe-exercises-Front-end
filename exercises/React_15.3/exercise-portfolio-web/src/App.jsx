import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>David Gonzaga</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </header>
    </div>
  );
}

export default App;
