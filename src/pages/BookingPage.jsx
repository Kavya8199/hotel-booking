// import React from 'react'
// import BookingStepper from '../components/BookingStepper'
// import PropertyCard from '../components/PropertyCard'
// import BookingForm from "../components/BookingForm";

// const BookingPage = () => {
//   return (
//     <main className="w-full max-w-7xl mx-auto px-4 py-12">
//       {/* Stepper */}
//       <div className="flex justify-center mb-16">
//         <BookingStepper />
//       </div>

//       {/* Title Section */}
//       <div className="text-center mb-20">
//         <h2 className="text-4xl font-semibold text-primary-blue mb-4">
//           Booking Information
//         </h2>
//         <p className="text-lg font-light text-light-gray">
//           Please fill up the blank fields below
//         </p>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
//         <PropertyCard />
//         <div className="w-px h-80 bg-border-gray hidden lg:block"></div>
//         <BookingForm />
//       </div>
//     </main>
//   )
// }

// export default BookingPage
import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import BookingStepper from '../components/BookingStepper'
import PropertyCard from '../components/PropertyCard'

// LocalPropertyCard: large visual card (fallback to your PropertyCard if you prefer)
function LocalPropertyCard({ hotel }) {
  // If your existing PropertyCard already supports a large/overlay mode, use that instead.
  // This local card ensures the hotel image is large, responsive and has a modern overlay.
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-72 sm:h-96 md:h-[520px] object-cover transition-transform duration-500 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute left-4 bottom-6 text-white">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">{hotel.name}</h3>
          <p className="text-sm md:text-base opacity-90">{hotel.location}</p>
        </div>

        <div className="absolute right-4 top-4 bg-white/90 rounded-md px-3 py-2 shadow-sm">
          <div className="text-xs text-gray-600">From</div>
          <div className="font-semibold">₹{(hotel.basePrice ?? 0).toLocaleString()}<span className="text-xs text-gray-500">/night</span></div>
        </div>
      </div>

      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">Rating</div>
            <div className="font-semibold">{hotel.rating ?? '—'} ⭐</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Distance</div>
            <div className="font-semibold">{hotel.distance ?? '—'} km</div>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-700 line-clamp-3">{hotel.shortDescription ?? hotel.description ?? ''}</p>
      </div>
    </div>
  )
}

// Reuse previously implemented DateRangePicker and Counter from the canvas
function useClickOutside(ref, handler) {
  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler()
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [ref, handler])
}

function DateRangePicker({ checkIn, checkOut, setCheckIn, setCheckOut }) {
  const today = new Date()
  const toISO = d => d.toISOString().split('T')[0]
  const wrapperRef = useRef(null)
  const [open, setOpen] = useState(false)
  useClickOutside(wrapperRef, () => setOpen(false))

  useEffect(() => {
    if (new Date(checkOut) <= new Date(checkIn)) {
      const ci = new Date(checkIn)
      ci.setDate(ci.getDate() + 1)
      setCheckOut(toISO(ci))
    }
  }, [checkIn, checkOut, setCheckOut])

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white shadow-sm"
      >
        <div className="text-left">
          <div className="text-xs text-gray-500">Dates</div>
          <div className="text-sm font-medium">{checkIn} → {checkOut}</div>
        </div>
        <span className="text-sm text-primary">Change</span>
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full bg-white p-4 rounded-lg shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col">
              <span className="text-xs text-gray-500">Check-in</span>
              <input
                type="date"
                value={checkIn}
                min={toISO(today)}
                onChange={e => setCheckIn(e.target.value)}
                className="mt-1 p-2 rounded-lg border border-gray-200"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-gray-500">Check-out</span>
              <input
                type="date"
                value={checkOut}
                min={(() => { const d=new Date(checkIn); d.setDate(d.getDate()+1); return toISO(d) })()}
                onChange={e => setCheckOut(e.target.value)}
                className="mt-1 p-2 rounded-lg border border-gray-200"
              />
            </label>
          </div>

          <div className="mt-3 flex justify-end gap-2">
            <button type="button" onClick={() => setOpen(false)} className="px-3 py-1 rounded-md text-sm">Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

function Counter({ label, value, setValue, min = 0, max = 10 }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="ml-auto inline-flex items-center gap-2">
        <button
          type="button"
          onClick={() => setValue(v => Math.max(min, v - 1))}
          className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center"
          aria-label={`decrease ${label}`}
        >-</button>
        <div className="w-10 text-center font-medium">{value}</div>
        <button
          type="button"
          onClick={() => setValue(v => Math.min(max, v + 1))}
          className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center"
          aria-label={`increase ${label}`}
        >+</button>
      </div>
    </div>
  )
}

function BookingForm({ hotel }) {
  const today = new Date()
  const toISO = d => d.toISOString().split('T')[0]

  const [checkIn, setCheckIn] = useState(toISO(today))
  const [checkOut, setCheckOut] = useState(() => { const d=new Date(); d.setDate(d.getDate()+1); return toISO(d) })
  const [nights, setNights] = useState(1)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [roomType, setRoomType] = useState(hotel?.rooms?.[0]?.id ?? 'standard')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const ci = new Date(checkIn)
    const co = new Date(checkOut)
    const diff = Math.round((co - ci) / (24 * 60 * 60 * 1000))
    if (!isNaN(diff) && diff >= 1) {
      setNights(diff)
      setErrors(prev => ({ ...prev, dates: null }))
    } else {
      setErrors(prev => ({ ...prev, dates: 'Check-out must be after check-in.' }))
    }
  }, [checkIn, checkOut])

  useEffect(() => {
    const ci = new Date(checkIn)
    const newCo = new Date(ci.getTime() + nights * 24 * 60 * 60 * 1000)
    setCheckOut(toISO(newCo))
  }, [nights])

  function validate() {
    const e = {}
    if (new Date(checkOut) <= new Date(checkIn)) e.dates = 'Check-out must be after check-in.'
    if (adults < 1) e.adults = 'At least 1 adult required.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    const payload = { hotelId: hotel.id, checkIn, checkOut, nights, adults, children, roomType }
    console.log('Booking payload', payload)
    setTimeout(() => { setLoading(false); alert('Booking simulated — check console for payload') }, 700)
  }

  const room = (hotel?.rooms ?? []).find(r => r.id === roomType)
  const perNight = room?.price ?? hotel?.basePrice ?? 0
  const totalPrice = perNight * nights

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold">Reserve your stay</h3>
          <p className="text-xs text-gray-500">{hotel.name} — {hotel.location}</p>
        </div>
      </div>

      <div className="space-y-3">
        <DateRangePicker checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="block">
            <span className="text-xs text-gray-500">Nights</span>
            <input
              type="number"
              min={1}
              value={nights}
              onChange={e => setNights(Math.max(1, Number(e.target.value || 1)))}
              className="mt-1 w-full p-2 rounded-lg border border-gray-200"
            />
          </label>

          <label className="block">
            <span className="text-xs text-gray-500">Room type</span>
            <select value={roomType} onChange={e => setRoomType(e.target.value)} className="mt-1 w-full p-2 rounded-lg border border-gray-200">
              {(hotel?.rooms ?? [{ id: 'standard', name: 'Standard', price: 0 }]).map(r => (
                <option key={r.id} value={r.id}>{r.name} {r.price ? `— ₹${r.price}/night` : ''}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">Guests</div>
            <div className="text-xs text-gray-500">Adults / Children</div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border border-gray-200">
              <Counter label="Adults" value={adults} setValue={setAdults} min={1} max={10} />
              {errors.adults && <p className="text-xs text-red-500 mt-1">{errors.adults}</p>}
            </div>

            <div className="p-3 rounded-lg border border-gray-200">
              <Counter label="Children" value={children} setValue={setChildren} min={0} max={10} />
              <p className="text-xs text-gray-500 mt-1">Ages 0–17</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-5 bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-center justify-between gap-4">
        <div>
          <div className="text-xs text-gray-500">Total</div>
          <div className="text-lg font-semibold">₹{totalPrice.toLocaleString()} <span className="text-sm text-gray-500">({nights} night{nights>1?'s':''})</span></div>
        </div>

        <button type="submit" disabled={loading} className={`px-4 py-2 rounded-md font-medium ${loading ? 'bg-gray-300 text-gray-700' : 'bg-primary text-white'}`}>
          {loading ? 'Processing…' : 'Continue to payment'}
        </button>
      </div>
    </form>
  )
}

export default function BookingPage() {
  const location = useLocation()
  const hotel = location.state?.hotel

  if (!hotel) {
    return (
      <main className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-red-500 text-lg mt-16">No hotel selected! Please go back and select a hotel.</p>
      </main>
    )
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-center mb-8"><BookingStepper /></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="lg:col-span-1">
          {/* Use the local large PropertyCard for a better image. If you prefer your existing PropertyCard, replace with <PropertyCard hotel={hotel} large /> */}
          <LocalPropertyCard hotel={hotel} />
        </div>

        <div className="lg:col-span-1 flex items-start justify-center">
          <BookingForm hotel={hotel} />
        </div>
      </div>
    </main>
  )
}