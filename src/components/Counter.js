import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    count < 1 ? setCount(0) : setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>React Counter App</h1>
      <div className="count">{count}</div>
      <div className="control">
        <button type="button" className="increment" onClick={handleIncrement}>
          Increment
        </button>
        <button type="button" className="decrement" onClick={handleDecrement}>
          Decrement
        </button>
        <button type="button" className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
