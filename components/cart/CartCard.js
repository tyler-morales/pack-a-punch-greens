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
        <form onSubmit={handleOnSubmit} className="flex justify-evenly">
          <button
            onClick={() => handleClick('add')}
            className="text-2xl font-bold">
            -
          </button>
          <input
            className="text-center border rounded-lg w-[60px] mx-2"
            name="quantity"
            type="number"
            min={0}
            defaultValue={quantity}
          />
          <button className="text-2xl font-bold">+</button>

          {/* <button className="px-4 py-2 bg-yellow-300 rounded-full">
                Update
              </button> */}
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

  return (
    <div className="flex flex-col gap-6 md:col-span-3 ">
      {data.map((item) => {
        const {id, title, quantity, pricePerUnit, total, color} = item
        return (
          // Cart Card
          <div
            key={id}
            className="flex items-center gap-10 px-8 py-8 border border-blue-200 rounded-lg shadow-lg">
            <div
              style={{background: color}}
              className="w-[140px] h-auto px-3 rounded-xl">
              <Image
                alt={`${title} microgreens`}
                width={300}
                height={300}
                src={`/images/products/packaging-${title}.png`}
              />
            </div>
            <div>
              <h2>{title}</h2>
              <p className="mt-1 text-sm font-medium text-gray-402">
                {total / 7} oz ({(28.3 * total) / 7}g) of {title} microgreens
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
