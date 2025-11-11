<<<<<<< HEAD
// import React from 'react'
// import BookingDetails from './BookingDetails'
// import PaymentForm from './PaymentForm'
// import ActionButtons from './ActionButtons'

// const PaymentContent = () => {
//   return (
//     <div className="max-w-6xl mx-auto">
//       {/* Title Section */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl font-semibold text-primary-blue mb-4">Payment</h1>
//         <p className="text-lg font-light text-text-gray">Kindly follow the instructions below</p>
//       </div>

//       {/* Main Content */}
//       <div className="flex gap-16 mb-16">
//         <BookingDetails />
//         <PaymentForm />
//       </div>

//       <ActionButtons />
//     </div>
//   )
// }

// export default PaymentContent

























import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentForm from "./PaymentForm";

const PaymentContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;

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

  return (
    <div className="flex flex-col lg:flex-row gap-12 py-10">
      {/* 🏨 Booking Summary */}
      <div className="flex-1 border border-gray-200 rounded-2xl p-6 shadow-md bg-white">
        <h2 className="text-2xl font-semibold text-primary-blue mb-4">
          Booking Summary
        </h2>
        <p className="text-gray-700">
          <strong>Hotel:</strong> {bookingData.hotelName}
        </p>
        <p className="text-gray-700">
          <strong>Check-in:</strong> {bookingData.checkIn}
        </p>
        <p className="text-gray-700">
          <strong>Check-out:</strong> {bookingData.checkOut}
        </p>
        <p className="text-gray-700">
          <strong>Days:</strong> {bookingData.days}
        </p>
        <p className="text-gray-800 text-lg mt-4">
          <strong>Total:</strong>{" "}
          <span className="text-primary-blue font-semibold">
            ₹{bookingData.totalPrice.toLocaleString("en-IN")}
          </span>
        </p>
      </div>

      {/* 💳 Payment Form */}
      <PaymentForm />
    </div>
  );
};

export default PaymentContent;
=======





import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentForm from "./PaymentForm";

const PaymentContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;

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

  return (
    <div className="flex flex-col lg:flex-row gap-12 py-10">
      {/* 🏨 Booking Summary */}
      <div className="flex-1 border border-gray-200 rounded-2xl p-6 shadow-md bg-white">
        <h2 className="text-2xl font-semibold text-primary-blue mb-4">
          Booking Summary
        </h2>
        <p className="text-gray-700">
          <strong>Hotel:</strong> {bookingData.hotelName}
        </p>
        <p className="text-gray-700">
          <strong>Check-in:</strong> {bookingData.checkIn}
        </p>
        <p className="text-gray-700">
          <strong>Check-out:</strong> {bookingData.checkOut}
        </p>
        <p className="text-gray-700">
          <strong>Days:</strong> {bookingData.days}
        </p>
        <p className="text-gray-800 text-lg mt-4">
          <strong>Total:</strong>{" "}
          <span className="text-primary-blue font-semibold">
            ₹{bookingData.totalPrice.toLocaleString("en-IN")}
          </span>
        </p>
      </div>

      {/* 💳 Payment Form */}
      <PaymentForm />
    </div>
  );
};

export default PaymentContent;
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07
