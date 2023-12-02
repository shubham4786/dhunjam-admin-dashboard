import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/api";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginAdmin(username, password);

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("adminId", response.data.data.id);
        navigate("/dashboard");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred during login", error);
    }
  };

  return (
    <div style={mainStyle}>
      <div
        style={{
          ...mainStyle,
          width: "600px",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <h1 style={{ padding: "10px" }}>Venue Admin Login</h1>
        <div style={{ padding: "10px" }}>
          <input
            style={inputStyle}
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <input
            style={inputStyle}
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <button
            style={{
              ...inputStyle,
              width: "600px",
              backgroundColor: "#6741D9",
              border: "1px solid #6741D9",
              cursor: "pointer",
            }}
            onClick={handleLogin}
          >
            Sign in
          </button>
        </div>
        <div>
          <button
            style={{ border: "none", fontSize: "16px", cursor: "pointer" }}
          >
            New Registration ?
          </button>
        </div>
      </div>
    </div>
  );
};

const mainStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const inputStyle = {
  padding: "10px",
  width: "576px",
  borderRadius: "10px",
  border: "1px solid #ffffff",
  fontSize: "16px",
};

export default Login;
