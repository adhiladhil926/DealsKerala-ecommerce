import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/Admin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 window.scrollTo(0, 0);

  const login = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/auth/login`,
  { email, password }
);


      if (res.data.role === "admin") {
        localStorage.setItem("token", res.data.token);
        navigate("/admin/products");
      } else {
        alert("You are not an admin!");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
   
    <div className="admin-login-page">
      <div className="login-card" role="form" aria-label="Admin login">
        <div className="login-head">
          <div className="brand-dot">A</div>
          <div>
            <div className="login-title">Admin Panel</div>
            <div className="login-sub">Secure admin login to manage products</div>
          </div>
        </div>

        <div className="form-row">
          <input
            className="input"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="email"
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="password"
            onKeyDown={(e) => { if (e.key === "Enter") login(); }}
          />
        </div>

        <div className="actions">
          <button className="primary-btn" onClick={login} disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>

        <div className="tiny">Use your administrator credentials to proceed.</div>
      </div>
    </div>
    </>
  );
}
