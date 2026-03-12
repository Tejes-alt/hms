import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Create default accounts if not exist
  useEffect(() => {

    const users = JSON.parse(localStorage.getItem("users"));

    if (!users) {

      const defaultUsers = [

        {
          email: "doctor@gmail.com",
          password: "doctor123",
          role: "DOCTOR"
        },

        {
          email: "patient@gmail.com",
          password: "patient123",
          role: "PATIENT"
        }

      ];

      localStorage.setItem("users", JSON.stringify(defaultUsers));

    }

  }, []);

  const handleLogin = async (e) => {

    e.preventDefault();

    await new Promise((resolve) => setTimeout(resolve, 500));

    // ADMIN LOGIN
    if (email === "admin@gmail.com" && password === "admin") {

      const adminUser = {
        email: "admin@gmail.com",
        role: "ADMIN"
      };

      localStorage.setItem(
        "currentUser",
        JSON.stringify(adminUser)
      );

      navigate("/admin");
      return;
    }

    // NORMAL USERS LOGIN
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    if (user.role === "DOCTOR")
      navigate("/doctor");

    else if (user.role === "PATIENT")
      navigate("/patient");

  };

  return (
    <div className="auth-wrapper">

      <div className="auth-container">

        <h2>Login</h2>

        <form className="auth-form" onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="auth-btn">
            Login
          </button>

        </form>

        <p className="switch-auth">
          Don’t have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </div>

    </div>
  );

};

export default Login;
