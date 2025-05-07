import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost/react-auth/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.status === "success") {
      localStorage.setItem("user", data.user);
      onLogin();
      navigate("/");
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="text-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2609/2609282.png"
            alt="Login"
            style={{ width: "70px" }}
          />
          <h3 className="mt-2">Login</h3>
        </div>
        {message && (
          <div
            className="alert alert-danger alert-dismissible fade show mt-3"
            role="alert"
          >
            {message}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setMessage("")}
            ></button>
          </div>
        )}
        <form onSubmit={handleLogin}>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
