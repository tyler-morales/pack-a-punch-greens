import products from '../data/products.json'
import ProductCard from '../components/microgreens/ProductCard'

export default function microgreens() {
  return (
    <main className="px-5 m-auto my-10 max-w-7xl md:my-20">
      <h1 className="text-5xl font-bold text-brand md:text-7xl">
        <span>Get</span> <span>Your Microgreens</span>
      </h1>

      <section className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
        <ProductCard products={products} />
      </section>
    </main>
  )
}
