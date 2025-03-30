import React from 'react'

export default function loading() {
  return (
    <div className="flex justify-center items-center w-full min-h-[90vh] max-h-screen overflow-hidden">
        <div className="animate-spin h-12 w-12 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </div>
  )
}
