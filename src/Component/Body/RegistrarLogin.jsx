import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../../utils/registrarApi";
import { showSuccessToast, showErrorToast } from "../../utils/toasts";

const RegistrarLogin = () => {
  const navigate = useNavigate();
  const [cun, setCun] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔐 Already logged in → login page open na ho
  useEffect(() => {
    const token = localStorage.getItem("registrarToken");
    if (token) {
      navigate("/registrarLogin");
    }
  }, [navigate]);

  const login = async () => {
    if (!cun || !password) {
      showErrorToast("Enter all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await loginApi(cun, password);

      // 🔐 Save token
      localStorage.setItem("registrarToken", res.token);

      showSuccessToast("Login successful");

      // 🔐 Direct redirect
      navigate("/registrarDashboard");

    } catch (err) {
      showErrorToast(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-24 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2">
          Candidate Login
        </h2>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Login Id
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg mb-4"
          placeholder="Enter Login Id"
          value={cun}
          onChange={(e) => setCun(e.target.value)}
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-lg mb-6"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white ${
            loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="text-sm text-center text-gray-500 mt-4">
  Don’t have an account?{" "}
  <Link
  to="/DeputyRegistrarSignUp"
    className="text-indigo-600 font-medium hover:underline"
  >
    Sign Up
  </Link>
</p>

        <p className="text-sm text-center text-gray-500 mt-6">
          Forgot password?{" "}
          <button
            onClick={() => navigate("/registrarForgotPassword")}
            className="text-indigo-600 font-medium hover:underline"
          >
            Forgot password
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegistrarLogin;
