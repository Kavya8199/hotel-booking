
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // ✅ correct named import
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Input Field Component
const InputField = ({ label, placeholder, value, onChange, type = "text" }) => (
  <div className="w-full">
    <label className="block text-[16px] font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full h-[52px] px-4 text-[17px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
    />
  </div>
);

// ✅ Password Field Component
const PasswordField = ({ label, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <label className="block text-[16px] font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          className="w-full h-[52px] px-4 pr-12 text-[17px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

// ✅ Main LoginForm Component
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  // 🔹 Regular login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Login failed!", { position: "top-center" });
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("✅ Login successful!", { position: "top-center" });

      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      toast.error("Something went wrong! Please try again.", { position: "top-center" });
    }
  };

  // 🔹 Google Login
  const handleGoogleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    const googleUser = jwtDecode(token);

    try {
      const res = await fetch(`${API_URL}/api/auth/google-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          name: googleUser.name,
          email: googleUser.email,
          picture: googleUser.picture,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Google login failed!", { position: "top-center" });
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("✅ Google login successful!", { position: "top-center" });

      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      toast.error("Google login error. Try again!", { position: "top-center" });
    }
  };

  const handleGoogleError = () => {
    toast.error("Google Login Failed. Please try again.", { position: "top-center" });
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-8">
      <ToastContainer />
      <div className="max-w-[500px] mx-auto w-full">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-[24px] font-semibold text-gray-900 mb-1">
            Welcome Back
          </h2>
          <p className="text-[13px] text-gray-600">Please login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <PasswordField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(value) => setPassword(value)}
          />

          <div className="flex justify-end pt-1">
            <button
              type="button"
              className="text-[13px] text-blue-600 hover:underline"
              onClick={() => navigate("/forgot-password")} // ✅ added navigation
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full h-[44px] bg-blue-600 text-white text-[15px] font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Login
          </button>

          {/* Divider */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 text-[13px]">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Login */}
          <div className="flex justify-center">
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
          </div>

          <p className="text-[12px] text-gray-600 text-center mt-5">
            By logging in, you agree to our{" "}
            <button type="button" className="text-blue-600 hover:underline">
              Terms & Conditions
            </button>
          </p>

          <div className="text-center mt-5 pt-4 border-t border-gray-200">
            <p className="text-[14px] text-gray-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="text-blue-600 font-semibold hover:underline"
              >
                Create Account
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

