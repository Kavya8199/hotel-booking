import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // 1 = enter email, 2 = token + new password
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  // Step 1 → send reset token
  const handleSendToken = async () => {
    if (!email) return toast.error("Please enter your email!");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/password/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) toast.error(data.message);
      else {
        toast.success("✅ Reset token sent! Check your email.");
        setStep(2);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Step 2 → reset password
  const handleResetPassword = async () => {
    if (!token || !password || !confirmPassword) return toast.error("All fields are required!");
    if (password !== confirmPassword) return toast.error("Passwords do not match!");
    if (password.length < 6) return toast.error("Password must be at least 6 characters long.");

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/password/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (!res.ok) toast.error(data.message);
      else {
        toast.success(data.message);
        setStep(1);
        setEmail(""); setToken(""); setPassword(""); setConfirmPassword("");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-8">
      <ToastContainer />
      <div className="max-w-[400px] mx-auto w-full">
        {step === 1 ? (
          <>
            <h2 className="text-center text-2xl font-semibold">Forgot Password</h2>
            <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}
              className="w-full h-12 px-4 border rounded mb-4"/>
            <button onClick={handleSendToken} disabled={loading} className="w-full h-12 bg-blue-600 text-white rounded">
              {loading ? "Sending..." : "Send Reset Token"}
            </button>
          </>
        ) : (
          <>
            <h2 className="text-center text-2xl font-semibold">Reset Password</h2>
            <input type="text" placeholder="Token" value={token} onChange={e=>setToken(e.target.value)}
              className="w-full h-12 px-4 border rounded mb-4"/>
            <input type="password" placeholder="New Password" value={password} onChange={e=>setPassword(e.target.value)}
              className="w-full h-12 px-4 border rounded mb-4"/>
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}
              className="w-full h-12 px-4 border rounded mb-4"/>
            <button onClick={handleResetPassword} disabled={loading} className="w-full h-12 bg-blue-600 text-white rounded">
              {loading ? "Updating..." : "Reset Password"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
