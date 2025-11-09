

import React from 'react'
import { useLocation } from 'react-router-dom'
import BookingStepper from '../components/BookingStepper'
import PropertyCard from '../components/PropertyCard'
import BookingForm from '../components/BookingForm'

const BookingPage = () => {
  const location = useLocation()
  const hotel = location.state?.hotel

  if (!hotel) {
    return (
      <main className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-red-500 text-lg mt-16">
          No hotel selected! Please go back and select a hotel.
        </p>
      </main>
    )
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Stepper */}
      <div className="flex justify-center mb-16">
        <BookingStepper />
      </div>

      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-semibold text-primary-blue mb-4">
          Booking Information
        </h2>
        <p className="text-lg font-light text-light-gray">
          Please fill up the blank fields below
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
        <PropertyCard hotel={hotel} />
        <div className="w-px h-80 bg-border-gray hidden lg:block"></div>
        <BookingForm hotel={hotel} />
      </div>
    </main>
  )
}

export default BookingPage

