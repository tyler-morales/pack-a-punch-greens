import {useEffect} from 'react'
import Image from 'next/image'
import products from '../../data/products.json'
import {useCart} from '../../hooks/useCart'

import {RiDeleteBin6Line} from 'react-icons/ri'

export default function CartCard() {
  const {cartItems, updateItem} = useCart()

  function handleDelete(id) {
    updateItem({
      id,
      quantity: 0,
    })
  }

  const data = cartItems.map(({id, quantity, pricePerUnit}) => {
    const product = products.find(({id: pid}) => pid === id)
    const {title, color} = product || {}

    const Quantity = () => {
      function handleOnSubmit(e) {
        e.preventDefault()

        const {currentTarget} = e

        const inputs = Array.from(currentTarget.elements)
        const quantity = inputs.find(
          (input) => input.name === 'quantity'
        )?.value

        updateItem({
          id,
          quantity: quantity && parseInt(quantity),
        })
      }

      return (
        <form onSubmit={handleOnSubmit}>
          <input
            className="text-center border rounded-lg md:w-[60px] mx-2 w-full"
            name="quantity"
            type="number"
            min="0"
            defaultValue={quantity}
          />
        </form>
      )
    }

    return {
      id,
      title,
      color,
      quantity: <Quantity />,
      pricePerUnit: pricePerUnit,
      total: quantity * pricePerUnit,
    }
  })

  const convertPackageToGrams = (ounces) => {
    const grams = ounces * 28.3495
    return grams
  }

  const convetPackageToOunces = (numOfPackages) => {
    const ounces = numOfPackages * 2
    return ounces
  }

  return (
    <div className="flex flex-col gap-6 md:col-span-2 ">
      {data.map((item) => {
        const {id, title, quantity, total, color} = item
        return (
          // Cart Card
          <div
            key={id}
            className="grid items-center justify-between grid-cols-2 gap-4 px-4 py-4 border border-blue-200 rounded-lg shadow-lg md:px-8 md:grid-cols-cart_card xl:gap-10">
            <div
              style={{background: color}}
              className="w-[140px] h-auto px-3 rounded-xl">
              <Image
                alt={`${title} microgreens`}
                width={300}
                height={300}
                src={`/images/products/packaging-${title.toLowerCase()}.png`}
              />
            </div>
            <div>
              <h2>
                {title}
                <span className="ml-2 text-sm font-medium text-gray-400">
                  @ $7.00 each
                </span>
              </h2>

              <p className="mt-1 text-sm font-medium text-gray-400">
                {convetPackageToOunces(total) / 7} oz (
                {(convertPackageToGrams(total) / 7).toFixed(2)} g) of {title}{' '}
                microgreens
              </p>
            </div>
            {quantity}
            <h3>${total}.00</h3>

            <button onClick={() => handleDelete(id)}>
              <RiDeleteBin6Line size="1.25em" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
