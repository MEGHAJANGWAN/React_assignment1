import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [signUp, setSignUp] = useState(false);

  function btnClick() {
    setSignUp((prevState) => !prevState);
  }

  return (
    <div className="login-main-container">
      <div className="login-container">
        <h1>Instagram</h1>
        <div className="input-container">
          {signUp ? (
            <>
              <input type="text" placeholder="Mobile Number or Email" />
              <input type="text" placeholder="Full name" />
              <input type="text" placeholder="Password" />
              <input
                type="text"
                placeholder="Phone number, username, or email"
              />
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Phone number, username, or email"
              />
              <input type="text" placeholder="Password" />
            </>
          )}
          {/* {signUp ? <input type="text" placeholder="Password" /> : null} */}
          <button onClick={btnClick}>
            {signUp ? <p>Sign up</p> : <p> Sign in</p>}
          </button>
        </div>

        <p className="account-heading">
          {signUp ? (
            <p>
              have an account? <span>Log in</span>
            </p>
          ) : (
            <p>
              Don't have account? <span>Sign up</span>
            </p>
          )}
        </p>
      </div>
    </div>
  );
}

export default Login;
