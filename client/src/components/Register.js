import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Client-side validation
    if (!username || !email || !password || !mobile) {
      setError("All fields are required.");
      return;
    }

    try {
      await axios.post(`http://localhost:5001/register`, {
        username,
        email,
        password,
        mobile,
      });
      alert("Registration Completed! Now login.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError("Registration failed. Please try again."); // Server-side error
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <div className="error">{error}</div>} {/* Display error message */}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
          />
        </div>
        <center>
          <button className="buttonclick" type="submit">
            Register
          </button>
        </center>
      </form>
    </div>
  );
};

export default Register;
