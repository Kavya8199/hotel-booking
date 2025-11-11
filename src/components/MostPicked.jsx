<<<<<<< HEAD
// import React from 'react'

// const MostPicked = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <h2 className="text-2xl font-medium text-secondary text-center mb-8">Most Picked</h2>
      
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-1 lg:row-span-2 relative">
//           <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden">
//             <img 
//               src="https://static.codia.ai/image/2025-10-23/KtqOJDBLBD.png" 
//               alt="Blue Origin Fams" 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
//               $50 per night
//             </div>
//             <div className="absolute bottom-6 left-6 text-white">
//               <h3 className="text-xl font-normal mb-1">Blue Origin Fams</h3>
//               <p className="text-sm">Galle, Sri Lanka</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="relative">
//           <div className="relative h-48 rounded-2xl overflow-hidden">
//             <img 
//               src="https://static.codia.ai/image/2025-10-23/oE8HBJcrVe.png" 
//               alt="Ocean Land" 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
//               $22 per night
//             </div>
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-normal mb-1">Ocean Land</h3>
//               <p className="text-sm">Trincomalee, Sri Lanka</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="relative">
//           <div className="relative h-48 rounded-2xl overflow-hidden">
//             <img 
//               src="https://static.codia.ai/image/2025-10-23/B8NVi4OXGd.png" 
//               alt="Stark House" 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
//               $856 per night
//             </div>
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-normal mb-1">Stark House</h3>
//               <p className="text-sm">Dehiwala, Sri Lanka</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="relative">
//           <div className="relative h-48 rounded-2xl overflow-hidden">
//             <img 
//               src="https://static.codia.ai/image/2025-10-23/FhXZboVxqG.png" 
//               alt="Vinna Vill" 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
//               $62 per night
//             </div>
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-normal mb-1">Vinna Vill</h3>
//               <p className="text-sm">Beruwala, Sri Lanka</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="relative">
//           <div className="relative h-48 rounded-2xl overflow-hidden">
//             <img 
//               src="https://static.codia.ai/image/2025-10-23/UdA6c3pggQ.png" 
//               alt="Bobox" 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
//               $72 per night
//             </div>
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-normal mb-1">Bobox</h3>
//               <p className="text-sm">Kandy, Sri Lanka</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default MostPicked














// import React from "react";
// import { Link } from "react-router-dom";

// // Hotel data
// const hotels = [
//   {
//     id: 1,
//     name: "Blue Origin Farms",
//     price: "$50",
//     location: "Galle, Sri Lanka",
//     image: "https://static.codia.ai/image/2025-10-23/KtqOJDBLBD.png",
//   },
//   {
//     id: 2,
//     name: "Ocean Land",
//     price: "$22",
//     location: "Trincomalee, Sri Lanka",
//     image: "https://static.codia.ai/image/2025-10-23/oE8HBJcrVe.png",
//   },
//   {
//     id: 3,
//     name: "Stark House",
//     price: "$856",
//     location: "Dehiwala, Sri Lanka",
//     image: "https://static.codia.ai/image/2025-10-23/B8NVi4OXGd.png",
//   },
//   {
//     id: 4,
//     name: "Vinna Vill",
//     price: "$62",
//     location: "Beruwala, Sri Lanka",
//     image: "https://static.codia.ai/image/2025-10-23/FhXZboVxqG.png",
//   },
//   {
//     id: 5,
//     name: "Bobox",
//     price: "$72",
//     location: "Kandy, Sri Lanka",
//     image: "https://static.codia.ai/image/2025-10-23/UdA6c3pggQ.png",
//   },
// ];

// const MostPicked = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <h2 className="text-2xl font-medium text-secondary text-center mb-8">Most Picked</h2>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Big featured hotel */}
//         {hotels.slice(0, 1).map((hotel) => (
//           <Link
//             key={hotel.id}
//             to={`/hotel/${hotel.id}`}
//             className="lg:col-span-1 lg:row-span-2 relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
//           >
//             <img
//               src={hotel.image}
//               alt={hotel.name}
//               className="w-full h-96 lg:h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
//               {hotel.price} per night
//             </div>
//             <div className="absolute bottom-6 left-6 text-white">
//               <h3 className="text-xl font-normal mb-1">{hotel.name}</h3>
//               <p className="text-sm">{hotel.location}</p>
//             </div>
//           </Link>
//         ))}

//         {/* Other smaller hotels */}
//         {hotels.slice(1).map((hotel) => (
//           <Link
//             key={hotel.id}
//             to={`/hotel/${hotel.id}`}
//             className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
//           >
//             <img
//               src={hotel.image}
//               alt={hotel.name}
//               className="w-full h-48 lg:h-48 object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-tl-2xl rounded-br-2xl text-sm">
//               {hotel.price} per night
//             </div>
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-normal mb-1">{hotel.name}</h3>
//               <p className="text-sm">{hotel.location}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MostPicked;




















import React from "react";
import { Link } from "react-router-dom";

// Hotel data
const hotels = [
  {
    id: 1,
    name: "Blue Origin Farms",
    price: 5000,
    location: "Galle, Sri Lanka",
    image: "https://static.codia.ai/image/2025-10-23/KtqOJDBLBD.png",
  },
  {
    id: 2,
    name: "Ocean Land",
    price: 7000,
    location: "Trincomalee, Sri Lanka",
    image: "https://static.codia.ai/image/2025-10-23/oE8HBJcrVe.png",
  },
  {
    id: 3,
    name: "Stark House",
    price: 10000,
    location: "Dehiwala, Sri Lanka",
    image: "https://static.codia.ai/image/2025-10-23/B8NVi4OXGd.png",
  },
  {
    id: 4,
    name: "Vinna Vill",
    price: 12000,
    location: "Beruwala, Sri Lanka",
    image: "https://static.codia.ai/image/2025-10-23/FhXZboVxqG.png",
  },
  {
    id: 5,
    name: "Bobox",
    price: 15000,
    location: "Kandy, Sri Lanka",
    image: "https://static.codia.ai/image/2025-10-23/UdA6c3pggQ.png",
  },
];

const MostPicked = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-medium text-secondary text-center mb-8">
        Most Picked
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured hotel */}
        {hotels.slice(0, 1).map((hotel) => (
          <Link
            key={hotel.id}
            to={`/hotel/${hotel.id}`}
            state={{ hotel }} // ✅ pass hotel data to booking page
            className="lg:col-span-1 lg:row-span-2 relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-96 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
              ₹{hotel.price.toLocaleString("en-IN")} per day
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-normal mb-1">{hotel.name}</h3>
              <p className="text-sm">{hotel.location}</p>
            </div>
          </Link>
        ))}

        {/* Smaller hotels */}
        {hotels.slice(1).map((hotel) => (
          <Link
            key={hotel.id}
            to={`/hotel/${hotel.id}`}
            state={{ hotel }}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 lg:h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-tl-2xl rounded-br-2xl text-sm">
              ₹{hotel.price.toLocaleString("en-IN")} per day
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-normal mb-1">{hotel.name}</h3>
              <p className="text-sm">{hotel.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MostPicked;

=======
// import React from 'react'

// const MostPicked = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <h2 className="text-2xl font-medium text-secondary text-center mb-8">Most Picked</h2>
      
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-1 lg:row-span-2 relative">
//           <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden">
//             <img 
//               src="https://static.codia.ai/image/2025-10-23/KtqOJDBLBD.png" 
//               alt="Blue Origin Fams" 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
//               $50 per night
//             </div>
//             <div className="absolute bottom-6 left-6 text-white">
//               <h3 className="text-xl font-normal mb-1">Blue Origin Fams</h3>
//               <p className="text-sm">Galle, Sri Lanka</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="relative">
//           <div className="relative h-48 rounded-2xl overflow-hidden">
//             <img 
//               src="https://static.codia.ai/image/2025-10-23/oE8HBJcrVe.png" 
//               alt="Ocean Land" 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
//               $22 per night
//             </div>
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-normal mb-1">Ocean Land</h3>
//               <p className="text-sm">Trincomalee, Sri Lanka</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="relative">
//           <div className="relative h-48 rounded-2xl overflow-hidden">
//             <img 
//               src="https://static.codia.ai/image/2025-10-23/B8NVi4OXGd.png" 
//               alt="Stark House" 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
//               $856 per night
//             </div>
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-normal mb-1">Stark House</h3>
//               <p className="text-sm">Dehiwala, Sri Lanka</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="relative">
//           <div className="relative h-48 rounded-2xl overflow-hidden">
//             <img 
//               src="https://static.codia.ai/image/2025-10-23/FhXZboVxqG.png" 
//               alt="Vinna Vill" 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
//               $62 per night
//             </div>
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-normal mb-1">Vinna Vill</h3>
//               <p className="text-sm">Beruwala, Sri Lanka</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="relative">
//           <div className="relative h-48 rounded-2xl overflow-hidden">
//             <img 
//               src="https://static.codia.ai/image/2025-10-23/UdA6c3pggQ.png" 
//               alt="Bobox" 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
//               $72 per night
//             </div>
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-normal mb-1">Bobox</h3>
//               <p className="text-sm">Kandy, Sri Lanka</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default MostPicked














// import React from "react";
// import { Link } from "react-router-dom";

// // Hotel data
// const hotels = [
//   {
//     id: 1,
//     name: "Blue Origin Farms",
//     price: "$50",
//     location: "Galle, Sri Lanka",
//     image: "https://static.codia.ai/image/2025-10-23/KtqOJDBLBD.png",
//   },
//   {
//     id: 2,
//     name: "Ocean Land",
//     price: "$22",
//     location: "Trincomalee, Sri Lanka",
//     image: "https://static.codia.ai/image/2025-10-23/oE8HBJcrVe.png",
//   },
//   {
//     id: 3,
//     name: "Stark House",
//     price: "$856",
//     location: "Dehiwala, Sri Lanka",
//     image: "https://static.codia.ai/image/2025-10-23/B8NVi4OXGd.png",
//   },
//   {
//     id: 4,
//     name: "Vinna Vill",
//     price: "$62",
//     location: "Beruwala, Sri Lanka",
//     image: "https://static.codia.ai/image/2025-10-23/FhXZboVxqG.png",
//   },
//   {
//     id: 5,
//     name: "Bobox",
//     price: "$72",
//     location: "Kandy, Sri Lanka",
//     image: "https://static.codia.ai/image/2025-10-23/UdA6c3pggQ.png",
//   },
// ];

// const MostPicked = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <h2 className="text-2xl font-medium text-secondary text-center mb-8">Most Picked</h2>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Big featured hotel */}
//         {hotels.slice(0, 1).map((hotel) => (
//           <Link
//             key={hotel.id}
//             to={`/hotel/${hotel.id}`}
//             className="lg:col-span-1 lg:row-span-2 relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
//           >
//             <img
//               src={hotel.image}
//               alt={hotel.name}
//               className="w-full h-96 lg:h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
//               {hotel.price} per night
//             </div>
//             <div className="absolute bottom-6 left-6 text-white">
//               <h3 className="text-xl font-normal mb-1">{hotel.name}</h3>
//               <p className="text-sm">{hotel.location}</p>
//             </div>
//           </Link>
//         ))}

//         {/* Other smaller hotels */}
//         {hotels.slice(1).map((hotel) => (
//           <Link
//             key={hotel.id}
//             to={`/hotel/${hotel.id}`}
//             className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
//           >
//             <img
//               src={hotel.image}
//               alt={hotel.name}
//               className="w-full h-48 lg:h-48 object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-tl-2xl rounded-br-2xl text-sm">
//               {hotel.price} per night
//             </div>
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-normal mb-1">{hotel.name}</h3>
//               <p className="text-sm">{hotel.location}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MostPicked;




















import React from "react";
import { Link } from "react-router-dom";

// Hotel data
const hotels = [
  {
    id: 1,
    name: "Blue Origin Farms",
    price: 5000,
    location: "Galle, Sri Lanka",
    image: "https://static.codia.ai/image/2025-10-23/KtqOJDBLBD.png",
  },
  {
    id: 2,
    name: "Ocean Land",
    price: 7000,
    location: "Trincomalee, Sri Lanka",
    image: "https://static.codia.ai/image/2025-10-23/oE8HBJcrVe.png",
  },
  {
    id: 3,
    name: "Stark House",
    price: 10000,
    location: "Dehiwala, Sri Lanka",
    image: "https://static.codia.ai/image/2025-10-23/B8NVi4OXGd.png",
  },
  {
    id: 4,
    name: "Vinna Vill",
    price: 12000,
    location: "Beruwala, Sri Lanka",
    image: "https://static.codia.ai/image/2025-10-23/FhXZboVxqG.png",
  },
  {
    id: 5,
    name: "Bobox",
    price: 15000,
    location: "Kandy, Sri Lanka",
    image: "https://static.codia.ai/image/2025-10-23/UdA6c3pggQ.png",
  },
];

const MostPicked = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-medium text-secondary text-center mb-8">
        Most Picked
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured hotel */}
        {hotels.slice(0, 1).map((hotel) => (
          <Link
            key={hotel.id}
            to={`/hotel/${hotel.id}`}
            state={{ hotel }} // ✅ pass hotel data to booking page
            className="lg:col-span-1 lg:row-span-2 relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-96 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl">
              ₹{hotel.price.toLocaleString("en-IN")} per day
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-normal mb-1">{hotel.name}</h3>
              <p className="text-sm">{hotel.location}</p>
            </div>
          </Link>
        ))}

        {/* Smaller hotels */}
        {hotels.slice(1).map((hotel) => (
          <Link
            key={hotel.id}
            to={`/hotel/${hotel.id}`}
            state={{ hotel }}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 lg:h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-tl-2xl rounded-br-2xl text-sm">
              ₹{hotel.price.toLocaleString("en-IN")} per day
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-normal mb-1">{hotel.name}</h3>
              <p className="text-sm">{hotel.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MostPicked;

>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07
