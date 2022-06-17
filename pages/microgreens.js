import products from '../data/products.json'
import ProductCard from '../components/microgreens/ProductCard'
import ReviewCartBtn from '../components/microgreens/ReviewCartBtn'
import MetaData from '../components/global/MetaData'

export default function microgreens() {
  return (
    <>
      <MetaData
        title="🌱 Microgreens Shop"
        description="🌱 Shop healthy, fresh, and local Microgreens"
      />
      <main className="relative px-5 m-auto my-10 max-w-7xl">
        <h1 className="text-5xl font-bold text-brand md:text-7xl">
          <span>Get</span> <span>Your Microgreens Weekly</span>
        </h1>
        <p className="mt-6 text-lg font-medium">
          Subscribe to a weekly delivery of microgreens
        </p>

        <section className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
          <ProductCard products={products} />
        </section>

        <ReviewCartBtn />
      </main>
    </>
  )
}
