
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

