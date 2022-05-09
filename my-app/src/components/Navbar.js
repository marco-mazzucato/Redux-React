import React from 'react'; 

export default function Navbar () {
    return (
      <ul className='menu'>
      <li><a className="active" href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
    </ul>  
    );
  }