// import React, { useState } from 'react'

// const PasswordField = ({ label, placeholder, value, onChange }) => {
//   const [showPassword, setShowPassword] = useState(false)

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword)
//   }

//   return (
//     <div className="space-y-2">
//       <label className="block text-2xl leading-9 text-black font-normal">
//         {label}
//       </label>
//       <div className="relative">
//         <input
//           type={showPassword ? 'text' : 'password'}
//           placeholder={placeholder}
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           className="w-full h-[70px] px-6 py-4 pr-16 bg-white border-2 border-border-gray rounded-[10px] text-[22px] leading-[33px] text-border-gray placeholder-border-gray focus:outline-none focus:border-primary-blue focus:text-black transition-colors"
//         />
//         <button
//           type="button"
//           onClick={togglePasswordVisibility}
//           className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-5"
//         >
//           <img
//             src="https://static.codia.ai/image/2025-10-27/vV5YLFy8b7.png"
//             alt="Toggle password visibility"
//             className="w-full h-full object-contain"
//           />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default PasswordField
