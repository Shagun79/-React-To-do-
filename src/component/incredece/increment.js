import React, { useState } from "react";

import "./increment.css";

let Counter = () => {
  const [counter, setCounter] = useState(0);


  

  let Inc = () => {
    setCounter(counter+ 1);
  };

  let Dec = () => {
    setCounter(counter- 1);
  };

  return (
    <>
      <h1> Increment and Decrement</h1>
      <button onClick={Inc}>+</button>
      <h1>{counter}</h1>

      <button onClick={Dec}>-</button>
    </>
  );
};
export default Counter;
