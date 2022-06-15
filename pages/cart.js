import {AiOutlineArrowRight} from 'react-icons/ai'

import {useCart} from '../hooks/useCart'

import CartCard from '../components/cart/CartCard'

export default function Home() {
  const {checkout, subtotal, quantity, cartItems} = useCart()

  return (
    <div className="m-auto max-w-7xl px-7 md:mt-20">
      <main>
        <h1 className="text-2xl">Shopping Cart</h1>
        <p className="mt-2 font-medium">
          You have {quantity} items in your cart
        </p>

        {cartItems > 0 && (
          <button
            onClick={checkout}
            className="flex justify-between w-full gap-10 px-6 py-4 mt-10 font-bold text-white bg-blue-700 rounded-lg md:w-max">
            <span>Total: ${subtotal}.00</span>
            <div className="flex items-center gap-2">
              <span>Check Out </span>
              <AiOutlineArrowRight size="1.25em" />
            </div>
          </button>
        )}

        <section className="grid grid-cols-1 gap-16 my-10 md:grid-cols-3">
          <span>You have no items in your cart</span>
          {/* <CartCard /> */}
          <aside>
            <h3 className="mb-4 text-3xl">Subscription Model</h3>
            <h4 className="px-4 py-2 mt-8 mb-4 bg-orange-200 rounded-full w-max">
              What is a subscription?
            </h4>
            <p className="font-medium">
              You will recieve your current order of microgreens on a weekly
              schedule. You can change your order, but expect a week to allow us
              to grow more or less of what you like.
            </p>
            <h4 className="px-4 py-2 mt-8 mb-4 bg-orange-200 rounded-full w-max">
              Why subscribe
            </h4>
            <p className="font-medium">
              In order to be as efficent as we can when growing, a subscription
              based service in necessary. However, follow us on social media to
              check when they&apos;ll be available near you!
            </p>
          </aside>
        </section>

        {cartItems > 5 && (
          <button
            onClick={checkout}
            className="flex justify-between w-full gap-10 px-6 py-4 mb-10 font-bold text-white bg-blue-700 rounded-lg md:w-max">
            <span>Total: ${subtotal}.00</span>
            <div className="flex items-center gap-2">
              <span>Check Out </span>
              <AiOutlineArrowRight size="1.25em" />
            </div>
          </button>
        )}
      </main>
    </div>
  )
}
