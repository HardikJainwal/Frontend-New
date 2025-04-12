import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginimage from "../../assets/Image8.png";
import LoginSuccessPopup from "./SucessPopUp";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://dseu-backend.onrender.com/api/v1/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.status === "success") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));
        
        // Set login success to show popup
        setLoginSuccess(true);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message ||
        "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Determine redirect path based on user role
  const getRedirectPath = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const userRole = userData?.user?.designation; 

    switch(userRole) {
      case 'Faculty':
        return '/academics/faculty';
      case 'Training & Placement Officer':
        return '/academics/faculty';
      case 'Executive Engineer':
        return '/academics/faculty';
      case 'Deputy Registrar':
      case 'Assistant Registrar':
        return '/academics/faculty';
      default:
        return '/academics/faculty';
    }
  };

  const handleRedirect = () => {
    navigate(getRedirectPath());
  };

  return (
    <>
      {loginSuccess && (
        <LoginSuccessPopup 
          message="Login Successful!" 
          onComplete={handleRedirect}
        />
      )}
      <div className="flex h-screen">
        <div className="hidden md:flex w-3/5 bg-gray-200">
          <img
            src={loginimage}
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-2/5 flex items-center justify-center">
          <div className="bg-white p-10 shadow-2xl rounded-2xl w-96">
            <h2 className="text-3xl font-extrabold text-center text-[#0073e6] mb-6">
              Faculty Login Portal
            </h2>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 text-lg font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-lg font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white py-3 rounded-lg text-lg font-bold hover:opacity-90 transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#0073e6] to-[#005bb5]"
                }`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;