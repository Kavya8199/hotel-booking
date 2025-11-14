import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    bank: "",
    expDate: "",
    cvv: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Navigate to booking confirmation after clicking Pay Now
  const handlePayNow = (e) => {
    e.preventDefault();

    // You can add validation or payment API call here
    console.log("Processing payment...", formData);

    // Redirect to confirmation page
    navigate("/booking-confirmation");
  };

  const handleCancel = () => {
    navigate("/"); // 👈 Go back to Home
  };

  return (
    <div className="flex-1 relative">
      {/* ======== Centered Heading Section ======== */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-primary-blue mb-2">
          Payment Details
        </h2>
        <p className="text-base text-gray-600 italic">
          Kindly follow the instructions below
        </p>
      </div>

      {/* ======== Form Section ======== */}
      <form onSubmit={handlePayNow} className="space-y-6">
        {/* Card Number */}
        <div>
          <label
            htmlFor="cardNumber"
            className="block text-base text-primary-blue mb-2"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="Enter your card number"
            className="w-full h-12 px-4 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Bank */}
        <div>
          <label
            htmlFor="bank"
            className="block text-base text-primary-blue mb-2"
          >
            Bank
          </label>
          <select
            id="bank"
            name="bank"
            value={formData.bank}
            onChange={handleInputChange}
            className="w-full h-12 px-4 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Bank</option>
            <option>Bank of Baroda</option>
            <option>Bank of India</option>
            <option>Bank of Maharashtra</option>
            <option>Canara Bank</option>
            <option>Central Bank of India</option>
            <option>Indian Bank</option>
            <option>Indian Overseas Bank</option>
            <option>Punjab National Bank</option>
            <option>Punjab & Sind Bank</option>
            <option>State Bank of India</option>
            <option>Union Bank of India</option>
            <option>UCO Bank</option>
            <option>Axis Bank</option>
            <option>Bandhan Bank</option>
            <option>Federal Bank</option>
            <option>HDFC Bank</option>
            <option>ICICI Bank</option>
            <option>IDFC FIRST Bank</option>
            <option>IndusInd Bank</option>
            <option>Yes Bank</option>
            <option>Kotak Mahindra Bank</option>
            <option>RBL Bank</option>
            <option>South Indian Bank</option>
            <option>Citibank</option>
            <option>Standard Chartered</option>
            <option>HSBC</option>
            <option>Deutsche Bank</option>
            <option>Barclays Bank</option>
          </select>
        </div>

        {/* Expiration Date */}
        <div>
          <label
            htmlFor="expDate"
            className="block text-base text-primary-blue mb-2"
          >
            Expiration Date
          </label>
          <input
            type="text"
            id="expDate"
            name="expDate"
            value={formData.expDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            className="w-full h-12 px-4 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* CVV */}
        <div>
          <label
            htmlFor="cvv"
            className="block text-base text-primary-blue mb-2"
          >
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="Enter CVV (3 digits)"
            className="w-full h-12 px-4 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center pt-6 space-y-4">
          <button
            type="submit"
            className="w-48 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all"
          >
            Pay Now
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="w-48 py-3 bg-gray-200 text-gray-700 text-lg font-medium rounded-lg hover:bg-gray-300 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
