








import React from 'react'
import UsersList from './UsersList' // 👈 make sure UsersList.jsx is in the same folder

const Dashboard = () => {
  return (
    <div className="mb-6 p-6 bg-gray-50 min-h-screen">
      {/* 🔹 Dashboard Header */}
      
      <h1 className="text-2xl font-bold text-primary mb-8">Admin Dashboard</h1>

      {/* 🔹 Search + Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <img 
                src="https://static.codia.ai/image/2025-10-28/AArAoh8bEY.png" 
                alt="Search" 
                className="w-4 h-4"
              />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border-0 text-gray-600 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center space-x-6 ml-6">
          <button className="flex items-center space-x-4 bg-gradient-to-r from-primary to-blue-500 text-white px-6 py-4 rounded-2xl shadow-lg">
            <span className="font-semibold text-lg">Add Owner</span>
            <span className="text-2xl font-bold">+</span>
          </button>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-600">Sort by</span>
              <img 
                src="https://static.codia.ai/image/2025-10-28/NbKmztY1gj.png" 
                alt="Sort" 
                className="w-4 h-4"
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-600">Saved search</span>
              <img 
                src="https://static.codia.ai/image/2025-10-28/hTJza6rR0y.png" 
                alt="Saved search" 
                className="w-4 h-4"
              />
            </div>

            <img 
              src="https://static.codia.ai/image/2025-10-28/2gontid6PV.png" 
              alt="Filter" 
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>

      {/* 🔹 Users List Section */}
      <UsersList />
    </div>
  )
}

export default Dashboard
