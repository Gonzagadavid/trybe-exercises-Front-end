import React, { Component } from 'react';
import EventButton from './EventButton';

class App extends Component {
  render() {
    return (
      <div>
        <EventButton />
        <EventButton />
        <EventButton />
      </div>
    );
  }
}

export default App;
