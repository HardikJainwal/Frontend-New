import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// REQUEST INTERCEPTOR → token auto attach
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("registrarToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// RESPONSE INTERCEPTOR → unauthorized auto logout
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("registrarToken");
      window.location.href = "/registrarLogin";
    }
    return Promise.reject(error);
  }
);

// SEND OTP
export const sendOtpApi = async (uniqueNo) => {
  return API.post("/assistantRegistrar/auth/send-otp", { uniqueNo });
};

// LOGIN
export const loginApi = async (uniqueNo, password) => {
  const res = await API.post("/assistantRegistrar/auth/login", { uniqueNo, password });
  return res.data;
};


// VERIFY OTP
export const verifyOtpApi = async (uniqueNo, otp) => {
  const res = await API.post("/assistantRegistrar/auth/verify-otp", { uniqueNo, otp });
  return res.data;
};

// SET PASSWORD
export const setPasswordApi = async (uniqueNo, password) => {
  const res = await API.post("/assistantRegistrar/auth/set-password", { uniqueNo, password });
  return res.data;
};

// FORGOT PASSWORD
export const forgotPasswordApi = async (uniqueNo) => {
  const res = await API.post("/assistantRegistrar/auth/forgot-password", { uniqueNo });
  return res.data;
};

// VERIFY FORGOT OTP
export const verifyForgotOtpApi = async (uniqueNo, otp) => {
  const res = await API.post("/assistantRegistrar/auth/verify-forget-password-otp", { uniqueNo, otp });
  return res.data;
};

// RESET PASSWORD
export const resetPasswordApi = async (uniqueNo, newPassword) => {
  const res = await API.post("/assistantRegistrar/auth/reset-password", { uniqueNo, newPassword });
  return res.data;
};


// GET RESULT
export const getResultApi = async () => {
  const token = localStorage.getItem("registrarToken");

  const res = await API.get("/assistantRegistrar/user/result", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

// ADMIN - Seed students + Part B (Excel upload)
export const seedPartBExcelApi = async (file) => {
  const token = sessionStorage.getItem("token");
  const formData = new FormData();
  formData.append("file", file);

  const res = await API.post("/assistantRegistrar/admin/seed", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// ADMIN - Update Part A (Excel upload)
export const updatePartAExcelApi = async (file) => {
  const token = sessionStorage.getItem("token");
  const formData = new FormData();
  formData.append("file", file);

  const res = await API.patch("/assistantRegistrar/admin/update-part-a", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};