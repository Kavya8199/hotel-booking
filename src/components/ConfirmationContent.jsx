import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmationContent = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // 🏠 Navigate to Home
  };

  const handleGoToDashboard = () => {
    // 🧩 Get current booking details (saved earlier during booking)
    const currentBooking = JSON.parse(localStorage.getItem("currentBooking"));

    if (currentBooking) {
      // ✅ Update status to confirmed
      currentBooking.status = "Confirmed";

      // 🧾 Get existing bookings from localStorage
      const existingBookings = JSON.parse(localStorage.getItem("userBookings")) || [];

      // ➕ Add the new booking
      existingBookings.push(currentBooking);

      // 💾 Save updated booking list
      localStorage.setItem("userBookings", JSON.stringify(existingBookings));

      // 🧹 Clear temporary booking data
      localStorage.removeItem("currentBooking");
    }

    // 🔄 Go to user dashboard
    navigate("/user-dashboard");
  };

  return (
    <main className="flex flex-col items-center px-4 py-12">
      {/* Stepper */}
      <div className="w-[280px] h-[60px] mb-12">
        <img
          src="https://static.codia.ai/image/2025-10-27/MyOS0BcaM2.png"
          alt="Booking Steps"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-dark-blue text-4xl font-semibold leading-[54px] text-center mb-20">
        Payment Completed Successfully
      </h1>

      {/* Confirmation Image */}
      <div className="w-[362px] h-[330px] mb-8">
        <img
          src="https://static.codia.ai/image/2025-10-27/QanXbFDoGK.png"
          alt="Payment Confirmation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Information Message */}
      <p className="text-primary-blue text-lg font-light leading-[27px] text-center mb-12 max-w-md">
        Please check your email & phone messages.
        <br />
        We have sent all the booking information.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col items-center space-y-2">
        <button
          onClick={handleBackToHome}
          className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg transition-colors hover:bg-blue-800"
        >
          Back to Home
        </button>

        <button
          onClick={handleGoToDashboard}
          className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg transition-colors hover:bg-blue-800"
        >
          Go to User Dashboard
        </button>
      </div>
    </main>
  );
};

export default ConfirmationContent;
