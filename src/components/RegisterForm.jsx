// import React, { useState } from 'react'
// import FormField from './FormField'
// import PasswordField from './PasswordField'

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     country: '',
//     username: '',
//     password: ''
//   })

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//   }

//   return (
//     <div className="flex-1 flex flex-col justify-center px-20 py-12">
//       <div className="max-w-md mx-auto w-full">
//         <h2 className="text-[40px] font-medium leading-[60px] text-black mb-8">
//           Create Account
//         </h2>
        
//         <form onSubmit={handleSubmit} className="space-y-8">
//           <FormField
//             label="Name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={(value) => handleInputChange('name', value)}
//           />
          
//           <FormField
//             label="E mail"
//             placeholder="name@gmail.com"
//             type="email"
//             value={formData.email}
//             onChange={(value) => handleInputChange('email', value)}
//           />
          
//           <FormField
//             label="Phone No"
//             placeholder="With Country Code"
//             value={formData.phone}
//             onChange={(value) => handleInputChange('phone', value)}
//           />
          
//           <FormField
//             label="Country"
//             placeholder="Country Name"
//             value={formData.country}
//             onChange={(value) => handleInputChange('country', value)}
//           />
          
//           <FormField
//             label="Username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={(value) => handleInputChange('username', value)}
//           />
          
//           <PasswordField
//             label="Password"
//             placeholder="6+ characters"
//             value={formData.password}
//             onChange={(value) => handleInputChange('password', value)}
//           />
          
//           <div className="pt-4">
//             <p className="text-base leading-6 text-black mb-4">
//               By signing up you agree to{' '}
//               <span className="text-primary-blue">terms and conditions at zoho.</span>
//             </p>
            
//             <button
//               type="submit"
//               className="w-full h-20 bg-primary-blue text-light-gray text-[30px] font-medium leading-[45px] rounded-[10px] hover:bg-blue-700 transition-colors"
//             >
//               Register
//             </button>
//           </div>
//         </form>
        
//         <div className="text-center mt-8">
//           <button className="text-2xl leading-9 text-black hover:text-primary-blue transition-colors">
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default RegisterForm












import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // ✅ Import navigation hook
import FormField from './FormField'
import PasswordField from './PasswordField'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    username: '',
    password: ''
  })

  const navigate = useNavigate() // ✅ Initialize navigation

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // 👉 Simulate registration logic
    console.log('Form submitted:', formData)

    // ✅ Navigate to success page
    navigate('/register-success')
  }

  // ✅ Navigate back to login page
  const handleLoginClick = () => {
    navigate('/login')
  }

  return (
    <div className="flex-1 flex flex-col justify-center px-20 py-12">
      <div className="max-w-md mx-auto w-full">
        <h2 className="text-[40px] font-medium leading-[60px] text-black mb-8">
          Create Account
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <FormField
            label="Name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(value) => handleInputChange('name', value)}
          />
          
          <FormField
            label="E mail"
            placeholder="name@gmail.com"
            type="email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
          />
          
          <FormField
            label="Phone No"
            placeholder="With Country Code"
            value={formData.phone}
            onChange={(value) => handleInputChange('phone', value)}
          />
          
          <FormField
            label="Country"
            placeholder="Country Name"
            value={formData.country}
            onChange={(value) => handleInputChange('country', value)}
          />
          
          <FormField
            label="Username"
            placeholder="Username"
            value={formData.username}
            onChange={(value) => handleInputChange('username', value)}
          />
          
          <PasswordField
            label="Password"
            placeholder="6+ characters"
            value={formData.password}
            onChange={(value) => handleInputChange('password', value)}
          />
          
          <div className="pt-4">
            <p className="text-base leading-6 text-black mb-4">
              By signing up you agree to{' '}
              <span className="text-primary-blue">terms and conditions at zoho.</span>
            </p>
            
            <button
              type="submit"
              className="w-full h-20 bg-blue-700 text-white text-[30px] font-medium leading-[30px] rounded-[10px]"
            >
              Register
            </button>
          </div>
        </form>
        
        {/* ✅ Login Button (Navigate to Login Page) */}
        <div className="text-center mt-8">
          <button
            onClick={handleLoginClick}
            className="text-2xl leading-9 text-black hover:text-primary-blue transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
