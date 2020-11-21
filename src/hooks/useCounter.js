import { useState } from "react";

export const useCounter = (initialState ) => {
  const [state, setstate] = useState(initialState = 10);

  const increment = (factor = 1) => {
    setstate(state + factor);
  };

  const reset = () => {
    setstate(initialState);
  };

  const decrement = (factor = 1) => {
    if (state === 10) {
      alert("El valor minimo es 10 ");
      return;
    }
    setstate(state - factor);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};
