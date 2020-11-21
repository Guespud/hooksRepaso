import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./Counter.css";

export const CounterWithCustomHooks = () => {
    
  const { state, increment, decrement,reset } = useCounter();

  return (
    <>
      <h1>Counter with hook: {state}</h1>
      <hr />
      <button onClick={() => increment() } className="btn btn-warning">+1</button>
      <button onClick={() => reset() } className="btn btn-warning">Reset</button>
      &nbsp;
      <button  onClick={() => decrement() } className="btn btn-warning">-1</button>
    </>
  );
};
