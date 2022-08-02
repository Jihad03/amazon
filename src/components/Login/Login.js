import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form>
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="Enter your email"
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Login" className="btn" />
      </form>
      <p>
        New to Amazon? <Link to="/register">Create Account</Link>
      </p>
      <p>---------- Or ----------</p>
      <button onClick={signInWithGoogle} className="btn google-btn">
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
