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
