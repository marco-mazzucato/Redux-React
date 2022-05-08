import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';  

const navbar = (
    <ul>
    <li><a className="active" href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
  </ul>  
  )

function MainContent() {
  return (
    <h1>This is the main content</h1>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {navbar}
      <button className='agg' onClick={() => setCount(count +1)}>Aumenta</button>
      <button className='agg' onClick={() => setCount(count -1)}>Diminuisci</button>
      <h1>{count}</h1>
      <MainContent />
    </div>
  );
}

export default App;