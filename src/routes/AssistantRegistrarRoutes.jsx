import { lazy } from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ForgetPasswordAR from "../Component/Body/AssistantRegistrar/ForgetPasswordAR";

const ARLogin = lazy(() => import("../Component/Body/AssistantRegistrar/ARLogin"));
const AssitantRegistrarResult = lazy(() => import("../Component/Body/AssistantRegistrar/AssitantRegistrarResult"));
const ARdashboard = lazy(() => import("../Component/Body/AssistantRegistrar/ARdashboard"));

export const AssistantRegistrarRoutes = (
  <>
    <Route path="/assistantRegistrarLogin" element={<ARLogin />} />
    <Route path="/assistantRegistrarForgotPassword" element={<ForgetPasswordAR />} />

    {/* 🔒 PROTECTED ROUTES */}
    <Route
      path="/AssistantRegistrarSignUp"
      element={<AssitantRegistrarResult />}
    />

    <Route
      path="/assistantRegistrarDashboard"
      element={
        <ProtectedRoute>
          <ARdashboard />
        </ProtectedRoute>
      }
    />
  </>
);