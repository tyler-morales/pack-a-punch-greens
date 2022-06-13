import Image from 'next/image'
import {initiateCheckout} from '../lib/payments'

import products from '../data/products.json'

export default function microgreens() {
  return (
    <main className="px-5 m-auto my-10 max-w-7xl md:my-20">
      <h1 className="text-5xl font-bold text-brand md:text-7xl">
        <span>Get</span> <span>Your Microgreens</span>
      </h1>

      <section className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
        {products.map((product) => {
          const {
            id,
            title,
            description,
            image,
            price,
            altText,
            color,
            colorDark,
          } = product
          return (
            <div
              style={{background: color}}
              key={id}
              id={title.toLowerCase()}
              className="flex justify-center px-6 rounded">
              <div className="w-[350px] py-20 grid-rows-product_card grid">
                <Image
                  src={image}
                  width={300}
                  height={300}
                  layout="responsive"
                  alt={altText}
                />
                <h3
                  style={{color: colorDark}}
                  className="font-serif text-3xl text-center rounded-lg">
                  {title}
                </h3>
                <p className="mt-6 font-medium">{description}</p>
                <button
                  onClick={() =>
                    initiateCheckout({
                      lineItems: [{price: id, quantity: 1}],
                    })
                  }
                  className="w-full py-2 mt-4 font-bold text-center bg-green-500 rounded-lg">
                  Start a Subscription
                </button>
                <p className="mt-4 text-sm font-medium text-center">
                  Starting at ${price} per 2oz container
                </p>
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}
