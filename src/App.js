import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">StrictAccess</Link>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/users/:id' render={(props) => <Users {...props} greetingsMessage="Good Morning" />} />
          <Route path='/strict-access' render={(props) => < StrictAccess {...props} user={{username: "joao",  password: "1234"}}/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
