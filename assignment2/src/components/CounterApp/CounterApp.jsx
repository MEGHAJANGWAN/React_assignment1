import React, { useState } from "react";
import "./CounterApp.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <div className="counter-app-main-container">
      <div className="counter-app-container">
        <h1 className="count-heading">{count}</h1>
        <div className="counter-app-btn-container">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
