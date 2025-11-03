import React from 'react'

const LeftPanel = () => {
  return (
    <div className="w-[738px] h-screen relative">
      <img 
        src="https://static.codia.ai/image/2025-10-27/ePa9mWzjKZ.png" 
        alt="DeccanStay Background" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[80px] font-medium leading-[120px] text-center">
          <span className="text-secondary-blue">Deccan</span>
          <span className="text-dark-blue">Stay.</span>
        </h1>
      </div>
    </div>
  )
}

export default LeftPanel
