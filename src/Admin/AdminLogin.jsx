import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@ticketbook.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("adminLoggedIn", "true");

      alert("Admin Login Successful!");

      navigate("/admin/dashboard");
    } else {
      setError("Invalid admin email or password.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Admin Login</h1>

        <p>Login to manage TicketBook</p>

        {error && (
          <p className="error-message">{error}</p>
        )}

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter admin email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
            />
          </div>

          <button
            type="submit"
            className="auth-btn"
          >
            Admin Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default AdminLogin;