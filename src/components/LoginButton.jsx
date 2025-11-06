import React from 'react'

const LoginButton = () => {
  return (
    <button
      type="submit"
      className="w-full h-[50px] bg-blue-600 text-white text-[16px] font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Login
    </button>
  )
}

export default LoginButton