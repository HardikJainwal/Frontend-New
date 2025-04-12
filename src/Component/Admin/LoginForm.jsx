import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../utils/apiservice";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/DSEULogo/DSEULOGOTHICK.svg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("adminLogin");
    const role = sessionStorage.getItem("currentRole");

    if (token !== null && role === "Admin") {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/admin/test");
    },
    onError: () => {
      alert("Invalid credentials");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 md:p-10"
      >
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-20 h-auto" />
        </div>

        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Admin Login
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-blue-600 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-blue-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full py-2 rounded-lg bg-blue-600 hover:bg-orange-400 text-white font-semibold transition-colors duration-300"
        >
          {mutation.isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
