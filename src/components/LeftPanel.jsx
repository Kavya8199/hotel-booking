import React from 'react';

const LeftPanel = () => {
  return (
    <div className="relative w-[700px] h-[90vh] flex-shrink-0 ml-8 my-8">
      {/* Background image moved slightly down */}
      <img 
        src="https://static.codia.ai/image/2025-10-27/ePa9mWzjKZ.png" 
        alt="DeccanStay Background" 
        className="w-full h-full object-cover rounded-xl shadow-lg mt-4"
      />
      
      {/* Text directly on image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[80px] font-medium leading-[120px] text-center drop-shadow-lg">
          <span className="text-secondary-blue">Deccan</span>
          <span className="text-dark-blue">Stay.</span>
        </h1>
      </div>

      {/* Social icons at bottom */}
      <div className="absolute bottom-[200px] left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <img 
          src="https://static.codia.ai/image/2025-10-27/J4QCBGr3dB.png" 
          alt="Social icon" 
          className="w-4 h-[18px]"
        />
        <img 
          src="https://static.codia.ai/image/2025-10-27/gdSfr7pSbt.png" 
          alt="Social icon" 
          className="w-5 h-[23px]"
        />
        <img 
          src="https://static.codia.ai/image/2025-10-27/UKjyzZcxtB.png" 
          alt="Social icon" 
          className="w-4 h-[18px]"
        />
      </div>
    </div>
  );
};

export default LeftPanel;