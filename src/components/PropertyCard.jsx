<<<<<<< HEAD
// import React from 'react'

// const PropertyCard = () => {
//   return (
//     <div className="w-full max-w-md">
//       <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
//         <div className="relative">
//           <img 
//             src="https://static.codia.ai/image/2025-10-26/osDOHm6sd8.png" 
//             alt="Blue Origin Fams"
//             className="w-full h-68 object-cover"
//           />
//         </div>
//         <div className="p-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-normal text-primary-blue">
//               Blue Origin Fams
//             </h3>
//             <span className="text-sm font-light text-light-gray">
//               Galle, Sri Lanka
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PropertyCard










// import React from 'react'

// const PropertyCard = ({ hotel }) => {
//   if (!hotel) return null

//   return (
//     <div className="border border-light-gray rounded-2xl p-6 shadow-md w-full lg:w-1/2">
//       {/* Hotel Image */}
//       <div className="w-full h-64 rounded-lg overflow-hidden mb-6">
//         <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
//       </div>

//       {/* Hotel Name */}
//       <h3 className="text-2xl font-semibold text-primary-blue mb-2">{hotel.name}</h3>

//       {/* Hotel Description */}
//       <p className="text-light-gray text-base mb-4">{hotel.description}</p>

//       {/* Price */}
//       <p className="text-xl font-medium text-primary-blue">
//         ${hotel.price} USD per day
//       </p>
//     </div>
//   )
// }

// export default PropertyCard










import React from 'react'

const PropertyCard = ({ hotel }) => {
  if (!hotel) return null

  return (
    <div className="border border-gray-300 rounded-2xl p-6 shadow-md w-full lg:w-1/2 bg-white">
      {/* 🏨 Hotel Image — same as home page */}
      <div className="w-full h-80 rounded-lg overflow-hidden mb-6">
        <img
          src={hotel.image} // uses same image URL passed from home page
          alt={hotel.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 🏠 Hotel Name */}
      <h3 className="text-2xl font-semibold text-primary-blue mb-2">
        {hotel.name}
      </h3>

      {/* 📍 Hotel Location */}
      {hotel.location && (
        <p className="text-gray-500 text-base mb-3">
          📍 {hotel.location}
        </p>
      )}

      {/* 📄 Description */}
      {hotel.description && (
        <p className="text-gray-600 text-base mb-4">
          {hotel.description}
        </p>
      )}

      {/* 💰 Price in ₹ per day */}
      <p className="text-xl font-medium text-primary-blue">
        ₹{hotel.price?.toLocaleString('en-IN')} per day
      </p>
    </div>
  )
}

export default PropertyCard
=======






import React from 'react'

const PropertyCard = ({ hotel }) => {
  if (!hotel) return null

  return (
    <div className="border border-gray-300 rounded-2xl p-6 shadow-md w-full lg:w-1/2 bg-white">
      {/* 🏨 Hotel Image — same as home page */}
      <div className="w-full h-80 rounded-lg overflow-hidden mb-6">
        <img
          src={hotel.image} // uses same image URL passed from home page
          alt={hotel.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 🏠 Hotel Name */}
      <h3 className="text-2xl font-semibold text-primary-blue mb-2">
        {hotel.name}
      </h3>

      {/* 📍 Hotel Location */}
      {hotel.location && (
        <p className="text-gray-500 text-base mb-3">
          📍 {hotel.location}
        </p>
      )}

      {/* 📄 Description */}
      {hotel.description && (
        <p className="text-gray-600 text-base mb-4">
          {hotel.description}
        </p>
      )}

      {/* 💰 Price in ₹ per day */}
      <p className="text-xl font-medium text-primary-blue">
        ₹{hotel.price?.toLocaleString('en-IN')} per day
      </p>
    </div>
  )
}

export default PropertyCard
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07
