import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Client-side validation
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }

    try {
      const result = await axios.post("http://localhost:5001/login", {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      window.localStorage.setItem("username", result.data.username);

      if (result.data.username === "admin") {
        navigate("/");
        window.location.reload();
      } else {
        navigate("/info");
      }
    } catch (error) {
      console.error(error);
      setError("Invalid username or password."); // Server-side error
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className="error">{error}</div>} {/* Display error message */}
        <div className="container">
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
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <center>
          <button className="buttonclick" type="submit">
            Login
          </button>
        </center>
      </form>
    </div>
  );
};

export default Login;
