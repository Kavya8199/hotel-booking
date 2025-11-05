// import React from 'react'

// const Sidebars = () => {
//   const menuItems = [
//     {
//       icon: "https://static.codia.ai/image/2025-10-28/ueP3kyqN1D.png",
//       label: "Dashboard",
//       active: false
//     },
//     {
//       icon: "https://static.codia.ai/image/2025-10-28/f891qG1sUh.png",
//       label: "Bookings",
//       active: true
//     },
//     {
//       icon: "https://static.codia.ai/image/2025-10-28/oQ31oYDaf8.png",
//       label: "Refunds",
//       active: false
//     }
//   ]

//   const secondaryItems = [
//     {
//       icon: "https://static.codia.ai/image/2025-10-28/Y6kOvWn5KB.png",
//       label: "Message",
//       active: false
//     },
//     {
//       icon: "https://static.codia.ai/image/2025-10-28/Xsfj5zyzaB.png",
//       label: "Help",
//       active: false
//     },
//     {
//       icon: "https://static.codia.ai/image/2025-10-28/cuopThxdCh.png",
//       label: "Setting",
//       active: false
//     }
//   ]

//   return (
//     <div className="w-64 bg-white h-screen flex flex-col">
//       <div className="p-8 pb-14">
//         <h1 className="font-poppins text-4xl font-medium text-dark">
//           <span className="text-secondary">Deccan</span>Stay.
//         </h1>
//       </div>
      
//       <nav className="px-8 flex-1">
//         <div className="space-y-8 mb-16">
//           {menuItems.map((item, index) => (
//             <div key={index} className="flex items-center gap-4">
//               <img src={item.icon} alt={item.label} className="w-6 h-6" />
//               <span className={`text-base tracking-wide ${
//                 item.active ? 'text-primary font-semibold' : 'text-gray-light'
//               }`}>
//                 {item.label}
//               </span>
//             </div>
//           ))}
//         </div>
        
//         <div className="space-y-8">
//           {secondaryItems.map((item, index) => (
//             <div key={index} className="flex items-center gap-4">
//               <img src={item.icon} alt={item.label} className="w-6 h-6" />
//               <span className="text-base tracking-wide text-gray-light">
//                 {item.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </nav>
      
//       <div className="p-0">
//         <img 
//           src="https://static.codia.ai/image/2025-10-28/8qiUAbSsVv.png" 
//           alt="Get Pro" 
//           className="w-full h-auto"
//         />
//       </div>
//     </div>
//   )
// }

// export default Sidebars

























import React from "react"

const Sidebars = ({ activePage, setActivePage }) => {
  const menuItems = [
    {
      icon: "https://static.codia.ai/image/2025-10-28/ueP3kyqN1D.png",
      label: "Dashboard",
      key: "dashboard",
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/f891qG1sUh.png",
      label: "Bookings",
      key: "bookings",
    },
    {
      icon: "https://static.codia.ai/image/2025-10-30/HoT3h82lFD.png", // Hotel Owner icon (replace if needed)
      label: "Hotel Owner",
      key: "hotelOwner",
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/oQ31oYDaf8.png",
      label: "Refunds",
      key: "refunds",
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/Y6kOvWn5KB.png",
      label: "Messages",
      key: "messages",
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/Xsfj5zyzaB.png",
      label: "Help",
      key: "help",
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/cuopThxdCh.png",
      label: "Settings",
      key: "settings",
    },
  ]

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col py-6">
      {/* ✅ Logo / Title */}
      <h2 className="text-2xl font-semibold text-primary text-center mb-8">
        Deccan<span className="text-secondary">Stay</span>
      </h2>

      {/* ✅ Sidebar Menu */}
      <nav className="flex-1">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActivePage(item.key)}
            className={`flex items-center w-full px-6 py-3 text-lg transition-colors ${
              activePage === item.key
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-6 h-6 object-contain"
            />
            <span className="ml-3">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebars
