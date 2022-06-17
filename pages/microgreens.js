import products from '../data/products.json'
import ProductCard from '../components/microgreens/ProductCard'
import ReviewCartBtn from '../components/microgreens/ReviewCartBtn'

export default function microgreens() {
  return (
    <main className="relative px-5 m-auto my-10 max-w-7xl">
      <h1 className="text-5xl font-bold text-brand md:text-7xl">
        <span>Get</span> <span>Your Microgreens Weekly</span>
      </h1>
      <p className="mt-6 text-lg font-medium">
        Subscribe to a weekly delivery of microgreens
      </p>

      {/* <section>
        <h3 className="px-4 py-2 mt-8 mb-4 bg-orange-200 rounded-full w-max">
          How it works?
        </h3>
        <ol className="grid justify-between grid-cols-1 gap-8 md:grid-cols-3">
          <li>
            <span>1. Select your greens</span>
            <p className="mt-2 font-medium">
              Select the microgreens varaties and quantity you want to order.
            </p>
          </li>
          <li>
            <span>2. Wait for your delivery every week</span>
            <p className="mt-2 font-medium">
              Recieve your Microgreens at your doorstep every week & enjoy.
            </p>
          </li>
        </ol>
      </section> */}

      <section className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
        <ProductCard products={products} />
      </section>

      <ReviewCartBtn />
    </main>
  )
}
