// import React from 'react'

// const HotelTitle = () => {
//   return (
//     <div className="text-center mb-12">
//       <h1 className="text-36 font-bold leading-54 text-primary mb-2">
//         Blue Origin Fams
//       </h1>
//       <p className="text-18 leading-27 text-gray-text">
//         Galle, Sri Lanka
//       </p>
//     </div>
//   )
// }

// export default HotelTitle








import React from "react";

const HotelTitle = ({ hotel }) => {
  return (
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
      <p className="text-gray-600 mt-2">{hotel.location || "Beautiful place to stay"}</p>
    </div>
  );
};

export default HotelTitle;
