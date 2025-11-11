import React, { useState } from "react";
import Sidebarss from "./Sidebarss";
import Headersss from "./Headersss";
import SearchBars from "./SearchBars";
import RoomsList from "./RoomsList";
import Refund from "./Refund";
import Message from "./Message";
import Help from "./Help";
import Setting from "./Setting";


const OwnerDashboard = () => {
 
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("date");

  const [rooms, setRooms] = useState([
    {
      name: "Blue Origin Fams",
      date: "2025-11-01",
      description: "Spacious room with a beautiful view",
      image: "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png",
    },
    {
      name: "Sunset Deluxe",
      date: "2025-10-25",
      description: "Luxury room with balcony",
      image: "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png",
    },
    {
      name: "Ocean View Suite",
      date: "2025-11-03",
      description: "Premium suite with ocean view",
      image: "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png",
    },
    {
      name: "Mountain Retreat",
      date: "2025-10-28",
      description: "Cozy room with mountain scenery",
      image: "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png",
    },
  ]);

  const filteredRooms = rooms
    .filter((room) =>
      room.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "date") return new Date(a.date) - new Date(b.date);
      return 0;
    });

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebarss activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col">
        <Headersss />

        <main className="flex-1 p-6">
          {activeTab === "dashboard" && (
            <>
              <SearchBars
                onSearch={(query) => setSearchQuery(query)}
                onSort={(option) => setSortOption(option)}
              />
              <RoomsList rooms={filteredRooms} setRooms={setRooms} />
            </>
          )}

          {activeTab === "refunds" && <Refund />}
          {activeTab === "message" && <Message />}
          {activeTab === "help" && <Help />}
          {activeTab === "setting" && <Setting />}

          
          
        </main>
      </div>
    </div>
  );
};

export default OwnerDashboard;
