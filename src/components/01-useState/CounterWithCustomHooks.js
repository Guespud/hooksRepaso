import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./Counter.css";

export const CounterWithCustomHooks = () => {
    
  const { state, increment, decrement } = useCounter();

  return (
    <>
      <h1>Counter with hook: {state}</h1>
      <hr />
      <button className="btn btn-warning">+1</button>
      &nbsp;
      <button className="btn btn-warning">-1</button>
    </>
  );
};
