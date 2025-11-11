<<<<<<< HEAD
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;










// import React from 'react'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import BookingForm from './components/BookingForm'
// import MostPicked from './components/MostPicked'
// import HouseWithBackyard from './components/HouseWithBackyard'
// import HotelsLivingRoom from './components/HotelsLivingRoom'
// import Footer from './components/Footer'

// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <Hero />
//       <BookingForm />
//       <MostPicked />
//       <HouseWithBackyard />
//       <HotelsLivingRoom />
//       <Footer />
//     </div>
//   )
// }

// export default App










// import React from 'react'

// // 🌐 Landing Page Components
// import Header from './components/Header'
// import Hero from './components/Hero'
// import BookingForm from './components/BookingForm'
// import MostPicked from './components/MostPicked'
// import HouseWithBackyard from './components/HouseWithBackyard'
// import HotelsLivingRoom from './components/HotelsLivingRoom'

// // 🏨 Hotel Detail Page Components
// import Breadcrumb from './components/BreadCrumb'
// import HotelTitle from './components/HotelTitle'
// import PhotoGallery from './components/PhotoGallery'
// import AboutSection from './components/AboutSection'
// import BookingCard from './components/BookingCard'
// import TreasureSection from './components/TreasureSection'

// // 🦶 Common
// import Footer from './components/Footer'

// function App() {
//   return (
//     <div className="min-h-screen bg-white font-poppins">
//       {/* Header */}
//       <Header />

//       {/* Landing Page Section */}
//       <section className="landing-page">
//         <Hero />
//         <BookingForm />
//         <MostPicked />
//         <HouseWithBackyard />
//         <HotelsLivingRoom />
//       </section>

//       {/* Hotel Details Section */}
//       <main className="max-w-screen-xl mx-auto px-4 lg:px-0 mt-16">
//         <div className="pt-16 pb-8">
//           <Breadcrumb />
//           <HotelTitle />
//         </div>

//         <PhotoGallery />

//         <div className="flex flex-col lg:flex-row gap-8 mt-12">
//           <div className="flex-1">
//             <AboutSection />
//           </div>
//           <div className="lg:w-96">
//             <BookingCard />
//           </div>
//         </div>

//         <TreasureSection />
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }

// export default App












// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// // 🌐 Landing Page Components
// import Header from './components/Header'
// import Hero from './components/Hero'
// import BookingForm from './components/BookingForm'
// import MostPicked from './components/MostPicked'
// import HouseWithBackyard from './components/HouseWithBackyard'
// import HotelsLivingRoom from './components/HotelsLivingRoom'

// // 🏨 Hotel Detail Page Components
// import Breadcrumb from './components/BreadCrumb'
// import HotelTitle from './components/HotelTitle'
// import PhotoGallery from './components/PhotoGallery'
// import AboutSection from './components/AboutSection'
// import BookingCard from './components/BookingCard'
// import TreasureSection from './components/TreasureSection'

// // 🦶 Common
// import Footer from './components/Footer'

// function App() {
//   return (
//     <div className="min-h-screen bg-white font-poppins">
//       <Router>
//         {/* Common Header */}
//         <Header />

//         <Routes>
//           {/* 🏠 Home / Landing Page */}
//           <Route
//             path="/"
//             element={
//               <section className="landing-page">
//                 <Hero />
//                 <BookingForm />
//                 <MostPicked />
//                 <HouseWithBackyard />
//                 <HotelsLivingRoom />
//               </section>
//             }
//           />

//           {/* 🏨 Hotel Details Page */}
//           <Route
//             path="/hotel/:id"
//             element={
//               <main className="max-w-screen-xl mx-auto px-4 lg:px-0 mt-16">
//                 <div className="pt-16 pb-8">
//                   <Breadcrumb />
//                   <HotelTitle />
//                 </div>

//                 <PhotoGallery />

//                 <div className="flex flex-col lg:flex-row gap-8 mt-12">
//                   <div className="flex-1">
//                     <AboutSection />
//                   </div>
//                   <div className="lg:w-96">
//                     <BookingCard />
//                   </div>
//                 </div>

//                 <TreasureSection />
//               </main>
//             }
//           />
//         </Routes>

//         {/* Common Footer */}
//         <Footer />
//       </Router>
//     </div>
//   )
// }

// export default App







// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // 🌐 Landing Page Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import BookingForm from "./components/BookingForm";
// import MostPicked from "./components/MostPicked";
// import HouseWithBackyard from "./components/HouseWithBackyard";
// import HotelsLivingRoom from "./components/HotelsLivingRoom";
// import BookingPage from './pages/BookingPage'

// // 🏨 Hotel Detail Page
// import HotelDetail from "./pages/HotelDetail";

// // 🦶 Common
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white font-poppins">
//         {/* 🧭 Common Header */}
//         <Header />

//         <Routes>
//           {/* 🏠 Home / Landing Page */}
//           <Route
//             path="/"
//             element={
//               <section className="landing-page">
//                 <Hero />
//                 <BookingForm />
//                 <MostPicked />
//                 <HouseWithBackyard />
//                 <HotelsLivingRoom />
//                 <BookingPage />
//               </section>
//             }
//           />

//           {/* 🏨 Hotel Detail Page */}
//           <Route path="/hotel/:id" element={<HotelDetail />} />
//         </Routes>

//         {/* 🦶 Common Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;









// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // 🌐 Landing Page Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";

// import MostPicked from "./components/MostPicked";
// import HouseWithBackyard from "./components/HouseWithBackyard";
// import HotelsLivingRoom from "./components/HotelsLivingRoom";
// import PaymentStepper from './components/PaymentStepper'
// import PaymentContent from './components/PaymentContent'

// // 🏨 Pages
// import BookingPage from "./pages/BookingPage";
// import HotelDetail from "./pages/HotelDetail";

// // 🦶 Common
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white font-poppins">
//         {/* 🧭 Common Header */}
//         <Header />

//         <Routes>
//           {/* 🏠 Home / Landing Page */}
//           <Route
//             path="/"
//             element={
//               <section className="landing-page">
//                 <Hero />
//                 {/* 👇 Removed BookingPage from here */}
//                 <MostPicked />
//                 <HouseWithBackyard />
//                 <HotelsLivingRoom />
//               </section>
//             }
//           />
          
//           <main className="max-w-7xl mx-auto px-4">
//         <PaymentStepper />
//         <PaymentContent />
//       </main>

//           {/* 🧾 Booking Page */}
//           <Route path="/book" element={<BookingPage />} />

//           {/* 🏨 Hotel Detail Page */}
//           <Route path="/hotel/:id" element={<HotelDetail />} />
//         </Routes>

//         {/* 🦶 Common Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;














// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // 🌐 Landing Page Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import MostPicked from "./components/MostPicked";
// import HouseWithBackyard from "./components/HouseWithBackyard";
// import HotelsLivingRoom from "./components/HotelsLivingRoom";
// import PaymentStepper from "./components/PaymentStepper";
// import PaymentContent from "./components/PaymentContent";

// // 🏨 Pages
// import BookingPage from "./pages/BookingPage";
// import HotelDetail from "./pages/HotelDetail";

// // 🦶 Common
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white font-poppins">
//         {/* 🧭 Common Header */}
//         <Header />

//         <Routes>
//           {/* 🏠 Home / Landing Page */}
//           <Route
//             path="/"
//             element={
//               <section className="landing-page">
//                 <Hero />
//                 <MostPicked />
//                 <HouseWithBackyard />
//                 <HotelsLivingRoom />
//               </section>
//             }
//           />

//           {/* 💳 Payment Page */}
//           <Route
//             path="/payment"
//             element={
//               <main className="max-w-7xl mx-auto px-4">
//                 <PaymentStepper />
//                 <PaymentContent />
//               </main>
//             }
//           />

//           {/* 🧾 Booking Page */}
//           <Route path="/book" element={<BookingPage />} />

//           {/* 🏨 Hotel Detail Page */}
//           <Route path="/hotel/:id" element={<HotelDetail />} />
//         </Routes>

//         {/* 🦶 Common Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;










// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // 🌐 Landing Page Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import MostPicked from "./components/MostPicked";
// import HouseWithBackyard from "./components/HouseWithBackyard";
// import HotelsLivingRoom from "./components/HotelsLivingRoom";

// // 💳 Payment Components
// import PaymentStepper from "./components/PaymentStepper";
// import PaymentContent from "./components/PaymentContent";

// // 🏨 Pages
// import BookingPage from "./pages/BookingPage";
// import HotelDetail from "./pages/HotelDetail";

// // 🦶 Common
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white font-poppins flex flex-col">
//         {/* 🧭 Common Header */}
//         <Header />

//         {/* 🌍 Page Content */}
//         <main className="flex-grow">
//           <Routes>
//             {/* 🏠 Home / Landing Page */}
//             <Route
//               path="/"
//               element={
//                 <section className="landing-page">
//                   <Hero />
//                   <MostPicked />
//                   <HouseWithBackyard />
//                   <HotelsLivingRoom />
//                 </section>
//               }
//             />

//             {/* 🧾 Booking Page */}
//             <Route path="/book" element={<BookingPage />} />

//             {/* 🏨 Hotel Detail Page */}
//             <Route path="/hotel/:id" element={<HotelDetail />} />

//             {/* 💳 Payment Page */}
//             <Route
//               path="/payment"
//               element={
//                 <section className="max-w-7xl mx-auto px-4 py-10">
//                   <PaymentStepper />
//                   <div className="mt-8">
//                     <PaymentContent />
//                   </div>
//                 </section>
//               }
//             />
//           </Routes>
//         </main>

//         {/* 🦶 Common Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

















// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // 🌐 Landing Page Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import MostPicked from "./components/MostPicked";
// import HouseWithBackyard from "./components/HouseWithBackyard";
// import HotelsLivingRoom from "./components/HotelsLivingRoom";

// // 💳 Payment Components
// import PaymentStepper from "./components/PaymentStepper";
// import PaymentContent from "./components/PaymentContent";

// // ✅ Booking Confirmation Component
// import BookingConfirmation from "./components/BookingConfirmation";

// // 🏨 Pages
// import BookingPage from "./pages/BookingPage";
// import HotelDetail from "./pages/HotelDetail";

// // 🦶 Common
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white font-poppins flex flex-col">
//         {/* 🧭 Common Header */}
//         <Header />

//         {/* 🌍 Page Content */}
//         <main className="flex-grow">
//           <Routes>
//             {/* 🏠 Home / Landing Page */}
//             <Route
//               path="/"
//               element={
//                 <section className="landing-page">
//                   <Hero />
//                   <MostPicked />
//                   <HouseWithBackyard />
//                   <HotelsLivingRoom />
//                 </section>
//               }
//             />

//             {/* 🧾 Booking Page */}
//             <Route path="/book" element={<BookingPage />} />

//             {/* 🏨 Hotel Detail Page */}
//             <Route path="/hotel/:id" element={<HotelDetail />} />

//             {/* 💳 Payment Page */}
//             <Route
//               path="/payment"
//               element={
//                 <section className="max-w-7xl mx-auto px-4 py-10">
//                   <PaymentStepper />
//                   <div className="mt-8">
//                     <PaymentContent />
//                   </div>
//                 </section>
//               }
//             />

//             {/* ✅ Booking Confirmation Page */}
//             <Route path="/booking-confirmation" element={<BookingConfirmation />} />
//           </Routes>
//         </main>

//         {/* 🦶 Common Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

























// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // 🌐 Landing Page Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import MostPicked from "./components/MostPicked";
// import HouseWithBackyard from "./components/HouseWithBackyard";
// import HotelsLivingRoom from "./components/HotelsLivingRoom";

// // 💳 Payment Components
// import PaymentStepper from "./components/PaymentStepper";
// import PaymentContent from "./components/PaymentContent";

// // ✅ Booking Confirmation Component
// import BookingConfirmation from "./components/BookingConfirmation";

// // 🔐 Auth Pages
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";
// import RegisterSuccess from "./components/RegisterSuccess";
// import VerificationSuccess from "./components/VerificationSuccess"; // ✅ NEW Import

// // 🏨 Pages
// import BookingPage from "./pages/BookingPage";
// import HotelDetail from "./pages/HotelDetail";

// // 🏢 Hotel Registration Form
// import HotelRegistrationForm from "./components/HotelRegistrationForm"; // ✅ NEW Import

// // 🦶 Common
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white font-poppins flex flex-col">
//         {/* 🧭 Common Header */}
//         <Header />

//         {/* 🌍 Page Content */}
//         <main className="flex-grow">
//           <Routes>
//             {/* 🏠 Home / Landing Page */}
//             <Route
//               path="/"
//               element={
//                 <section className="landing-page">
//                   <Hero />
//                   <MostPicked />
//                   <HouseWithBackyard />
//                   <HotelsLivingRoom />
//                 </section>
//               }
//             />

//             {/* 🧾 Booking Page */}
//             <Route path="/book" element={<BookingPage />} />

//             {/* 🏨 Hotel Detail Page */}
//             <Route path="/hotel/:id" element={<HotelDetail />} />

//             {/* 💳 Payment Page */}
//             <Route
//               path="/payment"
//               element={
//                 <section className="max-w-7xl mx-auto px-4 py-10">
//                   <PaymentStepper />
//                   <div className="mt-8">
//                     <PaymentContent />
//                   </div>
//                 </section>
//               }
//             />

//             {/* ✅ Booking Confirmation Page */}
//             <Route
//               path="/booking-confirmation"
//               element={<BookingConfirmation />}
//             />

//             {/* 🔐 Auth Pages */}
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/register-success" element={<RegisterSuccess />} />
//             <Route
//               path="/verification-success"
//               element={<VerificationSuccess />} // ✅ Added Route
//             />

//             {/* 🏢 Hotel Registration Page */}
//             <Route
//               path="/hotel-registration"
//               element={<HotelRegistrationForm />} // ✅ Hotel Registration
//             />
//           </Routes>
//         </main>

//         {/* 🦶 Common Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;












// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // 🌐 Landing Page Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import MostPicked from "./components/MostPicked";
// import HouseWithBackyard from "./components/HouseWithBackyard";
// import HotelsLivingRoom from "./components/HotelsLivingRoom";

// // 💳 Payment Components
// import PaymentStepper from "./components/PaymentStepper";
// import PaymentContent from "./components/PaymentContent";

// // ✅ Booking Confirmation Component
// import BookingConfirmation from "./components/BookingConfirmation";

// // 🔐 Auth Pages
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";
// import RegisterSuccess from "./components/RegisterSuccess";
// import VerificationSuccess from "./components/VerificationSuccess";

// // 🏨 Pages
// import BookingPage from "./pages/BookingPage";
// import HotelDetail from "./pages/HotelDetail";

// // 🏢 Hotel Registration Form
// import HotelRegistrationForm from "./components/HotelRegistrationForm";

// // 🧭 Admin Components
// import Sidebar from "./components/Sidebar";
// import Headers from "./components/Headers";
// import Dashboard from "./components/Dashboard";
// import UsersList from "./components/UsersList";

// // 🦶 Common
// import Footer from "./components/Footer";

// // 🧱 Layout Component for Dashboard
// const DashboardLayout = ({ children }) => (
//   <div className="flex min-h-screen bg-gray-100">
//     <Sidebar />
//     <div className="flex-1 flex flex-col">
//       <Headers />
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white font-poppins flex flex-col">
//         {/* Common Header for Public Pages */}
//         <Header />

//         <main className="flex-grow">
//           <Routes>
//             {/* 🏠 Home / Landing Page */}
//             <Route
//               path="/"
//               element={
//                 <section className="landing-page">
//                   <Hero />
//                   <MostPicked />
//                   <HouseWithBackyard />
//                   <HotelsLivingRoom />
//                 </section>
//               }
//             />

//             {/* 🧾 Booking Page */}
//             <Route path="/book" element={<BookingPage />} />

//             {/* 🏨 Hotel Detail Page */}
//             <Route path="/hotel/:id" element={<HotelDetail />} />

//             {/* 💳 Payment Page */}
//             <Route
//               path="/payment"
//               element={
//                 <section className="max-w-7xl mx-auto px-4 py-10">
//                   <PaymentStepper />
//                   <div className="mt-8">
//                     <PaymentContent />
//                   </div>
//                 </section>
//               }
//             />

//             {/* ✅ Booking Confirmation Page */}
//             <Route
//               path="/booking-confirmation"
//               element={<BookingConfirmation />}
//             />

//             {/* 🔐 Auth Pages */}
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/register-success" element={<RegisterSuccess />} />
//             <Route path="/verification-success" element={<VerificationSuccess />} />

//             {/* 🏢 Hotel Registration */}
//             <Route path="/hotel-registration" element={<HotelRegistrationForm />} />

//             {/* 🧭 Admin Dashboard Pages */}
//             <Route
//               path="/dashboard"
//               element={
//                 <DashboardLayout>
//                   <Dashboard />
//                 </DashboardLayout>
//               }
//             />

//             <Route
//               path="/dashboard/users"
//               element={
//                 <DashboardLayout>
//                   <UsersList />
//                 </DashboardLayout>
//               }
//             />
//           </Routes>
//         </main>

//         {/* Common Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;












// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // 🌐 Landing Page Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import MostPicked from "./components/MostPicked";
// import HouseWithBackyard from "./components/HouseWithBackyard";
// import HotelsLivingRoom from "./components/HotelsLivingRoom";

// // 💳 Payment Components
// import PaymentStepper from "./components/PaymentStepper";
// import PaymentContent from "./components/PaymentContent";

// // ✅ Booking Confirmation Component
// import BookingConfirmation from "./components/BookingConfirmation";

// // 🔐 Auth Pages
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";
// import RegisterSuccess from "./components/RegisterSuccess";
// import VerificationSuccess from "./components/VerificationSuccess";

// // 🏨 Pages
// import BookingPage from "./pages/BookingPage";
// import HotelDetail from "./pages/HotelDetail";

// // 🏢 Hotel Registration Form
// import HotelRegistrationForm from "./components/HotelRegistrationForm";

// // 🧭 Admin Components
// import Sidebars from "./components/Sidebars";
// import Headerss from "./components/Headerss";
// import Dashboard from "./components/Dashboard";
// import UsersList from "./components/UsersList";
// import MainContent from "./components/MainContent";

// // 🦶 Common
// import Footer from "./components/Footer";

// // 🧱 Layout Component for Admin Dashboard
// const DashboardLayout = ({ children }) => (
//   <div className="flex min-h-screen bg-gray-100">
//     <Sidebars />
//     <div className="flex-1 flex flex-col">
//       <Headerss />
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white font-poppins flex flex-col">
//         {/* Common Header for Public Pages */}
//         <Header />

//         <main className="flex-grow">
//           <Routes>
//             {/* 🏠 Home / Landing Page */}
//             <Route
//               path="/"
//               element={
//                 <section className="landing-page">
//                   <Hero />
//                   <MostPicked />
//                   <HouseWithBackyard />
//                   <HotelsLivingRoom />
//                 </section>
//               }
//             />

//             {/* 🧾 Booking Page */}
//             <Route path="/book" element={<BookingPage />} />

//             {/* 🏨 Hotel Detail Page */}
//             <Route path="/hotel/:id" element={<HotelDetail />} />

//             {/* 💳 Payment Page */}
//             <Route
//               path="/payment"
//               element={
//                 <section className="max-w-7xl mx-auto px-4 py-10">
//                   <PaymentStepper />
//                   <div className="mt-8">
//                     <PaymentContent />
//                   </div>
//                 </section>
//               }
//             />

//             {/* ✅ Booking Confirmation Page */}
//             <Route
//               path="/booking-confirmation"
//               element={<BookingConfirmation />}
//             />

//             {/* 🔐 Auth Pages */}
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/register-success" element={<RegisterSuccess />} />
//             <Route
//               path="/verification-success"
//               element={<VerificationSuccess />}
//             />

//             {/* 🏢 Hotel Registration */}
//             <Route
//               path="/hotel-registration"
//               element={<HotelRegistrationForm />}
//             />

//             {/* 🧭 Admin Dashboard Pages */}
//             <Route
//               path="/dashboard"
//               element={
//                 <DashboardLayout>
//                   <Dashboard />
//                 </DashboardLayout>
//               }
//             />

//             <Route
//               path="/dashboard/users"
//               element={
//                 <DashboardLayout>
//                   <UsersList />
//                 </DashboardLayout>
//               }
//             />

//             {/* 📊 New Admin MainContent Page */}
//             <Route
//               path="/dashboard/main"
//               element={
//                 <DashboardLayout>
//                   <MainContent />
//                 </DashboardLayout>
//               }
//             />
//           </Routes>
//         </main>

//         {/* Common Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;






























// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // 🌐 Landing Page Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import MostPicked from "./components/MostPicked";
// import HouseWithBackyard from "./components/HouseWithBackyard";
// import HotelsLivingRoom from "./components/HotelsLivingRoom";

// // 💳 Payment Components
// import PaymentStepper from "./components/PaymentStepper";
// import PaymentContent from "./components/PaymentContent";

// // ✅ Booking Confirmation Component
// import BookingConfirmation from "./components/BookingConfirmation";

// // 🔐 Auth Pages
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";
// import RegisterSuccess from "./components/RegisterSuccess";
// import VerificationSuccess from "./components/VerificationSuccess";

// // 🏨 Pages
// import BookingPage from "./pages/BookingPage";
// import HotelDetail from "./pages/HotelDetail";
// import HotelsList from "./pages/HotelsList"; // 🏨 New: All Hotels Page
// import About from "./pages/About"; // ℹ️ About Page
// import Contact from "./pages/Contact"; // 📞 Contact Page
// import UserDashboard from "./pages/UserDashboard"; // 👤 User Dashboard Page

// // 🏢 Hotel Registration Form
// import HotelRegistrationForm from "./components/HotelRegistrationForm";

// // 🧭 Admin Components
// import Sidebars from "./components/Sidebars";
// import Headerss from "./components/Headerss";
// import Dashboard from "./components/Dashboard";
// import UsersList from "./components/UsersList";
// import MainContent from "./components/MainContent";

// // 🦶 Common
// import Footer from "./components/Footer";

// // 🧱 Layout Component for Admin Dashboard
// const DashboardLayout = ({ children }) => (
//   <div className="flex min-h-screen bg-gray-100">
//     <Sidebars />
//     <div className="flex-1 flex flex-col">
//       <Headerss />
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white font-poppins flex flex-col">
//         {/* Common Header for Public Pages */}
//         <Header />

//         <main className="flex-grow">
//           <Routes>
//             {/* 🏠 Home / Landing Page */}
//             <Route
//               path="/"
//               element={
//                 <section className="landing-page">
//                   <Hero />
//                   <MostPicked />
//                   <HouseWithBackyard />
//                   <HotelsLivingRoom />
//                 </section>
//               }
//             />

//             {/* 🧾 Booking Page */}
//             <Route path="/book" element={<BookingPage />} />

//             {/* 🏨 Hotel Detail Page */}
//             <Route path="/hotel/:id" element={<HotelDetail />} />

//             {/* 💳 Payment Page */}
//             <Route
//               path="/payment"
//               element={
//                 <section className="max-w-7xl mx-auto px-4 py-10">
//                   <PaymentStepper />
//                   <div className="mt-8">
//                     <PaymentContent />
//                   </div>
//                 </section>
//               }
//             />

//             {/* ✅ Booking Confirmation Page */}
//             <Route path="/booking-confirmation" element={<BookingConfirmation />} />

//             {/* 🔐 Auth Pages */}
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/register-success" element={<RegisterSuccess />} />
//             <Route path="/verification-success" element={<VerificationSuccess />} />

//             {/* 🏢 Hotel Registration */}
//             <Route path="/hotel-registration" element={<HotelRegistrationForm />} />

//             {/* 🏨 All Hotels Page */}
//             <Route path="/hotels" element={<HotelsList />} />

//             {/* ℹ️ About Page */}
//             <Route path="/about" element={<About />} />

//             {/* 📞 Contact Page */}
//             <Route path="/contact" element={<Contact />} />

//             {/* 👤 User Dashboard Page */}
//             <Route path="/user-dashboard" element={<UserDashboard />} />

//             {/* 🧭 Admin Dashboard Pages */}
//             <Route
//               path="/dashboard"
//               element={
//                 <DashboardLayout>
//                   <Dashboard />
//                 </DashboardLayout>
//               }
//             />
//             <Route
//               path="/dashboard/users"
//               element={
//                 <DashboardLayout>
//                   <UsersList />
//                 </DashboardLayout>
//               }
//             />
//             <Route
//               path="/dashboard/main"
//               element={
//                 <DashboardLayout>
//                   <MainContent />
//                 </DashboardLayout>
//               }
//             />
//           </Routes>
//         </main>

//         {/* Common Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

















// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // 🌐 Landing Page Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import MostPicked from "./components/MostPicked";
// import HouseWithBackyard from "./components/HouseWithBackyard";
// import HotelsLivingRoom from "./components/HotelsLivingRoom";

// // 💳 Payment Components
// import PaymentStepper from "./components/PaymentStepper";
// import PaymentContent from "./components/PaymentContent";

// // ✅ Booking Confirmation Component
// import BookingConfirmation from "./components/BookingConfirmation";

// // 🔐 Auth Pages
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";
// import RegisterSuccess from "./components/RegisterSuccess";
// import VerificationSuccess from "./components/VerificationSuccess";

// // 🏨 Pages
// import BookingPage from "./pages/BookingPage";
// import HotelDetail from "./pages/HotelDetail";
// import HotelsList from "./pages/HotelsList"; // 🏨 New: All Hotels Page
// import About from "./pages/About"; // ℹ️ About Page
// import Contact from "./pages/Contact"; // 📞 Contact Page
// import UserDashboard from "./pages/UserDashboard"; // 👤 User Dashboard Page

// // 🏢 Hotel Registration Form
// import HotelRegistrationForm from "./components/HotelRegistrationForm";

// // 🧭 Admin Components
// import Sidebars from "./components/Sidebars";
// import Headerss from "./components/Headerss";
// import Dashboard from "./components/Dashboard";
// import UsersList from "./components/UsersList";
// import MainContent from "./components/MainContent";

// // 🦶 Common
// import Footer from "./components/Footer";

// // 🧱 Layout Component for Admin Dashboard
// const DashboardLayout = ({ children }) => (
//   <div className="flex min-h-screen bg-gray-100">
//     <Sidebars />
//     <div className="flex-1 flex flex-col">
//       <Headerss />
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white font-poppins flex flex-col">
//         {/* Common Header for Public Pages */}
//         <Header />

//         <main className="flex-grow">
//           <Routes>
//             {/* 🏠 Home / Landing Page */}
//             <Route
//               path="/"
//               element={
//                 <section className="landing-page">
//                   <Hero />
//                   <MostPicked />
//                   <HouseWithBackyard />
//                   <HotelsLivingRoom />
//                 </section>
//               }
//             />

//             {/* 🧾 Booking Page */}
//             <Route path="/book" element={<BookingPage />} />

//             {/* 🏨 Hotel Detail Page */}
//             <Route path="/hotel/:id" element={<HotelDetail />} />

//             {/* 💳 Payment Page */}
//             <Route
//               path="/payment"
//               element={
//                 <section className="max-w-7xl mx-auto px-4 py-10">
//                   <PaymentStepper />
//                   <div className="mt-8">
//                     <PaymentContent />
//                   </div>
//                 </section>
//               }
//             />

//             {/* ✅ Booking Confirmation Page */}
//             <Route path="/booking-confirmation" element={<BookingConfirmation />} />

//             {/* 🔐 Auth Pages */}
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/register-success" element={<RegisterSuccess />} />
//             <Route path="/verification-success" element={<VerificationSuccess />} />

//             {/* 🏢 Hotel Registration */}
//             <Route path="/hotel-registration" element={<HotelRegistrationForm />} />

//             {/* 🏨 All Hotels Page */}
//             <Route path="/hotels" element={<HotelsList />} />

//             {/* ℹ️ About Page */}
//             <Route path="/about" element={<About />} />

//             {/* 📞 Contact Page */}
//             <Route path="/contact" element={<Contact />} />

//             {/* 👤 User Dashboard Page */}
//             <Route path="/user-dashboard" element={<UserDashboard />} />

//             {/* 🧭 Admin Dashboard Pages */}
//             <Route
//               path="/dashboard"
//               element={
//                 <DashboardLayout>
//                   <Dashboard />
//                 </DashboardLayout>
//               }
//             />
//             <Route
//               path="/dashboard/users"
//               element={
//                 <DashboardLayout>
//                   <UsersList />
//                 </DashboardLayout>
//               }
//             />
//             <Route
//               path="/dashboard/main"
//               element={
//                 <DashboardLayout>
//                   <MainContent />
//                 </DashboardLayout>
//               }
//             />
//           </Routes>
//         </main>

//         {/* Common Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;








































// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // 🌐 Landing Page Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import HomeBookingForm from "./components/HomeBookingForm"; // ✅ Added import
// import MostPicked from "./components/MostPicked";
// import HouseWithBackyard from "./components/HouseWithBackyard";
// import HotelsLivingRoom from "./components/HotelsLivingRoom";

// // 💳 Payment Components
// import PaymentStepper from "./components/PaymentStepper";
// import PaymentContent from "./components/PaymentContent";

// // ✅ Booking Confirmation Component
// import BookingConfirmation from "./components/BookingConfirmation";

// // 🔐 Auth Pages
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";
// import RegisterSuccess from "./components/RegisterSuccess";
// import VerificationSuccess from "./components/VerificationSuccess";

// // 🏨 Pages
// import BookingPage from "./pages/BookingPage";
// import HotelDetail from "./pages/HotelDetail";
// import HotelsList from "./pages/HotelsList";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import UserDashboard from "./pages/UserDashboard";

// // 🏢 Hotel Registration
// import HotelRegistrationForm from "./components/HotelRegistrationForm";

// // 🧭 Admin Components
// import Sidebars from "./pages/Sidebars";
// import Headerss from "./components/Headerss";
// import Dashboard from "./components/Dashboard";
// import UsersList from "./components/UsersList";
// import MainContent from "./components/MainContent";

// // 🦶 Common
// import Footer from "./components/Footer";

// // 🧱 Layout Component for Admin Dashboard
// const DashboardLayout = ({ children }) => (
//   <div className="flex min-h-screen bg-gray-100">
//     <Sidebars />
//     <div className="flex-1 flex flex-col">
//       <Headerss />
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   </div>
// );

// // 🚀 Layout Component for Public Pages (Header + Footer)
// const PublicLayout = ({ children }) => (
//   <div className="min-h-screen bg-white font-poppins flex flex-col">
//     <Header />
//     <main className="flex-grow">{children}</main>
//     <Footer />
//   </div>
// );

// // ✅ App Component
// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* 🌐 Home Page */}
//         <Route
//           path="/"
//           element={
//             <PublicLayout>
//               <Hero />
//               <HomeBookingForm /> {/* ✅ Added HomeBookingForm here */}
//               <MostPicked />
//               <HouseWithBackyard />
//               <HotelsLivingRoom />
//             </PublicLayout>
//           }
//         />

//         {/* 🏨 Booking Page */}
//         <Route
//           path="/book"
//           element={
//             <PublicLayout>
//               <BookingPage />
//             </PublicLayout>
//           }
//         />

//         <Route
//           path="/hotel/:id"
//           element={
//             <PublicLayout>
//               <HotelDetail />
//             </PublicLayout>
//           }
//         />

//         {/* 💳 Payment Flow */}
//         <Route
//           path="/payment"
//           element={
//             <PublicLayout>
//               <section className="max-w-7xl mx-auto px-4 py-10">
//                 <PaymentStepper />
//                 <div className="mt-8">
//                   <PaymentContent />
//                 </div>
//               </section>
//             </PublicLayout>
//           }
//         />

//         {/* ✅ Booking Confirmation */}
//         <Route
//           path="/booking-confirmation"
//           element={
//             <PublicLayout>
//               <BookingConfirmation />
//             </PublicLayout>
//           }
//         />

//         {/* 🔐 Auth Pages */}
//         <Route
//           path="/login"
//           element={
//             <PublicLayout>
//               <LoginPage />
//             </PublicLayout>
//           }
//         />
//         <Route
//           path="/register"
//           element={
//             <PublicLayout>
//               <RegisterPage />
//             </PublicLayout>
//           }
//         />
//         <Route
//           path="/register-success"
//           element={
//             <PublicLayout>
//               <RegisterSuccess />
//             </PublicLayout>
//           }
//         />
//         <Route
//           path="/verification-success"
//           element={
//             <PublicLayout>
//               <VerificationSuccess />
//             </PublicLayout>
//           }
//         />

//         {/* 🏢 Hotel Registration */}
//         <Route
//           path="/hotel-registration"
//           element={
//             <PublicLayout>
//               <HotelRegistrationForm />
//             </PublicLayout>
//           }
//         />

//         {/* 🏨 Hotels List */}
//         <Route
//           path="/hotels"
//           element={
//             <PublicLayout>
//               <HotelsList />
//             </PublicLayout>
//           }
//         />

//         {/* ℹ️ Other Static Pages */}
//         <Route
//           path="/about"
//           element={
//             <PublicLayout>
//               <About />
//             </PublicLayout>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <PublicLayout>
//               <Contact />
//             </PublicLayout>
//           }
//         />

//         {/* 👤 User Dashboard (Separate layout) */}
//         <Route path="/user-dashboard" element={<UserDashboard />} />

//         {/* 🧭 Admin Dashboard Routes */}
//         <Route
//           path="/dashboard"
//           element={
//             <DashboardLayout>
//               <Dashboard />
//             </DashboardLayout>
//           }
//         />
//         <Route
//           path="/dashboard/users"
//           element={
//             <DashboardLayout>
//               <UsersList />
//             </DashboardLayout>
//           }
//         />
//         <Route
//           path="/dashboard/main"
//           element={
//             <DashboardLayout>
//               <MainContent />
//             </DashboardLayout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;








































// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // 🌐 Landing Page Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import HomeBookingForm from "./components/HomeBookingForm";
// import MostPicked from "./components/MostPicked";
// import HouseWithBackyard from "./components/HouseWithBackyard";
// import HotelsLivingRoom from "./components/HotelsLivingRoom";

// // 💳 Payment Components
// import PaymentStepper from "./components/PaymentStepper";
// import PaymentContent from "./components/PaymentContent";

// // ✅ Booking Confirmation Component
// import BookingConfirmation from "./components/BookingConfirmation";

// // 🔐 Auth Pages
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";
// import RegisterSuccess from "./components/RegisterSuccess";
// import VerificationSuccess from "./components/VerificationSuccess";

// // 🏨 Pages
// import BookingPage from "./pages/BookingPage";
// import HotelDetail from "./pages/HotelDetail";
// import HotelsList from "./pages/HotelsList";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import UserDashboard from "./pages/UserDashboard";

// // 🏢 Hotel Registration
// import HotelRegistrationForm from "./components/HotelRegistrationForm";

// // 🧭 Admin Components (Old)
// import Sidebars from "./pages/Sidebars";
// import Headerss from "./pages/Headerss";
// import MainContent from "./components/MainContent";
// import UsersList from "./pages/UsersList";

// // 🧭 Admin Components (New)
// import Sidebarss from "./components/Sidebarss";
// import Headersss from "./components/Headersss";
// import MainContents from "./pages/MainContents";
// import Bookings from "./components/Bookings"; // ✅ New Bookings Page

// // 🦶 Common
// import Footer from "./components/Footer";

// // 🧱 Old Admin Layout
// const DashboardLayoutOld = ({ children }) => (
//   <div className="flex min-h-screen bg-gray-100">
//     <Sidebars />
//     <div className="flex-1 flex flex-col">
//       <Headerss />
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   </div>
// );

// // 🧱 New Admin Layout
// const DashboardLayoutNew = ({ children }) => (
//   <div className="flex min-h-screen bg-gray-100">
//     <Sidebarss />
//     <div className="flex-1 flex flex-col">
//       <Headersss />
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   </div>
// );

// // 🚀 Public Layout
// const PublicLayout = ({ children }) => (
//   <div className="min-h-screen bg-white font-poppins flex flex-col">
//     <Header />
//     <main className="flex-grow">{children}</main>
//     <Footer />
//   </div>
// );

// // ✅ App Component
// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* 🌐 Home Page */}
//         <Route
//           path="/"
//           element={
//             <PublicLayout>
//               <Hero />
//               <HomeBookingForm />
//               <MostPicked />
//               <HouseWithBackyard />
//               <HotelsLivingRoom />
//             </PublicLayout>
//           }
//         />

//         {/* 🏨 Booking Page */}
//         <Route
//           path="/book"
//           element={
//             <PublicLayout>
//               <BookingPage />
//             </PublicLayout>
//           }
//         />

//         <Route
//           path="/hotel/:id"
//           element={
//             <PublicLayout>
//               <HotelDetail />
//             </PublicLayout>
//           }
//         />

//         {/* 💳 Payment Flow */}
//         <Route
//           path="/payment"
//           element={
//             <PublicLayout>
//               <section className="max-w-7xl mx-auto px-4 py-10">
//                 <PaymentStepper />
//                 <div className="mt-8">
//                   <PaymentContent />
//                 </div>
//               </section>
//             </PublicLayout>
//           }
//         />

//         {/* ✅ Booking Confirmation */}
//         <Route
//           path="/booking-confirmation"
//           element={
//             <PublicLayout>
//               <BookingConfirmation />
//             </PublicLayout>
//           }
//         />

//         {/* 🔐 Auth Pages */}
//         <Route
//           path="/login"
//           element={
//             <PublicLayout>
//               <LoginPage />
//             </PublicLayout>
//           }
//         />
//         <Route
//           path="/register"
//           element={
//             <PublicLayout>
//               <RegisterPage />
//             </PublicLayout>
//           }
//         />
//         <Route
//           path="/register-success"
//           element={
//             <PublicLayout>
//               <RegisterSuccess />
//             </PublicLayout>
//           }
//         />
//         <Route
//           path="/verification-success"
//           element={
//             <PublicLayout>
//               <VerificationSuccess />
//             </PublicLayout>
//           }
//         />

//         {/* 🏢 Hotel Registration */}
//         <Route
//           path="/hotel-registration"
//           element={
//             <PublicLayout>
//               <HotelRegistrationForm />
//             </PublicLayout>
//           }
//         />

//         {/* 🏨 Hotels List */}
//         <Route
//           path="/hotels"
//           element={
//             <PublicLayout>
//               <HotelsList />
//             </PublicLayout>
//           }
//         />

//         {/* ℹ️ Other Static Pages */}
//         <Route
//           path="/about"
//           element={
//             <PublicLayout>
//               <About />
//             </PublicLayout>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <PublicLayout>
//               <Contact />
//             </PublicLayout>
//           }
//         />

//         {/* 👤 User Dashboard */}
//         <Route path="/user-dashboard" element={<UserDashboard />} />

//         {/* 🧭 Old Admin Dashboard Routes */}
//         <Route
//           path="/dashboard"
//           element={
//             <DashboardLayoutOld>
//               <MainContent />
//             </DashboardLayoutOld>
//           }
//         />
//         <Route
//           path="/dashboard/users"
//           element={
//             <DashboardLayoutOld>
//               <UsersList />
//             </DashboardLayoutOld>
//           }
//         />

//         {/* 🧭 New Admin Dashboard Routes */}
//         <Route
//           path="/dashboard2"
//           element={
//             <DashboardLayoutNew>
//               <MainContents />
//             </DashboardLayoutNew>
//           }
//         />
//         <Route
//           path="/dashboard2/bookings"
//           element={
//             <DashboardLayoutNew>
//               <Bookings />
//             </DashboardLayoutNew>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;














































import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// 🌐 Public Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import DemoHotels from "./components/DemoHotels";
import Footer from "./components/Footer";
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

// 🌐 Landing Page Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeBookingForm from "./components/HomeBookingForm";
import MostPicked from "./components/MostPicked";
import HouseWithBackyard from "./components/HouseWithBackyard";
import HotelsLivingRoom from "./components/HotelsLivingRoom";

// 💳 Payment Components
import PaymentStepper from "./components/PaymentStepper";
import PaymentContent from "./components/PaymentContent";

// ✅ Booking Confirmation Component
import BookingConfirmation from "./components/BookingConfirmation";

// 🔐 Auth Pages
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import RegisterSuccess from "./components/RegisterSuccess";
import VerificationSuccess from "./components/VerificationSuccess";

// 🏨 Pages
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07
import BookingPage from "./pages/BookingPage";
import HotelDetail from "./pages/HotelDetail";
import HotelsList from "./pages/HotelsList";
import About from "./pages/About";
import Contact from "./pages/Contact";
<<<<<<< HEAD
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import RegisterSuccess from "./components/RegisterSuccess";
import VerificationSuccess from "./components/VerificationSuccess";
import HotelRegistrationForm from "./components/HotelRegistrationForm";
import PaymentStepper from "./components/PaymentStepper";
import PaymentContent from "./components/PaymentContent";
import BookingConfirmation from "./components/BookingConfirmation";

// 🧭 Admin Components
import Sidebar from "./components/Sidebar";
import Headers from "./components/Headers";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";

// 🆕 Admin Sub Pages
import Refund from "./pages/Refund";
import Message from "./pages/Message";
import Help from "./pages/Help";
import Setting from "./pages/Setting";
import UserBookings from "./pages/UserBookings";

// 🆕 User / Owner Pages
import UserDashboard from "./pages/UserDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";

// 🧱 Layouts
const DashboardLayoutNew = ({ children, onLogout }) => (
  <div className="flex min-h-screen bg-gray-100">
    <Sidebar onLogout={onLogout} />
    <div className="flex-1 flex flex-col">
      <Headers />
=======
import UserDashboard from "./pages/UserDashboard";

// 🏢 Hotel Registration
import HotelRegistrationForm from "./components/HotelRegistrationForm";

// 🔹 Password Reset Pages
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

// 🧭 Admin Components (Old)
import Sidebars from "./pages/Sidebars";
import Headerss from "./pages/Headerss";
import MainContent from "./components/MainContent";
import UsersList from "./pages/UsersList";

// 🧭 Admin Components (New)
import Sidebarss from "./components/Sidebarss";
import Headersss from "./components/Headersss";
import MainContents from "./pages/MainContents";
import Bookings from "./components/Bookings";

// 🦶 Common
import Footer from "./components/Footer";

// 🧱 Old Admin Layout
const DashboardLayoutOld = ({ children }) => (
  <div className="flex min-h-screen bg-gray-100">
    <Sidebars />
    <div className="flex-1 flex flex-col">
      <Headerss />
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07
      <main className="flex-1 p-6">{children}</main>
    </div>
  </div>
);

<<<<<<< HEAD
const PublicLayout = ({ children }) => (
  <div className="min-h-screen bg-white font-poppins flex flex-col">
    <Header />
    <div className="pt-20"> {/* 👈 Adds space below fixed header */}</div>
=======
// 🧱 New Admin Layout
const DashboardLayoutNew = ({ children }) => (
  <div className="flex min-h-screen bg-gray-100">
    <Sidebarss />
    <div className="flex-1 flex flex-col">
      <Headersss />
      <main className="flex-1 p-6">{children}</main>
    </div>
  </div>
);

// 🚀 Public Layout
const PublicLayout = ({ children }) => (
  <div className="min-h-screen bg-white font-poppins flex flex-col">
    <Header />
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

<<<<<<< HEAD
function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // ✅ Restore admin login from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdminAuthenticated") === "true";
    setIsAdminAuthenticated(loggedIn);
  }, []);

  // ✅ Handle admin login/logout
  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
    localStorage.setItem("isAdminAuthenticated", "true");
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem("isAdminAuthenticated");
  };

  return (
    <Router>
      <Routes>
        {/* 🌐 Public Pages */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Hero />
              <DemoHotels/>
            </PublicLayout>
          }
        />
        <Route
          path="/book"
          element={
            <PublicLayout>
              <BookingPage />
            </PublicLayout>
          }
        />
        <Route
          path="/hotel/:id"
          element={
            <PublicLayout>
              <HotelDetail />
            </PublicLayout>
          }
        />
        <Route
          path="/hotels"
          element={
            <PublicLayout>
              <HotelsList />
            </PublicLayout>
          }
        />
        <Route
          path="/payment"
          element={
            <PublicLayout>
              <section className="max-w-7xl mx-auto px-4 py-10">
                <PaymentStepper />
                <div className="mt-8">
                  <PaymentContent />
                </div>
              </section>
            </PublicLayout>
          }
        />
        <Route
          path="/booking-confirmation"
          element={
            <PublicLayout>
              <BookingConfirmation />
            </PublicLayout>
          }
        />

        {/* 🧭 User Dashboard Pages */}
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />

        {/* 🔑 Auth Pages */}
        <Route
          path="/login"
          element={
            <PublicLayout>
              <LoginPage />
            </PublicLayout>
          }
        />
        <Route
          path="/register"
          element={
            <PublicLayout>
              <RegisterPage />
            </PublicLayout>
          }
        />
        <Route
          path="/register-success"
          element={
            <PublicLayout>
              <RegisterSuccess />
            </PublicLayout>
          }
        />
        <Route
          path="/verification-success"
          element={
            <PublicLayout>
              <VerificationSuccess />
            </PublicLayout>
          }
        />
        <Route
          path="/hotel-registration"
          element={
            <PublicLayout>
              <HotelRegistrationForm />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <About />
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout>
              <Contact />
            </PublicLayout>
          }
        />

        {/* 🔐 Admin Login */}
        <Route
          path="/admin-login"
          element={
            isAdminAuthenticated ? (
              <Navigate to="/admin-dashboard" replace />
            ) : (
              <AdminLogin onAdminLogin={handleAdminLogin} />
            )
          }
        />

        {/* 🧭 Protected Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            isAdminAuthenticated ? (
              <DashboardLayoutNew onLogout={handleAdminLogout}>
                <Dashboard />
              </DashboardLayoutNew>
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />

        {/* 🧾 Admin Sub Pages */}
        <Route
          path="/admin-dashboard/bookings"
          element={
            isAdminAuthenticated ? (
              <DashboardLayoutNew onLogout={handleAdminLogout}>
                <UserBookings />
              </DashboardLayoutNew>
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />
        <Route
          path="/admin-dashboard/refund"
          element={
            isAdminAuthenticated ? (
              <DashboardLayoutNew onLogout={handleAdminLogout}>
                <Refund />
              </DashboardLayoutNew>
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />
        <Route
          path="/admin-dashboard/message"
          element={
            isAdminAuthenticated ? (
              <DashboardLayoutNew onLogout={handleAdminLogout}>
                <Message />
              </DashboardLayoutNew>
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />
        <Route
          path="/admin-dashboard/help"
          element={
            isAdminAuthenticated ? (
              <DashboardLayoutNew onLogout={handleAdminLogout}>
                <Help />
              </DashboardLayoutNew>
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />
        <Route
          path="/admin-dashboard/setting"
          element={
            isAdminAuthenticated ? (
              <DashboardLayoutNew onLogout={handleAdminLogout}>
                <Setting />
              </DashboardLayoutNew>
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />
      </Routes>
    </Router>
=======
// ✅ App Component
function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          {/* 🌐 Home Page */}
          <Route
            path="/"
            element={
              <PublicLayout>
                <Hero />
                <HomeBookingForm />
                <MostPicked />
                <HouseWithBackyard />
                <HotelsLivingRoom />
              </PublicLayout>
            }
          />

          {/* 🔐 Auth Pages */}
          <Route
            path="/login"
            element={
              <PublicLayout>
                <LoginPage />
              </PublicLayout>
            }
          />
          <Route
            path="/register"
            element={
              <PublicLayout>
                <RegisterPage />
              </PublicLayout>
            }
          />
          <Route
            path="/register-success"
            element={
              <PublicLayout>
                <RegisterSuccess />
              </PublicLayout>
            }
          />
          <Route
            path="/verification-success"
            element={
              <PublicLayout>
                <VerificationSuccess />
              </PublicLayout>
            }
          />

          {/* 🔹 Password Reset Flow */}
          <Route
            path="/forgot-password"
            element={
              <PublicLayout>
                <ForgotPassword />
              </PublicLayout>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <PublicLayout>
                <ResetPassword />
              </PublicLayout>
            }
          />

          {/* 🏨 Booking Page */}
          <Route
            path="/book"
            element={
              <PublicLayout>
                <BookingPage />
              </PublicLayout>
            }
          />

          {/* 🏨 Hotel Detail Page */}
          <Route
            path="/hotel/:id"
            element={
              <PublicLayout>
                <HotelDetail />
              </PublicLayout>
            }
          />

          {/* 💳 Payment Flow */}
          <Route
            path="/payment"
            element={
              <PublicLayout>
                <section className="max-w-7xl mx-auto px-4 py-10">
                  <PaymentStepper />
                  <div className="mt-8">
                    <PaymentContent />
                  </div>
                </section>
              </PublicLayout>
            }
          />

          {/* ✅ Booking Confirmation */}
          <Route
            path="/booking-confirmation"
            element={
              <PublicLayout>
                <BookingConfirmation />
              </PublicLayout>
            }
          />

          {/* 🏢 Hotel Registration */}
          <Route
            path="/hotel-registration"
            element={
              <PublicLayout>
                <HotelRegistrationForm />
              </PublicLayout>
            }
          />

          {/* 🏨 Hotels List */}
          <Route
            path="/hotels"
            element={
              <PublicLayout>
                <HotelsList />
              </PublicLayout>
            }
          />

          {/* ℹ️ Other Pages */}
          <Route
            path="/about"
            element={
              <PublicLayout>
                <About />
              </PublicLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <PublicLayout>
                <Contact />
              </PublicLayout>
            }
          />

          {/* 👤 User Dashboard */}
          <Route path="/user-dashboard" element={<UserDashboard />} />

          {/* 🧭 Old Admin Dashboard */}
          <Route
            path="/dashboard"
            element={
              <DashboardLayoutOld>
                <MainContent />
              </DashboardLayoutOld>
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <DashboardLayoutOld>
                <UsersList />
              </DashboardLayoutOld>
            }
          />

          {/* 🧭 New Admin Dashboard */}
          <Route
            path="/dashboard2"
            element={
              <DashboardLayoutNew>
                <MainContents />
              </DashboardLayoutNew>
            }
          />
          <Route
            path="/dashboard2/bookings"
            element={
              <DashboardLayoutNew>
                <Bookings />
              </DashboardLayoutNew>
            }
          />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07
