import React, { useState } from "react"; 
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/password/forgot-password`, // ✅ backend URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Email not found");
      } else {
        toast.success("✅ Password reset email sent successfully!");
        setEmail(""); // clear input
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-8">
      <div className="max-w-[400px] mx-auto w-full">
        <h2 className="text-[24px] font-semibold text-gray-900 mb-2 text-center">
          Forgot Password
        </h2>
        <p className="text-[14px] text-gray-600 mb-6 text-center">
          Enter your registered email to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-[50px] px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full h-[45px] bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
