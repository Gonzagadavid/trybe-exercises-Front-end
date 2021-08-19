
import React, { useState } from 'react';

function Greeting() {
  // substitua essa variável por uma variável no estado, utilizando useState
  const [ name, setName] = useState('');

    // atualize o valor do estado com base no que está em event.target.value

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={({ target: { value } }) => setName(value)} value={name}id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
