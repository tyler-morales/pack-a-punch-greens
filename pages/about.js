import React from 'react'
import Mission from '../components/about/Mission'
import Values from '../components/about/Values'
import MetaData from '../components/global/MetaData'

export default function about() {
  return (
    <>
      <MetaData title="🌱 About" description="Pack A Punch Greens" />
      <main>
        <Mission />
        <Values />
      </main>
    </>
  )
}
