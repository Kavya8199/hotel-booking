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
import BookingPage from "./pages/BookingPage";
import HotelDetail from "./pages/HotelDetail";
import HotelsList from "./pages/HotelsList";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
      <main className="flex-1 p-6">{children}</main>
    </div>
  </div>
);

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
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

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
  );
}

export default App;
