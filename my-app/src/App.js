import './App.css';
import React, { useState } from 'react';  
import Navbar from './components/Navbar'; 
import Buttons from './components/buttons';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
        <Navbar />
        <Buttons c={count} s={setCount}/>
    </div>
  );
}

export default App;