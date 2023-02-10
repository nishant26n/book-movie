import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");

  const handleSubmit = () => {
    const info = { email: email, passw: passw };
    setDataInput([info]);
    console.log(info);
  };

  return (
    <div className="login-box">
      <div className="login">
        <h2>Movie Booking Login 🍿</h2>
      </div>

      <form
        onSubmit={(event) => event.preventDefault()}
        className="login-container"
      >
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
            type="password"
            required
            value={passw}
            onChange={(e) => setPassw(e.target.value)}
          />
        </div>

        <Link to="/home">
          <button onClick={handleSubmit} type="submit" className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/home">
          <button className="google-btn">Continue with Google</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
