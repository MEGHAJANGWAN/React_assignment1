import React, { useState } from "react";
import "./Button.css";
function Button({ text, click }) {
  return (
    <div className="btn-container">
      <button onClick={click}>Click here</button>
      <p>{text}</p>
    </div>
  );
}

export default Button;
