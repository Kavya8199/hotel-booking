<<<<<<< HEAD
// import React from "react"
// import NotesPanel from "./NotesPanel"
// import BookingCards from "./BookingCards" // ✅ Booking cards component
// import Sidebars from "./Sidebars" // ✅ Imported reusable sidebar

// // ✅ Header Component
// const Headerss = () => {
//   return (
//     <header className="bg-gray-50 px-8 py-6 border-b border-gray-200">
//       <div className="flex justify-between items-start">
//         <div>
//           <h2 className="text-xl font-semibold text-black tracking-wide mb-1">
//             Hello, User
//           </h2>
//           <p className="text-sm text-gray-500 tracking-wide">Have a nice day</p>
//         </div>

//         <div className="flex items-center gap-6">
//           <img
//             src="https://static.codia.ai/image/2025-10-28/WuAnhG6pOY.png"
//             alt="Notifications"
//             className="w-6 h-6 cursor-pointer"
//           />
//           <div className="w-px h-8 bg-gray-300"></div>
//           <div className="flex items-center gap-4 pr-2 cursor-pointer">
//             <img
//               src="https://static.codia.ai/image/2025-10-28/dBKtQVuRL8.png"
//               alt="Profile"
//               className="w-11 h-11 rounded-full"
//             />
//             <div className="flex items-center gap-3">
//               <div>
//                 <p className="font-semibold text-black tracking-wide">
//                   John Wick
//                 </p>
//                 <p className="text-xs text-gray-500 tracking-wide">User</p>
//               </div>
//               <img
//                 src="https://static.codia.ai/image/2025-10-28/oqqvzXHJ08.png"
//                 alt="Dropdown"
//                 className="w-5 h-5"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// // ✅ Search Bar
// const SearchBar = () => (
//   <div className="flex items-center justify-between mb-6 px-8 mt-4">
//     <div className="flex items-center bg-white rounded-2xl px-5 py-3 flex-1 max-w-4xl shadow-sm border border-gray-100">
//       <img
//         src="https://static.codia.ai/image/2025-10-28/bms7dwkkhZ.png"
//         alt="Search"
//         className="w-4 h-4 mr-4"
//       />
//       <input
//         type="text"
//         placeholder="Search documents"
//         className="flex-1 outline-none text-base tracking-wide text-gray-600"
//       />
//     </div>
//     <div className="flex items-center gap-4 ml-8">
//       <span className="font-semibold text-gray-600">Sort by</span>
//       <img
//         src="https://static.codia.ai/image/2025-10-28/pdJWFjnT5L.png"
//         alt="Sort"
//         className="w-4 h-4"
//       />
//       <img
//         src="https://static.codia.ai/image/2025-10-28/Ke8qq0M0rV.png"
//         alt="Filter"
//         className="w-5 h-5"
//       />
//     </div>
//   </div>
// )

// // ✅ Filter Controls
// const FilterControls = () => {
//   const dateOptions = [
//     { icon: "https://static.codia.ai/image/2025-10-28/pP9OX644XO.png", active: false },
//     { icon: "https://static.codia.ai/image/2025-10-28/vhL3R6vmmA.png", active: false },
//     { icon: "https://static.codia.ai/image/2025-10-28/x4vWMFNWUT.png", active: true },
//     { icon: "https://static.codia.ai/image/2025-10-28/BwQoqt8NXz.png", active: false },
//     { icon: "https://static.codia.ai/image/2025-10-28/Lu8DHLFsWR.png", active: false },
//   ]

//   return (
//     <div className="flex items-center gap-4 px-8 mb-8">
//       <div className="flex gap-4">
//         {dateOptions.map((option, index) => (
//           <div key={index} className="relative">
//             <img
//               src={option.icon}
//               alt={`Option ${index + 1}`}
//               className="w-13 h-13 border border-gray-300 rounded-lg"
//             />
//             {option.active && (
//               <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"></div>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="flex gap-4 ml-8">
//         <div className="flex items-center bg-white border border-gray-300 rounded px-4 py-3 min-w-56">
//           <span className="text-gray-600 text-sm tracking-wide">Booking</span>
//           <img
//             src="https://static.codia.ai/image/2025-10-28/d01FupoweN.png"
//             alt="Dropdown"
//             className="w-6 h-6 ml-auto"
//           />
//         </div>
//         <div className="flex items-center bg-white border border-gray-300 rounded px-4 py-3 min-w-56">
//           <span className="text-gray-600 text-sm tracking-wide">Refund</span>
//           <img
//             src="https://static.codia.ai/image/2025-10-28/4AW0gBn0xq.png"
//             alt="Dropdown"
//             className="w-6 h-6 ml-auto"
//           />
//         </div>
//       </div>

//       <button className="bg-primary text-white rounded-full w-13 h-13 flex items-center justify-center ml-auto shadow-lg hover:bg-primary-dark transition">
//         <span className="text-2xl font-extrabold">+</span>
//       </button>
//     </div>
//   )
// }

// // ✅ Main Dashboard
// const UserDashboard = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-50 font-poppins">
//       {/* ✅ Sidebar Component */}
//       <Sidebars />

//       {/* ✅ Main Content */}
//       <div className="flex-1 flex flex-col">
//         <Headerss />
//         <div className="px-5 mt-4">
//           <h1 className="text-2xl font-bold text-primary mb-8">John Wick</h1>
//         </div>
//         <SearchBar />
//         <FilterControls />

//         {/* ✅ Notes Panel */}
//         <div className="px-8 mt-10">
//           <NotesPanel />
//         </div>

//         {/* ✅ Booking Cards Section */}
//         <div className="px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[1, 2, 3].map((item) => (
//             <BookingCards key={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UserDashboard






















// import React, { useState } from "react"
// import Sidebars from "./Sidebars"
// import Headerss from "./Headerss"
// import MainContents from "./MainContents"
// import UsersList from "./UsersList"
// import BookingCards from "../components/BookingCards"
// import NotesPanel from "../components/NotesPanel"

// const UserDashboard = () => {
//   const [activePage, setActivePage] = useState("dashboard")

//   return (
//     <div className="flex min-h-screen bg-gray-50 font-poppins">
//       {/* ✅ Sidebar */}
//       <Sidebars activePage={activePage} setActivePage={setActivePage} />

//       {/* ✅ Main Content */}
//       <div className="flex-1 flex flex-col">
//         <Headerss />

//         <main className="flex-1 p-8 overflow-y-auto">
//           {/* --- DASHBOARD --- */}
//           {activePage === "dashboard" && (
//             <>
//               <h1 className="text-3xl font-bold text-primary mb-8">
//                 Admin Dashboard
//               </h1>
//               <MainContents />
//               <div className="mt-10">
//                 <UsersList />
//               </div>
//             </>
//           )}

//           {/* --- BOOKINGS --- */}
//           {activePage === "bookings" && (
//             <>
//               <h1 className="text-3xl font-bold text-primary mb-8">
//                 User Bookings
//               </h1>

//               {/* ✅ Compact Notes Panel (Reduced Size) */}
//               <div className="mt-4 mb-8">
//                 <NotesPanel compact />
//               </div>

//               {/* ✅ Booking Cards Grid (No Scrollbar) */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
//                 {[1, 2, 3].map((item) => (
//                   <BookingCards key={item} />
//                 ))}
//               </div>
//             </>
//           )}

//           {/* --- REFUNDS --- */}
//           {activePage === "refunds" && (
//             <div>
//               <h1 className="text-3xl font-bold text-primary mb-6">Refunds</h1>
//               <p className="text-gray-600">Refund tracking and processing section.</p>
//             </div>
//           )}

//           {/* --- MESSAGES --- */}
//           {activePage === "messages" && (
//             <div>
//               <h1 className="text-3xl font-bold text-primary mb-6">Messages</h1>
//               <p className="text-gray-600">All user and admin messages shown here.</p>
//             </div>
//           )}

//           {/* --- HELP --- */}
//           {activePage === "help" && (
//             <div>
//               <h1 className="text-3xl font-bold text-primary mb-6">Help & Support</h1>
//               <p className="text-gray-600">FAQs and support information here.</p>
//             </div>
//           )}

//           {/* --- SETTINGS --- */}
//           {activePage === "settings" && (
//             <div>
//               <h1 className="text-3xl font-bold text-primary mb-6">Settings</h1>
//               <p className="text-gray-600">Profile and app configuration options.</p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   )
// }

// export default UserDashboard

































// import React, { useState } from "react"
// import Sidebars from "./Sidebars"
// import Headerss from "./Headerss"
// import MainContents from "./MainContents"
// import UsersList from "./UsersList"
// import BookingCards from "../components/BookingCards"
// import NotesPanel from "../components/NotesPanel"
// import SearchBar from "../components/SearchBar"
// import FilterControls from "../components/FilterControls"
// import Headers from "./Headers"   

// const UserDashboard = () => {
//   const [activePage, setActivePage] = useState("dashboard")

//   return (
//     <div className="flex min-h-screen bg-gray-50 font-poppins">
//       {/* ✅ Sidebar */}
//       <Sidebars activePage={activePage} setActivePage={setActivePage} />

//       {/* ✅ Main Content */}
//       <div className="flex-1 flex flex-col">
//         <Headerss />

//         <main className="flex-1 p-8 overflow-y-auto">
//   {/* --- DASHBOARD --- */}
//   {activePage === "dashboard" && (
//     <>
//       {/* ✅ Add Header */}
//       <Headers />

//       {/* ✅ Dashboard Title */}
//       <h1 className="text-3xl font-bold text-primary mb-8 mt-8">
//         Admin Dashboard
//       </h1>

//       {/* ✅ Main Dashboard Content */}
//       <MainContents />

//       {/* ✅ Users List Below */}
//       <div className="mt-10">
//         <UsersList />
//       </div>
//     </>
//   )}
//           {/* --- BOOKINGS --- */}
//           {activePage === "bookings" && (
//             <>
//               <h1 className="text-3xl font-bold text-primary mb-8">
//                 User Bookings
//               </h1>

//               {/* ✅ Search + Sort */}
//               <SearchBar />

//               {/* ✅ Filter Controls */}
//               <div className="mt-4">
//                 <FilterControls />
//               </div>

//               {/* ✅ Compact Notes Panel */}
//               <div className="mt-6">
//                 <NotesPanel compact />
//               </div>

              

//               {/* ✅ Booking Cards Grid */}
//               <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
//                 {[1, 2, 3].map((item) => (
//                   <BookingCards key={item} />
//                 ))}
//               </div>
//             </>
//           )}

//           {/* --- REFUNDS --- */}
//           {activePage === "refunds" && (
//             <div>
//               <h1 className="text-3xl font-bold text-primary mb-6">Refunds</h1>
//               <p className="text-gray-600">
//                 Refund tracking and processing section.
//               </p>
//             </div>
//           )}

//           {/* --- MESSAGES --- */}
//           {activePage === "messages" && (
//             <div>
//               <h1 className="text-3xl font-bold text-primary mb-6">Messages</h1>
//               <p className="text-gray-600">
//                 All user and admin messages shown here.
//               </p>
//             </div>
//           )}

//           {/* --- HELP --- */}
//           {activePage === "help" && (
//             <div>
//               <h1 className="text-3xl font-bold text-primary mb-6">
//                 Help & Support
//               </h1>
//               <p className="text-gray-600">
//                 FAQs and support information here.
//               </p>
//             </div>
//           )}

//           {/* --- SETTINGS --- */}
//           {activePage === "settings" && (
//             <div>
//               <h1 className="text-3xl font-bold text-primary mb-6">Settings</h1>
//               <p className="text-gray-600">
//                 Profile and app configuration options.
//               </p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   )
// }

// export default UserDashboard















































// import React, { useState } from "react"
// import Sidebars from "./Sidebars"
// import Headerss from "./Headerss"
// import Dashboard from "./Dashboard" // ✅ Added your Dashboard here

// import BookingCards from "../components/BookingCards"
// import NotesPanel from "../components/NotesPanel"
// import SearchBar from "../components/SearchBar"
// import FilterControls from "../components/FilterControls"

// const UserDashboard = () => {
//   const [activePage, setActivePage] = useState("dashboard")

//   return (
//     <div className="flex min-h-screen bg-gray-50 font-poppins">
//       {/* ✅ Sidebar */}
//       <Sidebars activePage={activePage} setActivePage={setActivePage} />

//       {/* ✅ Main Content */}
//       <div className="flex-1 flex flex-col">
//         <Headerss />

//         <main className="flex-1 p-8 overflow-y-auto">
//           {/* --- DASHBOARD --- */}
//           {activePage === "dashboard" && <Dashboard />}

//           {/* --- BOOKINGS --- */}
//           {activePage === "bookings" && (
//             <>
//               <h1 className="text-3xl font-bold text-primary mb-8">
//                 John Wick
//               </h1>

//               {/* ✅ Search + Sort */}
//               <SearchBar />

//               {/* ✅ Filter Controls */}
//               <div className="mt-4">
//                 <FilterControls />
//               </div>

//               {/* ✅ Compact Notes Panel */}
//               <div className="mt-6">
//                 <NotesPanel compact />
//               </div>

//               {/* ✅ Booking Cards Grid */}
//               <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
//                 {[1].map((item) => (
//                   <BookingCards key={item} />
//                 ))}
//               </div>
//             </>
//           )}

//           {/* --- REFUNDS --- */}
//           {activePage === "refunds" && (
//             <div>
//               <h1 className="text-3xl font-bold text-primary mb-6">Refunds</h1>
//               <p className="text-gray-600">
//                 Refund tracking and processing section.
//               </p>
//             </div>
//           )}

//           {/* --- MESSAGES --- */}
//           {activePage === "messages" && (
//             <div>
//               <h1 className="text-3xl font-bold text-primary mb-6">Messages</h1>
//               <p className="text-gray-600">
//                 All user and admin messages shown here.
//               </p>
//             </div>
//           )}

//           {/* --- HELP --- */}
//           {activePage === "help" && (
//             <div>
//               <h1 className="text-3xl font-bold text-primary mb-6">
//                 Help & Support
//               </h1>
//               <p className="text-gray-600">
//                 FAQs and support information here.
//               </p>
//             </div>
//           )}

//           {/* --- SETTINGS --- */}
//           {activePage === "settings" && (
//             <div>
//               <h1 className="text-3xl font-bold text-primary mb-6">Settings</h1>
//               <p className="text-gray-600">
//                 Profile and app configuration options.
//               </p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   )
// }

// export default UserDashboard















=======
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07








import React, { useState } from "react"
import Sidebars from "./Sidebars"
import Headerss from "./Headerss"
import Dashboard from "./Dashboard"

import BookingCards from "../components/BookingCards"
import NotesPanel from "../components/NotesPanel"
import SearchBar from "../components/SearchBar"
import FilterControls from "../components/FilterControls"

const UserDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard")

  return (
    <div className="flex min-h-screen bg-gray-50 font-poppins">
      {/* ✅ Sidebar */}
      <Sidebars activePage={activePage} setActivePage={setActivePage} />

      {/* ✅ Main Content */}
      <div className="flex-1 flex flex-col">
        <Headerss />

        <main className="flex-1 p-8 overflow-y-auto">
          {/* --- DASHBOARD --- */}
          {activePage === "dashboard" && <Dashboard />}

          {/* --- BOOKINGS --- */}
          {activePage === "bookings" && (
            <>
              <h1 className="text-3xl font-bold text-primary mb-8">
                User Bookings
              </h1>

              {/* ✅ Search + Sort */}
              <SearchBar />

              {/* ✅ Filter Controls */}
              <div className="mt-4">
                <FilterControls />
              </div>

              {/* ✅ Compact Notes Panel */}
              <div className="mt-6">
                <NotesPanel compact />
              </div>

              {/* ✅ Booking Cards Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
                {[1].map((item) => (
                  <BookingCards key={item} />
                ))}
              </div>
            </>
          )}

          {/* --- HOTEL OWNER --- */}
          {activePage === "hotel-owner" && (
            <div>
              <h1 className="text-3xl font-bold text-primary mb-6">
                Hotel Owner Management
              </h1>
              <p className="text-gray-600 mb-4">
                Manage hotel owners, view details, and approve listings here.
              </p>

              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Owner List
                  </h2>
                  <button className="bg-[#1ABC9C] text-white px-5 py-2 rounded-lg font-medium shadow-md">
                    + Add Owner
                  </button>
                </div>

                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="text-left py-3 px-4">Owner Name</th>
                      <th className="text-left py-3 px-4">Hotel Name</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">Salman Faris</td>
                      <td className="py-3 px-4">Deccan Stay</td>
                      <td className="py-3 px-4 text-green-600 font-medium">
                        Approved
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-blue-600 font-semibold hover:underline">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">John Wick</td>
                      <td className="py-3 px-4">Elite Rooms</td>
                      <td className="py-3 px-4 text-yellow-600 font-medium">
                        Pending
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-blue-600 font-semibold hover:underline">
                          Approve
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* --- REFUNDS --- */}
          {activePage === "refunds" && (
            <div>
              <h1 className="text-3xl font-bold text-primary mb-6">Refunds</h1>
              <p className="text-gray-600">
                Refund tracking and processing section.
              </p>
            </div>
          )}

          {/* --- MESSAGES --- */}
          {activePage === "messages" && (
            <div>
              <h1 className="text-3xl font-bold text-primary mb-6">Messages</h1>
              <p className="text-gray-600">
                All user and admin messages shown here.
              </p>
            </div>
          )}

          {/* --- HELP --- */}
          {activePage === "help" && (
            <div>
              <h1 className="text-3xl font-bold text-primary mb-6">
                Help & Support
              </h1>
              <p className="text-gray-600">
                FAQs and support information here.
              </p>
            </div>
          )}

          {/* --- SETTINGS --- */}
          {activePage === "settings" && (
            <div>
              <h1 className="text-3xl font-bold text-primary mb-6">Settings</h1>
              <p className="text-gray-600">
                Profile and app configuration options.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default UserDashboard

