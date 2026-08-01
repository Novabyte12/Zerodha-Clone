import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({
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
      const res = await axios.post(
        "https://zerodha-backend-tnwb.onrender.com/api/auth/login",
        user
      );

      if (res.data) {
        alert("Login Successful");
        window.location.href = "https://soft-sherbet-559c01.netlify.app";
      }
    } catch (err) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}