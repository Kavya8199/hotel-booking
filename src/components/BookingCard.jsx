// import React from 'react'

// const BookingCard = () => {
//   return (
//     <div className="border border-light-gray rounded-2xl p-8 h-fit">
//       <div className="mb-8">
//         <h3 className="text-20 font-medium leading-30 text-primary mb-4">
//           Start Booking
//         </h3>
//         <div className="text-36 leading-54 text-primary">
//           <span className="text-accent">$200</span>
//           <span className="text-gray-text text-base ml-1">per Day</span>
//         </div>
//       </div>
      
//       <button className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-medium text-20 leading-30 shadow-lg hover:bg-blue-700 transition-colors">
//         Book Now!
//       </button>
//     </div>
//   )
// }

// export default BookingCard













// import React from "react";
// import { useNavigate } from "react-router-dom"; // ✅ import navigation

// const BookingCard = () => {
//   const navigate = useNavigate(); // ✅ initialize navigate

//   const handleBookNow = () => {
//     navigate("/book"); // ✅ navigate to Booking Page
//   };

//   return (
//     <div className="border border-light-gray rounded-2xl p-8 h-fit">
//       <div className="mb-8">
//         <h3 className="text-20 font-medium leading-30 text-primary mb-4">
//           Start Booking
//         </h3>
//         <div className="text-36 leading-54 text-primary">
//           <span className="text-accent">$200</span>
//           <span className="text-gray-text text-base ml-1">per Day</span>
//         </div>
//       </div>

//       <button
//         onClick={handleBookNow} // ✅ added click handler
//         className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-medium text-20 leading-30 shadow-lg hover:bg-blue-700 transition-colors"
//       >
//         Book Now!
//       </button>
//     </div>
//   );
// };

// export default BookingCard;






// import React from "react";
// import { useNavigate } from "react-router-dom";

// const BookingCard = ({ hotel }) => {
//   const navigate = useNavigate();

//   const handleBookNow = () => {
//     // Navigate to /book and pass hotel data
//     navigate("/book", { state: { hotel } });
//   };

//   return (
//     <div className="border border-light-gray rounded-2xl p-6 h-fit shadow-md">
//       {/* Hotel Image */}
//       <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
//         <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
//       </div>

//       {/* Hotel Info */}
//       <h3 className="text-20 font-medium leading-30 text-primary mb-2">{hotel.name}</h3>
//       <p className="text-gray-text text-base mb-4">${hotel.price} per day</p>

//       <button
//         onClick={handleBookNow}
//         className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-medium text-20 leading-30 shadow-lg hover:bg-blue-700 transition-colors"
//       >
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default BookingCard;











import React from "react";
import { useNavigate } from "react-router-dom";

const BookingCard = ({ hotel }) => {
  const navigate = useNavigate();

  if (!hotel) return null;

  const handleBookNow = () => {
    navigate("/book", { state: { hotel } });
  };

  return (
    <div className="border border-light-gray rounded-2xl p-8 h-fit shadow-md bg-white">
      <div className="mb-8">
        <h3 className="text-2xl font-medium leading-8 text-primary mb-4">
          Start Booking
        </h3>

        <div className="text-4xl leading-10 text-primary">
          <span className="text-accent">
            ₹{hotel.price?.toLocaleString("en-IN")}
          </span>
          <span className="text-gray-text text-base ml-1"> per day</span>
        </div>
      </div>

      <button
        onClick={handleBookNow}
        className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-medium text-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Book Now!
      </button>
    </div>
  );
};

export default BookingCard;


