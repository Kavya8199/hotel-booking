// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div className="mb-6">
//       <div className="w-8 h-10 bg-primary mb-4"></div>
//       <h1 className="text-2xl font-bold text-primary mb-8">Admin Dashboard</h1>
      
//       <div className="flex justify-between items-center mb-6">
//         <div className="flex-1 max-w-2xl">
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
//               <img 
//                 src="https://static.codia.ai/image/2025-10-28/AArAoh8bEY.png" 
//                 alt="Search" 
//                 className="w-4 h-4"
//               />
//             </div>
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border-0 text-gray-600 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>
//         </div>

//         <div className="flex items-center space-x-6 ml-6">
//           <button className="flex items-center space-x-4 bg-gradient-to-r from-primary to-blue-500 text-white px-6 py-4 rounded-2xl shadow-lg">
//             <span className="font-semibold text-lg">Add Owner</span>
//             <span className="text-2xl font-bold">+</span>
//           </button>

//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <span className="font-semibold text-gray-600">Sort by</span>
//               <img 
//                 src="https://static.codia.ai/image/2025-10-28/NbKmztY1gj.png" 
//                 alt="Sort" 
//                 className="w-4 h-4"
//               />
//             </div>

//             <div className="flex items-center space-x-2">
//               <span className="font-semibold text-gray-600">Saved search</span>
//               <img 
//                 src="https://static.codia.ai/image/2025-10-28/hTJza6rR0y.png" 
//                 alt="Saved search" 
//                 className="w-4 h-4"
//               />
//             </div>

//             <img 
//               src="https://static.codia.ai/image/2025-10-28/2gontid6PV.png" 
//               alt="Filter" 
//               className="w-5 h-5"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard













// import React from 'react'
// import UsersList from './UsersList' // 👈 make sure UsersList.jsx is in the same folder

// const Dashboard = () => {
//   return (
//     <div className="mb-6 p-6 bg-gray-50 min-h-screen">
//       {/* 🔹 Dashboard Header */}
      
//       <h1 className="text-2xl font-bold text-primary mb-8">Admin Dashboard</h1>

//       {/* 🔹 Search + Actions */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="flex-1 max-w-2xl">
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
//               <img 
//                 src="https://static.codia.ai/image/2025-10-28/AArAoh8bEY.png" 
//                 alt="Search" 
//                 className="w-4 h-4"
//               />
//             </div>
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border-0 text-gray-600 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>
//         </div>

//         <div className="flex items-center space-x-6 ml-6">
//           <button className="flex items-center space-x-4 bg-gradient-to-r from-primary to-blue-500 text-white px-6 py-4 rounded-2xl shadow-lg">
//             <span className="font-semibold text-lg">Add Owner</span>
//             <span className="text-2xl font-bold">+</span>
//           </button>

//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <span className="font-semibold text-gray-600">Sort by</span>
//               <img 
//                 src="https://static.codia.ai/image/2025-10-28/NbKmztY1gj.png" 
//                 alt="Sort" 
//                 className="w-4 h-4"
//               />
//             </div>

//             <div className="flex items-center space-x-2">
//               <span className="font-semibold text-gray-600">Saved search</span>
//               <img 
//                 src="https://static.codia.ai/image/2025-10-28/hTJza6rR0y.png" 
//                 alt="Saved search" 
//                 className="w-4 h-4"
//               />
//             </div>

//             <img 
//               src="https://static.codia.ai/image/2025-10-28/2gontid6PV.png" 
//               alt="Filter" 
//               className="w-5 h-5"
//             />
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Users List Section */}
//       <UsersList />
//     </div>
//   )
// }

// export default Dashboard










































import React, { useState } from "react";
import UsersList from "./UsersList";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("hotel");
  const [users, setUsers] = useState([
    { hotel: "DeccanStay", owner: "Ramesh Kumar", role: "Admin", date: "2025-10-01" },
    { hotel: "Ocean View", owner: "Suresh Patel", role: "Manager", date: "2025-09-28" },
    { hotel: "CityLights Inn", owner: "Priya Singh", role: "Supervisor", date: "2025-10-10" },
    { hotel: "Sunrise Suites", owner: "Amit Sharma", role: "Supervisor", date: "2025-10-05" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOwner, setNewOwner] = useState({ hotel: "", owner: "", role: "" });

  // 🔍 Search Functionality
  const filteredUsers = users
    .filter(
      (user) =>
        user.hotel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.owner.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "hotel") return a.hotel.localeCompare(b.hotel);
      if (sortOption === "owner") return a.owner.localeCompare(b.owner);
      if (sortOption === "date") return new Date(b.date) - new Date(a.date);
      return 0;
    });

  const handleAddOwner = () => {
    if (!newOwner.hotel || !newOwner.owner || !newOwner.role) {
      alert("Please fill all fields");
      return;
    }
    const today = new Date().toISOString().split("T")[0];
    setUsers([...users, { ...newOwner, date: today }]);
    setNewOwner({ hotel: "", owner: "", role: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-8">
      <h1 className="text-2xl font-bold text-primary mb-6">Admin Dashboard</h1>

      {/* 🔹 Search, Add Owner, Sort, Saved Search Card */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* 🔍 Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <img
                src="https://static.codia.ai/image/2025-10-28/AArAoh8bEY.png"
                alt="Search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
              <input
                type="text"
                placeholder="Search hotels or owners"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* ➕ Add Owner */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-primary to-blue-500 text-white px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <span className="font-medium">Add Owner</span>
            <span className="text-xl font-bold">+</span>
          </button>

          {/* 🔽 Sort by */}
          <div className="flex items-center space-x-2">
            <label className="font-semibold text-gray-700">Sort by:</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="hotel">Hotel Name</option>
              <option value="owner">Owner Name</option>
              <option value="date">Date</option>
            </select>
          </div>

          {/* 💾 Saved Search */}
          <div className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-primary transition">
            <span className="font-semibold">Saved Search</span>
            <img
              src="https://static.codia.ai/image/2025-10-28/hTJza6rR0y.png"
              alt="Saved search"
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>

      {/* 🔹 List of Hotel Owners */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">List of Hotel Owners</h2>
      </div>
      <UsersList users={filteredUsers} setUsers={setUsers} />

      {/* 🪟 Add Owner Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md relative">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Owner</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Hotel Name
                </label>
                <input
                  type="text"
                  value={newOwner.hotel}
                  onChange={(e) => setNewOwner({ ...newOwner, hotel: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter hotel name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Owner Name
                </label>
                <input
                  type="text"
                  value={newOwner.owner}
                  onChange={(e) => setNewOwner({ ...newOwner, owner: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter owner name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Role
                </label>
                <input
                  type="text"
                  value={newOwner.role}
                  onChange={(e) => setNewOwner({ ...newOwner, role: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter role"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOwner}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Owner
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
