import React, { useState } from "react";
import axios from "axios";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Login
        const res = await axios.post(
          "https://zerodha-backend-tnwb.onrender.com/api/auth/login",
          {
            email: user.email,
            password: user.password,
          }
        );

        if (res.data) {
          alert("Login Successful");
          window.location.href = "https://6a6e231c60926ec66e2023a9--dreamy-muffin-1f4691.netlify.app/home";
        }
      } else {
        // Signup
        const res = await axios.post(
          "https://zerodha-backend-tnwb.onrender.com/api/auth/signup",
          user
        );

        if (res.data) {
          alert("Signup Successful! Please login.");
          setIsLogin(true);
        }
      }
    } catch (err) {
      alert(isLogin ? "Invalid Email or Password" : "Signup Failed");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#387ed1" }}>
          {isLogin ? "Login" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={user.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{
              border: "none",
              background: "none",
              color: "#387ed1",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {isLogin ? " Sign Up" : " Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "15px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  background: "#387ed1",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};