import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Timer from './pages/Timer';
import TodoList from './pages/TodoList';

const App = () => (
  <div>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/timer'>Timer</Link>
      <Link to='/todo-list'>ToDoList</Link>
    </nav>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/timer" component={Timer} />
        <Route path="/todo-list" component={TodoList} />
      </Switch>
    </main>
  </div>
)

export default App;
