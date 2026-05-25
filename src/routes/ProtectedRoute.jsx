import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("registrarToken");

  // login nahi → login page
  if (!token) {
    return <Navigate to="/registrarLogin" replace />;
  }

  return children;
};

export default ProtectedRoute;
