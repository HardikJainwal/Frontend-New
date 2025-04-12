import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../utils/apiservice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("adminLogin");
    const role = sessionStorage.getItem("currentRole");

    if(token !== null && role === 'Admin') {
      navigate('/admin/dashboard');
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
    <div className="min-h-[50vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1c1c1c] p-6 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-white text-2xl font-bold mb-4 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 rounded bg-[#333] text-white focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 rounded bg-[#333] text-white focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full py-2 rounded bg-blue-500 text-white hover:bg-white hover:text-blue-500 transition-colors font-semibold"
        >
          {mutation.isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
