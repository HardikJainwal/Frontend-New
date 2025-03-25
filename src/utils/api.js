import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1", // Keep this if your backend uses /api/v1 prefix
  timeout: 10000, // Add a timeout for better error handling
});

// Add request interceptor to include Authorization header dynamically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;