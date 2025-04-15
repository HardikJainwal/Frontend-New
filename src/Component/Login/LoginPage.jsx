import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import loginimage from "../../assets/Image8.png";
import LoginSuccessPopup from "./SucessPopUp";
import { login } from "../../utils/apiservice";
import { showErrorToast, showSuccessToast } from "../../utils/toasts";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   const role = sessionStorage.getItem("currentRole");

  //   if (token && role) {
  //     showSuccessToast("You are already logged in!");
  //     setTimeout(() => navigate(getRedirectPath()), 1500);
  //   }
  // }, []);

  const mutation = useMutation({
    mutationFn: () => login({ email, password, emailFlag: true }),
    onSuccess: () => {
      setLoginSuccess(true);
    },
    onError: (error) => {
      console.error("Login error:", error);
      showErrorToast(
        error?.response?.data?.message || "Login failed. Please try again."
      );
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  const getRedirectPath = () => {
    const role = sessionStorage.getItem("currentRole");
    switch (role) {
      case "Test":
      case "Faculty":
      case "Training & Placement Officer":
      case "Executive Engineer":
      case "Deputy Registrar":
      case "Assistant Registrar":
        return "/academics/faculty";
      default:
        return "/academics/faculty";
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
                disabled={mutation.isPending}
                className={`w-full text-white py-3 rounded-lg text-lg font-bold hover:opacity-90 transition ${
                  mutation.isPending
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#0073e6] to-[#005bb5]"
                }`}
              >
                {mutation.isPending ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
