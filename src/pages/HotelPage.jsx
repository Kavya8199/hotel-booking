import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import HotelTitle from '../components/HotelTitle'
import PhotoGallery from '../components/PhotoGallery'
import AboutSection from '../components/AboutSection'
import BookingCard from '../components/BookingCard'
import TreasureSection from '../components/TreasureSection'

function HotelPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 lg:px-0 mt-16">
      <div className="pt-16 pb-8">
        <Breadcrumb />
        <HotelTitle />
      </div>

      <PhotoGallery />

      <div className="flex flex-col lg:flex-row gap-8 mt-12">
        <div className="flex-1">
          <AboutSection />
        </div>
        <div className="lg:w-96">
          <BookingCard />
        </div>
      </div>

      <TreasureSection />
    </main>
  )
}

export default HotelPage
