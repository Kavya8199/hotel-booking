// import React from 'react'

// const PhotoGallery = () => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-96 lg:h-[500px] rounded-2xl overflow-hidden">
//       <div className="lg:col-span-2">
//         <img 
//           src="https://static.codia.ai/image/2025-10-23/ReTyPF3QKF.png" 
//           alt="Hotel main view"
//           className="w-full h-full object-cover rounded-2xl lg:rounded-r-none"
//         />
//       </div>
//       <div className="hidden lg:flex flex-col gap-4">
//         <img 
//           src="https://static.codia.ai/image/2025-10-23/nGv2xNktNV.png" 
//           alt="Hotel room"
//           className="w-full h-1/2 object-cover rounded-tr-2xl"
//         />
//         <img 
//           src="https://static.codia.ai/image/2025-10-23/OjyyNahp8T.png" 
//           alt="Hotel amenities"
//           className="w-full h-1/2 object-cover rounded-br-2xl"
//         />
//       </div>
//     </div>
//   )
// }

// export default PhotoGallery







import React from "react";

const PhotoGallery = ({ images = [] }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery ${index + 1}`}
          className="w-full h-60 md:h-80 object-cover rounded-2xl shadow"
          onError={(e) => (e.target.style.display = "none")} // hides broken images
        />
      ))}
    </section>
  );
};

export default PhotoGallery;





