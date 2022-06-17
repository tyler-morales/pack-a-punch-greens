import {AiOutlineArrowRight} from 'react-icons/ai'

import {useCart} from '../hooks/useCart'
import Link from 'next/link'
import CartCard from '../components/cart/CartCard'

import MetaData from '../components/global/MetaData'

export default function Home() {
  const {checkout, subtotal, quantity, cartItems} = useCart()

  return (
    <>
      <MetaData title="🌱 Cart" description="Pack A Punch Greens" />
      <div className="m-auto max-w-7xl px-7 md:mt-20">
        <main>
          <h1 className="text-2xl">🛍 Shopping Cart</h1>

          {cartItems > 0 && (
            <p className="mt-2 font-medium">
              You have {quantity} items in your cart
            </p>
          )}

          {cartItems.length > 0 && (
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

          <section
            className={`grid grid-cols-1 gap-16 my-10 lg:grid-cols-3 ${
              cartItems.length == 0 && 'items-center'
            }`}>
            {cartItems.length == 0 ? (
              <div className="flex flex-col w-full col-span-2 text-xl font-medium text-center">
                <span className="mb-4 text-base">Your cart is empty</span>
                <span>
                  Start a{' '}
                  <Link href="/microgreens">
                    <a className="text-blue-500 underline">Subscription</a>
                  </Link>{' '}
                  today!
                </span>
              </div>
            ) : (
              <CartCard />
            )}

            <aside>
              <div>
                <h3 className="mb-4 text-3xl">Subscription Model</h3>
                <h4 className="px-4 py-2 mt-8 mb-4 bg-orange-200 rounded-full w-max">
                  What is a subscription?
                </h4>
                <p className="mb-2 font-medium">
                  You will recieve your current order of microgreens on a weekly
                  schedule.
                </p>
                <p className="font-medium">
                  You can change your order at any time or cancel, but expect a
                  week to allow us to grow more or less of what you like.
                </p>
                <h4 className="px-4 py-2 mt-8 mb-4 bg-orange-200 rounded-full w-max">
                  Why subscribe?
                </h4>
                <p className="font-medium">
                  In order to be as efficent as we can when growing, a
                  subscription based service in necessary. However, follow us on
                  social media to check when they&apos;ll be available near you!
                </p>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-3xl">Quantity Guide</h3>
                <h4 className="px-4 py-2 mt-8 mb-4 bg-pink-200 rounded-full w-max">
                  How many containers should I order?
                </h4>
                <ul>
                  <li className="mb-2 font-medium">
                    1 container = 8 mini side-dishes
                  </li>
                  <li className="mb-2 font-medium">
                    1 container = 4 side dishes
                  </li>
                  <li className="mb-2 font-medium">
                    3 containers = 1 large (family-sized) salad bowl
                  </li>
                </ul>
              </div>
            </aside>
          </section>

          {cartItems.length > 3 && (
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
    </>
  )
}
