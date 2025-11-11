<<<<<<< HEAD
import React from "react";
import Hero from "../components/Hero";
import BookingForm from "../components/BookingForm";
import DemoHotels from "../components/DemoHotels"; // ✅ import

function HomePage() {
  return (
    <section className="landing-page ">
      <Hero />
      <BookingForm />
      <DemoHotels /> {/* ✅ Show 15 demo hotels */}
    </section>
  );
}

export default HomePage;
=======
import React from 'react'
import Hero from '../components/Hero'
import BookingForm from '../components/BookingForm'
import MostPicked from '../components/MostPicked'
import HouseWithBackyard from '../components/HouseWithBackyard'
import HotelsLivingRoom from '../components/HotelsLivingRoom'
import HomeBookingForm from "../components/HomeBookingForm";

function HomePage() {
  return (
    <section className="landing-page">
      <Hero />
      <BookingForm />
      <HomeBookingForm />
      <MostPicked />
      <HouseWithBackyard />
      <HotelsLivingRoom />
    </section>
  )
}

export default HomePage
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07
