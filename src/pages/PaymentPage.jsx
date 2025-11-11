import React from "react";
import PaymentForm from "../components/PaymentForm";
import { useLocation, Navigate } from "react-router-dom";

const PaymentPage = () => {
  const { state } = useLocation();
  // Redirect if opened directly without booking data
  if (!state?.booking) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">Payment Details</h1>
      <PaymentForm />
    </div>
  );
};

export default PaymentPage;
