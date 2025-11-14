import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentForm from "./PaymentForm";

const PaymentContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;

  // 🛡️ Safe formatter function
  const formatPrice = (value) => {
    const num = Number(value);
    return isNaN(num) ? "₹0" : `₹${num.toLocaleString("en-IN")}`;
  };

  if (!bookingData) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-gray-600 mb-4">
          No booking details found.
        </h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  // 🧩 Extract safely
  const {
    hotelName = "Unknown Hotel",
    checkIn = "-",
    checkOut = "-",
    days = 0,
    totalPrice = 0,
  } = bookingData;

  return (
    <div className="flex flex-col lg:flex-row gap-12 py-10">
      {/* 🏨 Booking Summary */}
      <div className="flex-1 border border-gray-200 rounded-2xl p-6 shadow-md bg-white">
        <h2 className="text-2xl font-semibold text-primary-blue mb-4">
          Booking Summary
        </h2>

        <p className="text-gray-700">
          <strong>Hotel:</strong> {hotelName}
        </p>
        <p className="text-gray-700">
          <strong>Check-in:</strong> {checkIn}
        </p>
        <p className="text-gray-700">
          <strong>Check-out:</strong> {checkOut}
        </p>
        <p className="text-gray-700">
          <strong>Days:</strong> {days}
        </p>

        <p className="text-gray-800 text-lg mt-4">
          <strong>Total:</strong>{" "}
          <span className="text-primary-blue font-semibold">
            {formatPrice(totalPrice)}
          </span>
        </p>
      </div>

      {/* 💳 Payment Form */}
      <PaymentForm />
    </div>
  );
};

export default PaymentContent;
