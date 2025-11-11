import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [token, setToken] = useState(""); // token from email
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const handleResetPassword = async () => {
    if (!token || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/password/reset-password`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }), // token in body
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Password reset failed!");
      } else {
        toast.success("✅ Password reset successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-8">
      <ToastContainer />
      <div className="max-w-[400px] mx-auto w-full">
        <h2 className="text-[24px] font-semibold text-gray-900 mb-2 text-center">
          Reset Password
        </h2>
        <p className="text-[14px] text-gray-600 mb-6 text-center">
          Enter the token you received in email and set your new password.
        </p>

        {/* Token */}
        <input
          type="text"
          placeholder="Enter reset token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
          className="w-full h-[50px] px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
        />

        {/* New Password */}
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full h-[50px] px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full h-[50px] px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <button
          onClick={handleResetPassword}
          disabled={loading}
          className="w-full h-[45px] bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
        >
          {loading ? "Updating..." : "Reset Password"}
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
