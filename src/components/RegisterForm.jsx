import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Reusable Input Field
const FormField = ({ label, placeholder, type = "text", value, onChange, error }) => {
  return (
    <div className="space-y-2">
      <label className="block text-[14px] font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full h-[50px] px-4 text-[15px] border-2 ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
      />
      {error && <p className="text-red-500 text-[13px] mt-1">{error}</p>}
    </div>
  );
};

// ✅ Password Field
const PasswordField = ({ label, placeholder, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-[14px] font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full h-[50px] px-4 pr-12 text-[15px] border-2 ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {error && <p className="text-red-500 text-[13px] mt-1">{error}</p>}
    </div>
  );
};

// ✅ Register Form
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.username.trim()) newErrors.username = "Username is required";

    // ✅ Updated Password Validation (includes special character)
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(formData.password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      window.scrollTo({ top: 0, behavior: "smooth" });
      toast.error("Please fix the highlighted errors");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Registration failed");
        return;
      }

      toast.success("🎉 Registration successful! Please login.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        username: "",
        password: "",
      });

      setTimeout(() => navigate("/login"), 2500);
    } catch (error) {
      toast.error("Server connection failed");
    }
  };

  const handleLoginClick = () => navigate("/login");

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-8">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-[500px] mx-auto w-full">
        <div className="mb-6 text-center">
          <h2 className="text-[28px] font-semibold leading-[1.2] text-gray-900 mb-1">
            <span style={{ color: "#3256EB" }}>Create</span> Account
          </h2>
          <p className="text-[14px] text-gray-600">Join us today and get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(v) => handleInputChange("name", v)}
            error={errors.name}
          />
          <FormField
            label="Email"
            placeholder="name@gmail.com"
            type="email"
            value={formData.email}
            onChange={(v) => handleInputChange("email", v)}
            error={errors.email}
          />
          <FormField
            label="Phone Number"
            placeholder="With Country Code"
            value={formData.phone}
            onChange={(v) => handleInputChange("phone", v)}
            error={errors.phone}
          />
          <FormField
            label="Country"
            placeholder="Country Name"
            value={formData.country}
            onChange={(v) => handleInputChange("country", v)}
            error={errors.country}
          />
          <FormField
            label="Username"
            placeholder="Choose a username"
            value={formData.username}
            onChange={(v) => handleInputChange("username", v)}
            error={errors.username}
          />
          <PasswordField
            label="Password"
            placeholder="8+ characters (uppercase, lowercase, number, special)"
            value={formData.password}
            onChange={(v) => handleInputChange("password", v)}
            error={errors.password}
          />

          <p className="text-[13px] leading-[1.5] text-gray-600 pt-2">
            By signing up, you agree to our{" "}
            <button type="button" className="text-blue-600 hover:underline">
              Terms & Conditions
            </button>
          </p>

          <button
            type="submit"
            className="w-full h-[50px] bg-blue-600 text-white text-[16px] font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>

          <div className="text-center mt-6 pt-4 border-t border-gray-200">
            <p className="text-[15px] text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={handleLoginClick}
                className="text-blue-600 font-semibold hover:underline transition-all"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
