import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLoginView.css";

const AdminLoginView = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://exchangers.site/api/exchangers/v1/admin/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      navigate("/location");
    } catch (error) {
      alert("Admin account does not exist or does not have permission.");
    }
  };

  return (
    <div className="admin-login-container">
      <h1 className="admin-login-title">Exchangers Admin</h1>
      <div className="admin-login-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Eamil"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default AdminLoginView;
