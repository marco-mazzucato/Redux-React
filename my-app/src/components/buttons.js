import React from "react";

export default function Buttons(props) {
    return (
        <div className='container'>
        <button className='agg' onClick={() => props.s(props.c +1)}>Aumenta</button>
        <button className='agg' onClick={() => props.s(props.c -1)}>Diminuisci</button>
        <h1>{props.c}</h1>
      </div>

    );
}