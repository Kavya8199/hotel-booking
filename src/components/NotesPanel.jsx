<<<<<<< HEAD
// import React from 'react'

// const NotesPanel = () => {
//   return (
//     <div className="bg-white border border-gray-200 rounded-lg p-6 h-full">
//       <h3 className="text-base font-normal text-gray-medium mb-2">
//         Booking List
//       </h3>
//       <p className="text-xs text-gray-medium opacity-40">
//         Lorem ipsum lorem uojuhn
//       </p>
//     </div>
//   )
// }

// export default NotesPanel


















import React from "react"

const NotesPanel = ({ compact = false }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow p-6 ${
        compact ? "h-48" : "h-80"
      } overflow-hidden`}
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Booking List</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
       Lorem ipsum lorem uojuhn
      </p>
    </div>
  )
}

export default NotesPanel
=======




import React from "react"

const NotesPanel = ({ compact = false }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow p-6 ${
        compact ? "h-48" : "h-80"
      } overflow-hidden`}
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Booking List</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
       Lorem ipsum lorem uojuhn
      </p>
    </div>
  )
}

export default NotesPanel
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07
