// import React, { useState } from 'react'
// import InputField from './InputField'
// import PasswordField from './PasswordField'
// import LoginButton from './LoginButton'

// const LoginForm = () => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Login attempt:', { username, password })
//   }

//   return (
//     <div className="flex-1 flex flex-col justify-center px-16">
//       <div className="max-w-md mx-auto w-full">
//         <h2 className="text-[40px] font-medium leading-[60px] text-black mb-16">
//           Login Account
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           <InputField
//             label="Username"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <PasswordField
//             label="Password"
//             placeholder="6+ characters"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <div className="pt-4">
//             <p className="text-base leading-6 text-black mb-6">
//               By signing up you agree to{' '}
//               <span className="text-primary-blue">terms and conditions at zoho.</span>
//             </p>

//             <LoginButton />

//             <p className="text-2xl leading-9 text-black text-center mt-6">
//               Create Account
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LoginForm




















// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import InputField from './InputField'
// import PasswordField from './PasswordField'
// import LoginButton from './LoginButton'

// const LoginForm = () => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Login attempt:', { username, password })

//     // ✅ Simulate login logic and navigate to home
//     if (username && password) {
//       // You can later replace this with real API validation
//       navigate('/') // ✅ Go to Home Page after login
//     } else {
//       alert('Please enter both username and password!')
//     }
//   }

//   const handleCreateAccount = () => {
//     navigate('/register') // ✅ Navigate to Register Page
//   }

//   return (
//     <div className="flex-1 flex flex-col justify-center px-16">
//       <div className="max-w-md mx-auto w-full">
//         <h2 className="text-[40px] font-medium leading-[60px] text-black mb-16">
//           Login Account
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           <InputField
//             label="Username"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <PasswordField
//             label="Password"
//             placeholder="6+ characters"
//             value={password}
//             onChange={(value) => setPassword(value)} // ✅ handle value correctly
//           />

//           <div className="pt-4">
//             <p className="text-base leading-6 text-black mb-6">
//               By signing up you agree to{' '}
//               <span className="text-primary-blue">
//                 terms and conditions at zoho.
//               </span>
//             </p>

//             {/* ✅ Login Button triggers navigation */}
//             <button
//               type="submit"
//               className="w-full h-20 bg-primary-blue text-light-gray text-[30px] font-medium leading-[45px] rounded-[10px] hover:bg-blue-700 transition-colors"
//             >
//               Login
//             </button>

//             {/* ✅ Create Account Button */}
//             <button
//               type="button"
//               onClick={handleCreateAccount}
//               className="text-2xl leading-9 text-primary-blue text-center mt-6 block mx-auto hover:underline transition-all"
//             >
//               Create Account
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LoginForm



















import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from './InputField'
import PasswordField from './PasswordField'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { username, password })

    if (username && password) {
      navigate('/') // ✅ Go to Home Page
    } else {
      alert('Please enter both username and password!')
    }
  }

  const handleCreateAccount = () => {
    navigate('/register') // ✅ Navigate to Register Page
  }

  return (
    <div className="flex-1 flex flex-col justify-center px-16">
      <div className="max-w-md mx-auto w-full">
        <h2 className="text-[40px] font-medium leading-[60px] text-black mb-16">
          Login Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <InputField
            label="Username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <PasswordField
            label="Password"
            placeholder="6+ characters"
            value={password}
            onChange={(value) => setPassword(value)}
          />

          <div className="pt-4">
            <p className="text-base leading-6 text-black mb-6">
              By signing up you agree to{' '}
              <span className="text-primary-blue">
                terms and conditions at zoho.
              </span>
            </p>

            {/* ✅ Login Button triggers navigation */}
<button
  type="submit"
  className="w-full h-20 bg-blue-700 text-white text-[30px] font-medium leading-[30px] rounded-[10px]"
>
  Login
</button>

            {/* ✅ Create Account Button */}
            <button
              type="button"
              onClick={handleCreateAccount}
              className="text-2xl leading-9 text-primary-blue text-center mt-6 block mx-auto hover:underline transition-all"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm


