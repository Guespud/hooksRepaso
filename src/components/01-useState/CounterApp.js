import React, { useState } from "react";
import "./Counter.css";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 0,
    counter2: 0
  });

  const{counter1,counter2} = state;

  return (
    <>
      <h1>CounterUno {counter1}</h1>
      <h1>CounterDos {counter2}</h1>
      <hr />
      <button type="button" className="btn btn-primary" onClick={() =>{
          setState({
              ...state,
              counter1: counter1 +1
          });
      }}>
        +1 CounterUno
      </button>
    </>
  );
};
