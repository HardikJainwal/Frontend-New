import { lazy } from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import RegistrarForgotPassword from "../Component/Body/RegistrarForgotPassword";

const RecruitmentRules = lazy(() => import("../Component/Administration/RecruitmentRules"));
const JobPortal = lazy(() => import("../Component/Body/JobPortal"));
const ResultRegistrar = lazy(() => import("../Component/Body/ResultRegistrar"));
const RegistrarLogin = lazy(() => import("../Component/Body/RegistrarLogin"));
const RegistrarDashboard = lazy(() => import("../Component/Body/RegistrarDashboard"));

export const workWithUsRoutes = (
  <>
    {/* PUBLIC ROUTES */}
    <Route path="recruitment-rules" element={<RecruitmentRules />} />
    <Route path="/recruitment" element={<JobPortal />} />
    <Route path="/registrarLogin" element={<RegistrarLogin />} />
    <Route path="/registrarForgotPassword" element={<RegistrarForgotPassword />} />

    {/* 🔒 PROTECTED ROUTES */}
    <Route
      path="/DeputyRegistrarSignUp"
      element={
        // <ProtectedRoute>
          <ResultRegistrar />
        // </ProtectedRoute>
      }
    />

    <Route
      path="/registrarDashboard"
      element={
        <ProtectedRoute>
          <RegistrarDashboard />
        </ProtectedRoute>
      }
    />
  </>
);
