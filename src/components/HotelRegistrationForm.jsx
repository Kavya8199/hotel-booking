// import React, { useState } from 'react'
// import FormInput from './FormInput'
// import FileUploadInput from './FileUploadInput'
// import PasswordInput from './PasswordInput'

// const HotelRegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNo: '',
//     country: '',
//     nic: '',
//     username: '',
//     password: '',
//     hotelName: '',
//     registrationNo: '',
//     address: '',
//     uploadImages: null,
//     uploadDocuments: null,
//     facilities: ''
//   })

//   const handleInputChange = (name, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//   }

//   return (
//     <div className="min-h-screen bg-light-gray px-4 py-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-16">
//           <h1 className="text-6xl font-medium text-brand-blue">
//             Deccan<span className="text-brand-light-blue">Stay.</span>
//           </h1>
//           <h2 className="text-4xl font-medium text-black">
//             Register Your Hotel
//           </h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
//           {/* Left Column */}
//           <div className="space-y-8">
//             <FormInput
//               label="Name"
//               placeholder="Enter your name"
//               value={formData.name}
//               onChange={(value) => handleInputChange('name', value)}
//             />
            
//             <FormInput
//               label="E mail"
//               placeholder="name@gmail.com"
//               type="email"
//               value={formData.email}
//               onChange={(value) => handleInputChange('email', value)}
//             />
            
//             <FormInput
//               label="Phone No"
//               placeholder="With Country Code"
//               value={formData.phoneNo}
//               onChange={(value) => handleInputChange('phoneNo', value)}
//             />
            
//             <FormInput
//               label="Country"
//               placeholder="Country Name"
//               value={formData.country}
//               onChange={(value) => handleInputChange('country', value)}
//             />
            
//             <FormInput
//               label="Nic"
//               placeholder="National Identity Card"
//               value={formData.nic}
//               onChange={(value) => handleInputChange('nic', value)}
//             />
            
//             <FormInput
//               label="Username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={(value) => handleInputChange('username', value)}
//             />
            
//             <PasswordInput
//               label="Password"
//               placeholder="6+ characters"
//               value={formData.password}
//               onChange={(value) => handleInputChange('password', value)}
//             />
//           </div>

//           {/* Vertical Divider */}
//           <div className="hidden lg:block absolute left-1/2 top-20 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

//           {/* Right Column */}
//           <div className="space-y-8">
//             <FormInput
//               label="Hotel Name"
//               placeholder="Full Name"
//               value={formData.hotelName}
//               onChange={(value) => handleInputChange('hotelName', value)}
//             />
            
//             <FormInput
//               label="Registration No"
//               placeholder="PVT(Ltd)"
//               value={formData.registrationNo}
//               onChange={(value) => handleInputChange('registrationNo', value)}
//             />
            
//             <FormInput
//               label="Address"
//               placeholder="Location"
//               value={formData.address}
//               onChange={(value) => handleInputChange('address', value)}
//             />
            
//             <FileUploadInput
//               label="Upload Images"
//               placeholder="Upload"
//               onChange={(value) => handleInputChange('uploadImages', value)}
//             />
            
//             <FileUploadInput
//               label="Upload Documents"
//               placeholder="Upload"
//               onChange={(value) => handleInputChange('uploadDocuments', value)}
//             />
            
//             <FormInput
//               label="Facilities"
//               placeholder="Describe"
//               value={formData.facilities}
//               onChange={(value) => handleInputChange('facilities', value)}
//             />

//             {/* Register Button */}
//             <div className="pt-8">
//               <button
//                 type="submit"
//                 className="w-full bg-primary-blue text-white text-2xl font-medium py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200"
//               >
//                 Register
//               </button>
//             </div>

//             {/* Login Link */}
//             <div className="text-center pt-4">
//               <a href="#" className="text-lg text-black hover:text-brand-blue transition-colors duration-200">
//                 Login
//               </a>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default HotelRegistrationForm













import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // ✅ Import navigation hook
import FormInput from './FormInput'
import FileUploadInput from './FileUploadInput'
import PasswordInput from './PasswordInput'

const HotelRegistrationForm = () => {
  const navigate = useNavigate() // ✅ Initialize navigate function

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    country: '',
    nic: '',
    username: '',
    password: '',
    hotelName: '',
    registrationNo: '',
    address: '',
    uploadImages: null,
    uploadDocuments: null,
    facilities: ''
  })

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // ✅ Navigate to verification success page
    navigate('/verification-success')
  }

  return (
    <div className="min-h-screen bg-light-gray px-4 py-8">
      <div className="max-w-7xl mx-auto">
       {/* Header */}
<div className="flex items-center justify-between mb-14">
  <h1 className="font-poppins font-medium text-5xl text-dark">
    <span className="text-secondary">Deccan</span>Stay.
  </h1>
  <h2 className="text-3xl font-medium text-black text-center flex-1">
    Register Your Hotel
  </h2>
</div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8"
        >
          {/* Left Column */}
          <div className="space-y-8">
            <FormInput
              label="Name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(value) => handleInputChange('name', value)}
            />

            <FormInput
              label="E mail"
              placeholder="name@gmail.com"
              type="email"
              value={formData.email}
              onChange={(value) => handleInputChange('email', value)}
            />

            <FormInput
              label="Phone No"
              placeholder="With Country Code"
              value={formData.phoneNo}
              onChange={(value) => handleInputChange('phoneNo', value)}
            />

            <FormInput
              label="Country"
              placeholder="Country Name"
              value={formData.country}
              onChange={(value) => handleInputChange('country', value)}
            />

            <FormInput
              label="Nic"
              placeholder="National Identity Card"
              value={formData.nic}
              onChange={(value) => handleInputChange('nic', value)}
            />

            <FormInput
              label="Username"
              placeholder="Username"
              value={formData.username}
              onChange={(value) => handleInputChange('username', value)}
            />

            <PasswordInput
              label="Password"
              placeholder="6+ characters"
              value={formData.password}
              onChange={(value) => handleInputChange('password', value)}
            />
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-20 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

          {/* Right Column */}
          <div className="space-y-8">
            <FormInput
              label="Hotel Name"
              placeholder="Full Name"
              value={formData.hotelName}
              onChange={(value) => handleInputChange('hotelName', value)}
            />

            <FormInput
              label="Registration No"
              placeholder="PVT(Ltd)"
              value={formData.registrationNo}
              onChange={(value) => handleInputChange('registrationNo', value)}
            />

            <FormInput
              label="Address"
              placeholder="Location"
              value={formData.address}
              onChange={(value) => handleInputChange('address', value)}
            />

            <FileUploadInput
              label="Upload Images"
              placeholder="Upload"
              onChange={(value) => handleInputChange('uploadImages', value)}
            />

            <FileUploadInput
              label="Upload Documents"
              placeholder="Upload"
              onChange={(value) => handleInputChange('uploadDocuments', value)}
            />

            <FormInput
              label="Facilities"
              placeholder="Describe"
              value={formData.facilities}
              onChange={(value) => handleInputChange('facilities', value)}
            />

            {/* Register Button */}
            <div className="pt-8">
              <button
                type="submit"
                className="w-full h-20 bg-blue-700 text-white text-[30px] font-medium leading-[30px] rounded-[10px]"
              >
                Register
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => navigate('/login')} // ✅ Navigate to login page
                className="text-lg text-black hover:text-brand-blue transition-colors duration-200"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HotelRegistrationForm
