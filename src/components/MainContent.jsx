<<<<<<< HEAD
import React from 'react'
import SearchBar from './SearchBar'
import FilterControls from './FilterControls'
import BookingCard from './BookingCard'
import NotesPanel from './NotesPanel'

const MainContent = () => {
  return (
    <div className="flex-1 px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary mb-8">John Wick</h1>
        <SearchBar />
      </div>
      
      <FilterControls />
      
      <div className="flex gap-6 mt-6">
        <div className="flex-1">
          <BookingCard />
        </div>
        <div className="w-80">
          <NotesPanel />
        </div>
      </div>
    </div>
  )
}

export default MainContent
=======
import React from 'react'
import SearchBar from './SearchBar'
import FilterControls from './FilterControls'
import BookingCard from './BookingCard'
import NotesPanel from './NotesPanel'

const MainContent = () => {
  return (
    <div className="flex-1 px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary mb-8">John Wick</h1>
        <SearchBar />
      </div>
      
      <FilterControls />
      
      <div className="flex gap-6 mt-6">
        <div className="flex-1">
          <BookingCard />
        </div>
        <div className="w-80">
          <NotesPanel />
        </div>
      </div>
    </div>
  )
}

export default MainContent
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07
