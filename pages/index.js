import Hero from '../components/home/Hero'
import Products from '../components/home/Products'
import QuickInfo from '../components/home/QuickInfo'
import MetaData from '../components/global/MetaData'

export default function Home() {
  return (
    <>
      <MetaData
        title="Pack A Punch Greens"
        description="🌱 Shop healthy, fresh, and local Microgreens"
      />
      <main>
        <Hero />
        <QuickInfo />
        <Products />
      </main>
    </>
  )
}
