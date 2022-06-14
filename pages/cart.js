import {AiOutlineArrowRight} from 'react-icons/ai'

import {useCart} from '../hooks/useCart'

import CartCard from '../components/cart/CartCard'

export default function Home() {
  const {checkout, subtotal, quantity} = useCart()

  return (
    <div className="max-w-5xl px-5 m-auto md:mt-20">
      <main>
        <h1 className="text-2xl">Shopping Cart</h1>
        <p className="mt-2 font-medium">
          You have {quantity} items in your cart
        </p>

        <section className="relative grid grid-cols-1 gap-8 my-10 md:grid-cols-4">
          <CartCard />

          <button
            onClick={checkout}
            className="flex gap-10 px-6 py-4 font-bold text-white bg-blue-700 rounded-lg right-60 w-max h-min">
            <span>Total: ${subtotal}.00</span>
            <div className="flex items-center gap-2">
              <span>Check Out </span>
              <AiOutlineArrowRight size="1.25em" />
            </div>
          </button>
        </section>
      </main>
    </div>
  )
}
