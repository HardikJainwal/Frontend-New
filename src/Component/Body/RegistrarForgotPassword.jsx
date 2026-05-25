import React, { useState } from "react";
import {
  forgotPasswordApi,
  verifyForgotOtpApi,
  resetPasswordApi,
} from "../../utils/registrarApi";

import { showSuccessToast, showErrorToast } from "../../utils/toasts";

const RegistrarForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [uniqueNo, setUniqueNo] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // SEND OTP
  const sendOtp = async () => {
    if (!uniqueNo.trim()) {
      showErrorToast("Enter login ID");
      return;
    }

    try {
      setLoading(true);
      await forgotPasswordApi(uniqueNo);
      showSuccessToast("OTP sent to registered mobile/email");
      setStep(2);
    } catch (err) {
      showErrorToast(err?.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const verifyOtp = async () => {
    if (!otp.trim()) {
      showErrorToast("Enter OTP");
      return;
    }

    try {
      setLoading(true);
      await verifyForgotOtpApi(uniqueNo, otp);
      showSuccessToast("OTP verified successfully");
      setStep(3);
    } catch (err) {
      showErrorToast(err?.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // RESET PASSWORD
  const resetPassword = async () => {
    if (!newPassword.trim()) {
      showErrorToast("Enter new password");
      return;
    }

    if (newPassword.length < 8) {
      showErrorToast("Password must be at least 8 characters");
      return;
    }

    try {
      setLoading(true);
      await resetPasswordApi(uniqueNo, newPassword);
      showSuccessToast("Password reset successful");

      setTimeout(() => {
        window.location.href = "/registrarLogin";
      }, 1200);
    } catch (err) {
      showErrorToast(err?.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Forgot Password
        </h2>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <input
              className="w-full px-4 py-2 border rounded-lg mb-4"
              placeholder="Enter Login ID"
              value={uniqueNo}
              onChange={(e) => setUniqueNo(e.target.value)}
            />

            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full py-2 bg-indigo-600 text-white rounded-lg"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <input
              className="w-full px-4 py-2 border rounded-lg mb-4"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full py-2 bg-indigo-600 text-white rounded-lg"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg mb-4"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <button
              onClick={resetPassword}
              disabled={loading}
              className="w-full py-2 bg-green-600 text-white rounded-lg"
            >
              {loading ? "Updating..." : "Reset Password"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrarForgotPassword;
