import React from 'react'

const RoomsList = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-dark mb-1">
          List of Hotel Rooms
        </h3>
        <p className="text-sm text-gray-medium opacity-40">
          Lorem ipsum lorem uojuhn
        </p>
      </div>

      <div className="border-b border-gray-200"></div>

      <div className="p-6">
        <div className="flex items-start space-x-6">
          <img 
            src="https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png" 
            alt="Room" 
            className="w-10 h-10 rounded-lg"
          />
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-dark">
                Blue Origin Fams
              </h4>
              <div className="flex space-x-2">
                <button className="w-9 h-9 border border-gray-300 rounded flex items-center justify-center">
                  <img 
                    src="https://static.codia.ai/image/2025-10-29/mKcaDbJgnS.png" 
                    alt="Edit" 
                    className="w-full h-full"
                  />
                </button>
                <button className="w-9 h-9 border border-gray-300 rounded flex items-center justify-center">
                  <img 
                    src="https://static.codia.ai/image/2025-10-29/0U69JU0S9U.png" 
                    alt="Delete" 
                    className="w-full h-full"
                  />
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-medium opacity-40">
                June 9, 2023
              </p>
              <p className="text-xs text-gray-medium opacity-40 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-px bg-gray-100">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div key={index} className="h-px bg-gray-200 mx-6"></div>
        ))}
      </div>
    </div>
  )
}

export default RoomsList
