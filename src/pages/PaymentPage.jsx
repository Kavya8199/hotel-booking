import React from "react";
import PaymentForm from "../components/PaymentForm";

const PaymentPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Payment Details
      </h1>
      <PaymentForm />
    </div>
  );
};

export default PaymentPage;
