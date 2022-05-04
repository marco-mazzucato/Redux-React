import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className= "agg" onClick={() => setCount(count+1)}>aggiungi</button>
        <button className= "agg" onClick={() => setCount(count-1)}>togli</button>
        <p>{count}</p>
      </header>
    </div>
  );
}

export default App;
