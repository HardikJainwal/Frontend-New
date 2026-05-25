import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  sendOtpApi,
  verifyOtpApi,
  setPasswordApi,
} from "../../utils/registrarApi";

import { showSuccessToast, showErrorToast } from "../../utils/toasts";

const ResultRegistrar = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [cun, setCun] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // SEND OTP
  const sendOtp = async () => {
    if (!cun.trim()) {
      showErrorToast("Enter valid Login Id");
      return;
    }

    try {
      setLoading(true);
      await sendOtpApi(cun);
      showSuccessToast("OTP sent successfully");
      setStep(2);
    } catch (err) {
      showErrorToast(err?.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const verifyOtp = async () => {
    if (otp.length !== 6) {
      showErrorToast("Enter valid OTP");
      return;
    }

    try {
      setLoading(true);
      await verifyOtpApi(cun, otp);
      showSuccessToast("OTP verified successfully");
      setStep(3);
    } catch (err) {
      showErrorToast(err?.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  // SET PASSWORD
  const setNewPassword = async () => {
    if (password.length < 8) {
      showErrorToast("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      showErrorToast("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await setPasswordApi(cun, password);
      showSuccessToast("Password created successfully");

      setTimeout(() => {
        navigate("/registrarLogin");
      }, 1200);

    } catch (err) {
      showErrorToast(err?.response?.data?.message || "Failed to set password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-36 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2">
          Candidate Sign Up
        </h2>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <label className="block text-sm mb-1">Login ID</label>
            <input
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your CUN ID"
              value={cun}
              onChange={(e) => setCun(e.target.value)}
            />

            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full mt-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>

            <div
              onClick={() => navigate("/registrarLogin")}
              className="mt-4 text-center text-sm text-gray-500 cursor-pointer"
            >
              <p>
                Already registered?{" "}
                <span className="text-indigo-600">Login</span>
              </p>
            </div>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <label className="block text-sm mb-1">Enter OTP</label>
            <input
              maxLength={6}
              className="w-full px-4 py-2 border rounded-lg text-center"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full mt-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
          <p className="text-xs text-yellow-600 border border-yellow-600 p-2 rounded-md mb-2">
  Password must be at least 8 characters and include uppercase, lowercase, number and special character.
</p>
            <label className="block text-sm mb-1">New Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              onClick={setNewPassword}
              disabled={loading}
              className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg"
            >
              {loading ? "Creating..." : "Create Password"}
            </button>
            <div
              onClick={() => navigate("/registrarLogin")}
              className="mt-4 text-center text-sm text-gray-500 cursor-pointer"
            >
              <p>
                Already registered?{" "}
                <span className="text-indigo-600">Login</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultRegistrar;
