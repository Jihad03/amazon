import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div className="register-form-container">
      <h2>Register</h2>
      <form>
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="Enter your Email"
        />
        <br />
        <input
          type="password"
          name="Password"
          id="password"
          placeholder="Password"
        />
        <br />
        <input
          type="password"
          name="confirmPass"
          id="confirmPass"
          placeholder="Re-enter Password"
        />
        <br />
        <input type="submit" value="Register" className="btn" />
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <p>---------- Or ----------</p>
      <button onClick={signInWithGoogle} className="btn google-btn">
        Continue with Google
      </button>
    </div>
  );
};

export default Register;
