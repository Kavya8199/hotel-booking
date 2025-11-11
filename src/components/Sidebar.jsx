
import React from 'react'

const Sidebar = () => {
  const menuItems = [
    {
      icon: "https://static.codia.ai/image/2025-10-28/XHmSQYpDLw.png",
      label: "Dashboard",
      active: true
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/swvSpzKj3T.png",
      label: "Users",
      active: false
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/exMgyeHm6j.png",
      label: "Hotel Owners",
      active: false
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/QAsBAhCvXx.png",
      label: "Booking Details",
      active: false
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/dRsSfCtpes.png",
      label: "Refund",
      active: false
    }
  ]

  const secondaryItems = [
    {
      icon: "https://static.codia.ai/image/2025-10-28/6Kr3KsHWXm.png",
      label: "Message"
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/YJxkZ0cErv.png",
      label: "Help"
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/DcPRoWYE5X.png",
      label: "Setting"
    }
  ]

  return (
    <div className="w-64 bg-white flex flex-col">
      <div className="p-8">
        <h1 className="font-poppins font-medium text-4xl text-dark">
          <span className="text-secondary">Deccan</span>Stay.
        </h1>
      </div>

      <nav className="flex-1 px-8">
        <div className="space-y-8">
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 cursor-pointer ${
                  item.active ? 'text-primary' : 'text-gray-500'
                }`}
              >
                <img src={item.icon} alt={item.label} className="w-6 h-6" />
                <span className={`text-base font-${item.active ? '600' : '400'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-8 pt-16">
            {secondaryItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 cursor-pointer text-gray-500">
                <img src={item.icon} alt={item.label} className="w-6 h-6" />
                <span className="text-base">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </nav>

      <div className="p-0">
        <img 
          src="https://static.codia.ai/image/2025-10-28/5QBjB6v9pu.png" 
          alt="Get Pro" 
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

export default Sidebar

