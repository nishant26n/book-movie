import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");
  const handleSubmit = () => {
    const info = { email: email, passw: passw };
    setDataInput([info]);
  };

  return (
    <div className="login-box">
      <div className="login">
        <h2>Movie Booking Login 🍿</h2>
      </div>

      <form onSubmit={handleSubmit} className="login-container">
        <div className="input-field">
          <p>Email</p>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-field">
          <p>Password</p>
          <input
            type="passowrd"
            required
            value={passw}
            onChange={(e) => setPassw(e.target.value)}
          />
        </div>

        <NavLink to="/home">
          <button type="submit" className="login-btn">
            Login
          </button>
        </NavLink>

        <NavLink to="/home">
          <button className="google-btn">Continue with Google</button>
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
