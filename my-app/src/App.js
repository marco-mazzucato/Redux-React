import './App.css';
import React, { useState } from 'react';  
import Navbar from './components/Navbar'; 
import ButtonsF from './components/ButtonsF';
import ButtonsC from './components/ButtonsC';
import MenuSx from './components/MenuSx';
import MenuDx from './components/MenuDx';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  var info = {
    "first" : "ciao",
    "second" : "Cognome",
    "third" : "Indirizzo",
    "fourth" : "Azienda"
  }
  return (
    <div className="App">
        <Navbar />
          <MenuSx first={info.first} second={info.second} third={info.third} fourth={info.fourth}/>
          <MenuDx first={info.first} second={info.second} third={info.third} fourth={info.fourth}/>
        <ButtonsF c={count1} s={setCount1}/>
        <ButtonsC c={count2} s={setCount2}/>
    </div>
  );
}

export default App;