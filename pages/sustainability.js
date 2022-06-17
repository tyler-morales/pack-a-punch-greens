import React from 'react'
import Hero from '../components/sustainability/Hero'
import ThreeSections from '../components/sustainability/ThreeSection'
import MetaData from '../components/global/MetaData'

export default function sustainability() {
  return (
    <>
      <MetaData title="🌱 Sustainability" description="Pack A Punch Greens" />
      <main className="px-5 m-auto my:10 md:my-20 max-w-7xl">
        <Hero />
        <ThreeSections />
      </main>
    </>
  )
}
