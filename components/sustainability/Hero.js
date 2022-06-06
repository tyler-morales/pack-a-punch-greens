import React from 'react'

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-10">
      <h1 className="text-brand text-5xl md:text-7xl font-black">
        Sustainability
      </h1>
      <div className="">
        <p className="font-medium mt-8">
          Maintaining a sustainable culture environment through a circular
          economy
        </p>
        <p className="font-medium mt-2">
          Below are three key areas where we believe sustainable practices are
          critical in a circular economy
        </p>
      </div>
    </div>
  )
}
