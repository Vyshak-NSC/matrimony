import React from "react";
import "./cssfiles/login.css";


function Login() {
  return (
    <div>
      <div className="login-container">
      <form>
          <h2>Login</h2>
          <div className="name">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" style={{ marginLeft: '5px' }} />
          </div>
          <div className="password">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" style={{ marginLeft: '5px' }} />
          </div>
          <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;