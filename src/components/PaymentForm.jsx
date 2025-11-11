// import React, { useState } from 'react'

// const PaymentForm = () => {
//   const [formData, setFormData] = useState({
//     cardNumber: '',
//     bank: '',
//     expDate: '',
//     cvv: ''
//   })

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   return (
//     <div className="flex-1">
//       {/* Vertical divider */}
//       <div className="absolute left-1/2 transform -translate-x-px w-px h-64 bg-border-gray"></div>
      
//       <form className="space-y-6">
//         {/* Card Number */}
//         <div>
//           <label htmlFor="cardNumber" className="block text-base text-primary-blue mb-2">
//             Card Number
//           </label>
//           <input
//             type="text"
//             id="cardNumber"
//             name="cardNumber"
//             value={formData.cardNumber}
//             onChange={handleInputChange}
//             placeholder="Payment card number"
//             className="w-full h-11 px-4 bg-light-gray rounded border-0 text-base placeholder-placeholder-gray focus:outline-none focus:ring-2 focus:ring-accent-blue"
//           />
//         </div>

//         {/* Bank */}
//         <div>
//           <label htmlFor="bank" className="block text-base text-primary-blue mb-2">
//             Bank
//           </label>
//           <select
//             id="bank"
//             name="bank"
//             value={formData.bank}
//             onChange={handleInputChange}
//             className="w-full h-11 px-4 bg-light-gray rounded border-0 text-base text-placeholder-gray focus:outline-none focus:ring-2 focus:ring-accent-blue appearance-none"
//           >
//             <option value="">Select Bank</option>
//             <option value="bank1">Bank 1</option>
//             <option value="bank2">Bank 2</option>
//             <option value="bank3">Bank 3</option>
//           </select>
//         </div>

//         {/* Exp Date */}
//         <div>
//           <label htmlFor="expDate" className="block text-base text-primary-blue mb-2">
//             Exp Date
//           </label>
//           <input
//             type="text"
//             id="expDate"
//             name="expDate"
//             value={formData.expDate}
//             onChange={handleInputChange}
//             placeholder="Validation date"
//             className="w-full h-11 px-4 bg-light-gray rounded border-0 text-base placeholder-placeholder-gray focus:outline-none focus:ring-2 focus:ring-accent-blue"
//           />
//         </div>

//         {/* CVV */}
//         <div>
//           <label htmlFor="cvv" className="block text-base text-primary-blue mb-2">
//             CVV
//           </label>
//           <input
//             type="text"
//             id="cvv"
//             name="cvv"
//             value={formData.cvv}
//             onChange={handleInputChange}
//             placeholder="Beside the card"
//             className="w-full h-11 px-4 bg-light-gray rounded border-0 text-base placeholder-placeholder-gray focus:outline-none focus:ring-2 focus:ring-accent-blue"
//           />
//         </div>
//       </form>
//     </div>
//   )
// }

// export default PaymentForm



















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const PaymentForm = () => {
//   const [formData, setFormData] = useState({
//     cardNumber: "",
//     bank: "",
//     expDate: "",
//     cvv: "",
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handlePayNow = (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!formData.cardNumber || !formData.bank || !formData.expDate || !formData.cvv) {
//       alert("⚠️ Please fill all payment details before proceeding.");
//       return;
//     }

//     // Simulate successful payment
//     alert("✅ Payment Successful!");
//   };

//   const handleCancel = () => {
//     navigate("/"); // 👈 navigate back to home
//   };

//   return (
//     <div className="flex-1 relative">
//       {/* Vertical divider */}
//       <div className="absolute left-1/2 transform -translate-x-px w-px h-64 bg-border-gray"></div>

//       <form className="space-y-6">
//         {/* Card Number */}
//         <div>
//           <label
//             htmlFor="cardNumber"
//             className="block text-base text-primary-blue mb-2"
//           >
//             Card Number
//           </label>
//           <input
//             type="text"
//             id="cardNumber"
//             name="cardNumber"
//             value={formData.cardNumber}
//             onChange={handleInputChange}
//             placeholder="Payment card number"
//             className="w-full h-11 px-4 bg-light-gray rounded border-0 text-base placeholder-placeholder-gray focus:outline-none focus:ring-2 focus:ring-accent-blue"
//           />
//         </div>

//         {/* Bank */}
//         <div>
//           <label
//             htmlFor="bank"
//             className="block text-base text-primary-blue mb-2"
//           >
//             Bank
//           </label>
//           <select
//             id="bank"
//             name="bank"
//             value={formData.bank}
//             onChange={handleInputChange}
//             className="w-full h-11 px-4 bg-light-gray rounded border-0 text-base text-placeholder-gray focus:outline-none focus:ring-2 focus:ring-accent-blue appearance-none"
//           >
//             <option value="">Select Bank</option>
//             <option value="SBI">SBI</option>
//             <option value="HDFC">HDFC Bank</option>
//             <option value="ICICI">ICICI Bank</option>
//             <option value="AXIS">Axis Bank</option>
//           </select>
//         </div>

//         {/* Exp Date */}
//         <div>
//           <label
//             htmlFor="expDate"
//             className="block text-base text-primary-blue mb-2"
//           >
//             Exp Date
//           </label>
//           <input
//             type="month"
//             id="expDate"
//             name="expDate"
//             value={formData.expDate}
//             onChange={handleInputChange}
//             className="w-full h-11 px-4 bg-light-gray rounded border-0 text-base placeholder-placeholder-gray focus:outline-none focus:ring-2 focus:ring-accent-blue"
//           />
//         </div>

//         {/* CVV */}
//         <div>
//           <label
//             htmlFor="cvv"
//             className="block text-base text-primary-blue mb-2"
//           >
//             CVV
//           </label>
//           <input
//             type="password"
//             id="cvv"
//             name="cvv"
//             value={formData.cvv}
//             onChange={handleInputChange}
//             placeholder="3-digit CVV"
//             className="w-full h-11 px-4 bg-light-gray rounded border-0 text-base placeholder-placeholder-gray focus:outline-none focus:ring-2 focus:ring-accent-blue"
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4 pt-6">
//           <button
//             onClick={handlePayNow}
//             className="flex-1 h-12 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
//           >
//             Pay Now
//           </button>

//           <button
//             type="button"
//             onClick={handleCancel}
//             className="flex-1 h-12 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PaymentForm;
























// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import PaymentStepper from "./PaymentStepper"; // ✅ added import

// const PaymentForm = () => {
//   const [formData, setFormData] = useState({
//     cardNumber: "",
//     bank: "",
//     expDate: "",
//     cvv: "",
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handlePayNow = (e) => {
//     e.preventDefault();

//     if (!formData.cardNumber || !formData.bank || !formData.expDate || !formData.cvv) {
//       alert("⚠️ Please fill all payment details before proceeding.");
//       return;
//     }

//     alert("✅ Payment Successful!");
//   };

//   const handleCancel = () => {
//     navigate("/"); // 👈 Back to Home
//   };

//   return (
//     <div className="flex flex-col items-center w-full">
//       {/* 🧭 Stepper at the top */}
//       <PaymentStepper />

//       <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
//         <h2 className="text-2xl font-semibold text-primary-blue text-center mb-6">
//           Payment Details
//         </h2>

//         <form className="space-y-6">
//           {/* Card Number */}
//           <div>
//             <label
//               htmlFor="cardNumber"
//               className="block text-base text-primary-blue mb-2"
//             >
//               Card Number
//             </label>
//             <input
//               type="text"
//               id="cardNumber"
//               name="cardNumber"
//               value={formData.cardNumber}
//               onChange={handleInputChange}
//               placeholder="Enter your card number"
//               className="w-full h-11 px-4 bg-gray-100 rounded border border-gray-300 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Bank */}
//           <div>
//             <label
//               htmlFor="bank"
//               className="block text-base text-primary-blue mb-2"
//             >
//               Select Bank
//             </label>
//             <select
//               id="bank"
//               name="bank"
//               value={formData.bank}
//               onChange={handleInputChange}
//               className="w-full h-11 px-4 bg-gray-100 rounded border border-gray-300 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
//             >
//               <option value="">Choose your bank</option>
//               <option value="SBI">SBI</option>
//               <option value="HDFC">HDFC Bank</option>
//               <option value="ICICI">ICICI Bank</option>
//               <option value="AXIS">Axis Bank</option>
//             </select>
//           </div>

//           {/* Exp Date */}
//           <div>
//             <label
//               htmlFor="expDate"
//               className="block text-base text-primary-blue mb-2"
//             >
//               Expiry Date
//             </label>
//             <input
//               type="month"
//               id="expDate"
//               name="expDate"
//               value={formData.expDate}
//               onChange={handleInputChange}
//               placeholder="MM / YYYY"
//               className="w-full h-11 px-4 bg-gray-100 rounded border border-gray-300 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* CVV */}
//           <div>
//             <label
//               htmlFor="cvv"
//               className="block text-base text-primary-blue mb-2"
//             >
//               CVV
//             </label>
//             <input
//               type="password"
//               id="cvv"
//               name="cvv"
//               value={formData.cvv}
//               onChange={handleInputChange}
//               placeholder="3-digit CVV"
//               className="w-full h-11 px-4 bg-gray-100 rounded border border-gray-300 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-4 pt-6">
//             <button
//               onClick={handlePayNow}
//               className="flex-1 h-12 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
//             >
//               Pay Now
//             </button>

//             <button
//               type="button"
//               onClick={handleCancel}
//               className="flex-1 h-12 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PaymentForm;
























// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const PaymentForm = () => {
//   const [formData, setFormData] = useState({
//     cardNumber: "",
//     bank: "",
//     expDate: "",
//     cvv: "",
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handlePayNow = (e) => {
//     e.preventDefault();
//     // Add actual payment logic here later
//     console.log("Processing payment...", formData);
//   };

//   const handleCancel = () => {
//     navigate("/"); // 👈 Go back to Home
//   };

//   return (
//     <div className="flex-1 relative">
//       {/* ======== Centered Heading Section ======== */}
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-semibold text-primary-blue mb-2">
//           Payment Details
//         </h2>
//         <p className="text-base text-gray-600 italic">
//           Kindly follow the instructions below
//         </p>
//       </div>

//       {/* ======== Form Section ======== */}
//       <form onSubmit={handlePayNow} className="space-y-6">
//         {/* Card Number */}
//         <div>
//           <label
//             htmlFor="cardNumber"
//             className="block text-base text-primary-blue mb-2"
//           >
//             Card Number
//           </label>
//           <input
//             type="text"
//             id="cardNumber"
//             name="cardNumber"
//             value={formData.cardNumber}
//             onChange={handleInputChange}
//             placeholder="Enter your card number"
//             className="w-full h-12 px-4 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Bank */}
//         <div>
//           <label
//             htmlFor="bank"
//             className="block text-base text-primary-blue mb-2"
//           >
//             Bank
//           </label>
//           <select
//             id="bank"
//             name="bank"
//             value={formData.bank}
//             onChange={handleInputChange}
//             className="w-full h-12 px-4 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             <option value="">Select Bank</option>
//             <option value="bank1">Bank 1</option>
//             <option value="bank2">Bank 2</option>
//             <option value="bank3">Bank 3</option>
//           </select>
//         </div>

//         {/* Expiration Date */}
//         <div>
//           <label
//             htmlFor="expDate"
//             className="block text-base text-primary-blue mb-2"
//           >
//             Expiration Date
//           </label>
//           <input
//             type="text"
//             id="expDate"
//             name="expDate"
//             value={formData.expDate}
//             onChange={handleInputChange}
//             placeholder="MM/YY"
//             className="w-full h-12 px-4 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* CVV */}
//         <div>
//           <label
//             htmlFor="cvv"
//             className="block text-base text-primary-blue mb-2"
//           >
//             CVV
//           </label>
//           <input
//             type="text"
//             id="cvv"
//             name="cvv"
//             value={formData.cvv}
//             onChange={handleInputChange}
//             placeholder="Enter CVV (3 digits)"
//             className="w-full h-12 px-4 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-center gap-6 pt-6">
//           <button
//             type="submit"
//             className="px-12 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all"
//           >
//             Pay Now
//           </button>

//           <button
//             type="button"
//             onClick={handleCancel}
//             className="px-10 py-3 bg-gray-200 text-gray-700 text-lg font-medium rounded-lg hover:bg-gray-300 transition-all"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PaymentForm;




























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
